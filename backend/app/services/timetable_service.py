import logging
import re
from datetime import datetime, date, timedelta, time
from typing import Dict, Any, List, Optional, Tuple, Set
import zoneinfo
try:
    from sqlalchemy.orm import Session
except ImportError:
    Session = Any  # type: ignore

from backend.app.data.timetable import TIMETABLE, ALL_ENTRIES
from backend.app.data.faculties import FACULTIES, resolve_faculty, resolve_multiple_faculties
from backend.app.data.courses import COURSES, get_course_by_code, resolve_course

try:
    from backend.app.models.academic_records import TimetableEntry
    from backend.app.models.faculty import FacultyProfile
    from backend.app.models.academic import ClassCoordinator, Laboratory
    from backend.app.models.identity import User
except ImportError:
    TimetableEntry = None  # type: ignore
    FacultyProfile = None  # type: ignore
    ClassCoordinator = None  # type: ignore
    Laboratory = None  # type: ignore
    User = None  # type: ignore

logger = logging.getLogger("pocketuni.timetable")

# Master department rooms for CAI
ALL_CAI_ROOMS = [
    "M101", "M102", "M103", "M104", "M105",
    "M201", "M202", "M203", "M204", "M205",
    "M301", "M001", "M006", "SH2", "J119",
    "J110", "J109", "Arch-Library", "IoT Lab", "HPC Lab"
]

# Standard time slots
PERIOD_SLOTS = [
    ("09:00", "10:00", "Period 0 (09:00 - 10:00 AM)"),
    ("10:00", "11:00", "Period 1 (10:00 - 11:00 AM)"),
    ("11:00", "12:00", "Period 2 (11:00 AM - 12:00 PM)"),
    ("12:00", "13:00", "Period 3 (12:00 - 01:00 PM)"),
    ("14:00", "15:00", "Period 4 (02:00 - 03:00 PM)"),
    ("15:00", "16:00", "Period 5 (03:00 - 04:00 PM)"),
    ("16:00", "17:00", "Period 6 (04:00 - 05:00 PM)"),
    ("17:00", "18:00", "Period 7 (05:00 - 06:00 PM)"),
]

# Backward compatibility slot mapping
SLOT_TIMINGS = {
    0: ("09:00 AM", "10:00 AM", "Slot 0 / Morning"),
    1: ("10:00 AM", "11:00 AM", "Period 1"),
    2: ("11:00 AM", "12:00 PM", "Period 2"),
    3: ("12:00 PM", "01:00 PM", "Period 3"),
    4: ("02:00 PM", "03:00 PM", "Period 4"),
    5: ("03:00 PM", "04:00 PM", "Period 5"),
    6: ("04:00 PM", "05:00 PM", "Period 6"),
    7: ("05:00 PM", "06:00 PM", "Slot 7 / Extended Lab"),
}

FACULTY_CODE_MAP = {k: v["name"] for k, v in FACULTIES.items()}
COURSE_CATALOG = {k: (v["name"], v["type"], 4.0) for k, v in COURSES.items()}


def parse_time_to_minutes(time_val: Any) -> int:
    """Converts '10:00', '14:00', '2 PM', '02:00 PM', or datetime.time to minutes from midnight."""
    if isinstance(time_val, time):
        return time_val.hour * 60 + time_val.minute
    if isinstance(time_val, datetime):
        return time_val.hour * 60 + time_val.minute
    
    s = str(time_val).strip().lower()
    # Check 12-hour format e.g. '2 pm', '2:30 pm', '11 am'
    match_12 = re.match(r"^(\d{1,2})(?::(\d{2}))?\s*(am|pm)$", s)
    if match_12:
        hour = int(match_12.group(1))
        minute = int(match_12.group(2) or 0)
        ampm = match_12.group(3)
        if ampm == "pm" and hour != 12:
            hour += 12
        elif ampm == "am" and hour == 12:
            hour = 0
        return hour * 60 + minute
        
    # Check 24-hour format e.g. '14:00', '10:00'
    match_24 = re.match(r"^(\d{1,2}):(\d{2})$", s)
    if match_24:
        return int(match_24.group(1)) * 60 + int(match_24.group(2))

    # Single integer hour e.g. '14'
    if s.isdigit():
        h = int(s)
        return h * 60 if h <= 23 else 0

    return 0


def format_minutes_to_time(minutes: int) -> str:
    """Formats minutes from midnight to HH:MM format."""
    h = minutes // 60
    m = minutes % 60
    return f"{h:02d}:{m:02d}"


def normalize_branch(branch_str: Optional[str]) -> str:
    """Normalizes any branch representation to 'AI', 'AIR', 'AI&DS', or 'AIML'."""
    if not branch_str:
        return "AI"
    b = branch_str.strip().lower()
    if any(k in b for k in ["robotics", "air", "ai & robotics", "it (air)", "ai and robotics"]):
        return "AIR"
    if any(k in b for k in ["data science", "aids", "ai&ds", "ai and data science"]):
        return "AI&DS"
    if any(k in b for k in ["machine learning", "aiml", "ai and machine learning"]):
        return "AIML"
    if any(k in b for k in ["artificial intelligence", "cai", "ai"]):
        return "AI"
    return "AI"


