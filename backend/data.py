"""
Portfolio data store.

Everything shown on the site lives in this one file. To update your
portfolio - change a sentence, swap a photo, add a new project - just
edit the dictionaries and lists below. If you started the server with
`--reload`, the changes appear the moment you hit save.

Image paths point to files inside `frontend/public/images/`. Drop a new
image in that folder (.png, .jpg, and .svg all work) and point the
matching `image_url` at it. No frontend code changes are ever needed -
the components map directly over this data.
"""

HERO = {
    "name": "Vince Maarat",
    "handle": "vinceslayz",
    "photo_url": "/images/profile.JPG",
    "role": "Systems Analyst & Information Technology Student",
    "terminal_line": "Personal Portfolio",
    "intro": (
        "I'm an IT student who gets genuinely excited about the layer most people never "
        "see - the networks, protocols, and security controls that keep systems running "
        "and safe. I spend my time building things that sit at the intersection of "
        "hardware and code: automating physical tasks with IoT, hardening systems against "
        "attack, and shipping software that solves problems I can actually see around me. "
        "I care less about chasing every new framework and more about building things "
        "that work, and work securely."
    ),
}

EDUCATION = [
    {
        "id": 1,
        "institution": "Davao del Norte State College (DNSC)",
        "logo_url": "/images/dnsc-logo.jpg",   # ← add this line
        "credential": "Bachelor of Science in Information Technology",
        "status": "4th Year Student",
        "period": "Present",
        "description": (
            "Coursework and hands-on labs spanning networking, systems administration, "
            "cybersecurity fundamentals, and full-stack software development."
        ),
        "highlights": [
            "Networking & Systems Administration",
            "Cybersecurity Fundamentals",
            "Software Development",
            "IT Project Management",
        ],
    },
    {
        "id": 2,
        "institution": "Panabo City Senior High School (PCSHS)",
        "logo_url": "/images/pcshs-logo.jpg",
        "credential": "Information and Communications Technology (ICT)",
        "status": "Completed",
        "period": "2021 - 2023",
        "description": (
            "Completed foundational technical coursework focused on computer systems servicing, "
            "network configuration, introductory programming, and multimedia technologies, "
            "building the core groundwork for advanced IT studies."
        ),
        "highlights": [
            "Computer Systems Servicing (CSS) & Hardware Maintenance",
            "Local Area Network (LAN) Setup & Troubleshooting",
        ],
    },
    {
        "id": 4,
        "institution": "Jose Maria College Foundation Incorporated` (JMCFI)",
        "logo_url": "/images/jmcfi-logo.png",   
        "credential": "Basic Education Curriculum (BEC)",
        "status": "Completed",
        "period": "2018 - 2021",
        "description": (
            "Completed the standard Basic Education Curriculum, developing a strong academic foundation "
            "and early analytical skills that paved the way for specialized technical studies."
        ),
        "highlights": [
            "Strong foundation in core academics (Mathematics, Science, English)",
            "Introductory Technology and Livelihood Education (TLE)",
            "Development of critical thinking and problem-solving skills",
        ],
    },
    # Add another entry here (e.g. senior high school, a bootcamp, a short course)
    # and it will automatically appear as another stop on the timeline.
]

