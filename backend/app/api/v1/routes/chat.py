import json
from datetime import datetime, timezone
from typing import List, Optional, Dict, Any
from fastapi import APIRouter, Depends, HTTPException, Query, status
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from sqlalchemy.orm import Session

from backend.app.core.database import get_db
from backend.app.core.permissions import get_current_user
from backend.app.models.identity import User
from backend.app.models.communication import Conversation, Message, Feedback
from backend.app.services.rag_service import SYSTEM_PROMPT, rag_service
from backend.app.services.gemini_service import gemini_service

router = APIRouter()

class ConversationCreate(BaseModel):
    title: Optional[str] = "New Conversation"
    kind: Optional[str] = "general"

class ConversationUpdate(BaseModel):
    title: str

class MessageCreate(BaseModel):
    content: str

class FeedbackCreate(BaseModel):
    rating: int  # 1 or -1
    comment: Optional[str] = None

def get_user_academic_context(db: Session, user: Optional[User]) -> str:
    """Formats verified academic identity context for prompt conditioning."""
    if not user:
        return "User Context: Guest / Unauthenticated Visitor"

    from backend.app.models.student import StudentProfile
    prof = db.query(StudentProfile).filter(StudentProfile.user_id == user.id).first()

    branch = user.branch or (prof.specialization if prof else None) or "Information Technology (Artificial Intelligence and Robotics)"
    roll = user.roll_number or (prof.enrolment_number if prof else None) or "Not specified"
    dept = user.department_name or "Centre for Artificial Intelligence"
    year = user.year_of_study or "2"
    sem = (prof.semester if prof and prof.semester else 3)
    sem_roman = {1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII"}.get(sem, str(sem))
    section = (prof.section if prof and prof.section else "A")
    prog = (prof.programme if prof and prof.programme else "Bachelor of Technology")

    return (
        f"Verified Authenticated Student Details:\n"
        f"- Full Name: {user.full_name}\n"
        f"- Institutional Email: {user.email}\n"
        f"- Roll / Enrollment Number: {roll}\n"
        f"- Academic Programme: {prog}\n"
        f"- Branch / Discipline: {branch}\n"
        f"- Department / Centre: {dept}\n"
        f"- Year of Study: Year {year}\n"
        f"- Current Semester: {sem_roman} Semester (Semester {sem})\n"
        f"- Section: Section {section}"
    )


@router.post("/conversations")
def create_conversation(
    payload: ConversationCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    conv = Conversation(
        user_id=current_user.id,
        title=payload.title or "New Conversation",
        kind=payload.kind or "general",
        status="active",
        last_message_at=datetime.now(timezone.utc)
    )
    db.add(conv)
    db.commit()
    db.refresh(conv)
    return {
        "id": conv.id,
        "title": conv.title,
        "kind": conv.kind,
        "status": conv.status,
        "createdAt": conv.created_at.isoformat(),
        "lastMessageAt": conv.last_message_at.isoformat()
    }

@router.get("/conversations")
def list_conversations(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    convs = db.query(Conversation).filter(
        Conversation.user_id == current_user.id,
        Conversation.is_deleted == False
    ).order_by(Conversation.last_message_at.desc()).all()

    return [
        {
            "id": c.id,
            "title": c.title,
            "kind": c.kind,
            "status": c.status,
            "createdAt": c.created_at.isoformat(),
            "lastMessageAt": c.last_message_at.isoformat() if c.last_message_at else c.created_at.isoformat()
        }
        for c in convs
    ]

@router.get("/conversations/{conv_id}")
def get_conversation(
    conv_id: str,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    conv = db.query(Conversation).filter(
        Conversation.id == conv_id,
        Conversation.user_id == current_user.id,
        Conversation.is_deleted == False
    ).first()
    if not conv:
        raise HTTPException(status_code=404, detail="Conversation not found.")

    msgs = db.query(Message).filter(
        Message.conversation_id == conv.id,
        Message.is_deleted == False
    ).order_by(Message.created_at.asc()).all()

    return {
        "id": conv.id,
        "title": conv.title,
        "kind": conv.kind,
        "status": conv.status,
        "messages": [
            {
                "id": m.id,
                "role": m.role,
                "content": m.content,
                "contentType": m.content_type,
                "sources": m.sources,
                "profileCards": m.profile_cards,
                "feedback": m.feedback,
                "createdAt": m.created_at.isoformat()
            }
            for m in msgs
        ]
    }

@router.patch("/conversations/{conv_id}")
@router.patch("/conversations/{conv_id}/title")
def update_conversation_title(
    conv_id: str,
    payload: ConversationUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    conv = db.query(Conversation).filter(
        Conversation.id == conv_id,
        Conversation.user_id == current_user.id,
        Conversation.is_deleted == False
    ).first()
    if not conv:
        raise HTTPException(status_code=404, detail="Conversation not found.")
    
    conv.title = payload.title.strip()
    db.commit()
    return {"id": conv.id, "title": conv.title}

@router.delete("/conversations/{conv_id}")
def delete_conversation(
    conv_id: str,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    conv = db.query(Conversation).filter(
        Conversation.id == conv_id,
        Conversation.user_id == current_user.id
    ).first()
    if not conv:
        raise HTTPException(status_code=404, detail="Conversation not found.")

    conv.is_deleted = True
    db.commit()
    return {"message": "Conversation deleted."}

@router.post("/conversations/{conv_id}/messages")
def send_message(
    conv_id: str,
    payload: MessageCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    conv = db.query(Conversation).filter(
        Conversation.id == conv_id,
        Conversation.user_id == current_user.id,
        Conversation.is_deleted == False
    ).first()
    if not conv:
        raise HTTPException(status_code=404, detail="Conversation not found.")

    # 1. Save user message
    user_msg = Message(
        conversation_id=conv.id,
        role="user",
        content=payload.content,
        content_type="text"
    )
    db.add(user_msg)
    db.flush()

    prior_messages = db.query(Message).filter(
        Message.conversation_id == conv.id,
        Message.is_deleted == False,
        Message.id != user_msg.id,
    ).order_by(Message.created_at.desc()).limit(8).all()
    conversation_history = [
        {"role": message.role, "content": message.content}
        for message in reversed(prior_messages)
    ]

    # 2. Fetch past conversation turns for grounding memory
    past_messages = db.query(Message).filter(
        Message.conversation_id == conv.id,
        Message.is_deleted == False
    ).order_by(Message.created_at.asc()).limit(10).all()
    history = [{"role": m.role, "content": m.content} for m in past_messages]

    # 3. Execute RAG query against verified institutional knowledge
    rag_result = rag_service.query_assistant(
        db=db,
        query=payload.content,
        user=current_user,
        conversation_history=history
    )

    # 4. Save assistant response with real citations
    assistant_msg = Message(
        conversation_id=conv.id,
        role="assistant",
        content=rag_result["answer"],
        content_type="profile_cards" if rag_result.get("profileCards") else "text",
        sources=rag_result["citations"],
        profile_cards=rag_result.get("profileCards") or []
    )
    db.add(assistant_msg)

    # Update conversation title if first message
    if len(past_messages) <= 2 and conv.title == "New Conversation":
        first_words = payload.content.strip().split()[:5]
        conv.title = " ".join(first_words) + "..."
    conv.last_message_at = datetime.now(timezone.utc)

    db.commit()

    return {
        "userMessage": {
            "id": user_msg.id,
            "role": user_msg.role,
            "content": user_msg.content,
            "createdAt": user_msg.created_at.isoformat()
        },
        "assistantMessage": {
            "id": assistant_msg.id,
            "role": assistant_msg.role,
            "content": assistant_msg.content,
            "sources": assistant_msg.sources,
            "widget": rag_result.get("widget"),
            "profileCards": assistant_msg.profile_cards,
            "createdAt": assistant_msg.created_at.isoformat()
        }
    }

@router.get("/conversations/{conv_id}/stream")
async def stream_message(
    conv_id: str,
    query: Optional[str] = Query(None),
    content: Optional[str] = Query(None),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Server-Sent Events (SSE) progressive streaming endpoint with grounding and conversation persistence."""
    import logging
    from backend.app.services.intent_router import intent_router
    from backend.app.core.database import SessionLocal

    stream_logger = logging.getLogger("pocketuni.chat.stream")

    text_input = (query or content or "").strip()
    if not text_input:
        raise HTTPException(status_code=400, detail="Query parameter 'query' or 'content' is required.")

    conv = db.query(Conversation).filter(
        Conversation.id == conv_id,
        Conversation.user_id == current_user.id,
        Conversation.is_deleted == False
    ).first()
    if not conv:
        raise HTTPException(status_code=404, detail="Conversation not found.")

    # 1. Record user message in DB and commit immediately before streaming
    user_msg = Message(
        conversation_id=conv.id,
        role="user",
        content=text_input,
        content_type="text"
    )
    db.add(user_msg)
    conv.last_message_at = datetime.now(timezone.utc)
    db.commit()

    # 2. Fetch past conversation turns for grounding memory
    past_messages = db.query(Message).filter(
        Message.conversation_id == conv.id,
        Message.is_deleted == False,
        Message.id != user_msg.id
    ).order_by(Message.created_at.asc()).limit(10).all()
    conversation_history = [{"role": m.role, "content": m.content} for m in past_messages]

    # 3. Check for specialized intent (timetable, faculty availability, student profile, official links)
    intent_res = intent_router.route_query(db, text_input, current_user, conversation_history)

    # Pre-extract user academic context and RAG sources while endpoint session is active
    academic_context_str = get_user_academic_context(db, current_user)
    retrieval_sources = []
    if not intent_res:
        retrieval_query = rag_service.build_retrieval_query(text_input, conversation_history)
        retrieval_sources = rag_service.search_knowledge(db, retrieval_query, current_user, limit=4)

    target_conv_id = str(conv.id)

    async def event_generator():
        # Dedicated DB session for streaming worker thread — never relies on outer closed session
        stream_db = SessionLocal()
        try:
            # Handle specialized deterministic institutional intent first
            if intent_res:
                citations = intent_res.get("citations", [])
                yield f"event: citations\ndata: {json.dumps(citations)}\n\n"
                if intent_res.get("widget"):
                    yield f"event: widget\ndata: {json.dumps(intent_res['widget'])}\n\n"

                # Stream the authoritative answer
                full_text = intent_res["answer"]
                words = full_text.split(" ")
                for i in range(0, len(words), 3):
                    chunk = " ".join(words[i:i+3]) + (" " if i + 3 < len(words) else "")
                    yield f"event: delta\ndata: {json.dumps({'text': chunk})}\n\n"

                # Persist assistant message safely in stream_db
                assistant_msg = Message(
                    conversation_id=target_conv_id,
                    role="assistant",
                    content=full_text,
                    content_type="profile_cards" if intent_res.get("profileCards") else "text",
                    sources=citations,
                    profile_cards=intent_res.get("profileCards") or []
                )
                stream_db.add(assistant_msg)
                c_record = stream_db.query(Conversation).filter(Conversation.id == target_conv_id).first()
                if c_record:
                    c_record.last_message_at = datetime.now(timezone.utc)
                stream_db.commit()

                yield f"event: done\ndata: {json.dumps({'status': 'completed', 'messageId': assistant_msg.id})}\n\n"
                return

            # Non-intent RAG generation
            citations = [
                {
                    "title": s["title"],
                    "sourceUrl": s.get("source_url"),
                    "category": s["category"],
                    "page": s["page_number"],
                    "section": s["section"],
                    "score": s["score"],
                    "snippet": s["text"][:160] + "..."
                }
                for s in retrieval_sources
            ]

            yield f"event: citations\ndata: {json.dumps(citations)}\n\n"

            context_parts = [
                f"Source ({s['title']}, Page {s['page_number']}, Section {s['section']}, URL {s.get('source_url') or 'not available'}):\n{s['text']}"
                for s in retrieval_sources
            ]
            context_text = "\n\n".join(context_parts) if context_parts else "No relevant documents found."
            history_text = "\n".join(
                f"{'User' if message['role'] == 'user' else 'Assistant'}: {message['content']}"
                for message in conversation_history
            )
            prompt = (
                f"=== Verified Student Details (Context) ===\n"
                f"{academic_context_str}\n"
                f"==========================================\n\n"
                f"Recent conversation:\n{history_text or 'This is the start of the conversation.'}\n\n"
                f"Institutional Context from College Database / RAG:\n{context_text}\n\n"
                f"Current user question: {text_input}\n\n"
                "Instructions:\n"
                "- If the question relates to MITS Gwalior (academics, syllabus, faculty, clubs, timetable, facilities, policies), "
                "synthesize your answer using the institutional context and verified student details above. "
                "Cite relevant document sources if provided.\n"
                "- If the question is a general query about engineering, coding, careers, hackathons, college life, or study tips, "
                "answer knowledgeably, helpfully, and encouragingly as PocketUni, the official AI academic companion for MITS Gwalior.\n"
                "- Always keep your tone natural, friendly, and concise. Never say 'I don't have information' if you can provide a helpful, intelligent answer."
            )

            full_content = []
            if gemini_service.is_configured():
                async for token in gemini_service.generate_stream(prompt, system_instruction=SYSTEM_PROMPT):
                    full_content.append(token)
                    yield f"event: delta\ndata: {json.dumps({'text': token})}\n\n"
            elif retrieval_sources:
                fallback_parts = ["I found relevant information in these MITS sources:"]
                fallback_parts.extend(
                    f"**{source['title']} (Page {source['page_number']})**\n"
                    f"[Open official source]({source.get('source_url')})\n{source['text'][:700]}"
                    for source in retrieval_sources[:3]
                )
                fallback_answer = "\n\n".join(fallback_parts)
                for start in range(0, len(fallback_answer), 80):
                    token = fallback_answer[start:start + 80]
                    full_content.append(token)
                    yield f"event: delta\ndata: {json.dumps({'text': token})}\n\n"
            else:
                fallback_answer = "I couldn't find a verified MITS source for that yet. Which course, semester, or campus service do you mean?"
                full_content.append(fallback_answer)
                yield f"event: delta\ndata: {json.dumps({'text': fallback_answer})}\n\n"

            complete_answer = "".join(full_content)
            assistant_msg = Message(
                conversation_id=target_conv_id,
                role="assistant",
                content=complete_answer,
                content_type="text",
                sources=citations
            )
            stream_db.add(assistant_msg)
            c_record = stream_db.query(Conversation).filter(Conversation.id == target_conv_id).first()
            if c_record:
                c_record.last_message_at = datetime.now(timezone.utc)
            stream_db.commit()

            yield f"event: done\ndata: {json.dumps({'status': 'completed', 'messageId': assistant_msg.id})}\n\n"

        except Exception as e:
            stream_logger.error(f"Error in SSE event_generator: {e}", exc_info=True)
            yield f"event: error\ndata: {json.dumps({'error': str(e)})}\n\n"
        finally:
            stream_db.close()

    return StreamingResponse(event_generator(), media_type="text/event-stream")

    return StreamingResponse(event_generator(), media_type="text/event-stream")

@router.post("/messages/{message_id}/feedback")
def submit_feedback(
    message_id: str,
    payload: FeedbackCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    msg = db.query(Message).filter(Message.id == message_id).first()
    if not msg:
        raise HTTPException(status_code=404, detail="Message not found.")

    msg.feedback = payload.rating
    fb = Feedback(
        user_id=current_user.id,
        message_id=msg.id,
        rating=payload.rating,
        comment=payload.comment
    )
    db.add(fb)
    db.commit()
    return {"message": "Feedback submitted successfully."}