def normalize_semester(semester_val: Any) -> int:
    """Normalizes any semester representation to integer 2, 3, 4, 5, 6, or 7."""
    if isinstance(semester_val, int):
        return semester_val if 2 <= semester_val <= 7 else 3
    if not semester_val:
        return 3
        
    s = str(semester_val).strip().lower()
    roman_map = {
        "vii": 7, "vi": 6, "v": 5, "iv": 4, "iii": 3, "ii": 2,
        "7th": 7, "6th": 6, "5th": 5, "4th": 4, "3rd": 3, "2nd": 2,
        "seventh": 7, "sixth": 6, "fifth": 5, "fourth": 4, "third": 3, "second": 2
    }
    for k, v in roman_map.items():
        if k in s:
            return v
            
    m = re.search(r"\b([2-7])\b", s)
    if m:
        return int(m.group(1))
        
    return 3


def normalize_section(section_val: Any, branch: str = "AI", semester: int = 3) -> str:
    """Normalizes section to 'Section 1' or 'Section 2'."""
    norm_branch = normalize_branch(branch)
    norm_sem = normalize_semester(semester)
    
    # Only AI 2nd and 3rd semester have Section 2
    if norm_branch == "AI" and norm_sem in [2, 3]:
        s = str(section_val or "").strip().lower()
        if any(k in s for k in ["2", "b", "sec 2", "sec b", "section 2", "section b", "s2", "ai-s2"]):
            return "Section 2"
        return "Section 1"
        
    return "Section 1"