PROJECTS = [
    {
        "id": 1,
        "title": "K A I N",
        "description": (
            "KAIN – Kusina Access Information Network is a platform created to support small food vendors "
            "by giving them a simple and accessible way to showcase their dishes online. It allows vendors "
            "to easily post their food, reach more customers, and increase their visibility (Downloadable down below)."
        ),
        "image_url": "/images/project 1.png",
        "tags": ["Web Development", "Community Platform", "UI/UX", "Project Manager", "Technopreneurship Project",],
        "github_url": "",
        "live_url": "https://kain-tau.vercel.app/",
        "drive_url": "https://drive.google.com/drive/folders/1mysQSx2YJWuDJBMppFd9xqzXWTecQF5Z?usp=sharing",
    },
    {
        "id": 2,
        "title": "TrashVision",
        "description": (
            "A real-time waste classification system built on YOLOv8 that identifies and "
            "sorts waste into categories from a Drone Camera feed, aimed at making "
            "recycling and waste segregation faster and more accurate."
        ),
        "image_url": "/images/Project 2.png",
        "tags": ["YOLOv8", "Computer Vision", "Python", "Machine Learning", "Drone Technology", "Capstone Project"],
        "github_url": "https://github.com/vincelsayzz/Trashvision",
        "live_url": "https://trashvision.vercel.app/",
    },
    {
        "id": 3,
        "title": "Hash-Pepper-and-Salt",
        "description": (
            "(Secure Authentication System) "
            "A robust registration and login system designed to demonstrate industry-standard"
            "user authentication and data protection practices."
        ),
        "image_url": "/images/project 3.png",
        "tags": ["Advanced Cryptography", "Security Feedback", "Clean Architecture", "GoLang", "IT322 Project"],
        "github_url": "https://github.com/vincelsayzz/Hash-Pepper-and-salt",
        "live_url": "https://srls.vercel.app/",
    },
    {
    "id": 4,
        "title": "ThunderKicks",
        "description": (
            "An e-commerce UI/UX prototype for a sneaker retail platform. It features customer-facing "
            "storefronts with a multi-step authentication system, paired with a comprehensive admin "
            "dashboard for managing inventory, tracking orders, and viewing sales analytics."
        ),
        "image_url": "/images/project 4.png",
        "tags": ["UI/UX Design", "E-commerce", "Figma", "Admin Dashboard", "Inventory Management","Frontend Development"],
        "github_url": "",
        "live_url": "",
        "figma_url": "https://www.figma.com/proto/esPUxPlxMi9MfFTFhoETjR/Thunderkicks?node-id=5-18&p=f&t=4lvkyjpySh8YUpt6-1&scaling=contain&content-scaling=fixed&page-id=2%3A3&starting-point-node-id=5%3A18"
    },
    {
    "id": 5,
        "title":  "PaTRAS",
        "description": (
            "The Panabo Traffic Reporting and Alert System (PaTRAS) is a centralized digital platform designed to manage and report public utility vehicle (PUV) violations. "
            "It replaces manual paper-based processes with a responsive website featuring a commuter's portal alongside an administrative dashboard for the Traffic Management Unit (TMU)." 
        ),
        "image_url": "/images/project 5.png",
        "tags": ["Traffic Management System", "E-Governance", "Web Application", "Integrative Programming Project"],
        "github_url": "",
        "live_url": "",
        "figma_url": "https://www.figma.com/proto/olPjAnxhsA1Zl5Al1hpPrc/TMU-Panabo---CLIENT?node-id=1-877&p=f&t=ykfFrYXSfILiDt27-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A877"
    },
    {
    "id": 6,
        "title":  "Blank",
        "description": (
            "errrrrrrrrrrrrrrrrrrr"
        ),
        "image_url": "/cisco-networking.svg",
        "tags": ["blank", "blank", "blank",],
        "github_url": "",
        "live_url": "",
        "figma_url": ""
    },
    # New project? Copy one of the dicts above, change the fields, and it
    # will show up in the grid automatically - no changes needed elsewhere.
]

