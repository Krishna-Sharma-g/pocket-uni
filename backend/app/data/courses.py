"""
Course registry for the Centre for Artificial Intelligence (Academic Year 2026).
Authoritatively maps course codes to full course titles, course types, credits,
and search keywords as extracted from official MITS Master Timetables.
"""

from typing import Dict, Any, Optional, List

COURSES: Dict[str, Dict[str, Any]] = {
    # ---------------- II SEMESTER COURSES (Jan-June 2026) ----------------
    "31251201": {"code": "31251201", "name": "Discrete Structures", "type": "Theory", "branch": "AI", "sem": 2},
    "31251202": {"code": "31251202", "name": "Modern Computer Architecture", "type": "Theory", "branch": "AI", "sem": 2},
    "31251203": {"code": "31251203", "name": "Object Oriented Programming", "type": "Theory", "branch": "AI", "sem": 2},
    "31251204": {"code": "31251204", "name": "Data Structures", "type": "Theory", "branch": "AI", "sem": 2},
    "31251205": {"code": "31251205", "name": "Basic Electrical & Electronics Engineering", "type": "Theory", "branch": "AI", "sem": 2},
    "31251206": {"code": "31251206", "name": "Object Oriented Programming Lab", "type": "Lab", "branch": "AI", "sem": 2},
    "31251207": {"code": "31251207", "name": "Data Structures Lab", "type": "Lab", "branch": "AI", "sem": 2},
    "31251208": {"code": "31251208", "name": "Basic Electrical & Electronics Engineering Lab", "type": "Lab", "branch": "AI", "sem": 2},
    "31251209": {"code": "31251209", "name": "Semester Proficiency", "type": "Proficiency", "branch": "AI", "sem": 2},
    "31251210": {"code": "31251210", "name": "Micro Project-II", "type": "Project", "branch": "AI", "sem": 2},
    "31251211": {"code": "31251211", "name": "Sustainability & Environmental Science", "type": "Theory", "branch": "AI", "sem": 2},

    "24251201": {"code": "24251201", "name": "Discrete Structures", "type": "Theory", "branch": "AIR", "sem": 2},
    "24251202": {"code": "24251202", "name": "Modern Computer Architecture", "type": "Theory", "branch": "AIR", "sem": 2},
    "24251203": {"code": "24251203", "name": "Object Oriented Programming", "type": "Theory", "branch": "AIR", "sem": 2},
    "24251204": {"code": "24251204", "name": "Data Structures", "type": "Theory", "branch": "AIR", "sem": 2},
    "24251205": {"code": "24251205", "name": "Sensors and Actuators", "type": "Theory", "branch": "AIR", "sem": 2},
    "24251206": {"code": "24251206", "name": "Object Oriented Programming Lab", "type": "Lab", "branch": "AIR", "sem": 2},
    "24251207": {"code": "24251207", "name": "Data Structures Lab", "type": "Lab", "branch": "AIR", "sem": 2},
    "24251208": {"code": "24251208", "name": "Sensors and Actuators Lab", "type": "Lab", "branch": "AIR", "sem": 2},
    "24251209": {"code": "24251209", "name": "Semester Proficiency", "type": "Proficiency", "branch": "AIR", "sem": 2},
    "24251210": {"code": "24251210", "name": "Micro Project-II", "type": "Project", "branch": "AIR", "sem": 2},
    "24251211": {"code": "24251211", "name": "Sustainability & Environmental Science", "type": "Theory", "branch": "AIR", "sem": 2},

    "27251201": {"code": "27251201", "name": "Discrete Structures", "type": "Theory", "branch": "AI&DS", "sem": 2},
    "27251202": {"code": "27251202", "name": "Modern Computer Architecture", "type": "Theory", "branch": "AI&DS", "sem": 2},
    "27251203": {"code": "27251203", "name": "Object Oriented Programming", "type": "Theory", "branch": "AI&DS", "sem": 2},
    "27251204": {"code": "27251204", "name": "Data Structures", "type": "Theory", "branch": "AI&DS", "sem": 2},
    "27251205": {"code": "27251205", "name": "Basic Electrical & Electronics Engineering", "type": "Theory", "branch": "AI&DS", "sem": 2},
    "27251206": {"code": "27251206", "name": "Object Oriented Programming Lab", "type": "Lab", "branch": "AI&DS", "sem": 2},
    "27251207": {"code": "27251207", "name": "Data Structures Lab", "type": "Lab", "branch": "AI&DS", "sem": 2},
    "27251208": {"code": "27251208", "name": "Basic Electrical & Electronics Engineering Lab", "type": "Lab", "branch": "AI&DS", "sem": 2},
    "27251209": {"code": "27251209", "name": "Semester Proficiency", "type": "Proficiency", "branch": "AI&DS", "sem": 2},
    "27251210": {"code": "27251210", "name": "Micro Project-II", "type": "Project", "branch": "AI&DS", "sem": 2},
    "27251211": {"code": "27251211", "name": "Sustainability & Environmental Science", "type": "Theory", "branch": "AI&DS", "sem": 2},

    "28251201": {"code": "28251201", "name": "Discrete Structures", "type": "Theory", "branch": "AIML", "sem": 2},
    "28251202": {"code": "28251202", "name": "Modern Computer Architecture", "type": "Theory", "branch": "AIML", "sem": 2},
    "28251203": {"code": "28251203", "name": "Object Oriented Programming", "type": "Theory", "branch": "AIML", "sem": 2},
    "28251204": {"code": "28251204", "name": "Data Structures", "type": "Theory", "branch": "AIML", "sem": 2},
    "28251205": {"code": "28251205", "name": "Basic Electrical & Electronics Engineering", "type": "Theory", "branch": "AIML", "sem": 2},
    "28251206": {"code": "28251206", "name": "Object Oriented Programming Lab", "type": "Lab", "branch": "AIML", "sem": 2},
    "28251207": {"code": "28251207", "name": "Data Structures Lab", "type": "Lab", "branch": "AIML", "sem": 2},
    "28251208": {"code": "28251208", "name": "Basic Electrical & Electronics Engineering Lab", "type": "Lab", "branch": "AIML", "sem": 2},
    "28251209": {"code": "28251209", "name": "Semester Proficiency", "type": "Proficiency", "branch": "AIML", "sem": 2},
    "28251210": {"code": "28251210", "name": "Micro Project-II", "type": "Project", "branch": "AIML", "sem": 2},
    "28251211": {"code": "28251211", "name": "Sustainability & Environmental Science", "type": "Theory", "branch": "AIML", "sem": 2},

    # ---------------- III SEMESTER COURSES (July-Dec 2026) ----------------
    "31252101": {"code": "31252101", "name": "Probability and Statistics", "type": "Theory", "branch": "AI", "sem": 3},
    "31252102": {"code": "31252102", "name": "Design & Analysis of Algorithms", "type": "Theory", "branch": "AI", "sem": 3},
    "31252103": {"code": "31252103", "name": "Database Management System", "type": "Theory", "branch": "AI", "sem": 3},
    "31252104": {"code": "31252104", "name": "Computer Networks", "type": "Theory", "branch": "AI", "sem": 3},
    "31252105": {"code": "31252105", "name": "Operating Systems", "type": "Theory", "branch": "AI", "sem": 3},
    "31252106": {"code": "31252106", "name": "Problem Solving through Python Programming", "type": "Lab", "branch": "AI", "sem": 3},
    "31252107": {"code": "31252107", "name": "Design & Analysis of Algorithms Lab", "type": "Lab", "branch": "AI", "sem": 3},
    "31252108": {"code": "31252108", "name": "Semester Proficiency", "type": "Proficiency", "branch": "AI", "sem": 3},
    "31252109": {"code": "31252109", "name": "Macro Project-I", "type": "Project", "branch": "AI", "sem": 3},
    "31252110": {"code": "31252110", "name": "Self-learning/Presentation", "type": "Practical", "branch": "AI", "sem": 3},
    "31252111": {"code": "31252111", "name": "Cyber Security", "type": "Theory", "branch": "AI", "sem": 3},

    "24252101": {"code": "24252101", "name": "Probability and Statistics", "type": "Theory", "branch": "AIR", "sem": 3},
    "24252102": {"code": "24252102", "name": "Design & Analysis of Algorithms", "type": "Theory", "branch": "AIR", "sem": 3},
    "24252103": {"code": "24252103", "name": "Control System", "type": "Theory", "branch": "AIR", "sem": 3},
    "24252104": {"code": "24252104", "name": "Computer Networks", "type": "Theory", "branch": "AIR", "sem": 3},
    "24252105": {"code": "24252105", "name": "Operating Systems", "type": "Theory", "branch": "AIR", "sem": 3},
    "24252106": {"code": "24252106", "name": "Problem Solving through Python Programming", "type": "Lab", "branch": "AIR", "sem": 3},
    "24252107": {"code": "24252107", "name": "Design & Analysis of Algorithms Lab", "type": "Lab", "branch": "AIR", "sem": 3},
    "24252108": {"code": "24252108", "name": "Semester Proficiency", "type": "Proficiency", "branch": "AIR", "sem": 3},
    "24252109": {"code": "24252109", "name": "Macro Project-I", "type": "Project", "branch": "AIR", "sem": 3},
    "24252110": {"code": "24252110", "name": "Self-learning/Presentation", "type": "Practical", "branch": "AIR", "sem": 3},
    "24252111": {"code": "24252111", "name": "Cyber Security", "type": "Theory", "branch": "AIR", "sem": 3},

    "27252101": {"code": "27252101", "name": "Probability and Statistics", "type": "Theory", "branch": "AI&DS", "sem": 3},
    "27252102": {"code": "27252102", "name": "Design & Analysis of Algorithms", "type": "Theory", "branch": "AI&DS", "sem": 3},
    "27252103": {"code": "27252103", "name": "Database Management System", "type": "Theory", "branch": "AI&DS", "sem": 3},
    "27252104": {"code": "27252104", "name": "Computer Networks", "type": "Theory", "branch": "AI&DS", "sem": 3},
    "27252105": {"code": "27252105", "name": "Operating Systems", "type": "Theory", "branch": "AI&DS", "sem": 3},
    "27252106": {"code": "27252106", "name": "Problem Solving through Python Programming", "type": "Lab", "branch": "AI&DS", "sem": 3},
    "27252107": {"code": "27252107", "name": "Design & Analysis of Algorithms Lab", "type": "Lab", "branch": "AI&DS", "sem": 3},
    "27252108": {"code": "27252108", "name": "Semester Proficiency", "type": "Proficiency", "branch": "AI&DS", "sem": 3},
    "27252109": {"code": "27252109", "name": "Macro Project-I", "type": "Project", "branch": "AI&DS", "sem": 3},
    "27252110": {"code": "27252110", "name": "Self-learning/Presentation", "type": "Practical", "branch": "AI&DS", "sem": 3},
    "27252111": {"code": "27252111", "name": "Cyber Security", "type": "Theory", "branch": "AI&DS", "sem": 3},

    "28252101": {"code": "28252101", "name": "Probability and Statistics", "type": "Theory", "branch": "AIML", "sem": 3},
    "28252102": {"code": "28252102", "name": "Design & Analysis of Algorithms", "type": "Theory", "branch": "AIML", "sem": 3},
    "28252103": {"code": "28252103", "name": "Database Management System", "type": "Theory", "branch": "AIML", "sem": 3},
    "28252104": {"code": "28252104", "name": "Computer Networks", "type": "Theory", "branch": "AIML", "sem": 3},
    "28252105": {"code": "28252105", "name": "Operating Systems", "type": "Theory", "branch": "AIML", "sem": 3},
    "28252106": {"code": "28252106", "name": "Problem Solving through Python Programming", "type": "Lab", "branch": "AIML", "sem": 3},
    "28252107": {"code": "28252107", "name": "Design & Analysis of Algorithms Lab", "type": "Lab", "branch": "AIML", "sem": 3},
    "28252108": {"code": "28252108", "name": "Semester Proficiency", "type": "Proficiency", "branch": "AIML", "sem": 3},
    "28252109": {"code": "28252109", "name": "Macro Project-I", "type": "Project", "branch": "AIML", "sem": 3},
    "28252110": {"code": "28252110", "name": "Self-learning/Presentation", "type": "Practical", "branch": "AIML", "sem": 3},
    "28252111": {"code": "28252111", "name": "Cyber Security", "type": "Theory", "branch": "AIML", "sem": 3},

    # ---------------- IV SEMESTER COURSES (Jan-June 2026) ----------------
    "31242201": {"code": "31242201", "name": "Database Management System", "type": "Theory", "branch": "AI", "sem": 4},
    "31242202": {"code": "31242202", "name": "Theory of Computation", "type": "Theory", "branch": "AI", "sem": 4},
    "31242203": {"code": "31242203", "name": "Software Engineering", "type": "Theory", "branch": "AI", "sem": 4},
    "31242204": {"code": "31242204", "name": "Network and Web Security", "type": "Theory", "branch": "AI", "sem": 4},
    "31242205": {"code": "31242205", "name": "Calculus and optimization Techniques", "type": "Theory", "branch": "AI", "sem": 4},
    "31242206": {"code": "31242206", "name": "Database Management System Lab", "type": "Lab", "branch": "AI", "sem": 4},
    "31242207": {"code": "31242207", "name": "Java Programming Lab", "type": "Lab", "branch": "AI", "sem": 4},
    "31242208": {"code": "31242208", "name": "Competitive Programming Lab", "type": "Lab", "branch": "AI", "sem": 4},
    "31242209": {"code": "31242209", "name": "Semester Proficiency", "type": "Proficiency", "branch": "AI", "sem": 4},
    "31242210": {"code": "31242210", "name": "Macro Project-II", "type": "Project", "branch": "AI", "sem": 4},
    "31242211": {"code": "31242211", "name": "Project Management, Economics & Financing", "type": "Theory", "branch": "AI", "sem": 4},

    "24242201": {"code": "24242201", "name": "Robot Kinematics", "type": "Theory", "branch": "AIR", "sem": 4},
    "24242202": {"code": "24242202", "name": "Network and Web Security", "type": "Theory", "branch": "AIR", "sem": 4},
    "24242203": {"code": "24242203", "name": "Database Management System", "type": "Theory", "branch": "AIR", "sem": 4},
    "24242204": {"code": "24242204", "name": "Software Engineering", "type": "Theory", "branch": "AIR", "sem": 4},
    "24242205": {"code": "24242205", "name": "Calculus and optimization Techniques", "type": "Theory", "branch": "AIR", "sem": 4},
    "24242206": {"code": "24242206", "name": "Robot Kinematics Lab", "type": "Lab", "branch": "AIR", "sem": 4},
    "24242207": {"code": "24242207", "name": "Database Management System Lab", "type": "Lab", "branch": "AIR", "sem": 4},
    "24242208": {"code": "24242208", "name": "Competitive Programming Lab", "type": "Lab", "branch": "AIR", "sem": 4},
    "24242209": {"code": "24242209", "name": "Semester Proficiency", "type": "Proficiency", "branch": "AIR", "sem": 4},
    "24242210": {"code": "24242210", "name": "Macro Project-II", "type": "Project", "branch": "AIR", "sem": 4},
    "24242211": {"code": "24242211", "name": "Project Management, Economics & Financing", "type": "Theory", "branch": "AIR", "sem": 4},

    "27242201": {"code": "27242201", "name": "Data Science", "type": "Theory", "branch": "AI&DS", "sem": 4},
    "27242202": {"code": "27242202", "name": "Theory of Computation", "type": "Theory", "branch": "AI&DS", "sem": 4},
    "27242203": {"code": "27242203", "name": "Software Engineering", "type": "Theory", "branch": "AI&DS", "sem": 4},
    "27242204": {"code": "27242204", "name": "Network and Web Security", "type": "Theory", "branch": "AI&DS", "sem": 4},
    "27242205": {"code": "27242205", "name": "Calculus and optimization Techniques", "type": "Theory", "branch": "AI&DS", "sem": 4},
    "27242206": {"code": "27242206", "name": "Data Science Lab", "type": "Lab", "branch": "AI&DS", "sem": 4},
    "27242207": {"code": "27242207", "name": "Java Programming Lab", "type": "Lab", "branch": "AI&DS", "sem": 4},
    "27242208": {"code": "27242208", "name": "Competitive Programming Lab", "type": "Lab", "branch": "AI&DS", "sem": 4},
    "27242209": {"code": "27242209", "name": "Semester Proficiency", "type": "Proficiency", "branch": "AI&DS", "sem": 4},
    "27242210": {"code": "27242210", "name": "Macro Project-II", "type": "Project", "branch": "AI&DS", "sem": 4},
    "27242211": {"code": "27242211", "name": "Project Management, Economics & Financing", "type": "Theory", "branch": "AI&DS", "sem": 4},

    "28242201": {"code": "28242201", "name": "Machine Learning", "type": "Theory", "branch": "AIML", "sem": 4},
    "28242202": {"code": "28242202", "name": "Theory of Computation", "type": "Theory", "branch": "AIML", "sem": 4},
    "28242203": {"code": "28242203", "name": "Software Engineering", "type": "Theory", "branch": "AIML", "sem": 4},
    "28242204": {"code": "28242204", "name": "Network and Web Security", "type": "Theory", "branch": "AIML", "sem": 4},
    "28242205": {"code": "28242205", "name": "Calculus and optimization Techniques", "type": "Theory", "branch": "AIML", "sem": 4},
    "28242206": {"code": "28242206", "name": "Machine Learning Lab", "type": "Lab", "branch": "AIML", "sem": 4},
    "28242207": {"code": "28242207", "name": "Java Programming Lab", "type": "Lab", "branch": "AIML", "sem": 4},
    "28242208": {"code": "28242208", "name": "Competitive Programming Lab", "type": "Lab", "branch": "AIML", "sem": 4},
    "28242209": {"code": "28242209", "name": "Semester Proficiency", "type": "Proficiency", "branch": "AIML", "sem": 4},
    "28242210": {"code": "28242210", "name": "Macro Project-II", "type": "Project", "branch": "AIML", "sem": 4},
    "28242211": {"code": "28242211", "name": "Project Management, Economics & Financing", "type": "Theory", "branch": "AIML", "sem": 4},

    # ---------------- V SEMESTER COURSES (July-Dec 2026) ----------------
    "31243101": {"code": "31243101", "name": "Machine Learning", "type": "Theory", "branch": "AI", "sem": 5},
    "31243102": {"code": "31243102", "name": "Cloud Computing & Virtualization", "type": "Theory", "branch": "AI", "sem": 5},
    "31243103": {"code": "31243103", "name": "Evolutionary Algorithms and Optimization", "type": "Theory", "branch": "AI", "sem": 5},
    "31243104": {"code": "31243104", "name": "Statistical Computing", "type": "Theory", "branch": "AI", "sem": 5},
    "31243105": {"code": "31243105", "name": "Machine Learning Lab", "type": "Lab", "branch": "AI", "sem": 5},
    "31243106": {"code": "31243106", "name": "Cloud Computing & Virtualization Lab", "type": "Lab", "branch": "AI", "sem": 5},
    "31243107": {"code": "31243107", "name": "Semester Proficiency", "type": "Proficiency", "branch": "AI", "sem": 5},
    "31243108": {"code": "31243108", "name": "Statistical Computing Lab", "type": "Lab", "branch": "AI", "sem": 5},
    "31243109": {"code": "31243109", "name": "Cornerstone Project", "type": "Project", "branch": "AI", "sem": 5},
    "31243110": {"code": "31243110", "name": "Supply Chain Management", "type": "Theory", "branch": "AI", "sem": 5},

    "24243101": {"code": "24243101", "name": "Theory of Computation", "type": "Theory", "branch": "AIR", "sem": 5},
    "24243102": {"code": "24243102", "name": "Internet of Things", "type": "Theory", "branch": "AIR", "sem": 5},
    "24243103": {"code": "24243103", "name": "Robot Operating System", "type": "Theory", "branch": "AIR", "sem": 5},
    "24243104": {"code": "24243104", "name": "Data Science", "type": "Theory", "branch": "AIR", "sem": 5},
    "24243105": {"code": "24243105", "name": "Robot Operating System Lab", "type": "Lab", "branch": "AIR", "sem": 5},
    "24243106": {"code": "24243106", "name": "Internet of Things Lab", "type": "Lab", "branch": "AIR", "sem": 5},
    "24243107": {"code": "24243107", "name": "Semester Proficiency", "type": "Proficiency", "branch": "AIR", "sem": 5},
    "24243108": {"code": "24243108", "name": "Data Science Lab", "type": "Lab", "branch": "AIR", "sem": 5},
    "24243109": {"code": "24243109", "name": "Cornerstone Project", "type": "Project", "branch": "AIR", "sem": 5},
    "24243110": {"code": "24243110", "name": "Supply Chain Management", "type": "Theory", "branch": "AIR", "sem": 5},

    "27243101": {"code": "27243101", "name": "Data Mining and Warehousing", "type": "Theory", "branch": "AI&DS", "sem": 5},
    "27243102": {"code": "27243102", "name": "Cloud Computing & Virtualization", "type": "Theory", "branch": "AI&DS", "sem": 5},
    "27243103": {"code": "27243103", "name": "Evolutionary Algorithms and Optimization", "type": "Theory", "branch": "AI&DS", "sem": 5},
    "27243104": {"code": "27243104", "name": "Machine Learning", "type": "Theory", "branch": "AI&DS", "sem": 5},
    "27243105": {"code": "27243105", "name": "Data Mining and Warehousing Lab", "type": "Lab", "branch": "AI&DS", "sem": 5},
    "27243106": {"code": "27243106", "name": "Cloud Computing & Virtualization Lab", "type": "Lab", "branch": "AI&DS", "sem": 5},
    "27243107": {"code": "27243107", "name": "Semester Proficiency", "type": "Proficiency", "branch": "AI&DS", "sem": 5},
    "27243108": {"code": "27243108", "name": "Machine Learning Lab", "type": "Lab", "branch": "AI&DS", "sem": 5},
    "27243109": {"code": "27243109", "name": "Cornerstone Project", "type": "Project", "branch": "AI&DS", "sem": 5},
    "27243110": {"code": "27243110", "name": "Supply Chain Management", "type": "Theory", "branch": "AI&DS", "sem": 5},

    "28243101": {"code": "28243101", "name": "Deep Learning", "type": "Theory", "branch": "AIML", "sem": 5},
    "28243102": {"code": "28243102", "name": "Cloud Computing & Big Data", "type": "Theory", "branch": "AIML", "sem": 5},
    "28243103": {"code": "28243103", "name": "Evolutionary Algorithms and Optimization", "type": "Theory", "branch": "AIML", "sem": 5},
    "28243104": {"code": "28243104", "name": "Image Processing", "type": "Theory", "branch": "AIML", "sem": 5},
    "28243105": {"code": "28243105", "name": "Deep Learning Lab", "type": "Lab", "branch": "AIML", "sem": 5},
    "28243106": {"code": "28243106", "name": "Cloud Computing & Big Data Lab", "type": "Lab", "branch": "AIML", "sem": 5},
    "28243107": {"code": "28243107", "name": "Semester Proficiency", "type": "Proficiency", "branch": "AIML", "sem": 5},
    "28243108": {"code": "28243108", "name": "Image Processing Lab", "type": "Lab", "branch": "AIML", "sem": 5},
    "28243109": {"code": "28243109", "name": "Cornerstone Project", "type": "Project", "branch": "AIML", "sem": 5},
    "28243110": {"code": "28243110", "name": "Supply Chain Management", "type": "Theory", "branch": "AIML", "sem": 5},

    # ---------------- VI SEMESTER COURSES (Jan-June 2026) ----------------
    "3240621": {"code": "3240621", "name": "AI for Robotics", "type": "Theory", "branch": "AIR", "sem": 6},
    "3240622": {"code": "3240622", "name": "Image Processing", "type": "Theory", "branch": "AIR", "sem": 6},
    "3240623": {"code": "3240623", "name": "Artificial Intelligence & Machine Learning", "type": "Theory", "branch": "AIR", "sem": 6},
    "3240624": {"code": "3240624", "name": "Minor Project-II", "type": "Project", "branch": "AIR", "sem": 6},

    "3270621": {"code": "3270621", "name": "Natural Language Processing", "type": "Theory", "branch": "AI&DS", "sem": 6},
    "3270622": {"code": "3270622", "name": "Image Processing", "type": "Theory", "branch": "AI&DS", "sem": 6},
    "3270623": {"code": "3270623", "name": "Deep Learning", "type": "Theory", "branch": "AI&DS", "sem": 6},
    "3270624": {"code": "3270624", "name": "Minor Project-II", "type": "Project", "branch": "AI&DS", "sem": 6},

    "3280621": {"code": "3280621", "name": "Natural Language Processing", "type": "Theory", "branch": "AIML", "sem": 6},
    "3280622": {"code": "3280622", "name": "Image Processing", "type": "Theory", "branch": "AIML", "sem": 6},
    "3280623": {"code": "3280623", "name": "Deep Learning", "type": "Theory", "branch": "AIML", "sem": 6},
    "3280624": {"code": "3280624", "name": "Minor Project-II", "type": "Project", "branch": "AIML", "sem": 6},

    "1000007": {"code": "1000007", "name": "Intellectual Property Rights (IPR)", "type": "Theory", "branch": "ALL", "sem": 6},

    # ---------------- VII SEMESTER COURSES (July-Dec 2026) ----------------
    "3240721": {"code": "3240721", "name": "Augmented & Virtual Reality Lab", "type": "Lab", "branch": "AIR", "sem": 7},
    "3240722": {"code": "3240722", "name": "Creative Problem Solving", "type": "Practical", "branch": "AIR", "sem": 7},
    "3240723": {"code": "3240723", "name": "Professional Skills & Competencies", "type": "Practical", "branch": "AIR", "sem": 7},

    "3270721": {"code": "3270721", "name": "Augmented & Virtual Reality Lab", "type": "Lab", "branch": "AI&DS", "sem": 7},
    "3270722": {"code": "3270722", "name": "Creative Problem Solving", "type": "Practical", "branch": "AI&DS", "sem": 7},
    "3270723": {"code": "3270723", "name": "Professional Skills & Competencies", "type": "Practical", "branch": "AI&DS", "sem": 7},

    "3280721": {"code": "3280721", "name": "Augmented & Virtual Reality Lab", "type": "Lab", "branch": "AIML", "sem": 7},
    "3280722": {"code": "3280722", "name": "Creative Problem Solving", "type": "Practical", "branch": "AIML", "sem": 7},
    "3280723": {"code": "3280723", "name": "Professional Skills & Competencies", "type": "Practical", "branch": "AIML", "sem": 7},

    "1000008": {"code": "1000008", "name": "Universal Human Values & Professional Ethics (UHVPE)", "type": "Theory", "branch": "ALL", "sem": 7},
    "OC-1": {"code": "OC-1", "name": "Data Mining & Warehousing / Information Security (OC-1)", "type": "Theory", "branch": "ALL", "sem": 6},
    "OC-2": {"code": "OC-2", "name": "Open Category-2 (OC-2)", "type": "Theory", "branch": "ALL", "sem": 7},
    "NEC": {"code": "NEC", "name": "Non-Exam Credit (NEC Activity / Club / Sports)", "type": "Activity", "branch": "ALL", "sem": 0},
    "PSC": {"code": "PSC", "name": "Professional Skills & Competencies", "type": "Practical", "branch": "ALL", "sem": 7},
}