class TimetableService:
    """
    Authoritative timetable intelligence and resolver service.
    Direct lookups from hardcoded structured Python data file (TIMETABLE).
    Zero AI generation, zero RAG, zero vector search.
    """

    def __init__(self):
        self.tz = zoneinfo.ZoneInfo("Asia/Kolkata")
        self.timetable = TIMETABLE
        self.all_entries = ALL_ENTRIES

    def get_current_ist_time(self) -> datetime:
        return datetime.now(self.tz)

    def resolve_day_of_week(self, day_query: Optional[str] = None, target_date: Optional[date] = None) -> str:
        """Resolves day of week in Asia/Kolkata timezone."""
        now = self.get_current_ist_time()
        if target_date:
            return target_date.strftime("%A")

        if not day_query:
            return now.strftime("%A")

        dq = day_query.strip().lower()
        if dq in ["today", "aaj"]:
            return now.strftime("%A")
        elif dq in ["tomorrow", "kal"]:
            return (now + timedelta(days=1)).strftime("%A")
        elif dq in ["yesterday"]:
            return (now - timedelta(days=1)).strftime("%A")

        days_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday",
            "sat": "Saturday", "saturday": "Saturday",
            "sun": "Sunday", "sunday": "Sunday"
        }
        for k, v in days_map.items():
            if k in dq:
                return v

        return now.strftime("%A")

    # =========================================================================
    # CORE TIMETABLE SERVICE FUNCTIONS
    # =========================================================================

    def get_day_timetable(
        self,
        branch: str,
        semester: int,
        section: str = "Section 1",
        day: Optional[str] = None
    ) -> List[Dict[str, Any]]:
        """
        Retrieves the exact list of classes scheduled on a specific day.
        Sorted by start time.
        """
        b = normalize_branch(branch)
        s = normalize_semester(semester)
        sec = normalize_section(section, b, s)
        d = self.resolve_day_of_week(day)

        if d == "Sunday":
            return []

        branch_data = self.timetable.get(b, {})
        sem_data = branch_data.get(s, {})
        sec_data = sem_data.get(sec, {})
        classes = sec_data.get(d, [])

        # Sort classes by start time in minutes
        return sorted(classes, key=lambda c: parse_time_to_minutes(c["start"]))

    def get_week_timetable(
        self,
        branch: str,
        semester: int,
        section: str = "Section 1"
    ) -> Dict[str, List[Dict[str, Any]]]:
        """
        Retrieves the full weekly schedule (Monday through Saturday).
        """
        b = normalize_branch(branch)
        s = normalize_semester(semester)
        sec = normalize_section(section, b, s)

        week_schedule: Dict[str, List[Dict[str, Any]]] = {}
        days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        for d in days:
            classes = self.get_day_timetable(b, s, sec, d)
            week_schedule[d] = classes

        return week_schedule

    def get_current_class(
        self,
        branch: str,
        semester: int,
        section: str = "Section 1",
        current_dt: Optional[datetime] = None
    ) -> Dict[str, Any]:
        """
        Determines what class is currently in session for the given student profile.
        Also calculates remaining classes today and the next lecture.
        """
        b = normalize_branch(branch)
        s = normalize_semester(semester)
        sec = normalize_section(section, b, s)

        dt = current_dt or self.get_current_ist_time()
        day_name = dt.strftime("%A")
        now_minutes = dt.hour * 60 + dt.minute

        if day_name == "Sunday":
            return {
                "day": "Sunday",
                "current_class": None,
                "is_free": True,
                "is_holiday": True,
                "status": "Academic Holiday (Sunday). No scheduled classes.",
                "remaining_classes": [],
                "next_class": None
            }

        classes = self.get_day_timetable(b, s, sec, day_name)
        current_class = None
        next_class = None
        remaining_classes = []

        for c in classes:
            start_m = parse_time_to_minutes(c["start"])
            end_m = parse_time_to_minutes(c["end"])

            if start_m <= now_minutes < end_m:
                current_class = c
            elif start_m > now_minutes:
                remaining_classes.append(c)
                if next_class is None:
                    next_class = c

        is_break = (13 * 60 <= now_minutes < 14 * 60)
        time_until_next = None
        if next_class:
            time_until_next = parse_time_to_minutes(next_class["start"]) - now_minutes

        return {
            "day": day_name,
            "current_time": dt.strftime("%H:%M"),
            "current_class": current_class,
            "is_free": current_class is None,
            "is_break": is_break,
            "next_class": next_class,
            "minutes_until_next": time_until_next,
            "remaining_classes": remaining_classes,
            "branch": b,
            "semester": s,
            "section": sec
        }

    def get_next_class(
        self,
        branch: str,
        semester: int,
        section: str = "Section 1",
        current_dt: Optional[datetime] = None
    ) -> Dict[str, Any]:
        """
        Finds the very next scheduled class for the student.
        If today has no more classes, checks tomorrow or subsequent days.
        """
        b = normalize_branch(branch)
        s = normalize_semester(semester)
        sec = normalize_section(section, b, s)

        dt = current_dt or self.get_current_ist_time()
        now_minutes = dt.hour * 60 + dt.minute
        day_name = dt.strftime("%A")

        # 1. Check remaining classes today
        if day_name != "Sunday":
            today_classes = self.get_day_timetable(b, s, sec, day_name)
            for c in today_classes:
                if parse_time_to_minutes(c["start"]) > now_minutes:
                    return {
                        "day": day_name,
                        "is_today": True,
                        "class": c,
                        "minutes_until": parse_time_to_minutes(c["start"]) - now_minutes
                    }

        # 2. Check subsequent days of the week
        days_order = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        current_idx = days_order.index(day_name) if day_name in days_order else -1
        
        for offset in range(1, 7):
            next_day_idx = (current_idx + offset) % len(days_order)
            target_day = days_order[next_day_idx]
            classes = self.get_day_timetable(b, s, sec, target_day)
            if classes:
                return {
                    "day": target_day,
                    "is_today": False,
                    "class": classes[0],
                    "minutes_until": None
                }

        return {
            "day": None,
            "is_today": False,
            "class": None,
            "minutes_until": None
        }

    def get_faculty_schedule(
        self,
        faculty_query: str,
        day: Optional[str] = None
    ) -> Dict[str, Any]:
        """
        Retrieves all teaching commitments of a faculty member across all branches and semesters.
        """
        fac = resolve_faculty(faculty_query)
        target_code = fac["code"] if fac else faculty_query.strip().upper()
        target_name = fac["name"] if fac else faculty_query.strip()

        target_day = self.resolve_day_of_week(day) if day else None

        matched_classes = []
        for entry in self.all_entries:
            is_match = False
            if target_code in entry.get("faculty", ""):
                is_match = True
            elif any(f.get("code") == target_code for f in entry.get("faculties", [])):
                is_match = True
            elif target_name.lower() in entry.get("faculty_name", "").lower():
                is_match = True

            if is_match:
                if target_day is None or entry["day"] == target_day:
                    matched_classes.append(entry)

        matched_classes.sort(key=lambda x: (
            ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].index(x["day"])
            if x["day"] in ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] else 99,
            parse_time_to_minutes(x["start"])
        ))

        return {
            "faculty": fac,
            "query": faculty_query,
            "day": target_day,
            "total_slots": len(matched_classes),
            "classes": matched_classes
        }

    def get_faculty_free_slots(
        self,
        faculty_query: str,
        day: Optional[str] = None
    ) -> Dict[str, Any]:
        """
        Determines when a faculty member is free during teaching hours on a given day.
        """
        d = self.resolve_day_of_week(day)
        fac_schedule = self.get_faculty_schedule(faculty_query, day=d)
        fac = fac_schedule["faculty"]
        busy_classes = fac_schedule["classes"]

        busy_intervals = [
            (parse_time_to_minutes(c["start"]), parse_time_to_minutes(c["end"]))
            for c in busy_classes
        ]

        free_slots = []
        for start_str, end_str, label in PERIOD_SLOTS:
            slot_s = parse_time_to_minutes(start_str)
            slot_e = parse_time_to_minutes(end_str)
            
            is_busy = any(not (slot_e <= b_s or slot_s >= b_e) for b_s, b_e in busy_intervals)
            if not is_busy:
                free_slots.append({
                    "start": start_str,
                    "end": end_str,
                    "label": label
                })

        return {
            "faculty": fac or {"name": faculty_query, "code": faculty_query},
            "day": d,
            "busy_slots_count": len(busy_classes),
            "free_slots_count": len(free_slots),
            "free_slots": free_slots,
            "busy_classes": busy_classes
        }

    def get_course_schedule(self, course_query: str) -> Dict[str, Any]:
        """
        Retrieves all sections, faculties, and timings where a course is taught.
        Answers: 'Who teaches DBMS?', 'Where is OOP class?', etc.
        """
        resolved_courses = resolve_course(course_query)
        course_codes = set(c["code"] for c in resolved_courses)
        course_names = set(c["name"].lower() for c in resolved_courses)

        matches = []
        teaching_faculties: Set[str] = set()
        rooms: Set[str] = set()

        for entry in self.all_entries:
            is_code_match = entry.get("course_code") in course_codes
            is_name_match = any(cn in entry.get("course_name", "").lower() for cn in course_names) or (course_query.strip().lower() in entry.get("course_name", "").lower())
            
            if is_code_match or is_name_match:
                matches.append(entry)
                if entry.get("faculty_name"):
                    teaching_faculties.add(entry["faculty_name"])
                if entry.get("room"):
                    rooms.add(entry["room"])

        matches.sort(key=lambda x: (
            x["branch"],
            x["semester"],
            x["section"],
            ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].index(x["day"])
            if x["day"] in ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] else 99,
            parse_time_to_minutes(x["start"])
        ))

        return {
            "query": course_query,
            "resolved_courses": resolved_courses,
            "total_classes": len(matches),
            "teaching_faculties": list(teaching_faculties),
            "rooms": list(rooms),
            "classes": matches
        }

    def get_room_schedule(self, room_query: str, day: Optional[str] = None) -> Dict[str, Any]:
        """
        Retrieves all lectures and labs scheduled in a specific room.
        """
        r_clean = room_query.strip().upper()
        d = self.resolve_day_of_week(day) if day else None

        matches = []
        for entry in self.all_entries:
            if r_clean in entry.get("room", "").upper():
                if d is None or entry["day"] == d:
                    matches.append(entry)

        matches.sort(key=lambda x: (
            ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].index(x["day"])
            if x["day"] in ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] else 99,
            parse_time_to_minutes(x["start"])
        ))

        return {
            "room": room_query,
            "day": d,
            "total_classes": len(matches),
            "classes": matches
        }

    def get_batch_schedule(
        self,
        branch: str,
        semester: int,
        section: str = "Section 1",
        batch: str = "Batch A",
        day: Optional[str] = None
    ) -> List[Dict[str, Any]]:
        """
        Retrieves classes applicable to a specific lab batch (e.g., 'Batch A' or 'Batch B').
        Includes all lectures (where batch is None or Batch A+B) and the specific batch's labs.
        """
        day_classes = self.get_day_timetable(branch, semester, section, day)
        target_batch = batch.strip().lower()

        filtered = []
        for c in day_classes:
            b_val = c.get("batch")
            if not b_val or "a+b" in b_val.lower() or target_batch in b_val.lower():
                filtered.append(c)

        return filtered

    def get_lab_schedule(
        self,
        branch: Optional[str] = None,
        semester: Optional[int] = None,
        section: Optional[str] = None,
        day: Optional[str] = None
    ) -> List[Dict[str, Any]]:
        """
        Retrieves all practical/laboratory sessions matching criteria.
        """
        d = self.resolve_day_of_week(day) if day else None
        b = normalize_branch(branch) if branch else None
        s = normalize_semester(semester) if semester else None

        labs = []
        for entry in self.all_entries:
            if entry.get("type") == "Lab" or "lab" in entry.get("course_name", "").lower():
                if d and entry["day"] != d:
                    continue
                if b and entry["branch"] != b:
                    continue
                if s and entry["semester"] != s:
                    continue
                labs.append(entry)

        return sorted(labs, key=lambda x: (
            ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].index(x["day"])
            if x["day"] in ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] else 99,
            parse_time_to_minutes(x["start"])
        ))

    def get_free_rooms(
        self,
        day: Optional[str] = None,
        time_str: Optional[str] = None,
        current_dt: Optional[datetime] = None
    ) -> Dict[str, Any]:
        """
        Determines which academic block rooms are free at a specific day and time.
        """
        d = self.resolve_day_of_week(day)
        dt = current_dt or self.get_current_ist_time()
        
        target_minutes = parse_time_to_minutes(time_str) if time_str else (dt.hour * 60 + dt.minute)
        
        occupied_rooms: Set[str] = set()
        occupied_details: Dict[str, Dict[str, Any]] = {}

        for entry in self.all_entries:
            if entry["day"] == d:
                start_m = parse_time_to_minutes(entry["start"])
                end_m = parse_time_to_minutes(entry["end"])
                if start_m <= target_minutes < end_m:
                    rm = entry.get("room")
                    if rm:
                        occupied_rooms.add(rm)
                        occupied_details[rm] = entry

        free_rooms = [r for r in ALL_CAI_ROOMS if r not in occupied_rooms]

        return {
            "day": d,
            "time": format_minutes_to_time(target_minutes),
            "free_rooms_count": len(free_rooms),
            "occupied_rooms_count": len(occupied_rooms),
            "free_rooms": sorted(free_rooms),
            "occupied_rooms": occupied_details
        }

    def get_free_faculties(
        self,
        day: Optional[str] = None,
        time_str: Optional[str] = None,
        current_dt: Optional[datetime] = None
    ) -> Dict[str, Any]:
        """
        Determines which faculties have no scheduled teaching classes at a given day and time.
        """
        d = self.resolve_day_of_week(day)
        dt = current_dt or self.get_current_ist_time()
        
        target_minutes = parse_time_to_minutes(time_str) if time_str else (dt.hour * 60 + dt.minute)

        busy_faculty_codes: Set[str] = set()
        busy_details: Dict[str, Dict[str, Any]] = {}

        for entry in self.all_entries:
            if entry["day"] == d:
                start_m = parse_time_to_minutes(entry["start"])
                end_m = parse_time_to_minutes(entry["end"])
                if start_m <= target_minutes < end_m:
                    for f in entry.get("faculties", []):
                        f_code = f.get("code")
                        if f_code:
                            busy_faculty_codes.add(f_code)
                            busy_details[f_code] = entry

        free_faculties = []
        for code, f_info in FACULTIES.items():
            if code not in busy_faculty_codes:
                free_faculties.append(f_info)

        return {
            "day": d,
            "time": format_minutes_to_time(target_minutes),
            "free_faculties_count": len(free_faculties),
            "busy_faculties_count": len(busy_faculty_codes),
            "free_faculties": free_faculties,
            "busy_faculties": busy_details
        }

    # =========================================================================
    # BACKWARD COMPATIBILITY METHODS (Preserves existing tests)
    # =========================================================================

    def get_student_schedule(
        self,
        db: Session,
        branch: str,
        semester: str,
        section: str = "A",
        day_of_week: Optional[str] = None,
        target_date: Optional[date] = None
    ) -> Dict[str, Any]:
        """
        Maintains complete backwards compatibility with existing tests and APIs.
        Directly backed by the authoritative master timetable.
        """
        resolved_day = self.resolve_day_of_week(day_of_week, target_date)
        if resolved_day == "Sunday":
            return {
                "day": "Sunday",
                "is_holiday": True,
                "class_count": 0,
                "message": "Sunday is an academic holiday. No scheduled classes or laboratories.",
                "classes": []
            }

        b = normalize_branch(branch)
        s = normalize_semester(semester)
        sec = normalize_section(section, b, s)

        raw_classes = self.get_day_timetable(b, s, sec, resolved_day)
        classes = []
        period_counter = 1
        for e in raw_classes:
            classes.append({
                "period": period_counter,
                "time": f"{e['start']} - {e['end']}",
                "course_code": e["course_code"],
                "subject": e["course_name"],
                "faculty": e["faculty_name"],
                "room": e["room"],
                "is_lab": (e["type"] == "Lab"),
                "batch": e.get("batch")
            })
            period_counter += 1

        return {
            "day": resolved_day,
            "branch": branch,
            "semester": semester,
            "section": section,
            "is_holiday": len(classes) == 0,
            "class_count": len(classes),
            "classes": classes,
            "effective_session": "Academic Year 2026",
            "timezone": "Asia/Kolkata",
        }

    def get_faculty_availability(
        self,
        db: Session,
        target_day: Optional[str] = None,
        slot_number: Optional[int] = None,
        time_query: Optional[str] = None,
    ) -> Dict[str, Any]:
        """Backward compatible faculty availability function with mandatory disclaimer."""
        resolved_day = self.resolve_day_of_week(target_day)

        slot_number = 4 if slot_number is None else slot_number
        if time_query:
            tq = time_query.lower()
            if "9 am" in tq or "09:00" in tq:
                slot_number = 0
            elif "10:00" in tq or "10 am" in tq:
                slot_number = 1
            elif "11:00" in tq or "11 am" in tq:
                slot_number = 2
            elif "12:00" in tq or "12 pm" in tq:
                slot_number = 3
            elif "1:00" in tq or "1 pm" in tq:
                slot_number = 4
            elif "2:00" in tq or "2 pm" in tq or "14:00" in tq:
                slot_number = 4
            elif "3:00" in tq or "3 pm" in tq:
                slot_number = 5
            elif "4:00" in tq or "4 pm" in tq:
                slot_number = 6
            elif "5:00" in tq or "5 pm" in tq:
                slot_number = 7

        start_t, end_t, slot_lbl = SLOT_TIMINGS.get(slot_number, ("02:00 PM", "03:00 PM", "Period 4"))
        
        # Check free faculties at this slot
        time_str = start_t.replace(" AM", "").replace(" PM", "")
        if "PM" in start_t and not start_t.startswith("12"):
            h, m = time_str.split(":")
            time_str = f"{int(h)+12}:{m}"

        res = self.get_free_faculties(day=resolved_day, time_str=time_str)

        free_fac = [
            {
                "name": f["name"],
                "designation": f["designation"],
                "department": f["department"],
                "status": "According to the published timetable, no class is listed for this faculty member during this period."
            }
            for f in res["free_faculties"]
        ]

        busy_fac = [
            {
                "name": FACULTIES[code]["name"] if code in FACULTIES else code,
                "teaching": {
                    "subject": entry["course_name"],
                    "room": entry["room"],
                    "branch": entry["branch"],
                    "semester": entry["semester"]
                }
            }
            for code, entry in res["busy_faculties"].items()
        ]

        ist_now = self.get_current_ist_time().strftime("%Y-%m-%d %H:%M:%S IST")

        return {
            "day": resolved_day,
            "slot": slot_number,
            "time_window": f"{start_t} - {end_t}",
            "slot_label": slot_lbl,
            "free_faculty_count": len(free_fac),
            "busy_faculty_count": len(busy_fac),
            "unknown_coverage_count": 0,
            "free_faculty": free_fac,
            "busy_faculty": busy_fac,
            "unknown_coverage_faculty": [],
            "timezone": "Asia/Kolkata",
            "query_timestamp": ist_now,
            "disclaimer": (
                "Note: Faculty availability is derived strictly from published master teaching timetables (Asia/Kolkata). "
                "Faculty without scheduled classes may still be engaged in departmental meetings, research, "
                "administrative duties, examination coordination, laboratory guidance, or student mentoring. "
                "Timetable data indicates no scheduled class, but unscheduled departmental duties or leave cannot be confirmed."
            )
        }

    def get_class_coordinator(self, db: Session, branch: str, semester_or_year: str) -> Optional[Dict[str, Any]]:
        year_str = "I Year"
        sem_l = semester_or_year.lower()
        if any(k in sem_l for k in ["3", "4", "ii", "second", "3rd"]):
            year_str = "II Year"
        elif any(k in sem_l for k in ["5", "6", "iii", "third", "5th"]):
            year_str = "III Year"
        elif any(k in sem_l for k in ["7", "8", "iv", "fourth", "final", "7th"]):
            year_str = "IV Year"

        q = db.query(ClassCoordinator).filter(ClassCoordinator.year == year_str)
        if "Robotics" in branch or "AIR" in branch:
            q = q.filter(ClassCoordinator.branch.ilike("%Robotics%"))
        elif "Machine Learning" in branch or "AIML" in branch:
            q = q.filter(ClassCoordinator.branch.ilike("%Machine Learning%"))
        elif "Data Science" in branch or "AIDS" in branch:
            q = q.filter(ClassCoordinator.branch.ilike("%Data Science%"))
        else:
            q = q.filter(ClassCoordinator.branch == "Artificial Intelligence")

        coord = q.first()
        if coord:
            return {
                "name": coord.faculty_name,
                "branch": coord.branch,
                "year": coord.year,
                "contact_number": coord.contact_number,
                "institutional_email": coord.institutional_email,
                "session": coord.academic_session,
            }
        return None

    def get_lab_details(self, db: Session, lab_name_or_keyword: str) -> Optional[Dict[str, Any]]:
        kw = f"%{lab_name_or_keyword.strip()}%"
        lab = db.query(Laboratory).filter(
            (Laboratory.name.ilike(kw)) | (Laboratory.code.ilike(kw)) | (Laboratory.research_focus.ilike(kw))
        ).first()

        if lab:
            return {
                "name": lab.name,
                "code": lab.code,
                "location": lab.location,
                "capacity": lab.capacity,
                "hardware": lab.hardware_specs,
                "software": lab.software_specs,
                "faculty_in_charge": lab.faculty_in_charge,
                "staff_in_charge": lab.staff_in_charge,
                "research_focus": lab.research_focus,
                "description": lab.description,
            }
        return None

    def seed_master_timetables(self, db: Session) -> int:
        """Maintains db seeding hook if called by scripts."""
        existing = db.query(TimetableEntry).count()
        if existing >= 50:
            return existing

        entries_to_insert = []
        for entry in self.all_entries:
            e = TimetableEntry(
                day=entry["day"],
                start_time=entry["start"],
                end_time=entry["end"],
                slot_number=1,
                subject=entry["course_name"],
                subject_code=entry["course_code"],
                faculty_name=entry["faculty_name"],
                room=entry["room"],
                programme="B.Tech",
                branch=entry["branch"],
                semester=f"Semester {entry['semester']}",
                section=entry["section"],
                batch_group=entry.get("batch") or "All",
                is_lab=(entry["type"] == "Lab"),
                academic_year="2026-2027",
                effective_period=entry.get("session") or "Academic Year 2026",
                is_demo=False
            )
            entries_to_insert.append(e)

        db.bulk_save_objects(entries_to_insert)
        db.commit()
        return len(entries_to_insert)


