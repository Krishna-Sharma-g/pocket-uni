"""
Authoritative data package for the Centre for Artificial Intelligence timetables.
"""
from backend.app.data.faculties import FACULTIES, resolve_faculty, resolve_multiple_faculties
from backend.app.data.courses import COURSES, get_course_by_code, resolve_course
from backend.app.data.timetable import TIMETABLE, ALL_ENTRIES
