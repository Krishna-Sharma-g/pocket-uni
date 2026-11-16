import logging
import time
import json
from typing import List, Optional, AsyncIterator, Dict, Any
import httpx
from backend.app.core.config import settings

logger = logging.getLogger("pocketuni.ai_service")

class GeminiService:
    """
    Multi-provider Free AI Orchestration Service for PocketUni.
    Supports:
    1. Google Gemini (100% Free from https://aistudio.google.com/ - 15 RPM, 1500 req/day)
    2. Groq (100% Free from https://console.groq.com/keys - ultra-fast Llama 3.3 70B & 3.1 8B)
    Seamlessly falls back between providers if rate limits or network issues occur.
    """
    def __init__(self):
        self.enabled = settings.GEMINI_ENABLED
        self.api_key = settings.GEMINI_API_KEY
        self.chat_model = settings.GEMINI_CHAT_MODEL or "gemini-1.5-flash"
        self.embedding_model = settings.GEMINI_EMBEDDING_MODEL or "gemini-embedding-001"
        self.temperature = settings.GEMINI_TEMPERATURE
        self.max_output_tokens = settings.GEMINI_MAX_OUTPUT_TOKENS
        self.timeout = settings.GEMINI_TIMEOUT
        self.max_retries = settings.GEMINI_MAX_RETRIES
        self.groq_api_key = getattr(settings, "GROQ_API_KEY", "")
        self.groq_model = getattr(settings, "GROQ_MODEL", "llama-3.3-70b-versatile")
        self._client = None

    def _get_client(self):
        if self._client is None:
            if not self.has_gemini():
                raise ValueError("GEMINI_API_KEY is not configured in environment.")
            from google import genai
            self._client = genai.Client(api_key=self.api_key)
        return self._client

    def has_gemini(self) -> bool:
        return bool(self.enabled and self.api_key and len(self.api_key.strip()) > 8)

    def has_groq(self) -> bool:
        return bool(self.groq_api_key and len(self.groq_api_key.strip()) > 8)

    def is_configured(self) -> bool:
        """Returns True if either free Google Gemini or free Groq API key is configured."""
        return self.has_gemini() or self.has_groq()

    def get_service_status(self) -> Dict[str, Any]:
        """Returns safe operational status without exposing secrets."""
        active_provider = "none"
        if self.has_gemini() and self.has_groq():
            active_provider = "gemini_with_groq_fallback"
        elif self.has_gemini():
            active_provider = "gemini"
        elif self.has_groq():
            active_provider = "groq"

        return {
            "configured": self.is_configured(),
            "active_provider": active_provider,
            "has_gemini": self.has_gemini(),
            "has_groq": self.has_groq(),
            "chat_model": self.chat_model if self.has_gemini() else self.groq_model,
            "embedding_model": self.embedding_model,
            "temperature": self.temperature,
            "max_output_tokens": self.max_output_tokens
        }

    def _generate_groq_content(
        self,
        prompt: str,
        system_instruction: Optional[str] = None,
        temperature: Optional[float] = None
    ) -> str:
        """Generates content via Groq's high-speed free API."""
        temp = temperature if temperature is not None else self.temperature
        messages = []
        if system_instruction:
            messages.append({"role": "system", "content": system_instruction})
        messages.append({"role": "user", "content": prompt})

        payload = {
            "model": self.groq_model,
            "messages": messages,
            "temperature": temp,
            "max_tokens": self.max_output_tokens
        }
        headers = {
            "Authorization": f"Bearer {self.groq_api_key}",
            "Content-Type": "application/json"
        }

        with httpx.Client(timeout=self.timeout) as client:
            resp = client.post("https://api.groq.com/openai/v1/chat/completions", json=payload, headers=headers)
            resp.raise_for_status()
            data = resp.json()
            return data["choices"][0]["message"]["content"]

    async def _generate_groq_stream(
        self,
        prompt: str,
        system_instruction: Optional[str] = None,
        temperature: Optional[float] = None
    ) -> AsyncIterator[str]:
        """Streams content via Groq's high-speed free API."""
        temp = temperature if temperature is not None else self.temperature
        messages = []
        if system_instruction:
            messages.append({"role": "system", "content": system_instruction})
        messages.append({"role": "user", "content": prompt})

        payload = {
            "model": self.groq_model,
            "messages": messages,
            "temperature": temp,
            "max_tokens": self.max_output_tokens,
            "stream": True
        }
        headers = {
            "Authorization": f"Bearer {self.groq_api_key}",
            "Content-Type": "application/json"
        }

        async with httpx.AsyncClient(timeout=self.timeout) as client:
            async with client.stream("POST", "https://api.groq.com/openai/v1/chat/completions", json=payload, headers=headers) as response:
                response.raise_for_status()
                async for line in response.aiter_lines():
                    line = line.strip()
                    if not line or line.startswith(":"):
                        continue
                    if line.startswith("data: "):
                        data_str = line[6:].strip()
                        if data_str == "[DONE]":
                            break
                        try:
                            chunk = json.loads(data_str)
                            delta = chunk["choices"][0]["delta"].get("content")
                            if delta:
                                yield delta
                        except Exception:
                            continue

    def generate_content(
        self,
        prompt: str,
        system_instruction: Optional[str] = None,
        temperature: Optional[float] = None,
        max_output_tokens: Optional[int] = None
    ) -> str:
        """Generates content with automatic fallback between Gemini and Groq."""
        if not self.is_configured():
            return (
                "**[AI Connection Notice]**\n"
                "To enable smart conversational answers, please set a free API key in your environment:\n"
                "- **Google Gemini** (Free from [aistudio.google.com](https://aistudio.google.com/)): `GEMINI_API_KEY`\n"
                "- **Groq** (Free from [console.groq.com](https://console.groq.com/)): `GROQ_API_KEY`\n\n"
                "Once added to Render or `.env`, PocketUni will dynamically synthesize institutional answers."
            )

        # 1. Try Gemini first if available
        if self.has_gemini():
            try:
                client = self._get_client()
                temp = temperature if temperature is not None else self.temperature
                tokens = max_output_tokens if max_output_tokens is not None else self.max_output_tokens

                config = {
                    "temperature": temp,
                    "max_output_tokens": tokens,
                }
                if system_instruction:
                    config["system_instruction"] = system_instruction

                response = client.models.generate_content(
                    model=self.chat_model,
                    contents=prompt,
                    config=config
                )
                if response and response.text:
                    return response.text
            except Exception as e:
                logger.warning(f"Gemini generation failed: {e}. Checking Groq fallback...")
                if not self.has_groq():
                    err_str = str(e).lower()
                    if "403" in err_str or "permission_denied" in err_str:
                        return (
                            "**[AI Key Notice: Gemini Project Billing Blocked]**\n\n"
                            "Your `GEMINI_API_KEY` was rejected by Google Cloud (`403 PERMISSION_DENIED: The Gemini API free tier is not available for this project`).\n\n"
                            "### Quick Free Fix (100% Free, Zero Cost, No Card):\n"
                            "1. **Option A (Groq - Recommended & Fastest)**:\n"
                            "   - Go to [console.groq.com/keys](https://console.groq.com/keys) and generate a free API key in 20 seconds.\n"
                            "   - Add `GROQ_API_KEY=<your-key>` in your Render Dashboard (Environment) or `.env`.\n"
                            "2. **Option B (Personal Google Account)**:\n"
                            "   - Go to [aistudio.google.com](https://aistudio.google.com/) using a personal `@gmail.com` account (not an organization or GSuite account).\n"
                            "   - Click **Get API key** -> **Create API key in new project**.\n"
                            "   - Set `GEMINI_API_KEY=<your-new-key>`."
                        )
                    if "429" in err_str or "quota" in err_str or "resource_exhausted" in err_str:
                        return (
                            "**[Institutional Assistant Note]**\n"
                            "The free Gemini API rate limit was temporarily reached. "
                            "Please add a backup free `GROQ_API_KEY` from [console.groq.com](https://console.groq.com/) for zero rate limits."
                        )
                    raise

        # 2. Try Groq fallback or primary
        if self.has_groq():
            try:
                return self._generate_groq_content(prompt, system_instruction, temperature)
            except Exception as groq_err:
                logger.error(f"Groq generation failed: {groq_err}")
                raise

        return "Unable to generate AI synthesis at this moment."

    async def generate_stream(
        self,
        prompt: str,
        system_instruction: Optional[str] = None,
        temperature: Optional[float] = None
    ) -> AsyncIterator[str]:
        """Streams content tokens asynchronously with automatic fallback between Gemini and Groq."""
        if not self.is_configured():
            yield (
                "**[AI Connection Notice]**\n"
                "To enable smart conversational answers, please set a free API key in your environment:\n\n"
                "1. **Google Gemini** (100% Free at [aistudio.google.com](https://aistudio.google.com/)) -> set `GEMINI_API_KEY`\n"
                "2. **Groq** (100% Free at [console.groq.com](https://console.groq.com/)) -> set `GROQ_API_KEY`\n\n"
                "Add either key in your Render Dashboard (Environment) or local `.env`, and PocketUni will immediately start generating dynamic answers for any campus or college question!"
            )
            return

        gemini_succeeded = False
        # 1. Try Gemini stream if configured
        if self.has_gemini():
            try:
                client = self._get_client()
                temp = temperature if temperature is not None else self.temperature
                config = {
                    "temperature": temp,
                    "max_output_tokens": self.max_output_tokens,
                }
                if system_instruction:
                    config["system_instruction"] = system_instruction

                response_stream = client.models.generate_content_stream(
                    model=self.chat_model,
                    contents=prompt,
                    config=config
                )
                for chunk in response_stream:
                    if chunk and chunk.text:
                        gemini_succeeded = True
                        yield chunk.text
                if gemini_succeeded:
                    return
            except Exception as e:
                logger.warning(f"Gemini streaming exception: {e}")
                if not self.has_groq():
                    err_str = str(e).lower()
                    if "403" in err_str or "permission_denied" in err_str:
                        yield (
                            "**[AI Key Notice: Gemini Project Billing Blocked]**\n\n"
                            "Your `GEMINI_API_KEY` was rejected by Google Cloud (`403 PERMISSION_DENIED: The Gemini API free tier is not available for this project`).\n\n"
                            "### Quick Free Fix (100% Free, Zero Cost, No Card Needed):\n"
                            "1. **Option A (Groq - Recommended & Fastest)**:\n"
                            "   - Go to [console.groq.com/keys](https://console.groq.com/keys) and generate a free API key in 20 seconds.\n"
                            "   - Add `GROQ_API_KEY=<your-key>` in your Render Dashboard (Environment tab) or `.env`.\n"
                            "2. **Option B (Personal Google Account)**:\n"
                            "   - Go to [aistudio.google.com](https://aistudio.google.com/) using a personal `@gmail.com` account (not an organization or GSuite account).\n"
                            "   - Click **Get API key** -> **Create API key in new project**.\n"
                            "   - Set `GEMINI_API_KEY=<your-new-key>` in Render."
                        )
                    elif "429" in err_str or "quota" in err_str or "resource_exhausted" in err_str:
                        yield (
                            "\n\n**[Institutional Assistant Note]**\n"
                            "Gemini free quota was reached. You can add a free backup `GROQ_API_KEY` from [console.groq.com](https://console.groq.com/) for unlimited instant fallback."
                        )
                    else:
                        yield f"\n[Service Notice: Generation interrupted ({type(e).__name__}). Verified citations remain available.]"
                    return

        # 2. Fallback to Groq stream if Gemini not configured or failed
        if self.has_groq():
            try:
                async for token in self._generate_groq_stream(prompt, system_instruction, temperature):
                    yield token
            except Exception as groq_err:
                logger.error(f"Groq streaming error: {groq_err}")
                yield f"\n[AI generation error: {groq_err}]"

    def embed_text(self, text: str) -> List[float]:
        """Generates embedding for a single text chunk with resilient rate-limit backoff."""
        if not self.has_gemini():
            return []
        client = self._get_client()
        for attempt in range(1, 4):
            try:
                res = client.models.embed_content(
                    model=self.embedding_model,
                    contents=[text]
                )
                if res and res.embeddings:
                    return res.embeddings[0].values
                raise ValueError("No embeddings returned by Gemini.")
            except Exception as e:
                err_str = str(e).lower()
                if "rate limit" in err_str or "429" in err_str or "resource_exhausted" in err_str:
                    sleep_time = 5 * attempt
                    logger.warning(f"Rate limited by Gemini (429). Backing off for {sleep_time}s on attempt {attempt}/3...")
                    time.sleep(sleep_time)
                else:
                    time.sleep(1)
                if attempt == 3:
                    logger.error(f"Gemini embed_text exhausted retries: {str(e)}")
                    return []
        return []

    def embed_batch(self, texts: List[str], batch_size: int = 10) -> List[List[float]]:
        """Generates embeddings for multiple texts in safe batches."""
        results = []
        for i in range(0, len(texts), batch_size):
            batch = texts[i:i + batch_size]
            for t in batch:
                emb = self.embed_text(t)
                results.append(emb)
            time.sleep(0.05)
        return results


gemini_service = GeminiService()