# Singleton timetable service instance
timetable_service = TimetableService()

# Export top-level functions matching service layer requirements
get_day_timetable = timetable_service.get_day_timetable
get_week_timetable = timetable_service.get_week_timetable
get_current_class = timetable_service.get_current_class
get_next_class = timetable_service.get_next_class
get_faculty_schedule = timetable_service.get_faculty_schedule
get_faculty_free_slots = timetable_service.get_faculty_free_slots
get_course_schedule = timetable_service.get_course_schedule
get_room_schedule = timetable_service.get_room_schedule
get_batch_schedule = timetable_service.get_batch_schedule
get_lab_schedule = timetable_service.get_lab_schedule
get_free_rooms = timetable_service.get_free_rooms
get_free_faculties = timetable_service.get_free_faculties


# =============================================================================
# FORMATTERS FOR CLEAN, HUMAN-READABLE OUTPUT
# =============================================================================

def format_day_schedule(classes: List[Dict[str, Any]], day: str, header_info: str = "") -> str:
    """Formats a single day's schedule cleanly."""
    if not classes:
        msg = f"{day}\n\nNo classes are scheduled on {day} (Academic Holiday / Off-day)."
        if header_info:
            return f"**{header_info}**\n\n{msg}"
        return msg

    blocks = []
    if header_info:
        blocks.append(f"**{header_info}**")
    blocks.append(day)

    for c in classes:
        lab_suffix = " (Lab)" if c.get("type") == "Lab" else ""
        batch_suffix = f" [{c['batch']}]" if c.get("batch") else ""
        c_block = (
            f"{c['start']}–{c['end']}\n"
            f"{c['course_name']}{lab_suffix}{batch_suffix}\n"
            f"{c['faculty_name']}\n"
            f"Room {c['room']}"
        )
        blocks.append(c_block)

    return "\n\n".join(blocks)