CERTIFICATIONS = [
    {
        "id": 1,
        "title": "Computer System Servicing NC II",
        "issuer": "TESDA: Technical Education and Skills Development Authority",
        "description": (
            "Certified competency in installing and configuring computer systems, setting up local area networks (LAN), "
            "configuring computer servers, and performing system maintenance and repair."
        ),
        "image_url": "/images/Tesda.png",
        "date": "Issued Jan 2023 · Expires Jan 2028",
        "credential_url": "https://www.linkedin.com/in/vinceslayz/details/certifications/",
    },
    {
        "id": 2,
        "title": "IBM Data Science",
        "issuer": "Coursera / IBM",
        "description": (
            "A comprehensive 10-course professional credential covering foundational and advanced concepts "
            "in data science and machine learning. Developed hands-on skills in Python programming, SQL databases, "
            "data analysis, and visualization, culminating in building machine learning models and a cloud-based capstone project."
        ),
        "image_url": "/images/IBM Data Science.png",
        "date": "Jun 14, 2024",
        "credential_url": "https://coursera.org/verify/professional-cert/E4Y89SAY88K6",
    },
    {
        "id": 3,
        "title": "IBM Applied Data Science",
        "issuer": "Coursera / IBM",
        "description": (
            "Developed hands-on skills in Python programming, SQL databases, "
            "data analysis, and visualization, culminating in building machine learning models and a cloud-based capstone project."
        ),
        "image_url": "/images/IBM Applied Science.png",
        "date": "Jun 14, 2024",
        "credential_url": "https://coursera.org/verify/specialization/MDPZSNLRW55G",
    },
    {
        "id": 4,
        "title": "Google Data Analytics",
        "issuer": "Coursera / Google",
        "description": (
            "A comprehensive 9-course professional training program developed by Google. "
            "It focuses on the complete data analysis process, covering data cleaning, organization, analysis, and storytelling. "
        ),
        "image_url": "/images/cert 4.png",
        "date": "Jun 18, 2024",
        "credential_url": "https://coursera.org/verify/professional-cert/G3EB2NVDN97P",
    },
    {
        "id": 5,
        "title": "Google IT Support",
        "issuer": "Coursera / Google",
        "description": (
            "A comprehensive 6-course professional training program developed by Google. "
            "It focuses on the fundamentals of IT support, including troubleshooting, customer service, and system administration."
        ),
        "image_url": "/images/cert 5.png",
        "date": "Jun 18, 2024",
        "credential_url": "https://coursera.org/verify/professional-cert/YHK725LEAR9M",
    },
    {
        "id": 6,
        "title": "Google Cloud Digital Leader Training",
        "issuer": "Coursera / Google",
        "description": (
            "A comprehensive 6-course professional training program developed by Google. "
            "It focuses on the fundamentals of cloud digital leadership, including strategic planning, team management, and business transformation."
        ),
        "image_url": "/images/cert 6.png",
        "date": "Jun 28, 2024",
        "credential_url": "https://coursera.org/verify/professional-cert/QEGENV6AZWW7",
    },
    {
        "id": 7,
        "title": "ISC2 Certified in Cybersecurity (CC)",
        "issuer": "ISC2: International Information System Security Certification Consortium",
        "description": (
            "A globally recognized foundational certification that validates essential knowledge and skills for cybersecurity roles. "
            "It demonstrates a solid understanding of core security concepts across five domains: Security Principles, Business Continuity and Incident Response, Access Controls, Network Security, and Security Operations."
        ),
        "image_url": "/images/cert 7.png",
        "date": "06 July, 2025",
        "credential_url": "https://drive.google.com/file/d/1To_aNL_Cmi07tzLCQP99HQjLMy_uAOBD/view?usp=sharing",
    },
    {
        "id": 8,
        "title": "Technoprenueurship Ignite Phillipines",
        "issuer": "Wadhwani Foundation",
        "description": (
           "Successfully completed 42 hours of coursework training focused on developing foundational startup and business skills. "
            "The program covered practical methodologies in business ideation, strategic business modeling, and financial planning."
        ),
        "image_url": "/images/cert 8.png",
        "date": "April 30, 2026",
        "credential_url": "https://drive.google.com/file/d/1UTgnA9aw0qu3xP0FMOzEKSdkId5w0cls/view?usp=sharing",
    },
     {
        "id": 9,
        "title": "Python Essentials",
        "issuer": "Cisco Networking Academy",
        "description": (
           "Python Essentials learning and understanding the fundamentals of Python programming, including data types, control structures, functions, and basic object-oriented programming concepts. "
        ),
        "image_url": "/images/cert 9.png",
        "date": "27 Feb 2026",
        "credential_url": "https://www.linkedin.com/in/vinceslayz/details/certifications/",
    },
    # Same pattern - add a new dict here for every new certificate you earn.
]

SOCIAL_LINKS = {
    "linkedin": "https://www.linkedin.com/in/vinceslayz",
    "facebook": "https://www.facebook.com/psychovince36",
    "gmail": "mailto:vincekethmaarat5@gmail.com",
    "github": "https://github.com/vincelsayzz",
}

# This is the single object the API serves. The frontend fetches this
# exact shape from GET /api/portfolio.
PORTFOLIO_DATA = {
    "hero": HERO,
    "education": EDUCATION,
    "projects": PROJECTS,
    "certifications": CERTIFICATIONS,
    "social_links": SOCIAL_LINKS,
}
