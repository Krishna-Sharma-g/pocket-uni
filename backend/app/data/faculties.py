"""
Faculty registry for the Centre for Artificial Intelligence (Academic Year 2026).
Authoritatively maps faculty abbreviation codes, designations, and full names
as extracted from the official MITS Master Timetables.
"""

from typing import Dict, Any, Optional, List

FACULTIES: Dict[str, Dict[str, Any]] = {
    "RRS": {
        "code": "RRS",
        "name": "Dr. Rajni Ranjan Singh",
        "title": "Dr.",
        "designation": "Associate Professor & Head / Dean",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["rrs", "rajni ranjan singh", "rajni ranjan", "dr rajni ranjan singh", "rajni sir", "dr rajni"]
    },
    "AS": {
        "code": "AS",
        "name": "Dr. Anu Sayal",
        "title": "Dr.",
        "designation": "Associate Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["as", "anu sayal", "dr anu sayal", "anu mam"]
    },
    "MSA": {
        "code": "MSA",
        "name": "Dr. Mir Shahnawaz Ahmad",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["msa", "mir shahnawaz ahmad", "shahnawaz ahmad", "shahnawaz sir", "dr mir shahnawaz ahmad"]
    },
    "SS": {
        "code": "SS",
        "name": "Dr. Shipra Shukla",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["ss", "shipra shukla", "dr shipra shukla", "shipra mam"]
    },
    "SM": {
        "code": "SM",
        "name": "Dr. Shubha Mishra",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["sm", "shubha mishra", "dr shubha mishra", "shubha mam", "sm mam"]
    },
    "RKS": {
        "code": "RKS",
        "name": "Dr. Rahul Kumar Sharma",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["rks", "rahul kumar sharma", "rahul sharma", "dr rahul kumar sharma", "dr rahul sharma", "rks sir"]
    },
    "MC": {
        "code": "MC",
        "name": "Dr. Mausam Chouksey",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["mc", "mausam chouksey", "dr mausam chouksey", "mc sir", "mausam sir", "dr mausam"]
    },
    "TS": {
        "code": "TS",
        "name": "Dr. Tej Singh",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["ts", "tej singh", "dr tej singh", "ts sir", "tej sir"]
    },
    "SKS": {
        "code": "SKS",
        "name": "Dr. Sunil Kumar Shukla",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["sks", "sunil kumar shukla", "sunil shukla", "dr sunil kumar shukla", "sks sir", "dr sunil shukla"]
    },
    "NA": {
        "code": "NA",
        "name": "Dr. Neelam Arya",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["na", "neelam arya", "dr neelam arya", "neelam mam", "dr neelam"]
    },
    "NS": {
        "code": "NS",
        "name": "Dr. Neelam Sharma",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["ns", "neelam sharma", "dr neelam sharma", "neelam sharma mam"]
    },
    "NM": {
        "code": "NM",
        "name": "Dr. Neeraj Mishra",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["nm", "neeraj mishra", "dr neeraj mishra", "nm sir", "neeraj sir"]
    },
    "AST": {
        "code": "AST",
        "name": "Dr. Anurag Singh Tomar",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["ast", "anurag singh tomar", "anurag tomar", "dr anurag singh tomar", "dr anurag tomar", "ast sir"]
    },
    "PD": {
        "code": "PD",
        "name": "Dr. Pawan Dubey",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["pd", "pawan dubey", "dr pawan dubey", "pd sir", "pawan sir"]
    },
    "VT": {
        "code": "VT",
        "name": "Dr. Vibha Tiwari",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["vt", "vibha tiwari", "dr vibha tiwari", "vt mam", "vibha mam"]
    },
    "HSP": {
        "code": "HSP",
        "name": "Dr. Hardev Singh Pal",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["hsp", "hardev singh pal", "hardev pal", "dr hardev singh pal", "hsp sir", "hardev sir"]
    },
    "SD": {
        "code": "SD",
        "name": "Dr. Sumit Dhariwal",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["sd", "sumit dhariwal", "dr sumit dhariwal", "sd sir", "sumit sir"]
    },
    "SO": {
        "code": "SO",
        "name": "Dr. Satyam Omar",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["so", "satyam omar", "dr satyam omar", "so sir", "satyam sir"]
    },
    "NJ": {
        "code": "NJ",
        "name": "Dr. Nandkishor Joshi",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["nj", "nandkishor joshi", "dr nandkishor joshi", "nj sir", "nandkishor sir"]
    },
    "BSR": {
        "code": "BSR",
        "name": "Dr. Bhagat S. Raghuwanshi",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["bsr", "bhagat s. raghuwanshi", "bhagat singh raghuwanshi", "bhagat raghuwanshi", "dr bhagat s raghuwanshi", "bsr sir"]
    },
    "AK": {
        "code": "AK",
        "name": "Dr. Arun Kumar",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["ak", "arun kumar", "dr arun kumar", "ak sir", "arun sir"]
    },
    "AB": {
        "code": "AB",
        "name": "Dr. Abhishek Bhatt",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["ab", "abhishek bhatt", "dr abhishek bhatt", "ab sir", "abhishek sir"]
    },
    "PM": {
        "code": "PM",
        "name": "Dr. Prerna Mishra",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["pm", "prerna mishra", "dr prerna mishra", "pm mam", "prerna mam"]
    },
    "MG": {
        "code": "MG",
        "name": "Dr. Muktesh Gupta",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["mg", "muktesh gupta", "dr muktesh gupta", "mg sir", "muktesh sir"]
    },
    "AA": {
        "code": "AA",
        "name": "Ms. Archana Acharya",
        "title": "Ms.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["aa", "archana acharya", "ms archana acharya", "aa mam", "archana mam"]
    },
    "RS": {
        "code": "RS",
        "name": "Mr. Ramnaresh Sharma",
        "title": "Mr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["rs", "ramnaresh sharma", "mr ramnaresh sharma", "rs sir", "ramnaresh sir"]
    },
    "PT": {
        "code": "PT",
        "name": "Ms. Pooja Tripathi",
        "title": "Ms.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["pt", "pooja tripathi", "ms pooja tripathi", "pt mam", "pooja mam"]
    },
    "GH": {
        "code": "GH",
        "name": "Mrs. Geetika Hazra",
        "title": "Mrs.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["gh", "geetika hazra", "mrs geetika hazra", "gh mam", "geetika mam"]
    },
    "JKM": {
        "code": "JKM",
        "name": "Dr. J.K. Muthele",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["jkm", "j.k. muthele", "jk muthele", "dr jk muthele", "muthele"]
    },
    "DKM": {
        "code": "DKM",
        "name": "Dr. Dilip Kumar Mishra",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["dkm", "dilip kumar mishra", "dilip mishra", "dr dilip kumar mishra", "dr dilip mishra"]
    },
    "RES": {
        "code": "RES",
        "name": "Ms. Reetu Shrivastava",
        "title": "Ms.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["res", "reetu shrivastava", "ms reetu shrivastava", "reetu mam"]
    },
    "VSS": {
        "code": "VSS",
        "name": "Dr. Vijay Shankar Sharma",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["vss", "vijay shankar sharma", "dr vijay shankar sharma", "vss sir"]
    },
    "RDP": {
        "code": "RDP",
        "name": "Dr. Rishabh Deo Pandey",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["rdp", "rishabh deo pandey", "dr rishabh deo pandey", "rdp sir", "rishabh sir"]
    },
    "NH": {
        "code": "NH",
        "name": "Dr. Nidhi Humnekar",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["nh", "nidhi humnekar", "dr nidhi humnekar", "nidhi mam"]
    },
    "PSK": {
        "code": "PSK",
        "name": "Dr. Pritha Singh Kushwah",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["psk", "pritha singh kushwah", "dr pritha singh kushwah", "pritha mam"]
    },
    "MS": {
        "code": "MS",
        "name": "Dr. Mehuli Santra",
        "title": "Dr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["ms", "mehuli santra", "dr mehuli santra", "mehuli mam"]
    },
    "RST": {
        "code": "RST",
        "name": "Mr. Rahul Senthiya",
        "title": "Mr.",
        "designation": "Assistant Professor",
        "department": "Centre for Artificial Intelligence",
        "aliases": ["rst", "rahul senthiya", "mr rahul senthiya", "rst sir"]
    },
    "KT": {
        "code": "KT",
        "name": "Faculty KT",
        "title": "Prof.",
        "designation": "Faculty",
        "department": "Mathematics / Centre for Artificial Intelligence",
        "aliases": ["kt", "prof kt", "faculty kt"]
    }
}