def format_week_schedule(week_dict: Dict[str, List[Dict[str, Any]]], header_info: str = "") -> str:
    """Formats full weekly schedule (Monday through Saturday)."""
    parts = []
    if header_info:
        parts.append(f"### {header_info}\n")
    for day, classes in week_dict.items():
        if classes:
            day_text = format_day_schedule(classes, day)
            parts.append(day_text)
    if not parts or (len(parts) == 1 and header_info):
        return f"No classes scheduled for the week for {header_info}."
    return "\n\n---\n\n".join(parts)


def format_current_class_response(status_dict: Dict[str, Any]) -> str:
    """Formats current lecture, room, faculty, time, and next lecture."""
    current_time = status_dict.get("current_time", "")
    curr = status_dict.get("current_class")
    nxt = status_dict.get("next_class")
    remaining = status_dict.get("remaining_classes", [])
    is_break = status_dict.get("is_break", False)

    lines = []
    if curr:
        lab_suffix = " (Lab)" if curr.get("type") == "Lab" else ""
        batch_suffix = f" [{curr['batch']}]" if curr.get("batch") else ""
        lines.append(f"📍 **Current Lecture ({curr['start']}–{curr['end']})**")
        lines.append(f"{curr['course_name']}{lab_suffix}{batch_suffix}")
        lines.append(f"{curr['faculty_name']}")
        lines.append(f"Room {curr['room']}\n")
    else:
        if is_break:
            lines.append(f"☕ **Current Time ({current_time})**: Lunch / Recess Break (01:00–02:00 PM). The current slot is free.\n")
        else:
            lines.append(f"🟢 **Current Time ({current_time})**: The current slot is free (No lecture scheduled right now).\n")

    if nxt:
        lab_suffix = " (Lab)" if nxt.get("type") == "Lab" else ""
        batch_suffix = f" [{nxt['batch']}]" if nxt.get("batch") else ""
        lines.append(f"⏭️ **Next Scheduled Lecture ({nxt['start']}–{nxt['end']})**")
        lines.append(f"{nxt['course_name']}{lab_suffix}{batch_suffix}")
        lines.append(f"{nxt['faculty_name']}")
        lines.append(f"Room {nxt['room']}")
        if status_dict.get("minutes_until_next") is not None:
            lines.append(f"⏳ Starts in: {status_dict['minutes_until_next']} minutes\n")
    else:
        lines.append("🎉 No more classes scheduled for today.\n")

    if remaining and len(remaining) > 1:
        lines.append("**Remaining Classes Today**:")
        for r in remaining:
            lab_badge = " (Lab)" if r.get("type") == "Lab" else ""
            lines.append(f"- {r['start']}–{r['end']}: {r['course_name']}{lab_badge} (Room {r['room']})")

    return "\n".join(lines).strip()


