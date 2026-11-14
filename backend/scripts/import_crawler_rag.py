import argparse
import hashlib
import json
import re
from collections import Counter
from pathlib import Path
from urllib.parse import urlparse

from backend.app.core.database import SessionLocal
from backend.app.models.document import DocumentChunk, InstitutionalDocument
from backend.app.services.gemini_service import gemini_service

DEFAULT_INPUT = Path.home() / "Downloads" / "pocketuni_web_crawler" / "pocketuni_rag_chunks.jsonl"
CORPUS_FILE_NAME = "MITS_PUBLIC_CRAWLER_CORPUS.jsonl"
ALLOWED_ROOTS = ("mitsgwalior.in",)
BLOCKED_LABELS = re.compile(
    r"\b(?:resume|curriculum vitae|cv|marks?|marksheet|mark sheet|exam results?|student results?)\b",
    re.IGNORECASE,
)
BLOCKED_CONTENT = re.compile(
    r"\b(?:roll\s*(?:no|number)|marks?\s+obtained|internal\s+marks|marksheet|mark\s+sheet|"
    r"individual\s+results?|student\s+(?:marks|results?))\b",
    re.IGNORECASE,
)


def is_official_source(source_url):
    host = (urlparse(source_url or "").hostname or "").lower().rstrip(".")
    return any(host == root or host.endswith(f".{root}") for root in ALLOWED_ROOTS)


def read_safe_chunks(input_path):
    accepted = []
    rejected = Counter()

    with input_path.open(encoding="utf-8") as source:
        for line_number, line in enumerate(source, start=1):
            try:
                item = json.loads(line)
            except json.JSONDecodeError as exc:
                raise ValueError(f"Invalid JSON on line {line_number}: {exc.msg}") from exc

            metadata = item.get("metadata") or {}
            source_url = metadata.get("source_url", "")
            if not is_official_source(source_url):
                rejected["non_official_source"] += 1
                continue

            title = metadata.get("page_title") or metadata.get("file_name") or "MITS source"
            file_name = metadata.get("file_name", "")
            text = (item.get("text") or "").strip()
            if not text:
                rejected["empty_text"] += 1
                continue
            source_labels = re.sub(r"[_\-.]+", " ", f"{title} {file_name}")
            if BLOCKED_LABELS.search(source_labels) or BLOCKED_CONTENT.search(text):
                rejected["sensitive_or_personal_content"] += 1
                continue

            accepted.append({
                "text": text,
                "source_url": source_url,
                "title": title[:250],
                "doc_type": metadata.get("doc_type", "webpage"),
                "page_number": metadata.get("page_number") or 1,
                "section": metadata.get("h2") or title,
                "chunk_index": int(metadata.get("chunk_index", len(accepted))),
            })

    return accepted, rejected


def import_chunks(db, input_path, chunks):
    digest = hashlib.sha256(input_path.read_bytes()).hexdigest()
    document = db.query(InstitutionalDocument).filter(
        InstitutionalDocument.file_name == CORPUS_FILE_NAME
    ).first()

    if not document:
        document = InstitutionalDocument(
            title="MITS Public Website Knowledge",
            file_name=CORPUS_FILE_NAME,
            file_path="https://web.mitsgwalior.in/",
            file_size_bytes=max(input_path.stat().st_size, 1),
            mime_type="application/x-ndjson",
            file_extension=".jsonl",
            content_hash=digest,
            category="INSTITUTIONAL_WEBSITE",
        )
        db.add(document)
        db.flush()

    db.query(DocumentChunk).filter(DocumentChunk.document_id == document.id).delete(synchronize_session=False)

    for index, item in enumerate(chunks):
        db.add(DocumentChunk(
            document_id=document.id,
            version_id=str(document.current_version_no),
            chunk_index=index,
            chunk_text=item["text"],
            token_count=len(item["text"].split()),
            source_page_number=item["page_number"],
            source_section=item["title"][:255],
            category="INSTITUTIONAL_WEBSITE",
            publication_status="PUBLISHED",
            is_current=True,
            audience_metadata=[{
                "scope_type": "ENTIRE_INSTITUTION",
                "source_url": item["source_url"],
                "source_title": item["title"],
                "source_section": item["section"],
                "doc_type": item["doc_type"],
            }],
            embedding_model="lexical",
            embedding_dimension=0,
            embedding_json=[],
        ))

    document.content_hash = digest
    document.file_size_bytes = max(input_path.stat().st_size, 1)
    document.status = "PUBLISHED"
    document.is_current_published = True
    document.indexing_status = "INDEXED"
    document.indexed_chunks_count = len(chunks)
    document.embedding_model = "lexical"
    db.commit()
    return document.id


def main():
    parser = argparse.ArgumentParser(description="Import safe MITS crawler chunks into PocketUni RAG.")
    parser.add_argument("--input", type=Path, default=DEFAULT_INPUT)
    mode = parser.add_mutually_exclusive_group()
    mode.add_argument("--dry-run", action="store_true", help="Report safe/filtered chunk counts without writing to PostgreSQL (the default).")
    mode.add_argument("--apply", action="store_true", help="Replace the indexed crawler corpus with the safe chunks from this file.")
    parser.add_argument("--limit", type=int, default=0, help="Import at most this many accepted chunks (0 means all).")
    args = parser.parse_args()

    if not args.input.is_file():
        parser.error(f"Crawler dataset not found: {args.input}")

    chunks, rejected = read_safe_chunks(args.input)
    if args.limit > 0:
        chunks = chunks[:args.limit]

    print(f"Accepted public MITS chunks: {len(chunks)}")
    print(f"Filtered chunks: {sum(rejected.values())} ({dict(rejected)})")
    print(f"Gemini generation configured: {gemini_service.is_configured()}")
    print("Index type: lexical text retrieval; no per-chunk embedding API calls")

    if not args.apply:
        return

    db = SessionLocal()
    try:
        document_id = import_chunks(db, args.input, chunks)
        print(f"Imported document ID: {document_id}")
    finally:
        db.close()


if __name__ == "__main__":
    main()