def get_faculty_by_code(code: str) -> Optional[Dict[str, Any]]:
    """Lookup faculty by exact abbreviation code (e.g., 'RKS', 'MC')."""
    return FACULTIES.get(code.strip().upper())


def resolve_faculty(query: str) -> Optional[Dict[str, Any]]:
    """
    Resolves faculty by code, full name, or alias.
    Handles 'RKS', 'Dr. Rahul Kumar Sharma', 'MC sir', 'Mausam Chouksey', etc.
    """
    q = query.strip().lower()
    q_clean = q.replace(".", "").replace("dr ", "").replace("mr ", "").replace("ms ", "").replace("mrs ", "").replace("prof ", "").strip()
    
    # 1. Exact code match
    code_match = get_faculty_by_code(query)
    if code_match:
        return code_match
        
    # 2. Check uppercase code
    for code, fac in FACULTIES.items():
        if code.lower() == q or code.lower() == q_clean:
            return fac

    # 3. Check alias matches
    for code, fac in FACULTIES.items():
        for alias in fac["aliases"]:
            if alias == q or alias == q_clean:
                return fac

    # 4. Check substring matches
    for code, fac in FACULTIES.items():
        if q_clean and q_clean in fac["name"].lower():
            return fac
        for alias in fac["aliases"]:
            if len(q_clean) >= 3 and q_clean in alias:
                return fac

    return None


def resolve_multiple_faculties(faculty_str: str) -> List[Dict[str, Any]]:
    """
    Splits multi-faculty strings like 'SM+PT+SKS', 'NM+PD', 'AK+MSA+AB', 'RRS+GH+RS'
    and resolves each faculty code.
    """
    clean_str = faculty_str.strip()
    # Remove parentheses
    if clean_str.startswith("(") and clean_str.endswith(")"):
        clean_str = clean_str[1:-1].strip()
    
    parts = [p.strip() for p in clean_str.split("+") if p.strip()]
    results = []
    for part in parts:
        fac = resolve_faculty(part)
        if fac:
            results.append(fac)
        else:
            results.append({
                "code": part,
                "name": f"Faculty {part}",
                "title": "",
                "designation": "Faculty",
                "department": "Centre for Artificial Intelligence",
                "aliases": [part.lower()]
            })
    return results