def format_faculty_schedule_response(sched_dict: Dict[str, Any]) -> str:
    """Formats faculty schedule query response."""
    fac = sched_dict.get("faculty")
    fac_name = fac["name"] if fac else sched_dict.get("query", "Faculty")
    fac_code = fac["code"] if fac else ""
    classes = sched_dict.get("classes", [])

    if not classes:
        day_str = f" on {sched_dict['day']}" if sched_dict.get("day") else ""
        return f"👨‍🏫 **{fac_name} ({fac_code})**\n\nNo teaching lectures or laboratories scheduled{day_str} in published master timetables."

    header = f"👨‍🏫 **Teaching Schedule for {fac_name} ({fac_code})**"
    if sched_dict.get("day"):
        header += f" on {sched_dict['day']}"
    header += f"\nTotal scheduled teaching slots: {len(classes)}\n"

    # Group by day
    by_day: Dict[str, List[Dict[str, Any]]] = {}
    for c in classes:
        by_day.setdefault(c["day"], []).append(c)

    day_blocks = [header]
    for d, day_classes in by_day.items():
        day_blocks.append(f"**{d}**")
        for c in day_classes:
            lab_suffix = " (Lab)" if c.get("type") == "Lab" else ""
            batch_suffix = f" [{c['batch']}]" if c.get("batch") else ""
            c_block = (
                f"{c['start']}–{c['end']}\n"
                f"{c['course_name']}{lab_suffix}{batch_suffix} ({c['branch']} Sem {c['semester']})\n"
                f"Room {c['room']}"
            )
            day_blocks.append(c_block)

    return "\n\n".join(day_blocks)


