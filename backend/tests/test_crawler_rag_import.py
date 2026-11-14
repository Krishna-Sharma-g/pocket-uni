import json

from backend.scripts.import_crawler_rag import is_official_source, read_safe_chunks
from backend.app.services.rag_service import RAGService
from backend.app.services.gemini_service import GeminiService


def test_official_source_allowlist_is_host_based():
    assert is_official_source("https://web.mitsgwalior.in/academics")
    assert is_official_source("https://mitsgwalior.in/notice.pdf")
    assert not is_official_source("https://mitsgwalior.in.example.com/notice.pdf")
    assert not is_official_source("https://www.viirj.org/paper.pdf")


def test_crawler_import_filters_private_source_types(tmp_path):
    input_path = tmp_path / "chunks.jsonl"
    rows = [
        {
            "text": "The Centre for AI offers courses in machine learning.",
            "metadata": {
                "source_url": "https://web.mitsgwalior.in/academics",
                "page_title": "Centre for AI",
                "doc_type": "webpage",
            },
        },
        {
            "text": "Personal resume content.",
            "metadata": {
                "source_url": "https://web.mitsgwalior.in/files/profile.pdf",
                "file_name": "faculty_resume.pdf",
                "doc_type": "pdf",
            },
        },
        {
            "text": "A research article hosted externally.",
            "metadata": {
                "source_url": "https://www.viirj.org/paper.pdf",
                "file_name": "paper.pdf",
                "doc_type": "pdf",
            },
        },
    ]
    input_path.write_text("\n".join(json.dumps(row) for row in rows), encoding="utf-8")

    accepted, rejected = read_safe_chunks(input_path)

    assert len(accepted) == 1
    assert accepted[0]["title"] == "Centre for AI"
    assert rejected["sensitive_or_personal_content"] == 1
    assert rejected["non_official_source"] == 1


def test_retrieval_query_uses_context_for_follow_up():
    history = [{"role": "user", "content": "What subjects are in the AI seventh-semester scheme?"}]

    assert RAGService.build_retrieval_query("What about that semester?", history) == (
        "What subjects are in the AI seventh-semester scheme? What about that semester?"
    )
    assert RAGService.build_retrieval_query("Show the AI syllabus", history) == "Show the AI syllabus"


def test_gemini_disabled_never_uses_available_key():
    service = GeminiService()
    service.enabled = False
    service.api_key = "a-valid-looking-local-key"

    assert not service.is_configured()

    try:
        service._get_client()
    except RuntimeError as error:
        assert "disabled" in str(error)
    else:
        raise AssertionError("Disabled Gemini service created a client")