# Common course acronyms / colloquial aliases for natural language queries
COURSE_ALIASES = {
    "dbms": ["Database Management System", "Database Management System Lab"],
    "database": ["Database Management System"],
    "oop": ["Object Oriented Programming", "Object Oriented Programming Lab"],
    "oops": ["Object Oriented Programming", "Object Oriented Programming Lab"],
    "os": ["Operating Systems"],
    "operating system": ["Operating Systems"],
    "operating systems": ["Operating Systems"],
    "ds": ["Data Structures", "Data Structures Lab"],
    "data structures": ["Data Structures", "Data Structures Lab"],
    "daa": ["Design & Analysis of Algorithms", "Design & Analysis of Algorithms Lab"],
    "algorithms": ["Design & Analysis of Algorithms", "Design & Analysis of Algorithms Lab"],
    "algo": ["Design & Analysis of Algorithms"],
    "discrete structures": ["Discrete Structures"],
    "discrete": ["Discrete Structures"],
    "cn": ["Computer Networks"],
    "networks": ["Computer Networks"],
    "computer networks": ["Computer Networks"],
    "ml": ["Machine Learning", "Machine Learning Lab"],
    "machine learning": ["Machine Learning", "Machine Learning Lab"],
    "dl": ["Deep Learning", "Deep Learning Lab"],
    "deep learning": ["Deep Learning", "Deep Learning Lab"],
    "nlp": ["Natural Language Processing"],
    "toc": ["Theory of Computation"],
    "theory of computation": ["Theory of Computation"],
    "se": ["Software Engineering"],
    "software engineering": ["Software Engineering"],
    "ipr": ["Intellectual Property Rights (IPR)"],
    "ar/vr": ["Augmented & Virtual Reality Lab"],
    "ar vr": ["Augmented & Virtual Reality Lab"],
    "iot": ["Internet of Things", "Internet of Things Lab"],
    "ros": ["Robot Operating System", "Robot Operating System Lab"],
    "robotics": ["Robot Kinematics", "AI for Robotics", "Robot Operating System"],
    "data science": ["Data Science", "Data Science Lab"],
    "cloud": ["Cloud Computing & Virtualization", "Cloud Computing & Big Data"],
    "cloud computing": ["Cloud Computing & Virtualization", "Cloud Computing & Big Data"],
    "cyber security": ["Cyber Security"],
    "cybersecurity": ["Cyber Security"],
    "python": ["Problem Solving through Python Programming"],
    "java": ["Java Programming Lab"],
    "beee": ["Basic Electrical & Electronics Engineering", "Basic Electrical & Electronics Engineering Lab"],
    "electrical": ["Basic Electrical & Electronics Engineering"],
    "psc": ["Professional Skills & Competencies"],
    "uhvpe": ["Universal Human Values & Professional Ethics (UHVPE)"],
    "values": ["Universal Human Values & Professional Ethics (UHVPE)"],
    "ethics": ["Universal Human Values & Professional Ethics (UHVPE)"],
    "cps": ["Creative Problem Solving"],
    "creative problem solving": ["Creative Problem Solving"],
    "macro project": ["Macro Project-I", "Macro Project-II"],
    "micro project": ["Micro Project-II"],
    "cornerstone": ["Cornerstone Project"],
}


def get_course_by_code(code: str) -> Optional[Dict[str, Any]]:
    """Retrieve course information by exact code."""
    c = COURSES.get(code.strip())
    if c:
        return c
    # Try normalized code
    clean = code.strip().upper()
    return COURSES.get(clean)


def resolve_course(query: str) -> List[Dict[str, Any]]:
    """
    Resolves course by code, name, or acronym/alias.
    Returns list of matching course dictionaries.
    """
    q = query.strip().lower()
    
    # 1. Exact course code match
    by_code = get_course_by_code(query)
    if by_code:
        return [by_code]

    # 2. Check alias dictionary
    for alias_key, target_names in COURSE_ALIASES.items():
        if alias_key == q or (len(alias_key) >= 3 and alias_key in q):
            results = []
            for t_name in target_names:
                for code, c in COURSES.items():
                    if c["name"].lower() == t_name.lower():
                        results.append(c)
            if results:
                return results

    # 3. Search by name substring
    matches = []
    for code, c in COURSES.items():
        if q in c["name"].lower():
            matches.append(c)
            
    return matches