def format_faculty_free_slots_response(free_dict: Dict[str, Any]) -> str:
    """Formats faculty free slots response."""
    fac = free_dict.get("faculty", {})
    fac_name = fac.get("name", "Faculty")
    fac_code = fac.get("code", "")
    day = free_dict.get("day", "")
    free_slots = free_dict.get("free_slots", [])

    lines = [
        f"🟢 **Free Teaching Slots for {fac_name} ({fac_code}) on {day}**\n",
        f"Based on the official departmental teaching timetables, {fac_name} has **no scheduled classes** during the following periods:\n"
    ]
    for s in free_slots:
        lines.append(f"- **{s['start']}–{s['end']}** ({s['label'].split('(')[0].strip()})")

    lines.append("\n*Note: Official lunch break across the department is 01:00–02:00 PM.*")
    lines.append("*(Faculty without scheduled classes may be in departmental chambers, labs, or engaged in research / mentoring.)*")
    return "\n".join(lines)


def format_course_schedule_response(course_dict: Dict[str, Any]) -> str:
    """Formats course schedule & teacher lookup response."""
    q = course_dict.get("query", "")
    classes = course_dict.get("classes", [])
    faculties = course_dict.get("teaching_faculties", [])
    rooms = course_dict.get("rooms", [])

    if not classes:
        return f"📚 No scheduled timetable classes found matching course **{q}** in the AI Department."

    c_name = classes[0]["course_name"] if classes else q

    lines = [
        f"📚 **Course Schedule: {c_name}**\n",
        "**Faculty Teaching this Course:**"
    ]
    for f in sorted(faculties):
        lines.append(f"- {f}")

    lines.append(f"\n**Classrooms / Venues**: {', '.join(sorted(rooms))}\n")
    lines.append("**Schedule by Section & Day**:")

    # Group by branch + semester + section
    by_sec: Dict[str, List[Dict[str, Any]]] = {}
    for c in classes:
        sec_key = f"{c['branch']} Sem {c['semester']} ({c['section']})"
        by_sec.setdefault(sec_key, []).append(c)

    for sec_lbl, sec_classes in by_sec.items():
        lines.append(f"\n- **{sec_lbl}**:")
        for c in sec_classes:
            lab_badge = " (Lab)" if c.get("type") == "Lab" else ""
            batch_badge = f" [{c['batch']}]" if c.get("batch") else ""
            lines.append(f"  - {c['day']} {c['start']}–{c['end']}: Room `{c['room']}` | Faculty: {c['faculty_name']}{lab_badge}{batch_badge}")

    return "\n".join(lines)


