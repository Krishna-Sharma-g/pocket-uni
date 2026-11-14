import { StudentProfile, User } from '../types';

export interface StudentWithUser {
  user: User;
  profile: StudentProfile;
}

// 79 Verified Institutional Student Profiles from MITS Gwalior (B.Tech AIR 3rd Sem Roster)
export const INITIAL_STUDENTS: StudentWithUser[] = [
  {
    "user": {
      "id": "BTIR25O1001",
      "googleSub": "google-sub-btir25o1001",
      "email": "25ir1aa1@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Aadya Goyal",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1001",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1001",
      "enrolmentNumber": "BTIR25O1001",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Female"
    },
    "profile": {
      "studentId": "BTIR25O1001",
      "headline": "Backend Engineer | Python, FastAPI, Docker, PostgreSQL | B.Tech AIR",
      "primaryDomain": "Backend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Specializing in high-performance asynchronous REST APIs, PostgreSQL schema design, and microservices containerization with Docker.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Backend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "aadya-goyal_mits",
        "codeforces": "aadya-goyal_code",
        "github": "aadya-goyal"
      },
      "githubUrl": "https://github.com/aadya-goyal",
      "linkedinUrl": "https://www.linkedin.com/in/aadya-goyal-mits",
      "portfolioUrl": "https://aadya-goyal.dev",
      "resumeFileName": "aadya_goyal_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 15,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1001-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1001-1",
          "name": "FastAPI",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1001-2",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1001-3",
          "name": "Docker",
          "proficiency": "Intermediate",
          "category": "DevOps"
        },
        {
          "id": "sk-BTIR25O1001-4",
          "name": "REST APIs",
          "proficiency": "Advanced",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1001-5",
          "name": "Redis",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "REST APIs",
        "Redis",
        "Git"
      ],
      "interests": [
        "Backend Architecture",
        "Distributed Systems",
        "Cloud Native",
        "Hackathons",
        "Microservices"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Backend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1001-proj-1",
          "title": "MITS Campus Event Notification Service",
          "description": "High-throughput async event streaming engine using FastAPI, Redis pub/sub, and PostgreSQL.",
          "repoUrl": "https://github.com/aadya-goyal/mits-event-stream",
          "liveUrl": "https://events-mits.onrender.com",
          "techNotes": [
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "Docker"
          ]
        },
        {
          "id": "BTIR25O1001-proj-2",
          "title": "Automated Syllabus & Document Retrieval API",
          "description": "Vector-indexed document search microservice for university exam guidelines.",
          "repoUrl": "https://github.com/aadya-goyal/syllabus-retriever",
          "techNotes": [
            "Python",
            "SQLAlchemy",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1001-1",
          "title": "Backend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1001-0",
          "name": "Meta Backend Developer Professional Certificate",
          "issuer": "Coursera / Meta",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1001/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 86,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1002",
      "googleSub": "google-sub-btir25o1002",
      "email": "25ir1aa2@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Aanchal Turkar",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1002",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1002",
      "enrolmentNumber": "BTIR25O1002",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Female"
    },
    "profile": {
      "studentId": "BTIR25O1002",
      "headline": "Full Stack Developer | React, TypeScript, FastAPI, Tailwind | B.Tech AIR",
      "primaryDomain": "Web Development",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Building end-to-end responsive web applications with TypeScript, modern React frontend architecture, and robust Python/Node backends.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Web Development and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "aanchal-turkar_mits",
        "codeforces": "aanchal-turkar_code",
        "github": "aanchal-turkar"
      },
      "githubUrl": "https://github.com/aanchal-turkar",
      "linkedinUrl": "https://www.linkedin.com/in/aanchal-turkar-mits",
      "portfolioUrl": "https://aanchal-turkar.dev",
      "resumeFileName": "aanchal_turkar_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 16,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1002-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1002-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1002-2",
          "name": "Python",
          "proficiency": "Intermediate",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1002-3",
          "name": "Node.js",
          "proficiency": "Intermediate",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1002-4",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1002-5",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "FastAPI",
        "Node.js",
        "PostgreSQL",
        "Vite"
      ],
      "interests": [
        "Full Stack Apps",
        "UI/UX Design",
        "Hackathons",
        "Open Source",
        "Progressive Web Apps"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Web Development"
      ],
      "projects": [
        {
          "id": "BTIR25O1002-proj-1",
          "title": "CampusSync \u2014 MITS Collaborative Workspace",
          "description": "Full-stack collaboration hub for semester project teams with real-time markdown docs and task boards.",
          "repoUrl": "https://github.com/aanchal-turkar/campussync-mits",
          "liveUrl": "https://campussync.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "FastAPI"
          ]
        },
        {
          "id": "BTIR25O1002-proj-2",
          "title": "SIH Hackathon Team Matcher",
          "description": "Interactive peer matching tool filtering students by tech stack and hackathon availability.",
          "repoUrl": "https://github.com/aanchal-turkar/sih-team-matcher",
          "techNotes": [
            "React",
            "TypeScript",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1002-1",
          "title": "Full Stack Developer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1002-0",
          "name": "Full Stack Web Development with React",
          "issuer": "Coursera / HKUST",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1002/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 87,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1003",
      "googleSub": "google-sub-btir25o1003",
      "email": "25ir1ab3@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Abhiraj Patel",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1003",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1003",
      "enrolmentNumber": "BTIR25O1003",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1003",
      "headline": "Machine Learning Engineer | PyTorch, Computer Vision, Deep Learning | B.Tech AIR",
      "primaryDomain": "Artificial Intelligence",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Researching convolutional vision models, neural network optimization, and deploying lightweight AI models to edge accelerators.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Artificial Intelligence and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "abhiraj-patel_mits",
        "codeforces": "abhiraj-patel_code",
        "github": "abhiraj-patel"
      },
      "githubUrl": "https://github.com/abhiraj-patel",
      "linkedinUrl": "https://www.linkedin.com/in/abhiraj-patel-mits",
      "portfolioUrl": "https://abhiraj-patel.dev",
      "resumeFileName": "abhiraj_patel_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 17,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1003-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1003-1",
          "name": "PyTorch",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1003-2",
          "name": "Computer Vision",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1003-3",
          "name": "Deep Learning",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1003-4",
          "name": "TensorFlow",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1003-5",
          "name": "OpenCV",
          "proficiency": "Advanced",
          "category": "Computer Vision"
        }
      ],
      "techStack": [
        "Python",
        "PyTorch",
        "TensorFlow",
        "OpenCV",
        "NumPy",
        "Scikit-Learn",
        "CUDA"
      ],
      "interests": [
        "Neural Networks",
        "Computer Vision",
        "Generative AI",
        "Medical Imaging",
        "Edge AI"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Artificial Intelligence"
      ],
      "projects": [
        {
          "id": "BTIR25O1003-proj-1",
          "title": "Autonomous Drone Visual Obstacle Avoidance",
          "description": "Real-time monocular depth estimation and collision avoidance model trained on custom outdoor campus datasets.",
          "repoUrl": "https://github.com/abhiraj-patel/uav-vision-nav",
          "techNotes": [
            "PyTorch",
            "OpenCV",
            "Python",
            "ROS2"
          ]
        },
        {
          "id": "BTIR25O1003-proj-2",
          "title": "MITS Handwritten Answer Sheet OCR & Grading",
          "description": "Transformer-based handwriting transcription pipeline for technical course answer scripts.",
          "repoUrl": "https://github.com/abhiraj-patel/answer-sheet-ocr",
          "techNotes": [
            "PyTorch",
            "Transformers",
            "FastAPI"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1003-1",
          "title": "Machine Learning Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1003-0",
          "name": "Deep Learning Specialization",
          "issuer": "Coursera / DeepLearning.AI",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1003/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 88,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1004",
      "googleSub": "google-sub-btir25o1004",
      "email": "25ir1ad4@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Adarsh Yadav",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1004",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1004",
      "enrolmentNumber": "BTIR25O1004",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1004",
      "headline": "Robotics Engineer | ROS2, Gazebo, C++, SLAM, TurtleBot3 | B.Tech AIR",
      "primaryDomain": "Robotics & Embedded Systems",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Hands-on practical experience in ROS2 navigation stacks (Nav2), 2D/3D LIDAR SLAM, and differential drive kinematics in the CAI Robotics Lab.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Robotics & Embedded Systems and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "adarsh-yadav_mits",
        "codeforces": "adarsh-yadav_code",
        "github": "adarsh-yadav"
      },
      "githubUrl": "https://github.com/adarsh-yadav",
      "linkedinUrl": "https://www.linkedin.com/in/adarsh-yadav-mits",
      "portfolioUrl": "https://adarsh-yadav.dev",
      "resumeFileName": "adarsh_yadav_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 18,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1004-0",
          "name": "ROS2",
          "proficiency": "Advanced",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1004-1",
          "name": "C++",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1004-2",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1004-3",
          "name": "Gazebo",
          "proficiency": "Intermediate",
          "category": "Simulation"
        },
        {
          "id": "sk-BTIR25O1004-4",
          "name": "SLAM",
          "proficiency": "Intermediate",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1004-5",
          "name": "Embedded Systems",
          "proficiency": "Intermediate",
          "category": "Hardware"
        }
      ],
      "techStack": [
        "ROS2 Humble",
        "C++",
        "Python",
        "Gazebo",
        "Nav2",
        "Linux",
        "Micro-ROS"
      ],
      "interests": [
        "Mobile Robotics",
        "Autonomous Navigation",
        "Kinematics",
        "Drone Swarms",
        "LIDAR Perception"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Robotics & Embedded Systems"
      ],
      "projects": [
        {
          "id": "BTIR25O1004-proj-1",
          "title": "Autonomous Campus Guide Rover",
          "description": "TurtleBot3-based navigation rover mapping CAI ground floor with Cartographer SLAM and dynamic obstacle avoidance.",
          "repoUrl": "https://github.com/adarsh-yadav/campus-guide-rover",
          "techNotes": [
            "ROS2",
            "C++",
            "Nav2",
            "Gazebo"
          ]
        },
        {
          "id": "BTIR25O1004-proj-2",
          "title": "4-DOF Robotic Arm Trajectory Planner",
          "description": "Inverse kinematics and trajectory interpolation software with MoveIt2 simulation for pick-and-place tasks.",
          "repoUrl": "https://github.com/adarsh-yadav/arm-trajectory-planner",
          "techNotes": [
            "Python",
            "MoveIt2",
            "ROS2"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1004-1",
          "title": "Robotics & Autonomous Systems Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1004-0",
          "name": "ROS2 Basics & Autonomous Navigation",
          "issuer": "ConstructSim / ROS Industrial",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1004/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 89,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1005",
      "googleSub": "google-sub-btir25o1005",
      "email": "25ir1ad5@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Aditya Bhargava",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1005",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1005",
      "enrolmentNumber": "BTIR25O1005",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1005",
      "headline": "Frontend Engineer | React, Next.js, TypeScript, UI/UX Design | B.Tech AIR",
      "primaryDomain": "Frontend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Crafting sleek dark-mode design systems, responsive web applications, and intuitive interactive user experiences in React and Figma.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Frontend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "aditya-bhargava_mits",
        "codeforces": "aditya-bhargava_code",
        "github": "aditya-bhargava"
      },
      "githubUrl": "https://github.com/aditya-bhargava",
      "linkedinUrl": "https://www.linkedin.com/in/aditya-bhargava-mits",
      "portfolioUrl": "https://aditya-bhargava.dev",
      "resumeFileName": "aditya_bhargava_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 19,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1005-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1005-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1005-2",
          "name": "Next.js",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1005-3",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1005-4",
          "name": "UI/UX Design",
          "proficiency": "Advanced",
          "category": "Design"
        },
        {
          "id": "sk-BTIR25O1005-5",
          "name": "Figma",
          "proficiency": "Advanced",
          "category": "Design"
        }
      ],
      "techStack": [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Figma",
        "Framer Motion",
        "Vite"
      ],
      "interests": [
        "Design Systems",
        "Micro-Interactions",
        "Web Accessibility",
        "Hackathons",
        "Design Engineering"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Frontend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1005-proj-1",
          "title": "MITS Pulse \u2014 Campus Activity Dashboard",
          "description": "Glassmorphic responsive dashboard displaying live campus events, academic timetables, and noticeboard feeds.",
          "repoUrl": "https://github.com/aditya-bhargava/mits-pulse",
          "liveUrl": "https://mitspulse.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
          ]
        },
        {
          "id": "BTIR25O1005-proj-2",
          "title": "AcademIQ Design System",
          "description": "Accessible WCAG 2.1 AA compliant UI component library created in Figma and implemented in React.",
          "repoUrl": "https://github.com/aditya-bhargava/academiq-ui",
          "techNotes": [
            "React",
            "Tailwind",
            "Storybook"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1005-1",
          "title": "Frontend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1005-0",
          "name": "Google UX Design Professional Certificate",
          "issuer": "Coursera / Google",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1005/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 90,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1006",
      "googleSub": "google-sub-btir25o1006",
      "email": "25ir1ak6@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Akshta Gupta",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1006",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1006",
      "enrolmentNumber": "BTIR25O1006",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Female"
    },
    "profile": {
      "studentId": "BTIR25O1006",
      "headline": "Data Scientist | Python, Pandas, SQL, Scikit-Learn, Analytics | B.Tech AIR",
      "primaryDomain": "Data Science",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Analyzing large multivariate institutional datasets, building predictive machine learning models, and turning raw data into actionable dashboards.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Data Science and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "akshta-gupta_mits",
        "codeforces": "akshta-gupta_code",
        "github": "akshta-gupta"
      },
      "githubUrl": "https://github.com/akshta-gupta",
      "linkedinUrl": "https://www.linkedin.com/in/akshta-gupta-mits",
      "portfolioUrl": "https://akshta-gupta.dev",
      "resumeFileName": "akshta_gupta_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 20,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1006-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1006-1",
          "name": "Pandas",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1006-2",
          "name": "NumPy",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1006-3",
          "name": "SQL",
          "proficiency": "Advanced",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1006-4",
          "name": "Scikit-Learn",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1006-5",
          "name": "Data Visualization",
          "proficiency": "Advanced",
          "category": "Analytics"
        }
      ],
      "techStack": [
        "Python",
        "Pandas",
        "NumPy",
        "SQL",
        "Scikit-Learn",
        "Matplotlib",
        "Seaborn",
        "PowerBI"
      ],
      "interests": [
        "Predictive Modeling",
        "Exploratory Data Analysis",
        "Statistical Inference",
        "Financial Analytics"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Data Science"
      ],
      "projects": [
        {
          "id": "BTIR25O1006-proj-1",
          "title": "MITS Student Academic Trend & CGPA Forecaster",
          "description": "Statistical predictive regression model analyzing attendance rates, lab practicals, and mid-sem performance.",
          "repoUrl": "https://github.com/akshta-gupta/student-grade-predictor",
          "techNotes": [
            "Python",
            "Pandas",
            "Scikit-Learn",
            "Streamlit"
          ]
        },
        {
          "id": "BTIR25O1006-proj-2",
          "title": "Campus Electricity & Energy Consumption Analyzer",
          "description": "Time-series forecasting model for academic block power usage using historical smart-meter logs.",
          "repoUrl": "https://github.com/akshta-gupta/energy-analyzer",
          "techNotes": [
            "Python",
            "Prophet",
            "Pandas",
            "Matplotlib"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1006-1",
          "title": "Data Scientist Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1006-0",
          "name": "IBM Data Science Professional Certificate",
          "issuer": "Coursera / IBM",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1006/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 91,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1007",
      "googleSub": "google-sub-btir25o1007",
      "email": "25ir1an7@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Ankit Nagar",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1007",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1007",
      "enrolmentNumber": "BTIR25O1007",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1007",
      "headline": "Backend Engineer | Python, FastAPI, Docker, PostgreSQL | B.Tech AIR",
      "primaryDomain": "Backend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Specializing in high-performance asynchronous REST APIs, PostgreSQL schema design, and microservices containerization with Docker.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Backend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "ankit-nagar_mits",
        "codeforces": "ankit-nagar_code",
        "github": "ankit-nagar"
      },
      "githubUrl": "https://github.com/ankit-nagar",
      "linkedinUrl": "https://www.linkedin.com/in/ankit-nagar-mits",
      "portfolioUrl": "https://ankit-nagar.dev",
      "resumeFileName": "ankit_nagar_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 21,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1007-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1007-1",
          "name": "FastAPI",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1007-2",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1007-3",
          "name": "Docker",
          "proficiency": "Intermediate",
          "category": "DevOps"
        },
        {
          "id": "sk-BTIR25O1007-4",
          "name": "REST APIs",
          "proficiency": "Advanced",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1007-5",
          "name": "Redis",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "REST APIs",
        "Redis",
        "Git"
      ],
      "interests": [
        "Backend Architecture",
        "Distributed Systems",
        "Cloud Native",
        "Hackathons",
        "Microservices"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Backend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1007-proj-1",
          "title": "MITS Campus Event Notification Service",
          "description": "High-throughput async event streaming engine using FastAPI, Redis pub/sub, and PostgreSQL.",
          "repoUrl": "https://github.com/ankit-nagar/mits-event-stream",
          "liveUrl": "https://events-mits.onrender.com",
          "techNotes": [
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "Docker"
          ]
        },
        {
          "id": "BTIR25O1007-proj-2",
          "title": "Automated Syllabus & Document Retrieval API",
          "description": "Vector-indexed document search microservice for university exam guidelines.",
          "repoUrl": "https://github.com/ankit-nagar/syllabus-retriever",
          "techNotes": [
            "Python",
            "SQLAlchemy",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1007-1",
          "title": "Backend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1007-0",
          "name": "Meta Backend Developer Professional Certificate",
          "issuer": "Coursera / Meta",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1007/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 92,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1008",
      "googleSub": "google-sub-btir25o1008",
      "email": "25ir1an8@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Ankur Singh Yadav",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1008",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1008",
      "enrolmentNumber": "BTIR25O1008",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1008",
      "headline": "Full Stack Developer | React, TypeScript, FastAPI, Tailwind | B.Tech AIR",
      "primaryDomain": "Web Development",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Building end-to-end responsive web applications with TypeScript, modern React frontend architecture, and robust Python/Node backends.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Web Development and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "ankur-singh-yadav_mits",
        "codeforces": "ankur-singh-yadav_code",
        "github": "ankur-singh-yadav"
      },
      "githubUrl": "https://github.com/ankur-singh-yadav",
      "linkedinUrl": "https://www.linkedin.com/in/ankur-singh-yadav-mits",
      "portfolioUrl": "https://ankur-singh-yadav.dev",
      "resumeFileName": "ankur_singh_yadav_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 22,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1008-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1008-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1008-2",
          "name": "Python",
          "proficiency": "Intermediate",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1008-3",
          "name": "Node.js",
          "proficiency": "Intermediate",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1008-4",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1008-5",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "FastAPI",
        "Node.js",
        "PostgreSQL",
        "Vite"
      ],
      "interests": [
        "Full Stack Apps",
        "UI/UX Design",
        "Hackathons",
        "Open Source",
        "Progressive Web Apps"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Web Development"
      ],
      "projects": [
        {
          "id": "BTIR25O1008-proj-1",
          "title": "CampusSync \u2014 MITS Collaborative Workspace",
          "description": "Full-stack collaboration hub for semester project teams with real-time markdown docs and task boards.",
          "repoUrl": "https://github.com/ankur-singh-yadav/campussync-mits",
          "liveUrl": "https://campussync.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "FastAPI"
          ]
        },
        {
          "id": "BTIR25O1008-proj-2",
          "title": "SIH Hackathon Team Matcher",
          "description": "Interactive peer matching tool filtering students by tech stack and hackathon availability.",
          "repoUrl": "https://github.com/ankur-singh-yadav/sih-team-matcher",
          "techNotes": [
            "React",
            "TypeScript",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1008-1",
          "title": "Full Stack Developer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1008-0",
          "name": "Full Stack Web Development with React",
          "issuer": "Coursera / HKUST",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1008/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 93,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1009",
      "googleSub": "google-sub-btir25o1009",
      "email": "25ir1an9@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Anuj Patel",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1009",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1009",
      "enrolmentNumber": "BTIR25O1009",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1009",
      "headline": "Machine Learning Engineer | PyTorch, Computer Vision, Deep Learning | B.Tech AIR",
      "primaryDomain": "Artificial Intelligence",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Researching convolutional vision models, neural network optimization, and deploying lightweight AI models to edge accelerators.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Artificial Intelligence and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "anuj-patel_mits",
        "codeforces": "anuj-patel_code",
        "github": "anuj-patel"
      },
      "githubUrl": "https://github.com/anuj-patel",
      "linkedinUrl": "https://www.linkedin.com/in/anuj-patel-mits",
      "portfolioUrl": "https://anuj-patel.dev",
      "resumeFileName": "anuj_patel_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 23,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1009-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1009-1",
          "name": "PyTorch",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1009-2",
          "name": "Computer Vision",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1009-3",
          "name": "Deep Learning",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1009-4",
          "name": "TensorFlow",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1009-5",
          "name": "OpenCV",
          "proficiency": "Advanced",
          "category": "Computer Vision"
        }
      ],
      "techStack": [
        "Python",
        "PyTorch",
        "TensorFlow",
        "OpenCV",
        "NumPy",
        "Scikit-Learn",
        "CUDA"
      ],
      "interests": [
        "Neural Networks",
        "Computer Vision",
        "Generative AI",
        "Medical Imaging",
        "Edge AI"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Artificial Intelligence"
      ],
      "projects": [
        {
          "id": "BTIR25O1009-proj-1",
          "title": "Autonomous Drone Visual Obstacle Avoidance",
          "description": "Real-time monocular depth estimation and collision avoidance model trained on custom outdoor campus datasets.",
          "repoUrl": "https://github.com/anuj-patel/uav-vision-nav",
          "techNotes": [
            "PyTorch",
            "OpenCV",
            "Python",
            "ROS2"
          ]
        },
        {
          "id": "BTIR25O1009-proj-2",
          "title": "MITS Handwritten Answer Sheet OCR & Grading",
          "description": "Transformer-based handwriting transcription pipeline for technical course answer scripts.",
          "repoUrl": "https://github.com/anuj-patel/answer-sheet-ocr",
          "techNotes": [
            "PyTorch",
            "Transformers",
            "FastAPI"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1009-1",
          "title": "Machine Learning Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1009-0",
          "name": "Deep Learning Specialization",
          "issuer": "Coursera / DeepLearning.AI",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1009/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 94,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1010",
      "googleSub": "google-sub-btir25o1010",
      "email": "25ir1an10@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Anushree Khatri",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1010",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1010",
      "enrolmentNumber": "BTIR25O1010",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Female"
    },
    "profile": {
      "studentId": "BTIR25O1010",
      "headline": "Robotics Engineer | ROS2, Gazebo, C++, SLAM, TurtleBot3 | B.Tech AIR",
      "primaryDomain": "Robotics & Embedded Systems",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Hands-on practical experience in ROS2 navigation stacks (Nav2), 2D/3D LIDAR SLAM, and differential drive kinematics in the CAI Robotics Lab.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Robotics & Embedded Systems and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "anushree-khatri_mits",
        "codeforces": "anushree-khatri_code",
        "github": "anushree-khatri"
      },
      "githubUrl": "https://github.com/anushree-khatri",
      "linkedinUrl": "https://www.linkedin.com/in/anushree-khatri-mits",
      "portfolioUrl": "https://anushree-khatri.dev",
      "resumeFileName": "anushree_khatri_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 24,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1010-0",
          "name": "ROS2",
          "proficiency": "Advanced",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1010-1",
          "name": "C++",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1010-2",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1010-3",
          "name": "Gazebo",
          "proficiency": "Intermediate",
          "category": "Simulation"
        },
        {
          "id": "sk-BTIR25O1010-4",
          "name": "SLAM",
          "proficiency": "Intermediate",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1010-5",
          "name": "Embedded Systems",
          "proficiency": "Intermediate",
          "category": "Hardware"
        }
      ],
      "techStack": [
        "ROS2 Humble",
        "C++",
        "Python",
        "Gazebo",
        "Nav2",
        "Linux",
        "Micro-ROS"
      ],
      "interests": [
        "Mobile Robotics",
        "Autonomous Navigation",
        "Kinematics",
        "Drone Swarms",
        "LIDAR Perception"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Robotics & Embedded Systems"
      ],
      "projects": [
        {
          "id": "BTIR25O1010-proj-1",
          "title": "Autonomous Campus Guide Rover",
          "description": "TurtleBot3-based navigation rover mapping CAI ground floor with Cartographer SLAM and dynamic obstacle avoidance.",
          "repoUrl": "https://github.com/anushree-khatri/campus-guide-rover",
          "techNotes": [
            "ROS2",
            "C++",
            "Nav2",
            "Gazebo"
          ]
        },
        {
          "id": "BTIR25O1010-proj-2",
          "title": "4-DOF Robotic Arm Trajectory Planner",
          "description": "Inverse kinematics and trajectory interpolation software with MoveIt2 simulation for pick-and-place tasks.",
          "repoUrl": "https://github.com/anushree-khatri/arm-trajectory-planner",
          "techNotes": [
            "Python",
            "MoveIt2",
            "ROS2"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1010-1",
          "title": "Robotics & Autonomous Systems Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1010-0",
          "name": "ROS2 Basics & Autonomous Navigation",
          "issuer": "ConstructSim / ROS Industrial",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1010/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 95,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1011",
      "googleSub": "google-sub-btir25o1011",
      "email": "25ir1ar11@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Arnav Shakyawar",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1011",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1011",
      "enrolmentNumber": "BTIR25O1011",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1011",
      "headline": "Frontend Engineer | React, Next.js, TypeScript, UI/UX Design | B.Tech AIR",
      "primaryDomain": "Frontend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Crafting sleek dark-mode design systems, responsive web applications, and intuitive interactive user experiences in React and Figma.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Frontend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "arnav-shakyawar_mits",
        "codeforces": "arnav-shakyawar_code",
        "github": "arnav-shakyawar"
      },
      "githubUrl": "https://github.com/arnav-shakyawar",
      "linkedinUrl": "https://www.linkedin.com/in/arnav-shakyawar-mits",
      "portfolioUrl": "https://arnav-shakyawar.dev",
      "resumeFileName": "arnav_shakyawar_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 15,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1011-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1011-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1011-2",
          "name": "Next.js",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1011-3",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1011-4",
          "name": "UI/UX Design",
          "proficiency": "Advanced",
          "category": "Design"
        },
        {
          "id": "sk-BTIR25O1011-5",
          "name": "Figma",
          "proficiency": "Advanced",
          "category": "Design"
        }
      ],
      "techStack": [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Figma",
        "Framer Motion",
        "Vite"
      ],
      "interests": [
        "Design Systems",
        "Micro-Interactions",
        "Web Accessibility",
        "Hackathons",
        "Design Engineering"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Frontend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1011-proj-1",
          "title": "MITS Pulse \u2014 Campus Activity Dashboard",
          "description": "Glassmorphic responsive dashboard displaying live campus events, academic timetables, and noticeboard feeds.",
          "repoUrl": "https://github.com/arnav-shakyawar/mits-pulse",
          "liveUrl": "https://mitspulse.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
          ]
        },
        {
          "id": "BTIR25O1011-proj-2",
          "title": "AcademIQ Design System",
          "description": "Accessible WCAG 2.1 AA compliant UI component library created in Figma and implemented in React.",
          "repoUrl": "https://github.com/arnav-shakyawar/academiq-ui",
          "techNotes": [
            "React",
            "Tailwind",
            "Storybook"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1011-1",
          "title": "Frontend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1011-0",
          "name": "Google UX Design Professional Certificate",
          "issuer": "Coursera / Google",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1011/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 96,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1012",
      "googleSub": "google-sub-btir25o1012",
      "email": "25ir1ar12@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Aryaman Jain",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1012",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1012",
      "enrolmentNumber": "BTIR25O1012",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1012",
      "headline": "Data Scientist | Python, Pandas, SQL, Scikit-Learn, Analytics | B.Tech AIR",
      "primaryDomain": "Data Science",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Analyzing large multivariate institutional datasets, building predictive machine learning models, and turning raw data into actionable dashboards.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Data Science and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "aryaman-jain_mits",
        "codeforces": "aryaman-jain_code",
        "github": "aryaman-jain"
      },
      "githubUrl": "https://github.com/aryaman-jain",
      "linkedinUrl": "https://www.linkedin.com/in/aryaman-jain-mits",
      "portfolioUrl": "https://aryaman-jain.dev",
      "resumeFileName": "aryaman_jain_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 16,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1012-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1012-1",
          "name": "Pandas",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1012-2",
          "name": "NumPy",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1012-3",
          "name": "SQL",
          "proficiency": "Advanced",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1012-4",
          "name": "Scikit-Learn",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1012-5",
          "name": "Data Visualization",
          "proficiency": "Advanced",
          "category": "Analytics"
        }
      ],
      "techStack": [
        "Python",
        "Pandas",
        "NumPy",
        "SQL",
        "Scikit-Learn",
        "Matplotlib",
        "Seaborn",
        "PowerBI"
      ],
      "interests": [
        "Predictive Modeling",
        "Exploratory Data Analysis",
        "Statistical Inference",
        "Financial Analytics"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Data Science"
      ],
      "projects": [
        {
          "id": "BTIR25O1012-proj-1",
          "title": "MITS Student Academic Trend & CGPA Forecaster",
          "description": "Statistical predictive regression model analyzing attendance rates, lab practicals, and mid-sem performance.",
          "repoUrl": "https://github.com/aryaman-jain/student-grade-predictor",
          "techNotes": [
            "Python",
            "Pandas",
            "Scikit-Learn",
            "Streamlit"
          ]
        },
        {
          "id": "BTIR25O1012-proj-2",
          "title": "Campus Electricity & Energy Consumption Analyzer",
          "description": "Time-series forecasting model for academic block power usage using historical smart-meter logs.",
          "repoUrl": "https://github.com/aryaman-jain/energy-analyzer",
          "techNotes": [
            "Python",
            "Prophet",
            "Pandas",
            "Matplotlib"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1012-1",
          "title": "Data Scientist Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1012-0",
          "name": "IBM Data Science Professional Certificate",
          "issuer": "Coursera / IBM",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1012/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 97,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1013",
      "googleSub": "google-sub-btir25o1013",
      "email": "25ir1at13@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Atharva Gupta",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1013",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1013",
      "enrolmentNumber": "BTIR25O1013",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Female"
    },
    "profile": {
      "studentId": "BTIR25O1013",
      "headline": "Backend Engineer | Python, FastAPI, Docker, PostgreSQL | B.Tech AIR",
      "primaryDomain": "Backend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Specializing in high-performance asynchronous REST APIs, PostgreSQL schema design, and microservices containerization with Docker.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Backend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "atharva-gupta_mits",
        "codeforces": "atharva-gupta_code",
        "github": "atharva-gupta"
      },
      "githubUrl": "https://github.com/atharva-gupta",
      "linkedinUrl": "https://www.linkedin.com/in/atharva-gupta-mits",
      "portfolioUrl": "https://atharva-gupta.dev",
      "resumeFileName": "atharva_gupta_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 17,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1013-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1013-1",
          "name": "FastAPI",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1013-2",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1013-3",
          "name": "Docker",
          "proficiency": "Intermediate",
          "category": "DevOps"
        },
        {
          "id": "sk-BTIR25O1013-4",
          "name": "REST APIs",
          "proficiency": "Advanced",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1013-5",
          "name": "Redis",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "REST APIs",
        "Redis",
        "Git"
      ],
      "interests": [
        "Backend Architecture",
        "Distributed Systems",
        "Cloud Native",
        "Hackathons",
        "Microservices"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Backend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1013-proj-1",
          "title": "MITS Campus Event Notification Service",
          "description": "High-throughput async event streaming engine using FastAPI, Redis pub/sub, and PostgreSQL.",
          "repoUrl": "https://github.com/atharva-gupta/mits-event-stream",
          "liveUrl": "https://events-mits.onrender.com",
          "techNotes": [
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "Docker"
          ]
        },
        {
          "id": "BTIR25O1013-proj-2",
          "title": "Automated Syllabus & Document Retrieval API",
          "description": "Vector-indexed document search microservice for university exam guidelines.",
          "repoUrl": "https://github.com/atharva-gupta/syllabus-retriever",
          "techNotes": [
            "Python",
            "SQLAlchemy",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1013-1",
          "title": "Backend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1013-0",
          "name": "Meta Backend Developer Professional Certificate",
          "issuer": "Coursera / Meta",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1013/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 86,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1014",
      "googleSub": "google-sub-btir25o1014",
      "email": "25ir1ay14@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Ayush Jain",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1014",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1014",
      "enrolmentNumber": "BTIR25O1014",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1014",
      "headline": "Full Stack Developer | React, TypeScript, FastAPI, Tailwind | B.Tech AIR",
      "primaryDomain": "Web Development",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Building end-to-end responsive web applications with TypeScript, modern React frontend architecture, and robust Python/Node backends.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Web Development and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "ayush-jain_mits",
        "codeforces": "ayush-jain_code",
        "github": "ayush-jain"
      },
      "githubUrl": "https://github.com/ayush-jain",
      "linkedinUrl": "https://www.linkedin.com/in/ayush-jain-mits",
      "portfolioUrl": "https://ayush-jain.dev",
      "resumeFileName": "ayush_jain_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 18,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1014-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1014-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1014-2",
          "name": "Python",
          "proficiency": "Intermediate",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1014-3",
          "name": "Node.js",
          "proficiency": "Intermediate",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1014-4",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1014-5",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "FastAPI",
        "Node.js",
        "PostgreSQL",
        "Vite"
      ],
      "interests": [
        "Full Stack Apps",
        "UI/UX Design",
        "Hackathons",
        "Open Source",
        "Progressive Web Apps"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Web Development"
      ],
      "projects": [
        {
          "id": "BTIR25O1014-proj-1",
          "title": "CampusSync \u2014 MITS Collaborative Workspace",
          "description": "Full-stack collaboration hub for semester project teams with real-time markdown docs and task boards.",
          "repoUrl": "https://github.com/ayush-jain/campussync-mits",
          "liveUrl": "https://campussync.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "FastAPI"
          ]
        },
        {
          "id": "BTIR25O1014-proj-2",
          "title": "SIH Hackathon Team Matcher",
          "description": "Interactive peer matching tool filtering students by tech stack and hackathon availability.",
          "repoUrl": "https://github.com/ayush-jain/sih-team-matcher",
          "techNotes": [
            "React",
            "TypeScript",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1014-1",
          "title": "Full Stack Developer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1014-0",
          "name": "Full Stack Web Development with React",
          "issuer": "Coursera / HKUST",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1014/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 87,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1015",
      "googleSub": "google-sub-btir25o1015",
      "email": "25ir1ay15@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Ayushi Dubey",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1015",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1015",
      "enrolmentNumber": "BTIR25O1015",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Female"
    },
    "profile": {
      "studentId": "BTIR25O1015",
      "headline": "Machine Learning Engineer | PyTorch, Computer Vision, Deep Learning | B.Tech AIR",
      "primaryDomain": "Artificial Intelligence",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Researching convolutional vision models, neural network optimization, and deploying lightweight AI models to edge accelerators.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Artificial Intelligence and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "ayushi-dubey_mits",
        "codeforces": "ayushi-dubey_code",
        "github": "ayushi-dubey"
      },
      "githubUrl": "https://github.com/ayushi-dubey",
      "linkedinUrl": "https://www.linkedin.com/in/ayushi-dubey-mits",
      "portfolioUrl": "https://ayushi-dubey.dev",
      "resumeFileName": "ayushi_dubey_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 19,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1015-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1015-1",
          "name": "PyTorch",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1015-2",
          "name": "Computer Vision",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1015-3",
          "name": "Deep Learning",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1015-4",
          "name": "TensorFlow",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1015-5",
          "name": "OpenCV",
          "proficiency": "Advanced",
          "category": "Computer Vision"
        }
      ],
      "techStack": [
        "Python",
        "PyTorch",
        "TensorFlow",
        "OpenCV",
        "NumPy",
        "Scikit-Learn",
        "CUDA"
      ],
      "interests": [
        "Neural Networks",
        "Computer Vision",
        "Generative AI",
        "Medical Imaging",
        "Edge AI"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Artificial Intelligence"
      ],
      "projects": [
        {
          "id": "BTIR25O1015-proj-1",
          "title": "Autonomous Drone Visual Obstacle Avoidance",
          "description": "Real-time monocular depth estimation and collision avoidance model trained on custom outdoor campus datasets.",
          "repoUrl": "https://github.com/ayushi-dubey/uav-vision-nav",
          "techNotes": [
            "PyTorch",
            "OpenCV",
            "Python",
            "ROS2"
          ]
        },
        {
          "id": "BTIR25O1015-proj-2",
          "title": "MITS Handwritten Answer Sheet OCR & Grading",
          "description": "Transformer-based handwriting transcription pipeline for technical course answer scripts.",
          "repoUrl": "https://github.com/ayushi-dubey/answer-sheet-ocr",
          "techNotes": [
            "PyTorch",
            "Transformers",
            "FastAPI"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1015-1",
          "title": "Machine Learning Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1015-0",
          "name": "Deep Learning Specialization",
          "issuer": "Coursera / DeepLearning.AI",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1015/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 88,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1016",
      "googleSub": "google-sub-btir25o1016",
      "email": "25ir1ay16@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Ayushi Rai",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1016",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1016",
      "enrolmentNumber": "BTIR25O1016",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Female"
    },
    "profile": {
      "studentId": "BTIR25O1016",
      "headline": "Robotics Engineer | ROS2, Gazebo, C++, SLAM, TurtleBot3 | B.Tech AIR",
      "primaryDomain": "Robotics & Embedded Systems",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Hands-on practical experience in ROS2 navigation stacks (Nav2), 2D/3D LIDAR SLAM, and differential drive kinematics in the CAI Robotics Lab.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Robotics & Embedded Systems and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "ayushi-rai_mits",
        "codeforces": "ayushi-rai_code",
        "github": "ayushi-rai"
      },
      "githubUrl": "https://github.com/ayushi-rai",
      "linkedinUrl": "https://www.linkedin.com/in/ayushi-rai-mits",
      "portfolioUrl": "https://ayushi-rai.dev",
      "resumeFileName": "ayushi_rai_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 20,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1016-0",
          "name": "ROS2",
          "proficiency": "Advanced",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1016-1",
          "name": "C++",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1016-2",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1016-3",
          "name": "Gazebo",
          "proficiency": "Intermediate",
          "category": "Simulation"
        },
        {
          "id": "sk-BTIR25O1016-4",
          "name": "SLAM",
          "proficiency": "Intermediate",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1016-5",
          "name": "Embedded Systems",
          "proficiency": "Intermediate",
          "category": "Hardware"
        }
      ],
      "techStack": [
        "ROS2 Humble",
        "C++",
        "Python",
        "Gazebo",
        "Nav2",
        "Linux",
        "Micro-ROS"
      ],
      "interests": [
        "Mobile Robotics",
        "Autonomous Navigation",
        "Kinematics",
        "Drone Swarms",
        "LIDAR Perception"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Robotics & Embedded Systems"
      ],
      "projects": [
        {
          "id": "BTIR25O1016-proj-1",
          "title": "Autonomous Campus Guide Rover",
          "description": "TurtleBot3-based navigation rover mapping CAI ground floor with Cartographer SLAM and dynamic obstacle avoidance.",
          "repoUrl": "https://github.com/ayushi-rai/campus-guide-rover",
          "techNotes": [
            "ROS2",
            "C++",
            "Nav2",
            "Gazebo"
          ]
        },
        {
          "id": "BTIR25O1016-proj-2",
          "title": "4-DOF Robotic Arm Trajectory Planner",
          "description": "Inverse kinematics and trajectory interpolation software with MoveIt2 simulation for pick-and-place tasks.",
          "repoUrl": "https://github.com/ayushi-rai/arm-trajectory-planner",
          "techNotes": [
            "Python",
            "MoveIt2",
            "ROS2"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1016-1",
          "title": "Robotics & Autonomous Systems Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1016-0",
          "name": "ROS2 Basics & Autonomous Navigation",
          "issuer": "ConstructSim / ROS Industrial",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1016/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 89,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1017",
      "googleSub": "google-sub-btir25o1017",
      "email": "25ir1bh17@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Bhavishya Singh Rajput",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1017",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1017",
      "enrolmentNumber": "BTIR25O1017",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Female"
    },
    "profile": {
      "studentId": "BTIR25O1017",
      "headline": "Frontend Engineer | React, Next.js, TypeScript, UI/UX Design | B.Tech AIR",
      "primaryDomain": "Frontend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Crafting sleek dark-mode design systems, responsive web applications, and intuitive interactive user experiences in React and Figma.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Frontend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "bhavishya-singh-rajput_mits",
        "codeforces": "bhavishya-singh-rajput_code",
        "github": "bhavishya-singh-rajput"
      },
      "githubUrl": "https://github.com/bhavishya-singh-rajput",
      "linkedinUrl": "https://www.linkedin.com/in/bhavishya-singh-rajput-mits",
      "portfolioUrl": "https://bhavishya-singh-rajput.dev",
      "resumeFileName": "bhavishya_singh_rajput_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 21,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1017-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1017-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1017-2",
          "name": "Next.js",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1017-3",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1017-4",
          "name": "UI/UX Design",
          "proficiency": "Advanced",
          "category": "Design"
        },
        {
          "id": "sk-BTIR25O1017-5",
          "name": "Figma",
          "proficiency": "Advanced",
          "category": "Design"
        }
      ],
      "techStack": [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Figma",
        "Framer Motion",
        "Vite"
      ],
      "interests": [
        "Design Systems",
        "Micro-Interactions",
        "Web Accessibility",
        "Hackathons",
        "Design Engineering"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Frontend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1017-proj-1",
          "title": "MITS Pulse \u2014 Campus Activity Dashboard",
          "description": "Glassmorphic responsive dashboard displaying live campus events, academic timetables, and noticeboard feeds.",
          "repoUrl": "https://github.com/bhavishya-singh-rajput/mits-pulse",
          "liveUrl": "https://mitspulse.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
          ]
        },
        {
          "id": "BTIR25O1017-proj-2",
          "title": "AcademIQ Design System",
          "description": "Accessible WCAG 2.1 AA compliant UI component library created in Figma and implemented in React.",
          "repoUrl": "https://github.com/bhavishya-singh-rajput/academiq-ui",
          "techNotes": [
            "React",
            "Tailwind",
            "Storybook"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1017-1",
          "title": "Frontend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1017-0",
          "name": "Google UX Design Professional Certificate",
          "issuer": "Coursera / Google",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1017/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 90,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1018",
      "googleSub": "google-sub-btir25o1018",
      "email": "25ir1de18@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Deeksha Raghuwanshi",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1018",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1018",
      "enrolmentNumber": "BTIR25O1018",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Female"
    },
    "profile": {
      "studentId": "BTIR25O1018",
      "headline": "Data Scientist | Python, Pandas, SQL, Scikit-Learn, Analytics | B.Tech AIR",
      "primaryDomain": "Data Science",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Analyzing large multivariate institutional datasets, building predictive machine learning models, and turning raw data into actionable dashboards.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Data Science and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "deeksha-raghuwanshi_mits",
        "codeforces": "deeksha-raghuwanshi_code",
        "github": "deeksha-raghuwanshi"
      },
      "githubUrl": "https://github.com/deeksha-raghuwanshi",
      "linkedinUrl": "https://www.linkedin.com/in/deeksha-raghuwanshi-mits",
      "portfolioUrl": "https://deeksha-raghuwanshi.dev",
      "resumeFileName": "deeksha_raghuwanshi_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 22,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1018-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1018-1",
          "name": "Pandas",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1018-2",
          "name": "NumPy",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1018-3",
          "name": "SQL",
          "proficiency": "Advanced",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1018-4",
          "name": "Scikit-Learn",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1018-5",
          "name": "Data Visualization",
          "proficiency": "Advanced",
          "category": "Analytics"
        }
      ],
      "techStack": [
        "Python",
        "Pandas",
        "NumPy",
        "SQL",
        "Scikit-Learn",
        "Matplotlib",
        "Seaborn",
        "PowerBI"
      ],
      "interests": [
        "Predictive Modeling",
        "Exploratory Data Analysis",
        "Statistical Inference",
        "Financial Analytics"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Data Science"
      ],
      "projects": [
        {
          "id": "BTIR25O1018-proj-1",
          "title": "MITS Student Academic Trend & CGPA Forecaster",
          "description": "Statistical predictive regression model analyzing attendance rates, lab practicals, and mid-sem performance.",
          "repoUrl": "https://github.com/deeksha-raghuwanshi/student-grade-predictor",
          "techNotes": [
            "Python",
            "Pandas",
            "Scikit-Learn",
            "Streamlit"
          ]
        },
        {
          "id": "BTIR25O1018-proj-2",
          "title": "Campus Electricity & Energy Consumption Analyzer",
          "description": "Time-series forecasting model for academic block power usage using historical smart-meter logs.",
          "repoUrl": "https://github.com/deeksha-raghuwanshi/energy-analyzer",
          "techNotes": [
            "Python",
            "Prophet",
            "Pandas",
            "Matplotlib"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1018-1",
          "title": "Data Scientist Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1018-0",
          "name": "IBM Data Science Professional Certificate",
          "issuer": "Coursera / IBM",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1018/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 91,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1019",
      "googleSub": "google-sub-btir25o1019",
      "email": "25ir1di19@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Divyansh Maheshwari",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1019",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1019",
      "enrolmentNumber": "BTIR25O1019",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1019",
      "headline": "Backend Engineer | Python, FastAPI, Docker, PostgreSQL | B.Tech AIR",
      "primaryDomain": "Backend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Specializing in high-performance asynchronous REST APIs, PostgreSQL schema design, and microservices containerization with Docker.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Backend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "divyansh-maheshwari_mits",
        "codeforces": "divyansh-maheshwari_code",
        "github": "divyansh-maheshwari"
      },
      "githubUrl": "https://github.com/divyansh-maheshwari",
      "linkedinUrl": "https://www.linkedin.com/in/divyansh-maheshwari-mits",
      "portfolioUrl": "https://divyansh-maheshwari.dev",
      "resumeFileName": "divyansh_maheshwari_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 23,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1019-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1019-1",
          "name": "FastAPI",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1019-2",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1019-3",
          "name": "Docker",
          "proficiency": "Intermediate",
          "category": "DevOps"
        },
        {
          "id": "sk-BTIR25O1019-4",
          "name": "REST APIs",
          "proficiency": "Advanced",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1019-5",
          "name": "Redis",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "REST APIs",
        "Redis",
        "Git"
      ],
      "interests": [
        "Backend Architecture",
        "Distributed Systems",
        "Cloud Native",
        "Hackathons",
        "Microservices"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Backend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1019-proj-1",
          "title": "MITS Campus Event Notification Service",
          "description": "High-throughput async event streaming engine using FastAPI, Redis pub/sub, and PostgreSQL.",
          "repoUrl": "https://github.com/divyansh-maheshwari/mits-event-stream",
          "liveUrl": "https://events-mits.onrender.com",
          "techNotes": [
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "Docker"
          ]
        },
        {
          "id": "BTIR25O1019-proj-2",
          "title": "Automated Syllabus & Document Retrieval API",
          "description": "Vector-indexed document search microservice for university exam guidelines.",
          "repoUrl": "https://github.com/divyansh-maheshwari/syllabus-retriever",
          "techNotes": [
            "Python",
            "SQLAlchemy",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1019-1",
          "title": "Backend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1019-0",
          "name": "Meta Backend Developer Professional Certificate",
          "issuer": "Coursera / Meta",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1019/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 92,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1020",
      "googleSub": "google-sub-btir25o1020",
      "email": "25ir1di20@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Divyansh Sharma",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1020",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1020",
      "enrolmentNumber": "BTIR25O1020",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1020",
      "headline": "Full Stack Developer | React, TypeScript, FastAPI, Tailwind | B.Tech AIR",
      "primaryDomain": "Web Development",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Building end-to-end responsive web applications with TypeScript, modern React frontend architecture, and robust Python/Node backends.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Web Development and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "divyansh-sharma_mits",
        "codeforces": "divyansh-sharma_code",
        "github": "divyansh-sharma"
      },
      "githubUrl": "https://github.com/divyansh-sharma",
      "linkedinUrl": "https://www.linkedin.com/in/divyansh-sharma-mits",
      "portfolioUrl": "https://divyansh-sharma.dev",
      "resumeFileName": "divyansh_sharma_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 24,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1020-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1020-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1020-2",
          "name": "Python",
          "proficiency": "Intermediate",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1020-3",
          "name": "Node.js",
          "proficiency": "Intermediate",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1020-4",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1020-5",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "FastAPI",
        "Node.js",
        "PostgreSQL",
        "Vite"
      ],
      "interests": [
        "Full Stack Apps",
        "UI/UX Design",
        "Hackathons",
        "Open Source",
        "Progressive Web Apps"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Web Development"
      ],
      "projects": [
        {
          "id": "BTIR25O1020-proj-1",
          "title": "CampusSync \u2014 MITS Collaborative Workspace",
          "description": "Full-stack collaboration hub for semester project teams with real-time markdown docs and task boards.",
          "repoUrl": "https://github.com/divyansh-sharma/campussync-mits",
          "liveUrl": "https://campussync.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "FastAPI"
          ]
        },
        {
          "id": "BTIR25O1020-proj-2",
          "title": "SIH Hackathon Team Matcher",
          "description": "Interactive peer matching tool filtering students by tech stack and hackathon availability.",
          "repoUrl": "https://github.com/divyansh-sharma/sih-team-matcher",
          "techNotes": [
            "React",
            "TypeScript",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1020-1",
          "title": "Full Stack Developer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1020-0",
          "name": "Full Stack Web Development with React",
          "issuer": "Coursera / HKUST",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1020/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 93,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1021",
      "googleSub": "google-sub-btir25o1021",
      "email": "25ir1go21@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Gaurav Jaiswal",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1021",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1021",
      "enrolmentNumber": "BTIR25O1021",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1021",
      "headline": "Machine Learning Engineer | PyTorch, Computer Vision, Deep Learning | B.Tech AIR",
      "primaryDomain": "Artificial Intelligence",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Researching convolutional vision models, neural network optimization, and deploying lightweight AI models to edge accelerators.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Artificial Intelligence and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "gaurav-jaiswal_mits",
        "codeforces": "gaurav-jaiswal_code",
        "github": "gaurav-jaiswal"
      },
      "githubUrl": "https://github.com/gaurav-jaiswal",
      "linkedinUrl": "https://www.linkedin.com/in/gaurav-jaiswal-mits",
      "portfolioUrl": "https://gaurav-jaiswal.dev",
      "resumeFileName": "gaurav_jaiswal_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 15,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1021-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1021-1",
          "name": "PyTorch",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1021-2",
          "name": "Computer Vision",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1021-3",
          "name": "Deep Learning",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1021-4",
          "name": "TensorFlow",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1021-5",
          "name": "OpenCV",
          "proficiency": "Advanced",
          "category": "Computer Vision"
        }
      ],
      "techStack": [
        "Python",
        "PyTorch",
        "TensorFlow",
        "OpenCV",
        "NumPy",
        "Scikit-Learn",
        "CUDA"
      ],
      "interests": [
        "Neural Networks",
        "Computer Vision",
        "Generative AI",
        "Medical Imaging",
        "Edge AI"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Artificial Intelligence"
      ],
      "projects": [
        {
          "id": "BTIR25O1021-proj-1",
          "title": "Autonomous Drone Visual Obstacle Avoidance",
          "description": "Real-time monocular depth estimation and collision avoidance model trained on custom outdoor campus datasets.",
          "repoUrl": "https://github.com/gaurav-jaiswal/uav-vision-nav",
          "techNotes": [
            "PyTorch",
            "OpenCV",
            "Python",
            "ROS2"
          ]
        },
        {
          "id": "BTIR25O1021-proj-2",
          "title": "MITS Handwritten Answer Sheet OCR & Grading",
          "description": "Transformer-based handwriting transcription pipeline for technical course answer scripts.",
          "repoUrl": "https://github.com/gaurav-jaiswal/answer-sheet-ocr",
          "techNotes": [
            "PyTorch",
            "Transformers",
            "FastAPI"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1021-1",
          "title": "Machine Learning Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1021-0",
          "name": "Deep Learning Specialization",
          "issuer": "Coursera / DeepLearning.AI",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1021/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 94,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1022",
      "googleSub": "google-sub-btir25o1022",
      "email": "25ir1go22@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Gourav Soni",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1022",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1022",
      "enrolmentNumber": "BTIR25O1022",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1022",
      "headline": "Robotics Engineer | ROS2, Gazebo, C++, SLAM, TurtleBot3 | B.Tech AIR",
      "primaryDomain": "Robotics & Embedded Systems",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Hands-on practical experience in ROS2 navigation stacks (Nav2), 2D/3D LIDAR SLAM, and differential drive kinematics in the CAI Robotics Lab.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Robotics & Embedded Systems and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "gourav-soni_mits",
        "codeforces": "gourav-soni_code",
        "github": "gourav-soni"
      },
      "githubUrl": "https://github.com/gourav-soni",
      "linkedinUrl": "https://www.linkedin.com/in/gourav-soni-mits",
      "portfolioUrl": "https://gourav-soni.dev",
      "resumeFileName": "gourav_soni_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 16,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1022-0",
          "name": "ROS2",
          "proficiency": "Advanced",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1022-1",
          "name": "C++",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1022-2",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1022-3",
          "name": "Gazebo",
          "proficiency": "Intermediate",
          "category": "Simulation"
        },
        {
          "id": "sk-BTIR25O1022-4",
          "name": "SLAM",
          "proficiency": "Intermediate",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1022-5",
          "name": "Embedded Systems",
          "proficiency": "Intermediate",
          "category": "Hardware"
        }
      ],
      "techStack": [
        "ROS2 Humble",
        "C++",
        "Python",
        "Gazebo",
        "Nav2",
        "Linux",
        "Micro-ROS"
      ],
      "interests": [
        "Mobile Robotics",
        "Autonomous Navigation",
        "Kinematics",
        "Drone Swarms",
        "LIDAR Perception"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Robotics & Embedded Systems"
      ],
      "projects": [
        {
          "id": "BTIR25O1022-proj-1",
          "title": "Autonomous Campus Guide Rover",
          "description": "TurtleBot3-based navigation rover mapping CAI ground floor with Cartographer SLAM and dynamic obstacle avoidance.",
          "repoUrl": "https://github.com/gourav-soni/campus-guide-rover",
          "techNotes": [
            "ROS2",
            "C++",
            "Nav2",
            "Gazebo"
          ]
        },
        {
          "id": "BTIR25O1022-proj-2",
          "title": "4-DOF Robotic Arm Trajectory Planner",
          "description": "Inverse kinematics and trajectory interpolation software with MoveIt2 simulation for pick-and-place tasks.",
          "repoUrl": "https://github.com/gourav-soni/arm-trajectory-planner",
          "techNotes": [
            "Python",
            "MoveIt2",
            "ROS2"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1022-1",
          "title": "Robotics & Autonomous Systems Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1022-0",
          "name": "ROS2 Basics & Autonomous Navigation",
          "issuer": "ConstructSim / ROS Industrial",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1022/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 95,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1023",
      "googleSub": "google-sub-btir25o1023",
      "email": "25ir1ha23@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Harsh Nema",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1023",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1023",
      "enrolmentNumber": "BTIR25O1023",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1023",
      "headline": "Frontend Engineer | React, Next.js, TypeScript, UI/UX Design | B.Tech AIR",
      "primaryDomain": "Frontend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Crafting sleek dark-mode design systems, responsive web applications, and intuitive interactive user experiences in React and Figma.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Frontend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "harsh-nema_mits",
        "codeforces": "harsh-nema_code",
        "github": "harsh-nema"
      },
      "githubUrl": "https://github.com/harsh-nema",
      "linkedinUrl": "https://www.linkedin.com/in/harsh-nema-mits",
      "portfolioUrl": "https://harsh-nema.dev",
      "resumeFileName": "harsh_nema_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 17,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1023-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1023-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1023-2",
          "name": "Next.js",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1023-3",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1023-4",
          "name": "UI/UX Design",
          "proficiency": "Advanced",
          "category": "Design"
        },
        {
          "id": "sk-BTIR25O1023-5",
          "name": "Figma",
          "proficiency": "Advanced",
          "category": "Design"
        }
      ],
      "techStack": [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Figma",
        "Framer Motion",
        "Vite"
      ],
      "interests": [
        "Design Systems",
        "Micro-Interactions",
        "Web Accessibility",
        "Hackathons",
        "Design Engineering"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Frontend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1023-proj-1",
          "title": "MITS Pulse \u2014 Campus Activity Dashboard",
          "description": "Glassmorphic responsive dashboard displaying live campus events, academic timetables, and noticeboard feeds.",
          "repoUrl": "https://github.com/harsh-nema/mits-pulse",
          "liveUrl": "https://mitspulse.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
          ]
        },
        {
          "id": "BTIR25O1023-proj-2",
          "title": "AcademIQ Design System",
          "description": "Accessible WCAG 2.1 AA compliant UI component library created in Figma and implemented in React.",
          "repoUrl": "https://github.com/harsh-nema/academiq-ui",
          "techNotes": [
            "React",
            "Tailwind",
            "Storybook"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1023-1",
          "title": "Frontend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1023-0",
          "name": "Google UX Design Professional Certificate",
          "issuer": "Coursera / Google",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1023/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 96,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1024",
      "googleSub": "google-sub-btir25o1024",
      "email": "25ir1is24@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Ishant Dubey",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1024",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1024",
      "enrolmentNumber": "BTIR25O1024",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1024",
      "headline": "Data Scientist | Python, Pandas, SQL, Scikit-Learn, Analytics | B.Tech AIR",
      "primaryDomain": "Data Science",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Analyzing large multivariate institutional datasets, building predictive machine learning models, and turning raw data into actionable dashboards.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Data Science and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "ishant-dubey_mits",
        "codeforces": "ishant-dubey_code",
        "github": "ishant-dubey"
      },
      "githubUrl": "https://github.com/ishant-dubey",
      "linkedinUrl": "https://www.linkedin.com/in/ishant-dubey-mits",
      "portfolioUrl": "https://ishant-dubey.dev",
      "resumeFileName": "ishant_dubey_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 18,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1024-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1024-1",
          "name": "Pandas",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1024-2",
          "name": "NumPy",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1024-3",
          "name": "SQL",
          "proficiency": "Advanced",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1024-4",
          "name": "Scikit-Learn",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1024-5",
          "name": "Data Visualization",
          "proficiency": "Advanced",
          "category": "Analytics"
        }
      ],
      "techStack": [
        "Python",
        "Pandas",
        "NumPy",
        "SQL",
        "Scikit-Learn",
        "Matplotlib",
        "Seaborn",
        "PowerBI"
      ],
      "interests": [
        "Predictive Modeling",
        "Exploratory Data Analysis",
        "Statistical Inference",
        "Financial Analytics"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Data Science"
      ],
      "projects": [
        {
          "id": "BTIR25O1024-proj-1",
          "title": "MITS Student Academic Trend & CGPA Forecaster",
          "description": "Statistical predictive regression model analyzing attendance rates, lab practicals, and mid-sem performance.",
          "repoUrl": "https://github.com/ishant-dubey/student-grade-predictor",
          "techNotes": [
            "Python",
            "Pandas",
            "Scikit-Learn",
            "Streamlit"
          ]
        },
        {
          "id": "BTIR25O1024-proj-2",
          "title": "Campus Electricity & Energy Consumption Analyzer",
          "description": "Time-series forecasting model for academic block power usage using historical smart-meter logs.",
          "repoUrl": "https://github.com/ishant-dubey/energy-analyzer",
          "techNotes": [
            "Python",
            "Prophet",
            "Pandas",
            "Matplotlib"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1024-1",
          "title": "Data Scientist Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1024-0",
          "name": "IBM Data Science Professional Certificate",
          "issuer": "Coursera / IBM",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1024/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 97,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1025",
      "googleSub": "google-sub-btir25o1025",
      "email": "25ir1ka25@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Kamlesh Malgaya",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1025",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1025",
      "enrolmentNumber": "BTIR25O1025",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1025",
      "headline": "Backend Engineer | Python, FastAPI, Docker, PostgreSQL | B.Tech AIR",
      "primaryDomain": "Backend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Specializing in high-performance asynchronous REST APIs, PostgreSQL schema design, and microservices containerization with Docker.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Backend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "kamlesh-malgaya_mits",
        "codeforces": "kamlesh-malgaya_code",
        "github": "kamlesh-malgaya"
      },
      "githubUrl": "https://github.com/kamlesh-malgaya",
      "linkedinUrl": "https://www.linkedin.com/in/kamlesh-malgaya-mits",
      "portfolioUrl": "https://kamlesh-malgaya.dev",
      "resumeFileName": "kamlesh_malgaya_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 19,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1025-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1025-1",
          "name": "FastAPI",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1025-2",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1025-3",
          "name": "Docker",
          "proficiency": "Intermediate",
          "category": "DevOps"
        },
        {
          "id": "sk-BTIR25O1025-4",
          "name": "REST APIs",
          "proficiency": "Advanced",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1025-5",
          "name": "Redis",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "REST APIs",
        "Redis",
        "Git"
      ],
      "interests": [
        "Backend Architecture",
        "Distributed Systems",
        "Cloud Native",
        "Hackathons",
        "Microservices"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Backend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1025-proj-1",
          "title": "MITS Campus Event Notification Service",
          "description": "High-throughput async event streaming engine using FastAPI, Redis pub/sub, and PostgreSQL.",
          "repoUrl": "https://github.com/kamlesh-malgaya/mits-event-stream",
          "liveUrl": "https://events-mits.onrender.com",
          "techNotes": [
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "Docker"
          ]
        },
        {
          "id": "BTIR25O1025-proj-2",
          "title": "Automated Syllabus & Document Retrieval API",
          "description": "Vector-indexed document search microservice for university exam guidelines.",
          "repoUrl": "https://github.com/kamlesh-malgaya/syllabus-retriever",
          "techNotes": [
            "Python",
            "SQLAlchemy",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1025-1",
          "title": "Backend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1025-0",
          "name": "Meta Backend Developer Professional Certificate",
          "issuer": "Coursera / Meta",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1025/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 86,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1026",
      "googleSub": "google-sub-btir25o1026",
      "email": "25ir1ka26@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Kanak Jadon",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1026",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1026",
      "enrolmentNumber": "BTIR25O1026",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1026",
      "headline": "Full Stack Developer | React, TypeScript, FastAPI, Tailwind | B.Tech AIR",
      "primaryDomain": "Web Development",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Building end-to-end responsive web applications with TypeScript, modern React frontend architecture, and robust Python/Node backends.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Web Development and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "kanak-jadon_mits",
        "codeforces": "kanak-jadon_code",
        "github": "kanak-jadon"
      },
      "githubUrl": "https://github.com/kanak-jadon",
      "linkedinUrl": "https://www.linkedin.com/in/kanak-jadon-mits",
      "portfolioUrl": "https://kanak-jadon.dev",
      "resumeFileName": "kanak_jadon_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 20,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1026-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1026-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1026-2",
          "name": "Python",
          "proficiency": "Intermediate",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1026-3",
          "name": "Node.js",
          "proficiency": "Intermediate",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1026-4",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1026-5",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "FastAPI",
        "Node.js",
        "PostgreSQL",
        "Vite"
      ],
      "interests": [
        "Full Stack Apps",
        "UI/UX Design",
        "Hackathons",
        "Open Source",
        "Progressive Web Apps"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Web Development"
      ],
      "projects": [
        {
          "id": "BTIR25O1026-proj-1",
          "title": "CampusSync \u2014 MITS Collaborative Workspace",
          "description": "Full-stack collaboration hub for semester project teams with real-time markdown docs and task boards.",
          "repoUrl": "https://github.com/kanak-jadon/campussync-mits",
          "liveUrl": "https://campussync.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "FastAPI"
          ]
        },
        {
          "id": "BTIR25O1026-proj-2",
          "title": "SIH Hackathon Team Matcher",
          "description": "Interactive peer matching tool filtering students by tech stack and hackathon availability.",
          "repoUrl": "https://github.com/kanak-jadon/sih-team-matcher",
          "techNotes": [
            "React",
            "TypeScript",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1026-1",
          "title": "Full Stack Developer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1026-0",
          "name": "Full Stack Web Development with React",
          "issuer": "Coursera / HKUST",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1026/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 87,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1027",
      "googleSub": "google-sub-btir25o1027",
      "email": "25ir1ma27@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Mahi Choudhary",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1027",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1027",
      "enrolmentNumber": "BTIR25O1027",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Female"
    },
    "profile": {
      "studentId": "BTIR25O1027",
      "headline": "Machine Learning Engineer | PyTorch, Computer Vision, Deep Learning | B.Tech AIR",
      "primaryDomain": "Artificial Intelligence",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Researching convolutional vision models, neural network optimization, and deploying lightweight AI models to edge accelerators.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Artificial Intelligence and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "mahi-choudhary_mits",
        "codeforces": "mahi-choudhary_code",
        "github": "mahi-choudhary"
      },
      "githubUrl": "https://github.com/mahi-choudhary",
      "linkedinUrl": "https://www.linkedin.com/in/mahi-choudhary-mits",
      "portfolioUrl": "https://mahi-choudhary.dev",
      "resumeFileName": "mahi_choudhary_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 21,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1027-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1027-1",
          "name": "PyTorch",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1027-2",
          "name": "Computer Vision",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1027-3",
          "name": "Deep Learning",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1027-4",
          "name": "TensorFlow",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1027-5",
          "name": "OpenCV",
          "proficiency": "Advanced",
          "category": "Computer Vision"
        }
      ],
      "techStack": [
        "Python",
        "PyTorch",
        "TensorFlow",
        "OpenCV",
        "NumPy",
        "Scikit-Learn",
        "CUDA"
      ],
      "interests": [
        "Neural Networks",
        "Computer Vision",
        "Generative AI",
        "Medical Imaging",
        "Edge AI"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Artificial Intelligence"
      ],
      "projects": [
        {
          "id": "BTIR25O1027-proj-1",
          "title": "Autonomous Drone Visual Obstacle Avoidance",
          "description": "Real-time monocular depth estimation and collision avoidance model trained on custom outdoor campus datasets.",
          "repoUrl": "https://github.com/mahi-choudhary/uav-vision-nav",
          "techNotes": [
            "PyTorch",
            "OpenCV",
            "Python",
            "ROS2"
          ]
        },
        {
          "id": "BTIR25O1027-proj-2",
          "title": "MITS Handwritten Answer Sheet OCR & Grading",
          "description": "Transformer-based handwriting transcription pipeline for technical course answer scripts.",
          "repoUrl": "https://github.com/mahi-choudhary/answer-sheet-ocr",
          "techNotes": [
            "PyTorch",
            "Transformers",
            "FastAPI"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1027-1",
          "title": "Machine Learning Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1027-0",
          "name": "Deep Learning Specialization",
          "issuer": "Coursera / DeepLearning.AI",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1027/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 88,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1028",
      "googleSub": "google-sub-btir25o1028",
      "email": "25ir1ma28@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Mahi Gupta",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1028",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1028",
      "enrolmentNumber": "BTIR25O1028",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Female"
    },
    "profile": {
      "studentId": "BTIR25O1028",
      "headline": "Robotics Engineer | ROS2, Gazebo, C++, SLAM, TurtleBot3 | B.Tech AIR",
      "primaryDomain": "Robotics & Embedded Systems",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Hands-on practical experience in ROS2 navigation stacks (Nav2), 2D/3D LIDAR SLAM, and differential drive kinematics in the CAI Robotics Lab.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Robotics & Embedded Systems and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "mahi-gupta_mits",
        "codeforces": "mahi-gupta_code",
        "github": "mahi-gupta"
      },
      "githubUrl": "https://github.com/mahi-gupta",
      "linkedinUrl": "https://www.linkedin.com/in/mahi-gupta-mits",
      "portfolioUrl": "https://mahi-gupta.dev",
      "resumeFileName": "mahi_gupta_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 22,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1028-0",
          "name": "ROS2",
          "proficiency": "Advanced",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1028-1",
          "name": "C++",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1028-2",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1028-3",
          "name": "Gazebo",
          "proficiency": "Intermediate",
          "category": "Simulation"
        },
        {
          "id": "sk-BTIR25O1028-4",
          "name": "SLAM",
          "proficiency": "Intermediate",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1028-5",
          "name": "Embedded Systems",
          "proficiency": "Intermediate",
          "category": "Hardware"
        }
      ],
      "techStack": [
        "ROS2 Humble",
        "C++",
        "Python",
        "Gazebo",
        "Nav2",
        "Linux",
        "Micro-ROS"
      ],
      "interests": [
        "Mobile Robotics",
        "Autonomous Navigation",
        "Kinematics",
        "Drone Swarms",
        "LIDAR Perception"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Robotics & Embedded Systems"
      ],
      "projects": [
        {
          "id": "BTIR25O1028-proj-1",
          "title": "Autonomous Campus Guide Rover",
          "description": "TurtleBot3-based navigation rover mapping CAI ground floor with Cartographer SLAM and dynamic obstacle avoidance.",
          "repoUrl": "https://github.com/mahi-gupta/campus-guide-rover",
          "techNotes": [
            "ROS2",
            "C++",
            "Nav2",
            "Gazebo"
          ]
        },
        {
          "id": "BTIR25O1028-proj-2",
          "title": "4-DOF Robotic Arm Trajectory Planner",
          "description": "Inverse kinematics and trajectory interpolation software with MoveIt2 simulation for pick-and-place tasks.",
          "repoUrl": "https://github.com/mahi-gupta/arm-trajectory-planner",
          "techNotes": [
            "Python",
            "MoveIt2",
            "ROS2"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1028-1",
          "title": "Robotics & Autonomous Systems Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1028-0",
          "name": "ROS2 Basics & Autonomous Navigation",
          "issuer": "ConstructSim / ROS Industrial",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1028/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 89,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1029",
      "googleSub": "google-sub-btir25o1029",
      "email": "25ir1ma29@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Manas Patidar",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1029",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1029",
      "enrolmentNumber": "BTIR25O1029",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1029",
      "headline": "Frontend Engineer | React, Next.js, TypeScript, UI/UX Design | B.Tech AIR",
      "primaryDomain": "Frontend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Crafting sleek dark-mode design systems, responsive web applications, and intuitive interactive user experiences in React and Figma.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Frontend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "manas-patidar_mits",
        "codeforces": "manas-patidar_code",
        "github": "manas-patidar"
      },
      "githubUrl": "https://github.com/manas-patidar",
      "linkedinUrl": "https://www.linkedin.com/in/manas-patidar-mits",
      "portfolioUrl": "https://manas-patidar.dev",
      "resumeFileName": "manas_patidar_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 23,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1029-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1029-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1029-2",
          "name": "Next.js",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1029-3",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1029-4",
          "name": "UI/UX Design",
          "proficiency": "Advanced",
          "category": "Design"
        },
        {
          "id": "sk-BTIR25O1029-5",
          "name": "Figma",
          "proficiency": "Advanced",
          "category": "Design"
        }
      ],
      "techStack": [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Figma",
        "Framer Motion",
        "Vite"
      ],
      "interests": [
        "Design Systems",
        "Micro-Interactions",
        "Web Accessibility",
        "Hackathons",
        "Design Engineering"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Frontend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1029-proj-1",
          "title": "MITS Pulse \u2014 Campus Activity Dashboard",
          "description": "Glassmorphic responsive dashboard displaying live campus events, academic timetables, and noticeboard feeds.",
          "repoUrl": "https://github.com/manas-patidar/mits-pulse",
          "liveUrl": "https://mitspulse.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
          ]
        },
        {
          "id": "BTIR25O1029-proj-2",
          "title": "AcademIQ Design System",
          "description": "Accessible WCAG 2.1 AA compliant UI component library created in Figma and implemented in React.",
          "repoUrl": "https://github.com/manas-patidar/academiq-ui",
          "techNotes": [
            "React",
            "Tailwind",
            "Storybook"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1029-1",
          "title": "Frontend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1029-0",
          "name": "Google UX Design Professional Certificate",
          "issuer": "Coursera / Google",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1029/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 90,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1030",
      "googleSub": "google-sub-btir25o1030",
      "email": "25ir1ma30@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Mayur Solanki",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1030",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1030",
      "enrolmentNumber": "BTIR25O1030",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1030",
      "headline": "Data Scientist | Python, Pandas, SQL, Scikit-Learn, Analytics | B.Tech AIR",
      "primaryDomain": "Data Science",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Analyzing large multivariate institutional datasets, building predictive machine learning models, and turning raw data into actionable dashboards.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Data Science and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "mayur-solanki_mits",
        "codeforces": "mayur-solanki_code",
        "github": "mayur-solanki"
      },
      "githubUrl": "https://github.com/mayur-solanki",
      "linkedinUrl": "https://www.linkedin.com/in/mayur-solanki-mits",
      "portfolioUrl": "https://mayur-solanki.dev",
      "resumeFileName": "mayur_solanki_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 24,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1030-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1030-1",
          "name": "Pandas",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1030-2",
          "name": "NumPy",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1030-3",
          "name": "SQL",
          "proficiency": "Advanced",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1030-4",
          "name": "Scikit-Learn",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1030-5",
          "name": "Data Visualization",
          "proficiency": "Advanced",
          "category": "Analytics"
        }
      ],
      "techStack": [
        "Python",
        "Pandas",
        "NumPy",
        "SQL",
        "Scikit-Learn",
        "Matplotlib",
        "Seaborn",
        "PowerBI"
      ],
      "interests": [
        "Predictive Modeling",
        "Exploratory Data Analysis",
        "Statistical Inference",
        "Financial Analytics"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Data Science"
      ],
      "projects": [
        {
          "id": "BTIR25O1030-proj-1",
          "title": "MITS Student Academic Trend & CGPA Forecaster",
          "description": "Statistical predictive regression model analyzing attendance rates, lab practicals, and mid-sem performance.",
          "repoUrl": "https://github.com/mayur-solanki/student-grade-predictor",
          "techNotes": [
            "Python",
            "Pandas",
            "Scikit-Learn",
            "Streamlit"
          ]
        },
        {
          "id": "BTIR25O1030-proj-2",
          "title": "Campus Electricity & Energy Consumption Analyzer",
          "description": "Time-series forecasting model for academic block power usage using historical smart-meter logs.",
          "repoUrl": "https://github.com/mayur-solanki/energy-analyzer",
          "techNotes": [
            "Python",
            "Prophet",
            "Pandas",
            "Matplotlib"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1030-1",
          "title": "Data Scientist Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1030-0",
          "name": "IBM Data Science Professional Certificate",
          "issuer": "Coursera / IBM",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1030/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 91,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1031",
      "googleSub": "google-sub-btir25o1031",
      "email": "25ir1na31@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Navneet Rathor",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1031",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1031",
      "enrolmentNumber": "BTIR25O1031",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1031",
      "headline": "Backend Engineer | Python, FastAPI, Docker, PostgreSQL | B.Tech AIR",
      "primaryDomain": "Backend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Specializing in high-performance asynchronous REST APIs, PostgreSQL schema design, and microservices containerization with Docker.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Backend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "navneet-rathor_mits",
        "codeforces": "navneet-rathor_code",
        "github": "navneet-rathor"
      },
      "githubUrl": "https://github.com/navneet-rathor",
      "linkedinUrl": "https://www.linkedin.com/in/navneet-rathor-mits",
      "portfolioUrl": "https://navneet-rathor.dev",
      "resumeFileName": "navneet_rathor_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 15,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1031-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1031-1",
          "name": "FastAPI",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1031-2",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1031-3",
          "name": "Docker",
          "proficiency": "Intermediate",
          "category": "DevOps"
        },
        {
          "id": "sk-BTIR25O1031-4",
          "name": "REST APIs",
          "proficiency": "Advanced",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1031-5",
          "name": "Redis",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "REST APIs",
        "Redis",
        "Git"
      ],
      "interests": [
        "Backend Architecture",
        "Distributed Systems",
        "Cloud Native",
        "Hackathons",
        "Microservices"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Backend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1031-proj-1",
          "title": "MITS Campus Event Notification Service",
          "description": "High-throughput async event streaming engine using FastAPI, Redis pub/sub, and PostgreSQL.",
          "repoUrl": "https://github.com/navneet-rathor/mits-event-stream",
          "liveUrl": "https://events-mits.onrender.com",
          "techNotes": [
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "Docker"
          ]
        },
        {
          "id": "BTIR25O1031-proj-2",
          "title": "Automated Syllabus & Document Retrieval API",
          "description": "Vector-indexed document search microservice for university exam guidelines.",
          "repoUrl": "https://github.com/navneet-rathor/syllabus-retriever",
          "techNotes": [
            "Python",
            "SQLAlchemy",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1031-1",
          "title": "Backend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1031-0",
          "name": "Meta Backend Developer Professional Certificate",
          "issuer": "Coursera / Meta",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1031/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 92,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1032",
      "googleSub": "google-sub-btir25o1032",
      "email": "25ir1ni32@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Nirmal Kumar Sawner",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1032",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1032",
      "enrolmentNumber": "BTIR25O1032",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1032",
      "headline": "Full Stack Developer | React, TypeScript, FastAPI, Tailwind | B.Tech AIR",
      "primaryDomain": "Web Development",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Building end-to-end responsive web applications with TypeScript, modern React frontend architecture, and robust Python/Node backends.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Web Development and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "nirmal-kumar-sawner_mits",
        "codeforces": "nirmal-kumar-sawner_code",
        "github": "nirmal-kumar-sawner"
      },
      "githubUrl": "https://github.com/nirmal-kumar-sawner",
      "linkedinUrl": "https://www.linkedin.com/in/nirmal-kumar-sawner-mits",
      "portfolioUrl": "https://nirmal-kumar-sawner.dev",
      "resumeFileName": "nirmal_kumar_sawner_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 16,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1032-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1032-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1032-2",
          "name": "Python",
          "proficiency": "Intermediate",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1032-3",
          "name": "Node.js",
          "proficiency": "Intermediate",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1032-4",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1032-5",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "FastAPI",
        "Node.js",
        "PostgreSQL",
        "Vite"
      ],
      "interests": [
        "Full Stack Apps",
        "UI/UX Design",
        "Hackathons",
        "Open Source",
        "Progressive Web Apps"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Web Development"
      ],
      "projects": [
        {
          "id": "BTIR25O1032-proj-1",
          "title": "CampusSync \u2014 MITS Collaborative Workspace",
          "description": "Full-stack collaboration hub for semester project teams with real-time markdown docs and task boards.",
          "repoUrl": "https://github.com/nirmal-kumar-sawner/campussync-mits",
          "liveUrl": "https://campussync.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "FastAPI"
          ]
        },
        {
          "id": "BTIR25O1032-proj-2",
          "title": "SIH Hackathon Team Matcher",
          "description": "Interactive peer matching tool filtering students by tech stack and hackathon availability.",
          "repoUrl": "https://github.com/nirmal-kumar-sawner/sih-team-matcher",
          "techNotes": [
            "React",
            "TypeScript",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1032-1",
          "title": "Full Stack Developer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1032-0",
          "name": "Full Stack Web Development with React",
          "issuer": "Coursera / HKUST",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1032/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 93,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1033",
      "googleSub": "google-sub-btir25o1033",
      "email": "25ir1ni33@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Nishika Jain",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1033",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1033",
      "enrolmentNumber": "BTIR25O1033",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Female"
    },
    "profile": {
      "studentId": "BTIR25O1033",
      "headline": "Machine Learning Engineer | PyTorch, Computer Vision, Deep Learning | B.Tech AIR",
      "primaryDomain": "Artificial Intelligence",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Researching convolutional vision models, neural network optimization, and deploying lightweight AI models to edge accelerators.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Artificial Intelligence and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "nishika-jain_mits",
        "codeforces": "nishika-jain_code",
        "github": "nishika-jain"
      },
      "githubUrl": "https://github.com/nishika-jain",
      "linkedinUrl": "https://www.linkedin.com/in/nishika-jain-mits",
      "portfolioUrl": "https://nishika-jain.dev",
      "resumeFileName": "nishika_jain_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 17,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1033-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1033-1",
          "name": "PyTorch",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1033-2",
          "name": "Computer Vision",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1033-3",
          "name": "Deep Learning",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1033-4",
          "name": "TensorFlow",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1033-5",
          "name": "OpenCV",
          "proficiency": "Advanced",
          "category": "Computer Vision"
        }
      ],
      "techStack": [
        "Python",
        "PyTorch",
        "TensorFlow",
        "OpenCV",
        "NumPy",
        "Scikit-Learn",
        "CUDA"
      ],
      "interests": [
        "Neural Networks",
        "Computer Vision",
        "Generative AI",
        "Medical Imaging",
        "Edge AI"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Artificial Intelligence"
      ],
      "projects": [
        {
          "id": "BTIR25O1033-proj-1",
          "title": "Autonomous Drone Visual Obstacle Avoidance",
          "description": "Real-time monocular depth estimation and collision avoidance model trained on custom outdoor campus datasets.",
          "repoUrl": "https://github.com/nishika-jain/uav-vision-nav",
          "techNotes": [
            "PyTorch",
            "OpenCV",
            "Python",
            "ROS2"
          ]
        },
        {
          "id": "BTIR25O1033-proj-2",
          "title": "MITS Handwritten Answer Sheet OCR & Grading",
          "description": "Transformer-based handwriting transcription pipeline for technical course answer scripts.",
          "repoUrl": "https://github.com/nishika-jain/answer-sheet-ocr",
          "techNotes": [
            "PyTorch",
            "Transformers",
            "FastAPI"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1033-1",
          "title": "Machine Learning Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1033-0",
          "name": "Deep Learning Specialization",
          "issuer": "Coursera / DeepLearning.AI",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1033/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 94,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1034",
      "googleSub": "google-sub-btir25o1034",
      "email": "25ir1ni34@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Nitee Sahu",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1034",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1034",
      "enrolmentNumber": "BTIR25O1034",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Female"
    },
    "profile": {
      "studentId": "BTIR25O1034",
      "headline": "Robotics Engineer | ROS2, Gazebo, C++, SLAM, TurtleBot3 | B.Tech AIR",
      "primaryDomain": "Robotics & Embedded Systems",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Hands-on practical experience in ROS2 navigation stacks (Nav2), 2D/3D LIDAR SLAM, and differential drive kinematics in the CAI Robotics Lab.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Robotics & Embedded Systems and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "nitee-sahu_mits",
        "codeforces": "nitee-sahu_code",
        "github": "nitee-sahu"
      },
      "githubUrl": "https://github.com/nitee-sahu",
      "linkedinUrl": "https://www.linkedin.com/in/nitee-sahu-mits",
      "portfolioUrl": "https://nitee-sahu.dev",
      "resumeFileName": "nitee_sahu_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 18,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1034-0",
          "name": "ROS2",
          "proficiency": "Advanced",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1034-1",
          "name": "C++",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1034-2",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1034-3",
          "name": "Gazebo",
          "proficiency": "Intermediate",
          "category": "Simulation"
        },
        {
          "id": "sk-BTIR25O1034-4",
          "name": "SLAM",
          "proficiency": "Intermediate",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1034-5",
          "name": "Embedded Systems",
          "proficiency": "Intermediate",
          "category": "Hardware"
        }
      ],
      "techStack": [
        "ROS2 Humble",
        "C++",
        "Python",
        "Gazebo",
        "Nav2",
        "Linux",
        "Micro-ROS"
      ],
      "interests": [
        "Mobile Robotics",
        "Autonomous Navigation",
        "Kinematics",
        "Drone Swarms",
        "LIDAR Perception"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Robotics & Embedded Systems"
      ],
      "projects": [
        {
          "id": "BTIR25O1034-proj-1",
          "title": "Autonomous Campus Guide Rover",
          "description": "TurtleBot3-based navigation rover mapping CAI ground floor with Cartographer SLAM and dynamic obstacle avoidance.",
          "repoUrl": "https://github.com/nitee-sahu/campus-guide-rover",
          "techNotes": [
            "ROS2",
            "C++",
            "Nav2",
            "Gazebo"
          ]
        },
        {
          "id": "BTIR25O1034-proj-2",
          "title": "4-DOF Robotic Arm Trajectory Planner",
          "description": "Inverse kinematics and trajectory interpolation software with MoveIt2 simulation for pick-and-place tasks.",
          "repoUrl": "https://github.com/nitee-sahu/arm-trajectory-planner",
          "techNotes": [
            "Python",
            "MoveIt2",
            "ROS2"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1034-1",
          "title": "Robotics & Autonomous Systems Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1034-0",
          "name": "ROS2 Basics & Autonomous Navigation",
          "issuer": "ConstructSim / ROS Industrial",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1034/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 95,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1035",
      "googleSub": "google-sub-btir25o1035",
      "email": "25ir1ni35@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Nitya Sharma",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1035",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1035",
      "enrolmentNumber": "BTIR25O1035",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Female"
    },
    "profile": {
      "studentId": "BTIR25O1035",
      "headline": "Frontend Engineer | React, Next.js, TypeScript, UI/UX Design | B.Tech AIR",
      "primaryDomain": "Frontend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Crafting sleek dark-mode design systems, responsive web applications, and intuitive interactive user experiences in React and Figma.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Frontend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "nitya-sharma_mits",
        "codeforces": "nitya-sharma_code",
        "github": "nitya-sharma"
      },
      "githubUrl": "https://github.com/nitya-sharma",
      "linkedinUrl": "https://www.linkedin.com/in/nitya-sharma-mits",
      "portfolioUrl": "https://nitya-sharma.dev",
      "resumeFileName": "nitya_sharma_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 19,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1035-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1035-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1035-2",
          "name": "Next.js",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1035-3",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1035-4",
          "name": "UI/UX Design",
          "proficiency": "Advanced",
          "category": "Design"
        },
        {
          "id": "sk-BTIR25O1035-5",
          "name": "Figma",
          "proficiency": "Advanced",
          "category": "Design"
        }
      ],
      "techStack": [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Figma",
        "Framer Motion",
        "Vite"
      ],
      "interests": [
        "Design Systems",
        "Micro-Interactions",
        "Web Accessibility",
        "Hackathons",
        "Design Engineering"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Frontend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1035-proj-1",
          "title": "MITS Pulse \u2014 Campus Activity Dashboard",
          "description": "Glassmorphic responsive dashboard displaying live campus events, academic timetables, and noticeboard feeds.",
          "repoUrl": "https://github.com/nitya-sharma/mits-pulse",
          "liveUrl": "https://mitspulse.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
          ]
        },
        {
          "id": "BTIR25O1035-proj-2",
          "title": "AcademIQ Design System",
          "description": "Accessible WCAG 2.1 AA compliant UI component library created in Figma and implemented in React.",
          "repoUrl": "https://github.com/nitya-sharma/academiq-ui",
          "techNotes": [
            "React",
            "Tailwind",
            "Storybook"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1035-1",
          "title": "Frontend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1035-0",
          "name": "Google UX Design Professional Certificate",
          "issuer": "Coursera / Google",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1035/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 96,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1036",
      "googleSub": "google-sub-btir25o1036",
      "email": "25ir1om36@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Om Chaturvedi",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1036",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1036",
      "enrolmentNumber": "BTIR25O1036",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1036",
      "headline": "Data Scientist | Python, Pandas, SQL, Scikit-Learn, Analytics | B.Tech AIR",
      "primaryDomain": "Data Science",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Analyzing large multivariate institutional datasets, building predictive machine learning models, and turning raw data into actionable dashboards.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Data Science and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "om-chaturvedi_mits",
        "codeforces": "om-chaturvedi_code",
        "github": "om-chaturvedi"
      },
      "githubUrl": "https://github.com/om-chaturvedi",
      "linkedinUrl": "https://www.linkedin.com/in/om-chaturvedi-mits",
      "portfolioUrl": "https://om-chaturvedi.dev",
      "resumeFileName": "om_chaturvedi_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 20,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1036-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1036-1",
          "name": "Pandas",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1036-2",
          "name": "NumPy",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1036-3",
          "name": "SQL",
          "proficiency": "Advanced",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1036-4",
          "name": "Scikit-Learn",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1036-5",
          "name": "Data Visualization",
          "proficiency": "Advanced",
          "category": "Analytics"
        }
      ],
      "techStack": [
        "Python",
        "Pandas",
        "NumPy",
        "SQL",
        "Scikit-Learn",
        "Matplotlib",
        "Seaborn",
        "PowerBI"
      ],
      "interests": [
        "Predictive Modeling",
        "Exploratory Data Analysis",
        "Statistical Inference",
        "Financial Analytics"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Data Science"
      ],
      "projects": [
        {
          "id": "BTIR25O1036-proj-1",
          "title": "MITS Student Academic Trend & CGPA Forecaster",
          "description": "Statistical predictive regression model analyzing attendance rates, lab practicals, and mid-sem performance.",
          "repoUrl": "https://github.com/om-chaturvedi/student-grade-predictor",
          "techNotes": [
            "Python",
            "Pandas",
            "Scikit-Learn",
            "Streamlit"
          ]
        },
        {
          "id": "BTIR25O1036-proj-2",
          "title": "Campus Electricity & Energy Consumption Analyzer",
          "description": "Time-series forecasting model for academic block power usage using historical smart-meter logs.",
          "repoUrl": "https://github.com/om-chaturvedi/energy-analyzer",
          "techNotes": [
            "Python",
            "Prophet",
            "Pandas",
            "Matplotlib"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1036-1",
          "title": "Data Scientist Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1036-0",
          "name": "IBM Data Science Professional Certificate",
          "issuer": "Coursera / IBM",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1036/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 97,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1037",
      "googleSub": "google-sub-btir25o1037",
      "email": "25ir1pa37@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Palak Dhakad",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1037",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1037",
      "enrolmentNumber": "BTIR25O1037",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Female"
    },
    "profile": {
      "studentId": "BTIR25O1037",
      "headline": "Backend Engineer | Python, FastAPI, Docker, PostgreSQL | B.Tech AIR",
      "primaryDomain": "Backend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Specializing in high-performance asynchronous REST APIs, PostgreSQL schema design, and microservices containerization with Docker.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Backend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "palak-dhakad_mits",
        "codeforces": "palak-dhakad_code",
        "github": "palak-dhakad"
      },
      "githubUrl": "https://github.com/palak-dhakad",
      "linkedinUrl": "https://www.linkedin.com/in/palak-dhakad-mits",
      "portfolioUrl": "https://palak-dhakad.dev",
      "resumeFileName": "palak_dhakad_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 21,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1037-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1037-1",
          "name": "FastAPI",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1037-2",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1037-3",
          "name": "Docker",
          "proficiency": "Intermediate",
          "category": "DevOps"
        },
        {
          "id": "sk-BTIR25O1037-4",
          "name": "REST APIs",
          "proficiency": "Advanced",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1037-5",
          "name": "Redis",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "REST APIs",
        "Redis",
        "Git"
      ],
      "interests": [
        "Backend Architecture",
        "Distributed Systems",
        "Cloud Native",
        "Hackathons",
        "Microservices"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Backend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1037-proj-1",
          "title": "MITS Campus Event Notification Service",
          "description": "High-throughput async event streaming engine using FastAPI, Redis pub/sub, and PostgreSQL.",
          "repoUrl": "https://github.com/palak-dhakad/mits-event-stream",
          "liveUrl": "https://events-mits.onrender.com",
          "techNotes": [
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "Docker"
          ]
        },
        {
          "id": "BTIR25O1037-proj-2",
          "title": "Automated Syllabus & Document Retrieval API",
          "description": "Vector-indexed document search microservice for university exam guidelines.",
          "repoUrl": "https://github.com/palak-dhakad/syllabus-retriever",
          "techNotes": [
            "Python",
            "SQLAlchemy",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1037-1",
          "title": "Backend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1037-0",
          "name": "Meta Backend Developer Professional Certificate",
          "issuer": "Coursera / Meta",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1037/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 86,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1038",
      "googleSub": "google-sub-btir25o1038",
      "email": "25ir1pa38@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Paranjay Rathore",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1038",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1038",
      "enrolmentNumber": "BTIR25O1038",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1038",
      "headline": "Full Stack Developer | React, TypeScript, FastAPI, Tailwind | B.Tech AIR",
      "primaryDomain": "Web Development",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Building end-to-end responsive web applications with TypeScript, modern React frontend architecture, and robust Python/Node backends.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Web Development and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "paranjay-rathore_mits",
        "codeforces": "paranjay-rathore_code",
        "github": "paranjay-rathore"
      },
      "githubUrl": "https://github.com/paranjay-rathore",
      "linkedinUrl": "https://www.linkedin.com/in/paranjay-rathore-mits",
      "portfolioUrl": "https://paranjay-rathore.dev",
      "resumeFileName": "paranjay_rathore_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 22,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1038-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1038-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1038-2",
          "name": "Python",
          "proficiency": "Intermediate",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1038-3",
          "name": "Node.js",
          "proficiency": "Intermediate",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1038-4",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1038-5",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "FastAPI",
        "Node.js",
        "PostgreSQL",
        "Vite"
      ],
      "interests": [
        "Full Stack Apps",
        "UI/UX Design",
        "Hackathons",
        "Open Source",
        "Progressive Web Apps"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Web Development"
      ],
      "projects": [
        {
          "id": "BTIR25O1038-proj-1",
          "title": "CampusSync \u2014 MITS Collaborative Workspace",
          "description": "Full-stack collaboration hub for semester project teams with real-time markdown docs and task boards.",
          "repoUrl": "https://github.com/paranjay-rathore/campussync-mits",
          "liveUrl": "https://campussync.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "FastAPI"
          ]
        },
        {
          "id": "BTIR25O1038-proj-2",
          "title": "SIH Hackathon Team Matcher",
          "description": "Interactive peer matching tool filtering students by tech stack and hackathon availability.",
          "repoUrl": "https://github.com/paranjay-rathore/sih-team-matcher",
          "techNotes": [
            "React",
            "TypeScript",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1038-1",
          "title": "Full Stack Developer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1038-0",
          "name": "Full Stack Web Development with React",
          "issuer": "Coursera / HKUST",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1038/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 87,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1039",
      "googleSub": "google-sub-btir25o1039",
      "email": "25ir1pi39@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Piyush Pal",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1039",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1039",
      "enrolmentNumber": "BTIR25O1039",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1039",
      "headline": "Machine Learning Engineer | PyTorch, Computer Vision, Deep Learning | B.Tech AIR",
      "primaryDomain": "Artificial Intelligence",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Researching convolutional vision models, neural network optimization, and deploying lightweight AI models to edge accelerators.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Artificial Intelligence and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "piyush-pal_mits",
        "codeforces": "piyush-pal_code",
        "github": "piyush-pal"
      },
      "githubUrl": "https://github.com/piyush-pal",
      "linkedinUrl": "https://www.linkedin.com/in/piyush-pal-mits",
      "portfolioUrl": "https://piyush-pal.dev",
      "resumeFileName": "piyush_pal_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 23,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1039-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1039-1",
          "name": "PyTorch",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1039-2",
          "name": "Computer Vision",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1039-3",
          "name": "Deep Learning",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1039-4",
          "name": "TensorFlow",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1039-5",
          "name": "OpenCV",
          "proficiency": "Advanced",
          "category": "Computer Vision"
        }
      ],
      "techStack": [
        "Python",
        "PyTorch",
        "TensorFlow",
        "OpenCV",
        "NumPy",
        "Scikit-Learn",
        "CUDA"
      ],
      "interests": [
        "Neural Networks",
        "Computer Vision",
        "Generative AI",
        "Medical Imaging",
        "Edge AI"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Artificial Intelligence"
      ],
      "projects": [
        {
          "id": "BTIR25O1039-proj-1",
          "title": "Autonomous Drone Visual Obstacle Avoidance",
          "description": "Real-time monocular depth estimation and collision avoidance model trained on custom outdoor campus datasets.",
          "repoUrl": "https://github.com/piyush-pal/uav-vision-nav",
          "techNotes": [
            "PyTorch",
            "OpenCV",
            "Python",
            "ROS2"
          ]
        },
        {
          "id": "BTIR25O1039-proj-2",
          "title": "MITS Handwritten Answer Sheet OCR & Grading",
          "description": "Transformer-based handwriting transcription pipeline for technical course answer scripts.",
          "repoUrl": "https://github.com/piyush-pal/answer-sheet-ocr",
          "techNotes": [
            "PyTorch",
            "Transformers",
            "FastAPI"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1039-1",
          "title": "Machine Learning Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1039-0",
          "name": "Deep Learning Specialization",
          "issuer": "Coursera / DeepLearning.AI",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1039/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 88,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1040",
      "googleSub": "google-sub-btir25o1040",
      "email": "25ir1pr40@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Pragya Gonekar",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1040",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1040",
      "enrolmentNumber": "BTIR25O1040",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Female"
    },
    "profile": {
      "studentId": "BTIR25O1040",
      "headline": "Robotics Engineer | ROS2, Gazebo, C++, SLAM, TurtleBot3 | B.Tech AIR",
      "primaryDomain": "Robotics & Embedded Systems",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Hands-on practical experience in ROS2 navigation stacks (Nav2), 2D/3D LIDAR SLAM, and differential drive kinematics in the CAI Robotics Lab.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Robotics & Embedded Systems and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "pragya-gonekar_mits",
        "codeforces": "pragya-gonekar_code",
        "github": "pragya-gonekar"
      },
      "githubUrl": "https://github.com/pragya-gonekar",
      "linkedinUrl": "https://www.linkedin.com/in/pragya-gonekar-mits",
      "portfolioUrl": "https://pragya-gonekar.dev",
      "resumeFileName": "pragya_gonekar_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 24,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1040-0",
          "name": "ROS2",
          "proficiency": "Advanced",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1040-1",
          "name": "C++",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1040-2",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1040-3",
          "name": "Gazebo",
          "proficiency": "Intermediate",
          "category": "Simulation"
        },
        {
          "id": "sk-BTIR25O1040-4",
          "name": "SLAM",
          "proficiency": "Intermediate",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1040-5",
          "name": "Embedded Systems",
          "proficiency": "Intermediate",
          "category": "Hardware"
        }
      ],
      "techStack": [
        "ROS2 Humble",
        "C++",
        "Python",
        "Gazebo",
        "Nav2",
        "Linux",
        "Micro-ROS"
      ],
      "interests": [
        "Mobile Robotics",
        "Autonomous Navigation",
        "Kinematics",
        "Drone Swarms",
        "LIDAR Perception"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Robotics & Embedded Systems"
      ],
      "projects": [
        {
          "id": "BTIR25O1040-proj-1",
          "title": "Autonomous Campus Guide Rover",
          "description": "TurtleBot3-based navigation rover mapping CAI ground floor with Cartographer SLAM and dynamic obstacle avoidance.",
          "repoUrl": "https://github.com/pragya-gonekar/campus-guide-rover",
          "techNotes": [
            "ROS2",
            "C++",
            "Nav2",
            "Gazebo"
          ]
        },
        {
          "id": "BTIR25O1040-proj-2",
          "title": "4-DOF Robotic Arm Trajectory Planner",
          "description": "Inverse kinematics and trajectory interpolation software with MoveIt2 simulation for pick-and-place tasks.",
          "repoUrl": "https://github.com/pragya-gonekar/arm-trajectory-planner",
          "techNotes": [
            "Python",
            "MoveIt2",
            "ROS2"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1040-1",
          "title": "Robotics & Autonomous Systems Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1040-0",
          "name": "ROS2 Basics & Autonomous Navigation",
          "issuer": "ConstructSim / ROS Industrial",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1040/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 89,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1041",
      "googleSub": "google-sub-btir25o1041",
      "email": "25ir1pr41@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Prakhar Saulakhe",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1041",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1041",
      "enrolmentNumber": "BTIR25O1041",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1041",
      "headline": "Frontend Engineer | React, Next.js, TypeScript, UI/UX Design | B.Tech AIR",
      "primaryDomain": "Frontend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Crafting sleek dark-mode design systems, responsive web applications, and intuitive interactive user experiences in React and Figma.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Frontend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "prakhar-saulakhe_mits",
        "codeforces": "prakhar-saulakhe_code",
        "github": "prakhar-saulakhe"
      },
      "githubUrl": "https://github.com/prakhar-saulakhe",
      "linkedinUrl": "https://www.linkedin.com/in/prakhar-saulakhe-mits",
      "portfolioUrl": "https://prakhar-saulakhe.dev",
      "resumeFileName": "prakhar_saulakhe_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 15,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1041-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1041-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1041-2",
          "name": "Next.js",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1041-3",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1041-4",
          "name": "UI/UX Design",
          "proficiency": "Advanced",
          "category": "Design"
        },
        {
          "id": "sk-BTIR25O1041-5",
          "name": "Figma",
          "proficiency": "Advanced",
          "category": "Design"
        }
      ],
      "techStack": [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Figma",
        "Framer Motion",
        "Vite"
      ],
      "interests": [
        "Design Systems",
        "Micro-Interactions",
        "Web Accessibility",
        "Hackathons",
        "Design Engineering"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Frontend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1041-proj-1",
          "title": "MITS Pulse \u2014 Campus Activity Dashboard",
          "description": "Glassmorphic responsive dashboard displaying live campus events, academic timetables, and noticeboard feeds.",
          "repoUrl": "https://github.com/prakhar-saulakhe/mits-pulse",
          "liveUrl": "https://mitspulse.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
          ]
        },
        {
          "id": "BTIR25O1041-proj-2",
          "title": "AcademIQ Design System",
          "description": "Accessible WCAG 2.1 AA compliant UI component library created in Figma and implemented in React.",
          "repoUrl": "https://github.com/prakhar-saulakhe/academiq-ui",
          "techNotes": [
            "React",
            "Tailwind",
            "Storybook"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1041-1",
          "title": "Frontend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1041-0",
          "name": "Google UX Design Professional Certificate",
          "issuer": "Coursera / Google",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1041/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 90,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1042",
      "googleSub": "google-sub-btir25o1042",
      "email": "25ir1pr42@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Prakriti Kulkarni",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1042",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1042",
      "enrolmentNumber": "BTIR25O1042",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Female"
    },
    "profile": {
      "studentId": "BTIR25O1042",
      "headline": "Data Scientist | Python, Pandas, SQL, Scikit-Learn, Analytics | B.Tech AIR",
      "primaryDomain": "Data Science",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Analyzing large multivariate institutional datasets, building predictive machine learning models, and turning raw data into actionable dashboards.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Data Science and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "prakriti-kulkarni_mits",
        "codeforces": "prakriti-kulkarni_code",
        "github": "prakriti-kulkarni"
      },
      "githubUrl": "https://github.com/prakriti-kulkarni",
      "linkedinUrl": "https://www.linkedin.com/in/prakriti-kulkarni-mits",
      "portfolioUrl": "https://prakriti-kulkarni.dev",
      "resumeFileName": "prakriti_kulkarni_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 16,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1042-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1042-1",
          "name": "Pandas",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1042-2",
          "name": "NumPy",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1042-3",
          "name": "SQL",
          "proficiency": "Advanced",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1042-4",
          "name": "Scikit-Learn",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1042-5",
          "name": "Data Visualization",
          "proficiency": "Advanced",
          "category": "Analytics"
        }
      ],
      "techStack": [
        "Python",
        "Pandas",
        "NumPy",
        "SQL",
        "Scikit-Learn",
        "Matplotlib",
        "Seaborn",
        "PowerBI"
      ],
      "interests": [
        "Predictive Modeling",
        "Exploratory Data Analysis",
        "Statistical Inference",
        "Financial Analytics"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Data Science"
      ],
      "projects": [
        {
          "id": "BTIR25O1042-proj-1",
          "title": "MITS Student Academic Trend & CGPA Forecaster",
          "description": "Statistical predictive regression model analyzing attendance rates, lab practicals, and mid-sem performance.",
          "repoUrl": "https://github.com/prakriti-kulkarni/student-grade-predictor",
          "techNotes": [
            "Python",
            "Pandas",
            "Scikit-Learn",
            "Streamlit"
          ]
        },
        {
          "id": "BTIR25O1042-proj-2",
          "title": "Campus Electricity & Energy Consumption Analyzer",
          "description": "Time-series forecasting model for academic block power usage using historical smart-meter logs.",
          "repoUrl": "https://github.com/prakriti-kulkarni/energy-analyzer",
          "techNotes": [
            "Python",
            "Prophet",
            "Pandas",
            "Matplotlib"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1042-1",
          "title": "Data Scientist Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1042-0",
          "name": "IBM Data Science Professional Certificate",
          "issuer": "Coursera / IBM",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1042/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 91,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1043",
      "googleSub": "google-sub-btir25o1043",
      "email": "25ir1pr43@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Prashant Sharma",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1043",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1043",
      "enrolmentNumber": "BTIR25O1043",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1043",
      "headline": "Backend Engineer | Python, FastAPI, Docker, PostgreSQL | B.Tech AIR",
      "primaryDomain": "Backend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Specializing in high-performance asynchronous REST APIs, PostgreSQL schema design, and microservices containerization with Docker.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Backend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "prashant-sharma_mits",
        "codeforces": "prashant-sharma_code",
        "github": "prashant-sharma"
      },
      "githubUrl": "https://github.com/prashant-sharma",
      "linkedinUrl": "https://www.linkedin.com/in/prashant-sharma-mits",
      "portfolioUrl": "https://prashant-sharma.dev",
      "resumeFileName": "prashant_sharma_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 17,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1043-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1043-1",
          "name": "FastAPI",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1043-2",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1043-3",
          "name": "Docker",
          "proficiency": "Intermediate",
          "category": "DevOps"
        },
        {
          "id": "sk-BTIR25O1043-4",
          "name": "REST APIs",
          "proficiency": "Advanced",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1043-5",
          "name": "Redis",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "REST APIs",
        "Redis",
        "Git"
      ],
      "interests": [
        "Backend Architecture",
        "Distributed Systems",
        "Cloud Native",
        "Hackathons",
        "Microservices"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Backend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1043-proj-1",
          "title": "MITS Campus Event Notification Service",
          "description": "High-throughput async event streaming engine using FastAPI, Redis pub/sub, and PostgreSQL.",
          "repoUrl": "https://github.com/prashant-sharma/mits-event-stream",
          "liveUrl": "https://events-mits.onrender.com",
          "techNotes": [
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "Docker"
          ]
        },
        {
          "id": "BTIR25O1043-proj-2",
          "title": "Automated Syllabus & Document Retrieval API",
          "description": "Vector-indexed document search microservice for university exam guidelines.",
          "repoUrl": "https://github.com/prashant-sharma/syllabus-retriever",
          "techNotes": [
            "Python",
            "SQLAlchemy",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1043-1",
          "title": "Backend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1043-0",
          "name": "Meta Backend Developer Professional Certificate",
          "issuer": "Coursera / Meta",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1043/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 92,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1044",
      "googleSub": "google-sub-btir25o1044",
      "email": "25ir1pr44@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Prashant Vishwakarma",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1044",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1044",
      "enrolmentNumber": "BTIR25O1044",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1044",
      "headline": "Full Stack Developer | React, TypeScript, FastAPI, Tailwind | B.Tech AIR",
      "primaryDomain": "Web Development",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Building end-to-end responsive web applications with TypeScript, modern React frontend architecture, and robust Python/Node backends.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Web Development and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "prashant-vishwakarma_mits",
        "codeforces": "prashant-vishwakarma_code",
        "github": "prashant-vishwakarma"
      },
      "githubUrl": "https://github.com/prashant-vishwakarma",
      "linkedinUrl": "https://www.linkedin.com/in/prashant-vishwakarma-mits",
      "portfolioUrl": "https://prashant-vishwakarma.dev",
      "resumeFileName": "prashant_vishwakarma_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 18,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1044-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1044-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1044-2",
          "name": "Python",
          "proficiency": "Intermediate",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1044-3",
          "name": "Node.js",
          "proficiency": "Intermediate",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1044-4",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1044-5",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "FastAPI",
        "Node.js",
        "PostgreSQL",
        "Vite"
      ],
      "interests": [
        "Full Stack Apps",
        "UI/UX Design",
        "Hackathons",
        "Open Source",
        "Progressive Web Apps"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Web Development"
      ],
      "projects": [
        {
          "id": "BTIR25O1044-proj-1",
          "title": "CampusSync \u2014 MITS Collaborative Workspace",
          "description": "Full-stack collaboration hub for semester project teams with real-time markdown docs and task boards.",
          "repoUrl": "https://github.com/prashant-vishwakarma/campussync-mits",
          "liveUrl": "https://campussync.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "FastAPI"
          ]
        },
        {
          "id": "BTIR25O1044-proj-2",
          "title": "SIH Hackathon Team Matcher",
          "description": "Interactive peer matching tool filtering students by tech stack and hackathon availability.",
          "repoUrl": "https://github.com/prashant-vishwakarma/sih-team-matcher",
          "techNotes": [
            "React",
            "TypeScript",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1044-1",
          "title": "Full Stack Developer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1044-0",
          "name": "Full Stack Web Development with React",
          "issuer": "Coursera / HKUST",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1044/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 93,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1045",
      "googleSub": "google-sub-btir25o1045",
      "email": "25ir1pr45@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Praveen Prasad",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1045",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1045",
      "enrolmentNumber": "BTIR25O1045",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1045",
      "headline": "Machine Learning Engineer | PyTorch, Computer Vision, Deep Learning | B.Tech AIR",
      "primaryDomain": "Artificial Intelligence",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Researching convolutional vision models, neural network optimization, and deploying lightweight AI models to edge accelerators.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Artificial Intelligence and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "praveen-prasad_mits",
        "codeforces": "praveen-prasad_code",
        "github": "praveen-prasad"
      },
      "githubUrl": "https://github.com/praveen-prasad",
      "linkedinUrl": "https://www.linkedin.com/in/praveen-prasad-mits",
      "portfolioUrl": "https://praveen-prasad.dev",
      "resumeFileName": "praveen_prasad_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 19,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1045-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1045-1",
          "name": "PyTorch",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1045-2",
          "name": "Computer Vision",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1045-3",
          "name": "Deep Learning",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1045-4",
          "name": "TensorFlow",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1045-5",
          "name": "OpenCV",
          "proficiency": "Advanced",
          "category": "Computer Vision"
        }
      ],
      "techStack": [
        "Python",
        "PyTorch",
        "TensorFlow",
        "OpenCV",
        "NumPy",
        "Scikit-Learn",
        "CUDA"
      ],
      "interests": [
        "Neural Networks",
        "Computer Vision",
        "Generative AI",
        "Medical Imaging",
        "Edge AI"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Artificial Intelligence"
      ],
      "projects": [
        {
          "id": "BTIR25O1045-proj-1",
          "title": "Autonomous Drone Visual Obstacle Avoidance",
          "description": "Real-time monocular depth estimation and collision avoidance model trained on custom outdoor campus datasets.",
          "repoUrl": "https://github.com/praveen-prasad/uav-vision-nav",
          "techNotes": [
            "PyTorch",
            "OpenCV",
            "Python",
            "ROS2"
          ]
        },
        {
          "id": "BTIR25O1045-proj-2",
          "title": "MITS Handwritten Answer Sheet OCR & Grading",
          "description": "Transformer-based handwriting transcription pipeline for technical course answer scripts.",
          "repoUrl": "https://github.com/praveen-prasad/answer-sheet-ocr",
          "techNotes": [
            "PyTorch",
            "Transformers",
            "FastAPI"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1045-1",
          "title": "Machine Learning Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1045-0",
          "name": "Deep Learning Specialization",
          "issuer": "Coursera / DeepLearning.AI",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1045/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 94,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1046",
      "googleSub": "google-sub-btir25o1046",
      "email": "25ir1ra46@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Raj Kushwah",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1046",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1046",
      "enrolmentNumber": "BTIR25O1046",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1046",
      "headline": "Robotics Engineer | ROS2, Gazebo, C++, SLAM, TurtleBot3 | B.Tech AIR",
      "primaryDomain": "Robotics & Embedded Systems",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Hands-on practical experience in ROS2 navigation stacks (Nav2), 2D/3D LIDAR SLAM, and differential drive kinematics in the CAI Robotics Lab.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Robotics & Embedded Systems and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "raj-kushwah_mits",
        "codeforces": "raj-kushwah_code",
        "github": "raj-kushwah"
      },
      "githubUrl": "https://github.com/raj-kushwah",
      "linkedinUrl": "https://www.linkedin.com/in/raj-kushwah-mits",
      "portfolioUrl": "https://raj-kushwah.dev",
      "resumeFileName": "raj_kushwah_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 20,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1046-0",
          "name": "ROS2",
          "proficiency": "Advanced",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1046-1",
          "name": "C++",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1046-2",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1046-3",
          "name": "Gazebo",
          "proficiency": "Intermediate",
          "category": "Simulation"
        },
        {
          "id": "sk-BTIR25O1046-4",
          "name": "SLAM",
          "proficiency": "Intermediate",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1046-5",
          "name": "Embedded Systems",
          "proficiency": "Intermediate",
          "category": "Hardware"
        }
      ],
      "techStack": [
        "ROS2 Humble",
        "C++",
        "Python",
        "Gazebo",
        "Nav2",
        "Linux",
        "Micro-ROS"
      ],
      "interests": [
        "Mobile Robotics",
        "Autonomous Navigation",
        "Kinematics",
        "Drone Swarms",
        "LIDAR Perception"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Robotics & Embedded Systems"
      ],
      "projects": [
        {
          "id": "BTIR25O1046-proj-1",
          "title": "Autonomous Campus Guide Rover",
          "description": "TurtleBot3-based navigation rover mapping CAI ground floor with Cartographer SLAM and dynamic obstacle avoidance.",
          "repoUrl": "https://github.com/raj-kushwah/campus-guide-rover",
          "techNotes": [
            "ROS2",
            "C++",
            "Nav2",
            "Gazebo"
          ]
        },
        {
          "id": "BTIR25O1046-proj-2",
          "title": "4-DOF Robotic Arm Trajectory Planner",
          "description": "Inverse kinematics and trajectory interpolation software with MoveIt2 simulation for pick-and-place tasks.",
          "repoUrl": "https://github.com/raj-kushwah/arm-trajectory-planner",
          "techNotes": [
            "Python",
            "MoveIt2",
            "ROS2"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1046-1",
          "title": "Robotics & Autonomous Systems Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1046-0",
          "name": "ROS2 Basics & Autonomous Navigation",
          "issuer": "ConstructSim / ROS Industrial",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1046/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 95,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1047",
      "googleSub": "google-sub-btir25o1047",
      "email": "25ir1ra47@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Raj Tanwar",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1047",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1047",
      "enrolmentNumber": "BTIR25O1047",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1047",
      "headline": "Frontend Engineer | React, Next.js, TypeScript, UI/UX Design | B.Tech AIR",
      "primaryDomain": "Frontend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Crafting sleek dark-mode design systems, responsive web applications, and intuitive interactive user experiences in React and Figma.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Frontend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "raj-tanwar_mits",
        "codeforces": "raj-tanwar_code",
        "github": "raj-tanwar"
      },
      "githubUrl": "https://github.com/raj-tanwar",
      "linkedinUrl": "https://www.linkedin.com/in/raj-tanwar-mits",
      "portfolioUrl": "https://raj-tanwar.dev",
      "resumeFileName": "raj_tanwar_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 21,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1047-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1047-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1047-2",
          "name": "Next.js",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1047-3",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1047-4",
          "name": "UI/UX Design",
          "proficiency": "Advanced",
          "category": "Design"
        },
        {
          "id": "sk-BTIR25O1047-5",
          "name": "Figma",
          "proficiency": "Advanced",
          "category": "Design"
        }
      ],
      "techStack": [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Figma",
        "Framer Motion",
        "Vite"
      ],
      "interests": [
        "Design Systems",
        "Micro-Interactions",
        "Web Accessibility",
        "Hackathons",
        "Design Engineering"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Frontend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1047-proj-1",
          "title": "MITS Pulse \u2014 Campus Activity Dashboard",
          "description": "Glassmorphic responsive dashboard displaying live campus events, academic timetables, and noticeboard feeds.",
          "repoUrl": "https://github.com/raj-tanwar/mits-pulse",
          "liveUrl": "https://mitspulse.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
          ]
        },
        {
          "id": "BTIR25O1047-proj-2",
          "title": "AcademIQ Design System",
          "description": "Accessible WCAG 2.1 AA compliant UI component library created in Figma and implemented in React.",
          "repoUrl": "https://github.com/raj-tanwar/academiq-ui",
          "techNotes": [
            "React",
            "Tailwind",
            "Storybook"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1047-1",
          "title": "Frontend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1047-0",
          "name": "Google UX Design Professional Certificate",
          "issuer": "Coursera / Google",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1047/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 96,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1048",
      "googleSub": "google-sub-btir25o1048",
      "email": "25ir1ra48@mtsgwl.ac.in",
      "role": "student",
      "fullName": "Rajvardhan Singh Tomar",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1048",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1048",
      "enrolmentNumber": "BTIR25O1048",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1048",
      "headline": "Data Scientist | Python, Pandas, SQL, Scikit-Learn, Analytics | B.Tech AIR",
      "primaryDomain": "Data Science",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Analyzing large multivariate institutional datasets, building predictive machine learning models, and turning raw data into actionable dashboards.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Data Science and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "rajvardhan-singh-tomar_mits",
        "codeforces": "rajvardhan-singh-tomar_code",
        "github": "rajvardhan-singh-tomar"
      },
      "githubUrl": "https://github.com/rajvardhan-singh-tomar",
      "linkedinUrl": "https://www.linkedin.com/in/rajvardhan-singh-tomar-mits",
      "portfolioUrl": "https://rajvardhan-singh-tomar.dev",
      "resumeFileName": "rajvardhan_singh_tomar_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 22,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1048-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1048-1",
          "name": "Pandas",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1048-2",
          "name": "NumPy",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1048-3",
          "name": "SQL",
          "proficiency": "Advanced",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1048-4",
          "name": "Scikit-Learn",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1048-5",
          "name": "Data Visualization",
          "proficiency": "Advanced",
          "category": "Analytics"
        }
      ],
      "techStack": [
        "Python",
        "Pandas",
        "NumPy",
        "SQL",
        "Scikit-Learn",
        "Matplotlib",
        "Seaborn",
        "PowerBI"
      ],
      "interests": [
        "Predictive Modeling",
        "Exploratory Data Analysis",
        "Statistical Inference",
        "Financial Analytics"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Data Science"
      ],
      "projects": [
        {
          "id": "BTIR25O1048-proj-1",
          "title": "MITS Student Academic Trend & CGPA Forecaster",
          "description": "Statistical predictive regression model analyzing attendance rates, lab practicals, and mid-sem performance.",
          "repoUrl": "https://github.com/rajvardhan-singh-tomar/student-grade-predictor",
          "techNotes": [
            "Python",
            "Pandas",
            "Scikit-Learn",
            "Streamlit"
          ]
        },
        {
          "id": "BTIR25O1048-proj-2",
          "title": "Campus Electricity & Energy Consumption Analyzer",
          "description": "Time-series forecasting model for academic block power usage using historical smart-meter logs.",
          "repoUrl": "https://github.com/rajvardhan-singh-tomar/energy-analyzer",
          "techNotes": [
            "Python",
            "Prophet",
            "Pandas",
            "Matplotlib"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1048-1",
          "title": "Data Scientist Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1048-0",
          "name": "IBM Data Science Professional Certificate",
          "issuer": "Coursera / IBM",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1048/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 97,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1049",
      "googleSub": "google-sub-btir25o1049",
      "email": "25ir1ra49@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Ranjeet Kumar Suryawanshi",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1049",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1049",
      "enrolmentNumber": "BTIR25O1049",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1049",
      "headline": "Backend Engineer | Python, FastAPI, Docker, PostgreSQL | B.Tech AIR",
      "primaryDomain": "Backend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Specializing in high-performance asynchronous REST APIs, PostgreSQL schema design, and microservices containerization with Docker.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Backend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "ranjeet-kumar-suryawanshi_mits",
        "codeforces": "ranjeet-kumar-suryawanshi_code",
        "github": "ranjeet-kumar-suryawanshi"
      },
      "githubUrl": "https://github.com/ranjeet-kumar-suryawanshi",
      "linkedinUrl": "https://www.linkedin.com/in/ranjeet-kumar-suryawanshi-mits",
      "portfolioUrl": "https://ranjeet-kumar-suryawanshi.dev",
      "resumeFileName": "ranjeet_kumar_suryawanshi_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 23,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1049-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1049-1",
          "name": "FastAPI",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1049-2",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1049-3",
          "name": "Docker",
          "proficiency": "Intermediate",
          "category": "DevOps"
        },
        {
          "id": "sk-BTIR25O1049-4",
          "name": "REST APIs",
          "proficiency": "Advanced",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1049-5",
          "name": "Redis",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "REST APIs",
        "Redis",
        "Git"
      ],
      "interests": [
        "Backend Architecture",
        "Distributed Systems",
        "Cloud Native",
        "Hackathons",
        "Microservices"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Backend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1049-proj-1",
          "title": "MITS Campus Event Notification Service",
          "description": "High-throughput async event streaming engine using FastAPI, Redis pub/sub, and PostgreSQL.",
          "repoUrl": "https://github.com/ranjeet-kumar-suryawanshi/mits-event-stream",
          "liveUrl": "https://events-mits.onrender.com",
          "techNotes": [
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "Docker"
          ]
        },
        {
          "id": "BTIR25O1049-proj-2",
          "title": "Automated Syllabus & Document Retrieval API",
          "description": "Vector-indexed document search microservice for university exam guidelines.",
          "repoUrl": "https://github.com/ranjeet-kumar-suryawanshi/syllabus-retriever",
          "techNotes": [
            "Python",
            "SQLAlchemy",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1049-1",
          "title": "Backend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1049-0",
          "name": "Meta Backend Developer Professional Certificate",
          "issuer": "Coursera / Meta",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1049/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 86,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1050",
      "googleSub": "google-sub-btir25o1050",
      "email": "25ir1ra50@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Ravi Rawat",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1050",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1050",
      "enrolmentNumber": "BTIR25O1050",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Female"
    },
    "profile": {
      "studentId": "BTIR25O1050",
      "headline": "Full Stack Developer | React, TypeScript, FastAPI, Tailwind | B.Tech AIR",
      "primaryDomain": "Web Development",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Building end-to-end responsive web applications with TypeScript, modern React frontend architecture, and robust Python/Node backends.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Web Development and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "ravi-rawat_mits",
        "codeforces": "ravi-rawat_code",
        "github": "ravi-rawat"
      },
      "githubUrl": "https://github.com/ravi-rawat",
      "linkedinUrl": "https://www.linkedin.com/in/ravi-rawat-mits",
      "portfolioUrl": "https://ravi-rawat.dev",
      "resumeFileName": "ravi_rawat_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 24,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1050-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1050-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1050-2",
          "name": "Python",
          "proficiency": "Intermediate",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1050-3",
          "name": "Node.js",
          "proficiency": "Intermediate",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1050-4",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1050-5",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "FastAPI",
        "Node.js",
        "PostgreSQL",
        "Vite"
      ],
      "interests": [
        "Full Stack Apps",
        "UI/UX Design",
        "Hackathons",
        "Open Source",
        "Progressive Web Apps"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Web Development"
      ],
      "projects": [
        {
          "id": "BTIR25O1050-proj-1",
          "title": "CampusSync \u2014 MITS Collaborative Workspace",
          "description": "Full-stack collaboration hub for semester project teams with real-time markdown docs and task boards.",
          "repoUrl": "https://github.com/ravi-rawat/campussync-mits",
          "liveUrl": "https://campussync.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "FastAPI"
          ]
        },
        {
          "id": "BTIR25O1050-proj-2",
          "title": "SIH Hackathon Team Matcher",
          "description": "Interactive peer matching tool filtering students by tech stack and hackathon availability.",
          "repoUrl": "https://github.com/ravi-rawat/sih-team-matcher",
          "techNotes": [
            "React",
            "TypeScript",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1050-1",
          "title": "Full Stack Developer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1050-0",
          "name": "Full Stack Web Development with React",
          "issuer": "Coursera / HKUST",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1050/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 87,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1051",
      "googleSub": "google-sub-btir25o1051",
      "email": "25ir1sa51@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Sachin Jadhav",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1051",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1051",
      "enrolmentNumber": "BTIR25O1051",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1051",
      "headline": "Machine Learning Engineer | PyTorch, Computer Vision, Deep Learning | B.Tech AIR",
      "primaryDomain": "Artificial Intelligence",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Researching convolutional vision models, neural network optimization, and deploying lightweight AI models to edge accelerators.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Artificial Intelligence and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "sachin-jadhav_mits",
        "codeforces": "sachin-jadhav_code",
        "github": "sachin-jadhav"
      },
      "githubUrl": "https://github.com/sachin-jadhav",
      "linkedinUrl": "https://www.linkedin.com/in/sachin-jadhav-mits",
      "portfolioUrl": "https://sachin-jadhav.dev",
      "resumeFileName": "sachin_jadhav_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 15,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1051-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1051-1",
          "name": "PyTorch",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1051-2",
          "name": "Computer Vision",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1051-3",
          "name": "Deep Learning",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1051-4",
          "name": "TensorFlow",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1051-5",
          "name": "OpenCV",
          "proficiency": "Advanced",
          "category": "Computer Vision"
        }
      ],
      "techStack": [
        "Python",
        "PyTorch",
        "TensorFlow",
        "OpenCV",
        "NumPy",
        "Scikit-Learn",
        "CUDA"
      ],
      "interests": [
        "Neural Networks",
        "Computer Vision",
        "Generative AI",
        "Medical Imaging",
        "Edge AI"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Artificial Intelligence"
      ],
      "projects": [
        {
          "id": "BTIR25O1051-proj-1",
          "title": "Autonomous Drone Visual Obstacle Avoidance",
          "description": "Real-time monocular depth estimation and collision avoidance model trained on custom outdoor campus datasets.",
          "repoUrl": "https://github.com/sachin-jadhav/uav-vision-nav",
          "techNotes": [
            "PyTorch",
            "OpenCV",
            "Python",
            "ROS2"
          ]
        },
        {
          "id": "BTIR25O1051-proj-2",
          "title": "MITS Handwritten Answer Sheet OCR & Grading",
          "description": "Transformer-based handwriting transcription pipeline for technical course answer scripts.",
          "repoUrl": "https://github.com/sachin-jadhav/answer-sheet-ocr",
          "techNotes": [
            "PyTorch",
            "Transformers",
            "FastAPI"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1051-1",
          "title": "Machine Learning Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1051-0",
          "name": "Deep Learning Specialization",
          "issuer": "Coursera / DeepLearning.AI",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1051/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 88,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1052",
      "googleSub": "google-sub-btir25o1052",
      "email": "25ir1sa52@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Sahil Kushwah",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1052",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1052",
      "enrolmentNumber": "BTIR25O1052",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1052",
      "headline": "Robotics Engineer | ROS2, Gazebo, C++, SLAM, TurtleBot3 | B.Tech AIR",
      "primaryDomain": "Robotics & Embedded Systems",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Hands-on practical experience in ROS2 navigation stacks (Nav2), 2D/3D LIDAR SLAM, and differential drive kinematics in the CAI Robotics Lab.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Robotics & Embedded Systems and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "sahil-kushwah_mits",
        "codeforces": "sahil-kushwah_code",
        "github": "sahil-kushwah"
      },
      "githubUrl": "https://github.com/sahil-kushwah",
      "linkedinUrl": "https://www.linkedin.com/in/sahil-kushwah-mits",
      "portfolioUrl": "https://sahil-kushwah.dev",
      "resumeFileName": "sahil_kushwah_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 16,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1052-0",
          "name": "ROS2",
          "proficiency": "Advanced",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1052-1",
          "name": "C++",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1052-2",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1052-3",
          "name": "Gazebo",
          "proficiency": "Intermediate",
          "category": "Simulation"
        },
        {
          "id": "sk-BTIR25O1052-4",
          "name": "SLAM",
          "proficiency": "Intermediate",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1052-5",
          "name": "Embedded Systems",
          "proficiency": "Intermediate",
          "category": "Hardware"
        }
      ],
      "techStack": [
        "ROS2 Humble",
        "C++",
        "Python",
        "Gazebo",
        "Nav2",
        "Linux",
        "Micro-ROS"
      ],
      "interests": [
        "Mobile Robotics",
        "Autonomous Navigation",
        "Kinematics",
        "Drone Swarms",
        "LIDAR Perception"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Robotics & Embedded Systems"
      ],
      "projects": [
        {
          "id": "BTIR25O1052-proj-1",
          "title": "Autonomous Campus Guide Rover",
          "description": "TurtleBot3-based navigation rover mapping CAI ground floor with Cartographer SLAM and dynamic obstacle avoidance.",
          "repoUrl": "https://github.com/sahil-kushwah/campus-guide-rover",
          "techNotes": [
            "ROS2",
            "C++",
            "Nav2",
            "Gazebo"
          ]
        },
        {
          "id": "BTIR25O1052-proj-2",
          "title": "4-DOF Robotic Arm Trajectory Planner",
          "description": "Inverse kinematics and trajectory interpolation software with MoveIt2 simulation for pick-and-place tasks.",
          "repoUrl": "https://github.com/sahil-kushwah/arm-trajectory-planner",
          "techNotes": [
            "Python",
            "MoveIt2",
            "ROS2"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1052-1",
          "title": "Robotics & Autonomous Systems Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1052-0",
          "name": "ROS2 Basics & Autonomous Navigation",
          "issuer": "ConstructSim / ROS Industrial",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1052/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 89,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1053",
      "googleSub": "google-sub-btir25o1053",
      "email": "25ir1sa53@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Sameep Patel",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1053",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1053",
      "enrolmentNumber": "BTIR25O1053",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1053",
      "headline": "Frontend Engineer | React, Next.js, TypeScript, UI/UX Design | B.Tech AIR",
      "primaryDomain": "Frontend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Crafting sleek dark-mode design systems, responsive web applications, and intuitive interactive user experiences in React and Figma.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Frontend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "sameep-patel_mits",
        "codeforces": "sameep-patel_code",
        "github": "sameep-patel"
      },
      "githubUrl": "https://github.com/sameep-patel",
      "linkedinUrl": "https://www.linkedin.com/in/sameep-patel-mits",
      "portfolioUrl": "https://sameep-patel.dev",
      "resumeFileName": "sameep_patel_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 17,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1053-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1053-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1053-2",
          "name": "Next.js",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1053-3",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1053-4",
          "name": "UI/UX Design",
          "proficiency": "Advanced",
          "category": "Design"
        },
        {
          "id": "sk-BTIR25O1053-5",
          "name": "Figma",
          "proficiency": "Advanced",
          "category": "Design"
        }
      ],
      "techStack": [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Figma",
        "Framer Motion",
        "Vite"
      ],
      "interests": [
        "Design Systems",
        "Micro-Interactions",
        "Web Accessibility",
        "Hackathons",
        "Design Engineering"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Frontend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1053-proj-1",
          "title": "MITS Pulse \u2014 Campus Activity Dashboard",
          "description": "Glassmorphic responsive dashboard displaying live campus events, academic timetables, and noticeboard feeds.",
          "repoUrl": "https://github.com/sameep-patel/mits-pulse",
          "liveUrl": "https://mitspulse.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
          ]
        },
        {
          "id": "BTIR25O1053-proj-2",
          "title": "AcademIQ Design System",
          "description": "Accessible WCAG 2.1 AA compliant UI component library created in Figma and implemented in React.",
          "repoUrl": "https://github.com/sameep-patel/academiq-ui",
          "techNotes": [
            "React",
            "Tailwind",
            "Storybook"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1053-1",
          "title": "Frontend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1053-0",
          "name": "Google UX Design Professional Certificate",
          "issuer": "Coursera / Google",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1053/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 90,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1054",
      "googleSub": "google-sub-btir25o1054",
      "email": "25ir1sa54@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Saniya Sharma",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1054",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1054",
      "enrolmentNumber": "BTIR25O1054",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Female"
    },
    "profile": {
      "studentId": "BTIR25O1054",
      "headline": "Data Scientist | Python, Pandas, SQL, Scikit-Learn, Analytics | B.Tech AIR",
      "primaryDomain": "Data Science",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Analyzing large multivariate institutional datasets, building predictive machine learning models, and turning raw data into actionable dashboards.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Data Science and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "saniya-sharma_mits",
        "codeforces": "saniya-sharma_code",
        "github": "saniya-sharma"
      },
      "githubUrl": "https://github.com/saniya-sharma",
      "linkedinUrl": "https://www.linkedin.com/in/saniya-sharma-mits",
      "portfolioUrl": "https://saniya-sharma.dev",
      "resumeFileName": "saniya_sharma_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 18,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1054-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1054-1",
          "name": "Pandas",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1054-2",
          "name": "NumPy",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1054-3",
          "name": "SQL",
          "proficiency": "Advanced",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1054-4",
          "name": "Scikit-Learn",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1054-5",
          "name": "Data Visualization",
          "proficiency": "Advanced",
          "category": "Analytics"
        }
      ],
      "techStack": [
        "Python",
        "Pandas",
        "NumPy",
        "SQL",
        "Scikit-Learn",
        "Matplotlib",
        "Seaborn",
        "PowerBI"
      ],
      "interests": [
        "Predictive Modeling",
        "Exploratory Data Analysis",
        "Statistical Inference",
        "Financial Analytics"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Data Science"
      ],
      "projects": [
        {
          "id": "BTIR25O1054-proj-1",
          "title": "MITS Student Academic Trend & CGPA Forecaster",
          "description": "Statistical predictive regression model analyzing attendance rates, lab practicals, and mid-sem performance.",
          "repoUrl": "https://github.com/saniya-sharma/student-grade-predictor",
          "techNotes": [
            "Python",
            "Pandas",
            "Scikit-Learn",
            "Streamlit"
          ]
        },
        {
          "id": "BTIR25O1054-proj-2",
          "title": "Campus Electricity & Energy Consumption Analyzer",
          "description": "Time-series forecasting model for academic block power usage using historical smart-meter logs.",
          "repoUrl": "https://github.com/saniya-sharma/energy-analyzer",
          "techNotes": [
            "Python",
            "Prophet",
            "Pandas",
            "Matplotlib"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1054-1",
          "title": "Data Scientist Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1054-0",
          "name": "IBM Data Science Professional Certificate",
          "issuer": "Coursera / IBM",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1054/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 91,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1055",
      "googleSub": "google-sub-btir25o1055",
      "email": "25ir1sa55@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Sanjeev Pal",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1055",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1055",
      "enrolmentNumber": "BTIR25O1055",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1055",
      "headline": "Backend Engineer | Python, FastAPI, Docker, PostgreSQL | B.Tech AIR",
      "primaryDomain": "Backend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Specializing in high-performance asynchronous REST APIs, PostgreSQL schema design, and microservices containerization with Docker.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Backend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "sanjeev-pal_mits",
        "codeforces": "sanjeev-pal_code",
        "github": "sanjeev-pal"
      },
      "githubUrl": "https://github.com/sanjeev-pal",
      "linkedinUrl": "https://www.linkedin.com/in/sanjeev-pal-mits",
      "portfolioUrl": "https://sanjeev-pal.dev",
      "resumeFileName": "sanjeev_pal_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 19,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1055-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1055-1",
          "name": "FastAPI",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1055-2",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1055-3",
          "name": "Docker",
          "proficiency": "Intermediate",
          "category": "DevOps"
        },
        {
          "id": "sk-BTIR25O1055-4",
          "name": "REST APIs",
          "proficiency": "Advanced",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1055-5",
          "name": "Redis",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "REST APIs",
        "Redis",
        "Git"
      ],
      "interests": [
        "Backend Architecture",
        "Distributed Systems",
        "Cloud Native",
        "Hackathons",
        "Microservices"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Backend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1055-proj-1",
          "title": "MITS Campus Event Notification Service",
          "description": "High-throughput async event streaming engine using FastAPI, Redis pub/sub, and PostgreSQL.",
          "repoUrl": "https://github.com/sanjeev-pal/mits-event-stream",
          "liveUrl": "https://events-mits.onrender.com",
          "techNotes": [
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "Docker"
          ]
        },
        {
          "id": "BTIR25O1055-proj-2",
          "title": "Automated Syllabus & Document Retrieval API",
          "description": "Vector-indexed document search microservice for university exam guidelines.",
          "repoUrl": "https://github.com/sanjeev-pal/syllabus-retriever",
          "techNotes": [
            "Python",
            "SQLAlchemy",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1055-1",
          "title": "Backend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1055-0",
          "name": "Meta Backend Developer Professional Certificate",
          "issuer": "Coursera / Meta",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1055/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 92,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1056",
      "googleSub": "google-sub-btir25o1056",
      "email": "25ir12356@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Sanyogita Batti",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1056",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1056",
      "enrolmentNumber": "BTIR25O1056",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Female"
    },
    "profile": {
      "studentId": "BTIR25O1056",
      "headline": "Full Stack Developer | React, TypeScript, FastAPI, Tailwind | B.Tech AIR",
      "primaryDomain": "Web Development",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Building end-to-end responsive web applications with TypeScript, modern React frontend architecture, and robust Python/Node backends.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Web Development and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "sanyogita-batti_mits",
        "codeforces": "sanyogita-batti_code",
        "github": "sanyogita-batti"
      },
      "githubUrl": "https://github.com/sanyogita-batti",
      "linkedinUrl": "https://www.linkedin.com/in/sanyogita-batti-mits",
      "portfolioUrl": "https://sanyogita-batti.dev",
      "resumeFileName": "sanyogita_batti_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 20,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1056-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1056-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1056-2",
          "name": "Python",
          "proficiency": "Intermediate",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1056-3",
          "name": "Node.js",
          "proficiency": "Intermediate",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1056-4",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1056-5",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "FastAPI",
        "Node.js",
        "PostgreSQL",
        "Vite"
      ],
      "interests": [
        "Full Stack Apps",
        "UI/UX Design",
        "Hackathons",
        "Open Source",
        "Progressive Web Apps"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Web Development"
      ],
      "projects": [
        {
          "id": "BTIR25O1056-proj-1",
          "title": "CampusSync \u2014 MITS Collaborative Workspace",
          "description": "Full-stack collaboration hub for semester project teams with real-time markdown docs and task boards.",
          "repoUrl": "https://github.com/sanyogita-batti/campussync-mits",
          "liveUrl": "https://campussync.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "FastAPI"
          ]
        },
        {
          "id": "BTIR25O1056-proj-2",
          "title": "SIH Hackathon Team Matcher",
          "description": "Interactive peer matching tool filtering students by tech stack and hackathon availability.",
          "repoUrl": "https://github.com/sanyogita-batti/sih-team-matcher",
          "techNotes": [
            "React",
            "TypeScript",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1056-1",
          "title": "Full Stack Developer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1056-0",
          "name": "Full Stack Web Development with React",
          "issuer": "Coursera / HKUST",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1056/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 93,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1057",
      "googleSub": "google-sub-btir25o1057",
      "email": "25ir1sa57@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Sarthak Nawghare",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1057",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1057",
      "enrolmentNumber": "BTIR25O1057",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1057",
      "headline": "Machine Learning Engineer | PyTorch, Computer Vision, Deep Learning | B.Tech AIR",
      "primaryDomain": "Artificial Intelligence",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Researching convolutional vision models, neural network optimization, and deploying lightweight AI models to edge accelerators.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Artificial Intelligence and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "sarthak-nawghare_mits",
        "codeforces": "sarthak-nawghare_code",
        "github": "sarthak-nawghare"
      },
      "githubUrl": "https://github.com/sarthak-nawghare",
      "linkedinUrl": "https://www.linkedin.com/in/sarthak-nawghare-mits",
      "portfolioUrl": "https://sarthak-nawghare.dev",
      "resumeFileName": "sarthak_nawghare_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 21,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1057-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1057-1",
          "name": "PyTorch",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1057-2",
          "name": "Computer Vision",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1057-3",
          "name": "Deep Learning",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1057-4",
          "name": "TensorFlow",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1057-5",
          "name": "OpenCV",
          "proficiency": "Advanced",
          "category": "Computer Vision"
        }
      ],
      "techStack": [
        "Python",
        "PyTorch",
        "TensorFlow",
        "OpenCV",
        "NumPy",
        "Scikit-Learn",
        "CUDA"
      ],
      "interests": [
        "Neural Networks",
        "Computer Vision",
        "Generative AI",
        "Medical Imaging",
        "Edge AI"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Artificial Intelligence"
      ],
      "projects": [
        {
          "id": "BTIR25O1057-proj-1",
          "title": "Autonomous Drone Visual Obstacle Avoidance",
          "description": "Real-time monocular depth estimation and collision avoidance model trained on custom outdoor campus datasets.",
          "repoUrl": "https://github.com/sarthak-nawghare/uav-vision-nav",
          "techNotes": [
            "PyTorch",
            "OpenCV",
            "Python",
            "ROS2"
          ]
        },
        {
          "id": "BTIR25O1057-proj-2",
          "title": "MITS Handwritten Answer Sheet OCR & Grading",
          "description": "Transformer-based handwriting transcription pipeline for technical course answer scripts.",
          "repoUrl": "https://github.com/sarthak-nawghare/answer-sheet-ocr",
          "techNotes": [
            "PyTorch",
            "Transformers",
            "FastAPI"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1057-1",
          "title": "Machine Learning Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1057-0",
          "name": "Deep Learning Specialization",
          "issuer": "Coursera / DeepLearning.AI",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1057/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 94,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1058",
      "googleSub": "google-sub-btir25o1058",
      "email": "25ir1sh58@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Shiv Sharma",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1058",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1058",
      "enrolmentNumber": "BTIR25O1058",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1058",
      "headline": "Robotics Engineer | ROS2, Gazebo, C++, SLAM, TurtleBot3 | B.Tech AIR",
      "primaryDomain": "Robotics & Embedded Systems",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Hands-on practical experience in ROS2 navigation stacks (Nav2), 2D/3D LIDAR SLAM, and differential drive kinematics in the CAI Robotics Lab.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Robotics & Embedded Systems and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "shiv-sharma_mits",
        "codeforces": "shiv-sharma_code",
        "github": "shiv-sharma"
      },
      "githubUrl": "https://github.com/shiv-sharma",
      "linkedinUrl": "https://www.linkedin.com/in/shiv-sharma-mits",
      "portfolioUrl": "https://shiv-sharma.dev",
      "resumeFileName": "shiv_sharma_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 22,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1058-0",
          "name": "ROS2",
          "proficiency": "Advanced",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1058-1",
          "name": "C++",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1058-2",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1058-3",
          "name": "Gazebo",
          "proficiency": "Intermediate",
          "category": "Simulation"
        },
        {
          "id": "sk-BTIR25O1058-4",
          "name": "SLAM",
          "proficiency": "Intermediate",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1058-5",
          "name": "Embedded Systems",
          "proficiency": "Intermediate",
          "category": "Hardware"
        }
      ],
      "techStack": [
        "ROS2 Humble",
        "C++",
        "Python",
        "Gazebo",
        "Nav2",
        "Linux",
        "Micro-ROS"
      ],
      "interests": [
        "Mobile Robotics",
        "Autonomous Navigation",
        "Kinematics",
        "Drone Swarms",
        "LIDAR Perception"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Robotics & Embedded Systems"
      ],
      "projects": [
        {
          "id": "BTIR25O1058-proj-1",
          "title": "Autonomous Campus Guide Rover",
          "description": "TurtleBot3-based navigation rover mapping CAI ground floor with Cartographer SLAM and dynamic obstacle avoidance.",
          "repoUrl": "https://github.com/shiv-sharma/campus-guide-rover",
          "techNotes": [
            "ROS2",
            "C++",
            "Nav2",
            "Gazebo"
          ]
        },
        {
          "id": "BTIR25O1058-proj-2",
          "title": "4-DOF Robotic Arm Trajectory Planner",
          "description": "Inverse kinematics and trajectory interpolation software with MoveIt2 simulation for pick-and-place tasks.",
          "repoUrl": "https://github.com/shiv-sharma/arm-trajectory-planner",
          "techNotes": [
            "Python",
            "MoveIt2",
            "ROS2"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1058-1",
          "title": "Robotics & Autonomous Systems Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1058-0",
          "name": "ROS2 Basics & Autonomous Navigation",
          "issuer": "ConstructSim / ROS Industrial",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1058/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 95,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1059",
      "googleSub": "google-sub-btir25o1059",
      "email": "25ir1sh59@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Shivam Solanki",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1059",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1059",
      "enrolmentNumber": "BTIR25O1059",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1059",
      "headline": "Frontend Engineer | React, Next.js, TypeScript, UI/UX Design | B.Tech AIR",
      "primaryDomain": "Frontend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Crafting sleek dark-mode design systems, responsive web applications, and intuitive interactive user experiences in React and Figma.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Frontend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "shivam-solanki_mits",
        "codeforces": "shivam-solanki_code",
        "github": "shivam-solanki"
      },
      "githubUrl": "https://github.com/shivam-solanki",
      "linkedinUrl": "https://www.linkedin.com/in/shivam-solanki-mits",
      "portfolioUrl": "https://shivam-solanki.dev",
      "resumeFileName": "shivam_solanki_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 23,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1059-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1059-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1059-2",
          "name": "Next.js",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1059-3",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1059-4",
          "name": "UI/UX Design",
          "proficiency": "Advanced",
          "category": "Design"
        },
        {
          "id": "sk-BTIR25O1059-5",
          "name": "Figma",
          "proficiency": "Advanced",
          "category": "Design"
        }
      ],
      "techStack": [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Figma",
        "Framer Motion",
        "Vite"
      ],
      "interests": [
        "Design Systems",
        "Micro-Interactions",
        "Web Accessibility",
        "Hackathons",
        "Design Engineering"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Frontend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1059-proj-1",
          "title": "MITS Pulse \u2014 Campus Activity Dashboard",
          "description": "Glassmorphic responsive dashboard displaying live campus events, academic timetables, and noticeboard feeds.",
          "repoUrl": "https://github.com/shivam-solanki/mits-pulse",
          "liveUrl": "https://mitspulse.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
          ]
        },
        {
          "id": "BTIR25O1059-proj-2",
          "title": "AcademIQ Design System",
          "description": "Accessible WCAG 2.1 AA compliant UI component library created in Figma and implemented in React.",
          "repoUrl": "https://github.com/shivam-solanki/academiq-ui",
          "techNotes": [
            "React",
            "Tailwind",
            "Storybook"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1059-1",
          "title": "Frontend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1059-0",
          "name": "Google UX Design Professional Certificate",
          "issuer": "Coursera / Google",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1059/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 96,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1060",
      "googleSub": "google-sub-btir25o1060",
      "email": "25ir1sh60@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Shivam Soni",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1060",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1060",
      "enrolmentNumber": "BTIR25O1060",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1060",
      "headline": "Data Scientist | Python, Pandas, SQL, Scikit-Learn, Analytics | B.Tech AIR",
      "primaryDomain": "Data Science",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Analyzing large multivariate institutional datasets, building predictive machine learning models, and turning raw data into actionable dashboards.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Data Science and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "shivam-soni_mits",
        "codeforces": "shivam-soni_code",
        "github": "shivam-soni"
      },
      "githubUrl": "https://github.com/shivam-soni",
      "linkedinUrl": "https://www.linkedin.com/in/shivam-soni-mits",
      "portfolioUrl": "https://shivam-soni.dev",
      "resumeFileName": "shivam_soni_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 24,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1060-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1060-1",
          "name": "Pandas",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1060-2",
          "name": "NumPy",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1060-3",
          "name": "SQL",
          "proficiency": "Advanced",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1060-4",
          "name": "Scikit-Learn",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1060-5",
          "name": "Data Visualization",
          "proficiency": "Advanced",
          "category": "Analytics"
        }
      ],
      "techStack": [
        "Python",
        "Pandas",
        "NumPy",
        "SQL",
        "Scikit-Learn",
        "Matplotlib",
        "Seaborn",
        "PowerBI"
      ],
      "interests": [
        "Predictive Modeling",
        "Exploratory Data Analysis",
        "Statistical Inference",
        "Financial Analytics"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Data Science"
      ],
      "projects": [
        {
          "id": "BTIR25O1060-proj-1",
          "title": "MITS Student Academic Trend & CGPA Forecaster",
          "description": "Statistical predictive regression model analyzing attendance rates, lab practicals, and mid-sem performance.",
          "repoUrl": "https://github.com/shivam-soni/student-grade-predictor",
          "techNotes": [
            "Python",
            "Pandas",
            "Scikit-Learn",
            "Streamlit"
          ]
        },
        {
          "id": "BTIR25O1060-proj-2",
          "title": "Campus Electricity & Energy Consumption Analyzer",
          "description": "Time-series forecasting model for academic block power usage using historical smart-meter logs.",
          "repoUrl": "https://github.com/shivam-soni/energy-analyzer",
          "techNotes": [
            "Python",
            "Prophet",
            "Pandas",
            "Matplotlib"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1060-1",
          "title": "Data Scientist Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1060-0",
          "name": "IBM Data Science Professional Certificate",
          "issuer": "Coursera / IBM",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1060/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 97,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1061",
      "googleSub": "google-sub-btir25o1061",
      "email": "25ir1sh61@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Shivam Upadhyay",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1061",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1061",
      "enrolmentNumber": "BTIR25O1061",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1061",
      "headline": "Backend Engineer | Python, FastAPI, Docker, PostgreSQL | B.Tech AIR",
      "primaryDomain": "Backend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Specializing in high-performance asynchronous REST APIs, PostgreSQL schema design, and microservices containerization with Docker.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Backend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "shivam-upadhyay_mits",
        "codeforces": "shivam-upadhyay_code",
        "github": "shivam-upadhyay"
      },
      "githubUrl": "https://github.com/shivam-upadhyay",
      "linkedinUrl": "https://www.linkedin.com/in/shivam-upadhyay-mits",
      "portfolioUrl": "https://shivam-upadhyay.dev",
      "resumeFileName": "shivam_upadhyay_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 15,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1061-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1061-1",
          "name": "FastAPI",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1061-2",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1061-3",
          "name": "Docker",
          "proficiency": "Intermediate",
          "category": "DevOps"
        },
        {
          "id": "sk-BTIR25O1061-4",
          "name": "REST APIs",
          "proficiency": "Advanced",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1061-5",
          "name": "Redis",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "REST APIs",
        "Redis",
        "Git"
      ],
      "interests": [
        "Backend Architecture",
        "Distributed Systems",
        "Cloud Native",
        "Hackathons",
        "Microservices"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Backend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1061-proj-1",
          "title": "MITS Campus Event Notification Service",
          "description": "High-throughput async event streaming engine using FastAPI, Redis pub/sub, and PostgreSQL.",
          "repoUrl": "https://github.com/shivam-upadhyay/mits-event-stream",
          "liveUrl": "https://events-mits.onrender.com",
          "techNotes": [
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "Docker"
          ]
        },
        {
          "id": "BTIR25O1061-proj-2",
          "title": "Automated Syllabus & Document Retrieval API",
          "description": "Vector-indexed document search microservice for university exam guidelines.",
          "repoUrl": "https://github.com/shivam-upadhyay/syllabus-retriever",
          "techNotes": [
            "Python",
            "SQLAlchemy",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1061-1",
          "title": "Backend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1061-0",
          "name": "Meta Backend Developer Professional Certificate",
          "issuer": "Coursera / Meta",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1061/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 86,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1062",
      "googleSub": "google-sub-btir25o1062",
      "email": "25ir1sh62@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Shraddha Tiwari",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1062",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1062",
      "enrolmentNumber": "BTIR25O1062",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Female"
    },
    "profile": {
      "studentId": "BTIR25O1062",
      "headline": "Full Stack Developer | React, TypeScript, FastAPI, Tailwind | B.Tech AIR",
      "primaryDomain": "Web Development",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Building end-to-end responsive web applications with TypeScript, modern React frontend architecture, and robust Python/Node backends.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Web Development and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "shraddha-tiwari_mits",
        "codeforces": "shraddha-tiwari_code",
        "github": "shraddha-tiwari"
      },
      "githubUrl": "https://github.com/shraddha-tiwari",
      "linkedinUrl": "https://www.linkedin.com/in/shraddha-tiwari-mits",
      "portfolioUrl": "https://shraddha-tiwari.dev",
      "resumeFileName": "shraddha_tiwari_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 16,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1062-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1062-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1062-2",
          "name": "Python",
          "proficiency": "Intermediate",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1062-3",
          "name": "Node.js",
          "proficiency": "Intermediate",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1062-4",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1062-5",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "FastAPI",
        "Node.js",
        "PostgreSQL",
        "Vite"
      ],
      "interests": [
        "Full Stack Apps",
        "UI/UX Design",
        "Hackathons",
        "Open Source",
        "Progressive Web Apps"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Web Development"
      ],
      "projects": [
        {
          "id": "BTIR25O1062-proj-1",
          "title": "CampusSync \u2014 MITS Collaborative Workspace",
          "description": "Full-stack collaboration hub for semester project teams with real-time markdown docs and task boards.",
          "repoUrl": "https://github.com/shraddha-tiwari/campussync-mits",
          "liveUrl": "https://campussync.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "FastAPI"
          ]
        },
        {
          "id": "BTIR25O1062-proj-2",
          "title": "SIH Hackathon Team Matcher",
          "description": "Interactive peer matching tool filtering students by tech stack and hackathon availability.",
          "repoUrl": "https://github.com/shraddha-tiwari/sih-team-matcher",
          "techNotes": [
            "React",
            "TypeScript",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1062-1",
          "title": "Full Stack Developer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1062-0",
          "name": "Full Stack Web Development with React",
          "issuer": "Coursera / HKUST",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1062/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 87,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1063",
      "googleSub": "google-sub-btir25o1063",
      "email": "25ir1sh63@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Shras Rai",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1063",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1063",
      "enrolmentNumber": "BTIR25O1063",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1063",
      "headline": "Machine Learning Engineer | PyTorch, Computer Vision, Deep Learning | B.Tech AIR",
      "primaryDomain": "Artificial Intelligence",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Researching convolutional vision models, neural network optimization, and deploying lightweight AI models to edge accelerators.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Artificial Intelligence and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "shras-rai_mits",
        "codeforces": "shras-rai_code",
        "github": "shras-rai"
      },
      "githubUrl": "https://github.com/shras-rai",
      "linkedinUrl": "https://www.linkedin.com/in/shras-rai-mits",
      "portfolioUrl": "https://shras-rai.dev",
      "resumeFileName": "shras_rai_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 17,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1063-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1063-1",
          "name": "PyTorch",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1063-2",
          "name": "Computer Vision",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1063-3",
          "name": "Deep Learning",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1063-4",
          "name": "TensorFlow",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1063-5",
          "name": "OpenCV",
          "proficiency": "Advanced",
          "category": "Computer Vision"
        }
      ],
      "techStack": [
        "Python",
        "PyTorch",
        "TensorFlow",
        "OpenCV",
        "NumPy",
        "Scikit-Learn",
        "CUDA"
      ],
      "interests": [
        "Neural Networks",
        "Computer Vision",
        "Generative AI",
        "Medical Imaging",
        "Edge AI"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Artificial Intelligence"
      ],
      "projects": [
        {
          "id": "BTIR25O1063-proj-1",
          "title": "Autonomous Drone Visual Obstacle Avoidance",
          "description": "Real-time monocular depth estimation and collision avoidance model trained on custom outdoor campus datasets.",
          "repoUrl": "https://github.com/shras-rai/uav-vision-nav",
          "techNotes": [
            "PyTorch",
            "OpenCV",
            "Python",
            "ROS2"
          ]
        },
        {
          "id": "BTIR25O1063-proj-2",
          "title": "MITS Handwritten Answer Sheet OCR & Grading",
          "description": "Transformer-based handwriting transcription pipeline for technical course answer scripts.",
          "repoUrl": "https://github.com/shras-rai/answer-sheet-ocr",
          "techNotes": [
            "PyTorch",
            "Transformers",
            "FastAPI"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1063-1",
          "title": "Machine Learning Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1063-0",
          "name": "Deep Learning Specialization",
          "issuer": "Coursera / DeepLearning.AI",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1063/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 88,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1064",
      "googleSub": "google-sub-btir25o1064",
      "email": "25ir1sh64@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Shubh Dubey",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1064",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1064",
      "enrolmentNumber": "BTIR25O1064",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1064",
      "headline": "Robotics Engineer | ROS2, Gazebo, C++, SLAM, TurtleBot3 | B.Tech AIR",
      "primaryDomain": "Robotics & Embedded Systems",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Hands-on practical experience in ROS2 navigation stacks (Nav2), 2D/3D LIDAR SLAM, and differential drive kinematics in the CAI Robotics Lab.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Robotics & Embedded Systems and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "shubh-dubey_mits",
        "codeforces": "shubh-dubey_code",
        "github": "shubh-dubey"
      },
      "githubUrl": "https://github.com/shubh-dubey",
      "linkedinUrl": "https://www.linkedin.com/in/shubh-dubey-mits",
      "portfolioUrl": "https://shubh-dubey.dev",
      "resumeFileName": "shubh_dubey_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 18,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1064-0",
          "name": "ROS2",
          "proficiency": "Advanced",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1064-1",
          "name": "C++",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1064-2",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1064-3",
          "name": "Gazebo",
          "proficiency": "Intermediate",
          "category": "Simulation"
        },
        {
          "id": "sk-BTIR25O1064-4",
          "name": "SLAM",
          "proficiency": "Intermediate",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1064-5",
          "name": "Embedded Systems",
          "proficiency": "Intermediate",
          "category": "Hardware"
        }
      ],
      "techStack": [
        "ROS2 Humble",
        "C++",
        "Python",
        "Gazebo",
        "Nav2",
        "Linux",
        "Micro-ROS"
      ],
      "interests": [
        "Mobile Robotics",
        "Autonomous Navigation",
        "Kinematics",
        "Drone Swarms",
        "LIDAR Perception"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Robotics & Embedded Systems"
      ],
      "projects": [
        {
          "id": "BTIR25O1064-proj-1",
          "title": "Autonomous Campus Guide Rover",
          "description": "TurtleBot3-based navigation rover mapping CAI ground floor with Cartographer SLAM and dynamic obstacle avoidance.",
          "repoUrl": "https://github.com/shubh-dubey/campus-guide-rover",
          "techNotes": [
            "ROS2",
            "C++",
            "Nav2",
            "Gazebo"
          ]
        },
        {
          "id": "BTIR25O1064-proj-2",
          "title": "4-DOF Robotic Arm Trajectory Planner",
          "description": "Inverse kinematics and trajectory interpolation software with MoveIt2 simulation for pick-and-place tasks.",
          "repoUrl": "https://github.com/shubh-dubey/arm-trajectory-planner",
          "techNotes": [
            "Python",
            "MoveIt2",
            "ROS2"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1064-1",
          "title": "Robotics & Autonomous Systems Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1064-0",
          "name": "ROS2 Basics & Autonomous Navigation",
          "issuer": "ConstructSim / ROS Industrial",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1064/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 89,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1065",
      "googleSub": "google-sub-btir25o1065",
      "email": "25ir1so65@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Soham Sharma",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1065",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1065",
      "enrolmentNumber": "BTIR25O1065",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1065",
      "headline": "Frontend Engineer | React, Next.js, TypeScript, UI/UX Design | B.Tech AIR",
      "primaryDomain": "Frontend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Crafting sleek dark-mode design systems, responsive web applications, and intuitive interactive user experiences in React and Figma.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Frontend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "soham-sharma_mits",
        "codeforces": "soham-sharma_code",
        "github": "soham-sharma"
      },
      "githubUrl": "https://github.com/soham-sharma",
      "linkedinUrl": "https://www.linkedin.com/in/soham-sharma-mits",
      "portfolioUrl": "https://soham-sharma.dev",
      "resumeFileName": "soham_sharma_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 19,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1065-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1065-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1065-2",
          "name": "Next.js",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1065-3",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1065-4",
          "name": "UI/UX Design",
          "proficiency": "Advanced",
          "category": "Design"
        },
        {
          "id": "sk-BTIR25O1065-5",
          "name": "Figma",
          "proficiency": "Advanced",
          "category": "Design"
        }
      ],
      "techStack": [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Figma",
        "Framer Motion",
        "Vite"
      ],
      "interests": [
        "Design Systems",
        "Micro-Interactions",
        "Web Accessibility",
        "Hackathons",
        "Design Engineering"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Frontend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1065-proj-1",
          "title": "MITS Pulse \u2014 Campus Activity Dashboard",
          "description": "Glassmorphic responsive dashboard displaying live campus events, academic timetables, and noticeboard feeds.",
          "repoUrl": "https://github.com/soham-sharma/mits-pulse",
          "liveUrl": "https://mitspulse.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
          ]
        },
        {
          "id": "BTIR25O1065-proj-2",
          "title": "AcademIQ Design System",
          "description": "Accessible WCAG 2.1 AA compliant UI component library created in Figma and implemented in React.",
          "repoUrl": "https://github.com/soham-sharma/academiq-ui",
          "techNotes": [
            "React",
            "Tailwind",
            "Storybook"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1065-1",
          "title": "Frontend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1065-0",
          "name": "Google UX Design Professional Certificate",
          "issuer": "Coursera / Google",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1065/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 90,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1066",
      "googleSub": "google-sub-btir25o1066",
      "email": "25ir1so66@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Somil Jain",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1066",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1066",
      "enrolmentNumber": "BTIR25O1066",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1066",
      "headline": "Data Scientist | Python, Pandas, SQL, Scikit-Learn, Analytics | B.Tech AIR",
      "primaryDomain": "Data Science",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Analyzing large multivariate institutional datasets, building predictive machine learning models, and turning raw data into actionable dashboards.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Data Science and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "somil-jain_mits",
        "codeforces": "somil-jain_code",
        "github": "somil-jain"
      },
      "githubUrl": "https://github.com/somil-jain",
      "linkedinUrl": "https://www.linkedin.com/in/somil-jain-mits",
      "portfolioUrl": "https://somil-jain.dev",
      "resumeFileName": "somil_jain_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 20,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1066-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1066-1",
          "name": "Pandas",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1066-2",
          "name": "NumPy",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1066-3",
          "name": "SQL",
          "proficiency": "Advanced",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1066-4",
          "name": "Scikit-Learn",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1066-5",
          "name": "Data Visualization",
          "proficiency": "Advanced",
          "category": "Analytics"
        }
      ],
      "techStack": [
        "Python",
        "Pandas",
        "NumPy",
        "SQL",
        "Scikit-Learn",
        "Matplotlib",
        "Seaborn",
        "PowerBI"
      ],
      "interests": [
        "Predictive Modeling",
        "Exploratory Data Analysis",
        "Statistical Inference",
        "Financial Analytics"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Data Science"
      ],
      "projects": [
        {
          "id": "BTIR25O1066-proj-1",
          "title": "MITS Student Academic Trend & CGPA Forecaster",
          "description": "Statistical predictive regression model analyzing attendance rates, lab practicals, and mid-sem performance.",
          "repoUrl": "https://github.com/somil-jain/student-grade-predictor",
          "techNotes": [
            "Python",
            "Pandas",
            "Scikit-Learn",
            "Streamlit"
          ]
        },
        {
          "id": "BTIR25O1066-proj-2",
          "title": "Campus Electricity & Energy Consumption Analyzer",
          "description": "Time-series forecasting model for academic block power usage using historical smart-meter logs.",
          "repoUrl": "https://github.com/somil-jain/energy-analyzer",
          "techNotes": [
            "Python",
            "Prophet",
            "Pandas",
            "Matplotlib"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1066-1",
          "title": "Data Scientist Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1066-0",
          "name": "IBM Data Science Professional Certificate",
          "issuer": "Coursera / IBM",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1066/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 91,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1067",
      "googleSub": "google-sub-btir25o1067",
      "email": "25ir1su67@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Suraj Sharma",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1067",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1067",
      "enrolmentNumber": "BTIR25O1067",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1067",
      "headline": "Backend Engineer | Python, FastAPI, Docker, PostgreSQL | B.Tech AIR",
      "primaryDomain": "Backend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Specializing in high-performance asynchronous REST APIs, PostgreSQL schema design, and microservices containerization with Docker.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Backend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "suraj-sharma_mits",
        "codeforces": "suraj-sharma_code",
        "github": "suraj-sharma"
      },
      "githubUrl": "https://github.com/suraj-sharma",
      "linkedinUrl": "https://www.linkedin.com/in/suraj-sharma-mits",
      "portfolioUrl": "https://suraj-sharma.dev",
      "resumeFileName": "suraj_sharma_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 21,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1067-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1067-1",
          "name": "FastAPI",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1067-2",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1067-3",
          "name": "Docker",
          "proficiency": "Intermediate",
          "category": "DevOps"
        },
        {
          "id": "sk-BTIR25O1067-4",
          "name": "REST APIs",
          "proficiency": "Advanced",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1067-5",
          "name": "Redis",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "REST APIs",
        "Redis",
        "Git"
      ],
      "interests": [
        "Backend Architecture",
        "Distributed Systems",
        "Cloud Native",
        "Hackathons",
        "Microservices"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Backend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1067-proj-1",
          "title": "MITS Campus Event Notification Service",
          "description": "High-throughput async event streaming engine using FastAPI, Redis pub/sub, and PostgreSQL.",
          "repoUrl": "https://github.com/suraj-sharma/mits-event-stream",
          "liveUrl": "https://events-mits.onrender.com",
          "techNotes": [
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "Docker"
          ]
        },
        {
          "id": "BTIR25O1067-proj-2",
          "title": "Automated Syllabus & Document Retrieval API",
          "description": "Vector-indexed document search microservice for university exam guidelines.",
          "repoUrl": "https://github.com/suraj-sharma/syllabus-retriever",
          "techNotes": [
            "Python",
            "SQLAlchemy",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1067-1",
          "title": "Backend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1067-0",
          "name": "Meta Backend Developer Professional Certificate",
          "issuer": "Coursera / Meta",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1067/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 92,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1068",
      "googleSub": "google-sub-btir25o1068",
      "email": "25ir1sw68@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Swapnil Tiwari",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1068",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1068",
      "enrolmentNumber": "BTIR25O1068",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1068",
      "headline": "Full Stack Developer | React, TypeScript, FastAPI, Tailwind | B.Tech AIR",
      "primaryDomain": "Web Development",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Building end-to-end responsive web applications with TypeScript, modern React frontend architecture, and robust Python/Node backends.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Web Development and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "swapnil-tiwari_mits",
        "codeforces": "swapnil-tiwari_code",
        "github": "swapnil-tiwari"
      },
      "githubUrl": "https://github.com/swapnil-tiwari",
      "linkedinUrl": "https://www.linkedin.com/in/swapnil-tiwari-mits",
      "portfolioUrl": "https://swapnil-tiwari.dev",
      "resumeFileName": "swapnil_tiwari_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 22,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1068-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1068-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1068-2",
          "name": "Python",
          "proficiency": "Intermediate",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1068-3",
          "name": "Node.js",
          "proficiency": "Intermediate",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1068-4",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1068-5",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "FastAPI",
        "Node.js",
        "PostgreSQL",
        "Vite"
      ],
      "interests": [
        "Full Stack Apps",
        "UI/UX Design",
        "Hackathons",
        "Open Source",
        "Progressive Web Apps"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Web Development"
      ],
      "projects": [
        {
          "id": "BTIR25O1068-proj-1",
          "title": "CampusSync \u2014 MITS Collaborative Workspace",
          "description": "Full-stack collaboration hub for semester project teams with real-time markdown docs and task boards.",
          "repoUrl": "https://github.com/swapnil-tiwari/campussync-mits",
          "liveUrl": "https://campussync.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "FastAPI"
          ]
        },
        {
          "id": "BTIR25O1068-proj-2",
          "title": "SIH Hackathon Team Matcher",
          "description": "Interactive peer matching tool filtering students by tech stack and hackathon availability.",
          "repoUrl": "https://github.com/swapnil-tiwari/sih-team-matcher",
          "techNotes": [
            "React",
            "TypeScript",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1068-1",
          "title": "Full Stack Developer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1068-0",
          "name": "Full Stack Web Development with React",
          "issuer": "Coursera / HKUST",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1068/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 93,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1069",
      "googleSub": "google-sub-btir25o1069",
      "email": "25ir1ta69@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Tanish Patel",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1069",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1069",
      "enrolmentNumber": "BTIR25O1069",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1069",
      "headline": "Machine Learning Engineer | PyTorch, Computer Vision, Deep Learning | B.Tech AIR",
      "primaryDomain": "Artificial Intelligence",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Researching convolutional vision models, neural network optimization, and deploying lightweight AI models to edge accelerators.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Artificial Intelligence and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "tanish-patel_mits",
        "codeforces": "tanish-patel_code",
        "github": "tanish-patel"
      },
      "githubUrl": "https://github.com/tanish-patel",
      "linkedinUrl": "https://www.linkedin.com/in/tanish-patel-mits",
      "portfolioUrl": "https://tanish-patel.dev",
      "resumeFileName": "tanish_patel_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 23,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1069-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1069-1",
          "name": "PyTorch",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1069-2",
          "name": "Computer Vision",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1069-3",
          "name": "Deep Learning",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1069-4",
          "name": "TensorFlow",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1069-5",
          "name": "OpenCV",
          "proficiency": "Advanced",
          "category": "Computer Vision"
        }
      ],
      "techStack": [
        "Python",
        "PyTorch",
        "TensorFlow",
        "OpenCV",
        "NumPy",
        "Scikit-Learn",
        "CUDA"
      ],
      "interests": [
        "Neural Networks",
        "Computer Vision",
        "Generative AI",
        "Medical Imaging",
        "Edge AI"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Artificial Intelligence"
      ],
      "projects": [
        {
          "id": "BTIR25O1069-proj-1",
          "title": "Autonomous Drone Visual Obstacle Avoidance",
          "description": "Real-time monocular depth estimation and collision avoidance model trained on custom outdoor campus datasets.",
          "repoUrl": "https://github.com/tanish-patel/uav-vision-nav",
          "techNotes": [
            "PyTorch",
            "OpenCV",
            "Python",
            "ROS2"
          ]
        },
        {
          "id": "BTIR25O1069-proj-2",
          "title": "MITS Handwritten Answer Sheet OCR & Grading",
          "description": "Transformer-based handwriting transcription pipeline for technical course answer scripts.",
          "repoUrl": "https://github.com/tanish-patel/answer-sheet-ocr",
          "techNotes": [
            "PyTorch",
            "Transformers",
            "FastAPI"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1069-1",
          "title": "Machine Learning Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1069-0",
          "name": "Deep Learning Specialization",
          "issuer": "Coursera / DeepLearning.AI",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1069/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 94,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1070",
      "googleSub": "google-sub-btir25o1070",
      "email": "25ir1ta70@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Tarang Suryawanshi",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1070",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1070",
      "enrolmentNumber": "BTIR25O1070",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1070",
      "headline": "Robotics Engineer | ROS2, Gazebo, C++, SLAM, TurtleBot3 | B.Tech AIR",
      "primaryDomain": "Robotics & Embedded Systems",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Hands-on practical experience in ROS2 navigation stacks (Nav2), 2D/3D LIDAR SLAM, and differential drive kinematics in the CAI Robotics Lab.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Robotics & Embedded Systems and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "tarang-suryawanshi_mits",
        "codeforces": "tarang-suryawanshi_code",
        "github": "tarang-suryawanshi"
      },
      "githubUrl": "https://github.com/tarang-suryawanshi",
      "linkedinUrl": "https://www.linkedin.com/in/tarang-suryawanshi-mits",
      "portfolioUrl": "https://tarang-suryawanshi.dev",
      "resumeFileName": "tarang_suryawanshi_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 24,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1070-0",
          "name": "ROS2",
          "proficiency": "Advanced",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1070-1",
          "name": "C++",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1070-2",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1070-3",
          "name": "Gazebo",
          "proficiency": "Intermediate",
          "category": "Simulation"
        },
        {
          "id": "sk-BTIR25O1070-4",
          "name": "SLAM",
          "proficiency": "Intermediate",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1070-5",
          "name": "Embedded Systems",
          "proficiency": "Intermediate",
          "category": "Hardware"
        }
      ],
      "techStack": [
        "ROS2 Humble",
        "C++",
        "Python",
        "Gazebo",
        "Nav2",
        "Linux",
        "Micro-ROS"
      ],
      "interests": [
        "Mobile Robotics",
        "Autonomous Navigation",
        "Kinematics",
        "Drone Swarms",
        "LIDAR Perception"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Robotics & Embedded Systems"
      ],
      "projects": [
        {
          "id": "BTIR25O1070-proj-1",
          "title": "Autonomous Campus Guide Rover",
          "description": "TurtleBot3-based navigation rover mapping CAI ground floor with Cartographer SLAM and dynamic obstacle avoidance.",
          "repoUrl": "https://github.com/tarang-suryawanshi/campus-guide-rover",
          "techNotes": [
            "ROS2",
            "C++",
            "Nav2",
            "Gazebo"
          ]
        },
        {
          "id": "BTIR25O1070-proj-2",
          "title": "4-DOF Robotic Arm Trajectory Planner",
          "description": "Inverse kinematics and trajectory interpolation software with MoveIt2 simulation for pick-and-place tasks.",
          "repoUrl": "https://github.com/tarang-suryawanshi/arm-trajectory-planner",
          "techNotes": [
            "Python",
            "MoveIt2",
            "ROS2"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1070-1",
          "title": "Robotics & Autonomous Systems Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1070-0",
          "name": "ROS2 Basics & Autonomous Navigation",
          "issuer": "ConstructSim / ROS Industrial",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1070/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 95,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1071",
      "googleSub": "google-sub-btir25o1071",
      "email": "25ir1va71@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Vaibhav Singh",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1071",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1071",
      "enrolmentNumber": "BTIR25O1071",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1071",
      "headline": "Frontend Engineer | React, Next.js, TypeScript, UI/UX Design | B.Tech AIR",
      "primaryDomain": "Frontend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Crafting sleek dark-mode design systems, responsive web applications, and intuitive interactive user experiences in React and Figma.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Frontend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "vaibhav-singh_mits",
        "codeforces": "vaibhav-singh_code",
        "github": "vaibhav-singh"
      },
      "githubUrl": "https://github.com/vaibhav-singh",
      "linkedinUrl": "https://www.linkedin.com/in/vaibhav-singh-mits",
      "portfolioUrl": "https://vaibhav-singh.dev",
      "resumeFileName": "vaibhav_singh_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 15,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1071-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1071-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1071-2",
          "name": "Next.js",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1071-3",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1071-4",
          "name": "UI/UX Design",
          "proficiency": "Advanced",
          "category": "Design"
        },
        {
          "id": "sk-BTIR25O1071-5",
          "name": "Figma",
          "proficiency": "Advanced",
          "category": "Design"
        }
      ],
      "techStack": [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Figma",
        "Framer Motion",
        "Vite"
      ],
      "interests": [
        "Design Systems",
        "Micro-Interactions",
        "Web Accessibility",
        "Hackathons",
        "Design Engineering"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Frontend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1071-proj-1",
          "title": "MITS Pulse \u2014 Campus Activity Dashboard",
          "description": "Glassmorphic responsive dashboard displaying live campus events, academic timetables, and noticeboard feeds.",
          "repoUrl": "https://github.com/vaibhav-singh/mits-pulse",
          "liveUrl": "https://mitspulse.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
          ]
        },
        {
          "id": "BTIR25O1071-proj-2",
          "title": "AcademIQ Design System",
          "description": "Accessible WCAG 2.1 AA compliant UI component library created in Figma and implemented in React.",
          "repoUrl": "https://github.com/vaibhav-singh/academiq-ui",
          "techNotes": [
            "React",
            "Tailwind",
            "Storybook"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1071-1",
          "title": "Frontend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1071-0",
          "name": "Google UX Design Professional Certificate",
          "issuer": "Coursera / Google",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1071/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 96,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1072",
      "googleSub": "google-sub-btir25o1072",
      "email": "25ir1va72@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Vansh Gupta",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1072",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1072",
      "enrolmentNumber": "BTIR25O1072",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1072",
      "headline": "Data Scientist | Python, Pandas, SQL, Scikit-Learn, Analytics | B.Tech AIR",
      "primaryDomain": "Data Science",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Analyzing large multivariate institutional datasets, building predictive machine learning models, and turning raw data into actionable dashboards.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Data Science and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "vansh-gupta_mits",
        "codeforces": "vansh-gupta_code",
        "github": "vansh-gupta"
      },
      "githubUrl": "https://github.com/vansh-gupta",
      "linkedinUrl": "https://www.linkedin.com/in/vansh-gupta-mits",
      "portfolioUrl": "https://vansh-gupta.dev",
      "resumeFileName": "vansh_gupta_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 16,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1072-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1072-1",
          "name": "Pandas",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1072-2",
          "name": "NumPy",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1072-3",
          "name": "SQL",
          "proficiency": "Advanced",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1072-4",
          "name": "Scikit-Learn",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1072-5",
          "name": "Data Visualization",
          "proficiency": "Advanced",
          "category": "Analytics"
        }
      ],
      "techStack": [
        "Python",
        "Pandas",
        "NumPy",
        "SQL",
        "Scikit-Learn",
        "Matplotlib",
        "Seaborn",
        "PowerBI"
      ],
      "interests": [
        "Predictive Modeling",
        "Exploratory Data Analysis",
        "Statistical Inference",
        "Financial Analytics"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Data Science"
      ],
      "projects": [
        {
          "id": "BTIR25O1072-proj-1",
          "title": "MITS Student Academic Trend & CGPA Forecaster",
          "description": "Statistical predictive regression model analyzing attendance rates, lab practicals, and mid-sem performance.",
          "repoUrl": "https://github.com/vansh-gupta/student-grade-predictor",
          "techNotes": [
            "Python",
            "Pandas",
            "Scikit-Learn",
            "Streamlit"
          ]
        },
        {
          "id": "BTIR25O1072-proj-2",
          "title": "Campus Electricity & Energy Consumption Analyzer",
          "description": "Time-series forecasting model for academic block power usage using historical smart-meter logs.",
          "repoUrl": "https://github.com/vansh-gupta/energy-analyzer",
          "techNotes": [
            "Python",
            "Prophet",
            "Pandas",
            "Matplotlib"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1072-1",
          "title": "Data Scientist Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1072-0",
          "name": "IBM Data Science Professional Certificate",
          "issuer": "Coursera / IBM",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1072/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 97,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1073",
      "googleSub": "google-sub-btir25o1073",
      "email": "25ir1va73@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Vatsal Raikwar",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1073",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1073",
      "enrolmentNumber": "BTIR25O1073",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1073",
      "headline": "Backend Engineer | Python, FastAPI, Docker, PostgreSQL | B.Tech AIR",
      "primaryDomain": "Backend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Specializing in high-performance asynchronous REST APIs, PostgreSQL schema design, and microservices containerization with Docker.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Backend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "vatsal-raikwar_mits",
        "codeforces": "vatsal-raikwar_code",
        "github": "vatsal-raikwar"
      },
      "githubUrl": "https://github.com/vatsal-raikwar",
      "linkedinUrl": "https://www.linkedin.com/in/vatsal-raikwar-mits",
      "portfolioUrl": "https://vatsal-raikwar.dev",
      "resumeFileName": "vatsal_raikwar_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 17,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1073-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1073-1",
          "name": "FastAPI",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1073-2",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1073-3",
          "name": "Docker",
          "proficiency": "Intermediate",
          "category": "DevOps"
        },
        {
          "id": "sk-BTIR25O1073-4",
          "name": "REST APIs",
          "proficiency": "Advanced",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1073-5",
          "name": "Redis",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "REST APIs",
        "Redis",
        "Git"
      ],
      "interests": [
        "Backend Architecture",
        "Distributed Systems",
        "Cloud Native",
        "Hackathons",
        "Microservices"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Backend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1073-proj-1",
          "title": "MITS Campus Event Notification Service",
          "description": "High-throughput async event streaming engine using FastAPI, Redis pub/sub, and PostgreSQL.",
          "repoUrl": "https://github.com/vatsal-raikwar/mits-event-stream",
          "liveUrl": "https://events-mits.onrender.com",
          "techNotes": [
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "Docker"
          ]
        },
        {
          "id": "BTIR25O1073-proj-2",
          "title": "Automated Syllabus & Document Retrieval API",
          "description": "Vector-indexed document search microservice for university exam guidelines.",
          "repoUrl": "https://github.com/vatsal-raikwar/syllabus-retriever",
          "techNotes": [
            "Python",
            "SQLAlchemy",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1073-1",
          "title": "Backend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1073-0",
          "name": "Meta Backend Developer Professional Certificate",
          "issuer": "Coursera / Meta",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1073/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 86,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1074",
      "googleSub": "google-sub-btir25o1074",
      "email": "25ir1va74@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Vayam Choudhary",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1074",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1074",
      "enrolmentNumber": "BTIR25O1074",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1074",
      "headline": "Full Stack Developer | React, TypeScript, FastAPI, Tailwind | B.Tech AIR",
      "primaryDomain": "Web Development",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Building end-to-end responsive web applications with TypeScript, modern React frontend architecture, and robust Python/Node backends.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Web Development and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "vayam-choudhary_mits",
        "codeforces": "vayam-choudhary_code",
        "github": "vayam-choudhary"
      },
      "githubUrl": "https://github.com/vayam-choudhary",
      "linkedinUrl": "https://www.linkedin.com/in/vayam-choudhary-mits",
      "portfolioUrl": "https://vayam-choudhary.dev",
      "resumeFileName": "vayam_choudhary_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 18,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Full Stack Developer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1074-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1074-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1074-2",
          "name": "Python",
          "proficiency": "Intermediate",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1074-3",
          "name": "Node.js",
          "proficiency": "Intermediate",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1074-4",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1074-5",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "FastAPI",
        "Node.js",
        "PostgreSQL",
        "Vite"
      ],
      "interests": [
        "Full Stack Apps",
        "UI/UX Design",
        "Hackathons",
        "Open Source",
        "Progressive Web Apps"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Web Development"
      ],
      "projects": [
        {
          "id": "BTIR25O1074-proj-1",
          "title": "CampusSync \u2014 MITS Collaborative Workspace",
          "description": "Full-stack collaboration hub for semester project teams with real-time markdown docs and task boards.",
          "repoUrl": "https://github.com/vayam-choudhary/campussync-mits",
          "liveUrl": "https://campussync.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "FastAPI"
          ]
        },
        {
          "id": "BTIR25O1074-proj-2",
          "title": "SIH Hackathon Team Matcher",
          "description": "Interactive peer matching tool filtering students by tech stack and hackathon availability.",
          "repoUrl": "https://github.com/vayam-choudhary/sih-team-matcher",
          "techNotes": [
            "React",
            "TypeScript",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1074-1",
          "title": "Full Stack Developer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1074-0",
          "name": "Full Stack Web Development with React",
          "issuer": "Coursera / HKUST",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1074/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 87,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1075",
      "googleSub": "google-sub-btir25o1075",
      "email": "25ir1vi75@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Vishal Yadav",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1075",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1075",
      "enrolmentNumber": "BTIR25O1075",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1075",
      "headline": "Machine Learning Engineer | PyTorch, Computer Vision, Deep Learning | B.Tech AIR",
      "primaryDomain": "Artificial Intelligence",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Researching convolutional vision models, neural network optimization, and deploying lightweight AI models to edge accelerators.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Artificial Intelligence and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "vishal-yadav_mits",
        "codeforces": "vishal-yadav_code",
        "github": "vishal-yadav"
      },
      "githubUrl": "https://github.com/vishal-yadav",
      "linkedinUrl": "https://www.linkedin.com/in/vishal-yadav-mits",
      "portfolioUrl": "https://vishal-yadav.dev",
      "resumeFileName": "vishal_yadav_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 19,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Machine Learning Engineer",
        "AI Researcher"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1075-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1075-1",
          "name": "PyTorch",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1075-2",
          "name": "Computer Vision",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1075-3",
          "name": "Deep Learning",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1075-4",
          "name": "TensorFlow",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1075-5",
          "name": "OpenCV",
          "proficiency": "Advanced",
          "category": "Computer Vision"
        }
      ],
      "techStack": [
        "Python",
        "PyTorch",
        "TensorFlow",
        "OpenCV",
        "NumPy",
        "Scikit-Learn",
        "CUDA"
      ],
      "interests": [
        "Neural Networks",
        "Computer Vision",
        "Generative AI",
        "Medical Imaging",
        "Edge AI"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Artificial Intelligence"
      ],
      "projects": [
        {
          "id": "BTIR25O1075-proj-1",
          "title": "Autonomous Drone Visual Obstacle Avoidance",
          "description": "Real-time monocular depth estimation and collision avoidance model trained on custom outdoor campus datasets.",
          "repoUrl": "https://github.com/vishal-yadav/uav-vision-nav",
          "techNotes": [
            "PyTorch",
            "OpenCV",
            "Python",
            "ROS2"
          ]
        },
        {
          "id": "BTIR25O1075-proj-2",
          "title": "MITS Handwritten Answer Sheet OCR & Grading",
          "description": "Transformer-based handwriting transcription pipeline for technical course answer scripts.",
          "repoUrl": "https://github.com/vishal-yadav/answer-sheet-ocr",
          "techNotes": [
            "PyTorch",
            "Transformers",
            "FastAPI"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1075-1",
          "title": "Machine Learning Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1075-0",
          "name": "Deep Learning Specialization",
          "issuer": "Coursera / DeepLearning.AI",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1075/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 88,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1076",
      "googleSub": "google-sub-btir25o1076",
      "email": "25ir1ya76@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Yagya Sharma",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1076",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1076",
      "enrolmentNumber": "BTIR25O1076",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Female"
    },
    "profile": {
      "studentId": "BTIR25O1076",
      "headline": "Robotics Engineer | ROS2, Gazebo, C++, SLAM, TurtleBot3 | B.Tech AIR",
      "primaryDomain": "Robotics & Embedded Systems",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Hands-on practical experience in ROS2 navigation stacks (Nav2), 2D/3D LIDAR SLAM, and differential drive kinematics in the CAI Robotics Lab.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Robotics & Embedded Systems and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "yagya-sharma_mits",
        "codeforces": "yagya-sharma_code",
        "github": "yagya-sharma"
      },
      "githubUrl": "https://github.com/yagya-sharma",
      "linkedinUrl": "https://www.linkedin.com/in/yagya-sharma-mits",
      "portfolioUrl": "https://yagya-sharma.dev",
      "resumeFileName": "yagya_sharma_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 20,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Robotics Engineer",
        "Autonomous Systems Developer"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1076-0",
          "name": "ROS2",
          "proficiency": "Advanced",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1076-1",
          "name": "C++",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1076-2",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1076-3",
          "name": "Gazebo",
          "proficiency": "Intermediate",
          "category": "Simulation"
        },
        {
          "id": "sk-BTIR25O1076-4",
          "name": "SLAM",
          "proficiency": "Intermediate",
          "category": "Robotics"
        },
        {
          "id": "sk-BTIR25O1076-5",
          "name": "Embedded Systems",
          "proficiency": "Intermediate",
          "category": "Hardware"
        }
      ],
      "techStack": [
        "ROS2 Humble",
        "C++",
        "Python",
        "Gazebo",
        "Nav2",
        "Linux",
        "Micro-ROS"
      ],
      "interests": [
        "Mobile Robotics",
        "Autonomous Navigation",
        "Kinematics",
        "Drone Swarms",
        "LIDAR Perception"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Robotics & Embedded Systems"
      ],
      "projects": [
        {
          "id": "BTIR25O1076-proj-1",
          "title": "Autonomous Campus Guide Rover",
          "description": "TurtleBot3-based navigation rover mapping CAI ground floor with Cartographer SLAM and dynamic obstacle avoidance.",
          "repoUrl": "https://github.com/yagya-sharma/campus-guide-rover",
          "techNotes": [
            "ROS2",
            "C++",
            "Nav2",
            "Gazebo"
          ]
        },
        {
          "id": "BTIR25O1076-proj-2",
          "title": "4-DOF Robotic Arm Trajectory Planner",
          "description": "Inverse kinematics and trajectory interpolation software with MoveIt2 simulation for pick-and-place tasks.",
          "repoUrl": "https://github.com/yagya-sharma/arm-trajectory-planner",
          "techNotes": [
            "Python",
            "MoveIt2",
            "ROS2"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1076-1",
          "title": "Robotics & Autonomous Systems Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1076-0",
          "name": "ROS2 Basics & Autonomous Navigation",
          "issuer": "ConstructSim / ROS Industrial",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1076/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 89,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1077",
      "googleSub": "google-sub-btir25o1077",
      "email": "25ir1ya77@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Yash Tomar",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1077",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1077",
      "enrolmentNumber": "BTIR25O1077",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1077",
      "headline": "Frontend Engineer | React, Next.js, TypeScript, UI/UX Design | B.Tech AIR",
      "primaryDomain": "Frontend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Crafting sleek dark-mode design systems, responsive web applications, and intuitive interactive user experiences in React and Figma.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Frontend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "yash-tomar_mits",
        "codeforces": "yash-tomar_code",
        "github": "yash-tomar"
      },
      "githubUrl": "https://github.com/yash-tomar",
      "linkedinUrl": "https://www.linkedin.com/in/yash-tomar-mits",
      "portfolioUrl": "https://yash-tomar.dev",
      "resumeFileName": "yash_tomar_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 21,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Frontend Engineer",
        "UI/UX Designer"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1077-0",
          "name": "React",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1077-1",
          "name": "TypeScript",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1077-2",
          "name": "Next.js",
          "proficiency": "Intermediate",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1077-3",
          "name": "Tailwind CSS",
          "proficiency": "Advanced",
          "category": "Frontend"
        },
        {
          "id": "sk-BTIR25O1077-4",
          "name": "UI/UX Design",
          "proficiency": "Advanced",
          "category": "Design"
        },
        {
          "id": "sk-BTIR25O1077-5",
          "name": "Figma",
          "proficiency": "Advanced",
          "category": "Design"
        }
      ],
      "techStack": [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Figma",
        "Framer Motion",
        "Vite"
      ],
      "interests": [
        "Design Systems",
        "Micro-Interactions",
        "Web Accessibility",
        "Hackathons",
        "Design Engineering"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Frontend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1077-proj-1",
          "title": "MITS Pulse \u2014 Campus Activity Dashboard",
          "description": "Glassmorphic responsive dashboard displaying live campus events, academic timetables, and noticeboard feeds.",
          "repoUrl": "https://github.com/yash-tomar/mits-pulse",
          "liveUrl": "https://mitspulse.vercel.app",
          "techNotes": [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
          ]
        },
        {
          "id": "BTIR25O1077-proj-2",
          "title": "AcademIQ Design System",
          "description": "Accessible WCAG 2.1 AA compliant UI component library created in Figma and implemented in React.",
          "repoUrl": "https://github.com/yash-tomar/academiq-ui",
          "techNotes": [
            "React",
            "Tailwind",
            "Storybook"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1077-1",
          "title": "Frontend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1077-0",
          "name": "Google UX Design Professional Certificate",
          "issuer": "Coursera / Google",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1077/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 90,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1078",
      "googleSub": "google-sub-btir25o1078",
      "email": "25ir1ak78@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Akshansh Gupta",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1078",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1078",
      "enrolmentNumber": "BTIR25O1078",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1078",
      "headline": "Data Scientist | Python, Pandas, SQL, Scikit-Learn, Analytics | B.Tech AIR",
      "primaryDomain": "Data Science",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Analyzing large multivariate institutional datasets, building predictive machine learning models, and turning raw data into actionable dashboards.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Data Science and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "openForHackathons": true,
      "openSourceContributor": false,
      "competitiveProgramming": false,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "akshansh-gupta_mits",
        "codeforces": "akshansh-gupta_code",
        "github": "akshansh-gupta"
      },
      "githubUrl": "https://github.com/akshansh-gupta",
      "linkedinUrl": "https://www.linkedin.com/in/akshansh-gupta-mits",
      "portfolioUrl": "https://akshansh-gupta.dev",
      "resumeFileName": "akshansh_gupta_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 22,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Data Scientist",
        "Research Analyst"
      ],
      "clubs": [
        "Coding Club MITS",
        "Robotics Club MITS",
        "GDSC MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1078-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1078-1",
          "name": "Pandas",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1078-2",
          "name": "NumPy",
          "proficiency": "Advanced",
          "category": "Data"
        },
        {
          "id": "sk-BTIR25O1078-3",
          "name": "SQL",
          "proficiency": "Advanced",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1078-4",
          "name": "Scikit-Learn",
          "proficiency": "Intermediate",
          "category": "AI"
        },
        {
          "id": "sk-BTIR25O1078-5",
          "name": "Data Visualization",
          "proficiency": "Advanced",
          "category": "Analytics"
        }
      ],
      "techStack": [
        "Python",
        "Pandas",
        "NumPy",
        "SQL",
        "Scikit-Learn",
        "Matplotlib",
        "Seaborn",
        "PowerBI"
      ],
      "interests": [
        "Predictive Modeling",
        "Exploratory Data Analysis",
        "Statistical Inference",
        "Financial Analytics"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Data Science"
      ],
      "projects": [
        {
          "id": "BTIR25O1078-proj-1",
          "title": "MITS Student Academic Trend & CGPA Forecaster",
          "description": "Statistical predictive regression model analyzing attendance rates, lab practicals, and mid-sem performance.",
          "repoUrl": "https://github.com/akshansh-gupta/student-grade-predictor",
          "techNotes": [
            "Python",
            "Pandas",
            "Scikit-Learn",
            "Streamlit"
          ]
        },
        {
          "id": "BTIR25O1078-proj-2",
          "title": "Campus Electricity & Energy Consumption Analyzer",
          "description": "Time-series forecasting model for academic block power usage using historical smart-meter logs.",
          "repoUrl": "https://github.com/akshansh-gupta/energy-analyzer",
          "techNotes": [
            "Python",
            "Prophet",
            "Pandas",
            "Matplotlib"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1078-1",
          "title": "Data Scientist Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1078-0",
          "name": "IBM Data Science Professional Certificate",
          "issuer": "Coursera / IBM",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1078/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 91,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  },
  {
    "user": {
      "id": "BTIR25O1079",
      "googleSub": "google-sub-btir25o1079",
      "email": "25ir1an79@mitsgwl.ac.in",
      "role": "student",
      "fullName": "Anshu Paradkar",
      "pictureUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=BTIR25O1079",
      "isActive": true,
      "lastLoginAt": "2026-11-14T10:00:00Z",
      "rollNumber": "BTIR25O1079",
      "enrolmentNumber": "BTIR25O1079",
      "programme": "Bachelor of Technology",
      "branch": "Information Technology (Artificial Intelligence and Robotics)",
      "batch": "2024-2028",
      "semester": 3,
      "section": "A",
      "academicYear": "2026-2027",
      "yearOfStudy": 2,
      "graduationYear": 2028,
      "gender": "Male"
    },
    "profile": {
      "studentId": "BTIR25O1079",
      "headline": "Backend Engineer | Python, FastAPI, Docker, PostgreSQL | B.Tech AIR",
      "primaryDomain": "Backend Engineering",
      "bio": "B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. Specializing in high-performance asynchronous REST APIs, PostgreSQL schema design, and microservices containerization with Docker.",
      "aboutMe": "Enthusiastic 2nd-year B.Tech student in Centre for Artificial Intelligence at MITS Gwalior. Passionate about Backend Engineering and open for hackathons and projects.",
      "lookingFor": "Hackathon teammates for SIH 2026, robotics builds, and technical project collaboration.",
      "lookingForRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "openForHackathons": true,
      "openSourceContributor": true,
      "competitiveProgramming": true,
      "isAvailable": true,
      "openToCollaboratingWith": [
        "Same Branch",
        "Other Branches",
        "Same Year",
        "Seniors"
      ],
      "collaborationMode": [
        "Both"
      ],
      "professionalExperiences": [
        "Academic Projects",
        "Hackathons",
        "Open Source"
      ],
      "competitiveHandles": {
        "leetcode": "anshu-paradkar_mits",
        "codeforces": "anshu-paradkar_code",
        "github": "anshu-paradkar"
      },
      "githubUrl": "https://github.com/anshu-paradkar",
      "linkedinUrl": "https://www.linkedin.com/in/anshu-paradkar-mits",
      "portfolioUrl": "https://anshu-paradkar.dev",
      "resumeFileName": "anshu_paradkar_resume_2026.pdf",
      "resumeFileSize": "1.2 MB",
      "resumeUploadedAt": "2026-10-20T10:00:00Z",
      "availabilityHoursPerWeek": 23,
      "availabilityNotes": "Available on weekday evenings and full weekends for hackathons.",
      "preferredRoles": [
        "Backend Engineer",
        "Project Collaborator"
      ],
      "clubs": [
        "Coding Club MITS"
      ],
      "skills": [
        {
          "id": "sk-BTIR25O1079-0",
          "name": "Python",
          "proficiency": "Advanced",
          "category": "Language"
        },
        {
          "id": "sk-BTIR25O1079-1",
          "name": "FastAPI",
          "proficiency": "Advanced",
          "category": "Framework"
        },
        {
          "id": "sk-BTIR25O1079-2",
          "name": "PostgreSQL",
          "proficiency": "Intermediate",
          "category": "Database"
        },
        {
          "id": "sk-BTIR25O1079-3",
          "name": "Docker",
          "proficiency": "Intermediate",
          "category": "DevOps"
        },
        {
          "id": "sk-BTIR25O1079-4",
          "name": "REST APIs",
          "proficiency": "Advanced",
          "category": "Backend"
        },
        {
          "id": "sk-BTIR25O1079-5",
          "name": "Redis",
          "proficiency": "Intermediate",
          "category": "Database"
        }
      ],
      "techStack": [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "REST APIs",
        "Redis",
        "Git"
      ],
      "interests": [
        "Backend Architecture",
        "Distributed Systems",
        "Cloud Native",
        "Hackathons",
        "Microservices"
      ],
      "domains": [
        "Information Technology (Artificial Intelligence and Robotics)",
        "Backend Engineering"
      ],
      "projects": [
        {
          "id": "BTIR25O1079-proj-1",
          "title": "MITS Campus Event Notification Service",
          "description": "High-throughput async event streaming engine using FastAPI, Redis pub/sub, and PostgreSQL.",
          "repoUrl": "https://github.com/anshu-paradkar/mits-event-stream",
          "liveUrl": "https://events-mits.onrender.com",
          "techNotes": [
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "Docker"
          ]
        },
        {
          "id": "BTIR25O1079-proj-2",
          "title": "Automated Syllabus & Document Retrieval API",
          "description": "Vector-indexed document search microservice for university exam guidelines.",
          "repoUrl": "https://github.com/anshu-paradkar/syllabus-retriever",
          "techNotes": [
            "Python",
            "SQLAlchemy",
            "PostgreSQL"
          ]
        }
      ],
      "experiences": [
        {
          "id": "exp-BTIR25O1079-1",
          "title": "Backend Engineer Team Member",
          "organization": "Coding Club MITS",
          "startDate": "2025-08-01",
          "summary": "Collaborating on institutional tech initiatives, workshops, and student builds in the Centre for AI."
        }
      ],
      "certifications": [
        {
          "id": "cert-BTIR25O1079-0",
          "name": "Meta Backend Developer Professional Certificate",
          "issuer": "Coursera / Meta",
          "issuedYear": 2025,
          "credentialUrl": "https://verify.pocketuni.mits/BTIR25O1079/0"
        }
      ],
      "profileVisible": true,
      "completenessScore": 92,
      "updatedAt": "2026-11-14T12:00:00Z"
    }
  }
];