def format_free_rooms_response(free_dict: Dict[str, Any]) -> str:
    """Formats free room availability query."""
    day = free_dict.get("day", "")
    time_str = free_dict.get("time", "")
    free_rooms = free_dict.get("free_rooms", [])
    occupied = free_dict.get("occupied_rooms", {})

    lines = [
        f"🏫 **Classroom & Laboratory Availability on {day} at {time_str}**\n",
        f"**Free Rooms ({len(free_rooms)} available)**:",
    ]
    for r in free_rooms:
        lines.append(f"- `{r}`")

    if occupied:
        lines.append(f"\n**Occupied Rooms ({len(occupied)})**:")
        for r, entry in sorted(occupied.items()):
            lines.append(f"- `{r}`: {entry['course_name']} ({entry['branch']} Sem {entry['semester']} | {entry['faculty_name']})")

    return "\n".join(lines)


def format_free_faculties_response(free_dict: Dict[str, Any]) -> str:
    """Formats free faculty query."""
    day = free_dict.get("day", "")
    time_str = free_dict.get("time", "")
    free_fac = free_dict.get("free_faculties", [])
    busy = free_dict.get("busy_faculties", {})

    lines = [
        f"👨‍🏫 **Faculty Availability on {day} at {time_str}**\n",
        f"The following **{len(free_fac)} faculty members** have no scheduled lecture or lab in the timetable at this time:\n"
    ]
    for f in free_fac[:15]:
        lines.append(f"- **{f['name']}** ({f['code']}) — *{f['designation']}*")

    if len(free_fac) > 15:
        lines.append(f"- *(+ {len(free_fac) - 15} more faculties without scheduled class)*")

    lines.append(f"\n*(Published Master Timetable Asia/Kolkata. Faculty may be present in departmental chambers or meetings.)*")
    return "\n".join(lines)


def format_lab_schedule_response(labs: List[Dict[str, Any]], title: str = "") -> str:
    """Formats lab schedule response."""
    if not labs:
        return f"🔬 No laboratory sessions scheduled for {title}."

    lines = [f"🔬 **Laboratory Schedule — {title}**\n"]
    for l in labs:
        batch_badge = f" [{l['batch']}]" if l.get("batch") else ""
        lines.append(
            f"{l['day']} {l['start']}–{l['end']}\n"
            f"{l['course_name']}{batch_badge} ({l['branch']} Sem {l['semester']})\n"
            f"Faculty: {l['faculty_name']}\n"
            f"Room: {l['room']}\n"
        )
    return "\n".join(lines).strip()

