export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Team", href: "#team" },
  { label: "Expertise", href: "#expertise" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const events = [
  {
    id: 1,
    title: "Capture The Flag (CTF) Challenge",
    slug: "capture-the-flag-2026",
    description:
      "Push your cybersecurity skills to the limit through real-world challenges in web exploitation, reverse engineering, cryptography, binary exploitation, and digital forensics. Whether you're a beginner or an experienced player, this competition offers an exciting opportunity to solve practical security problems while competing against the best minds.",
    shortDescription:
      "A full-day cybersecurity competition featuring web, crypto, pwn, reverse engineering, and forensics challenges.",
    date: "27 April 2026",
    time: "09:00 AM - 05:00 PM",
    venue: "Main Auditorium, IIIT Bhopal",
    organizer: "Null Community",
    speaker: "Cyber Security Team",
    category: "Competition",
    level: "Intermediate",
    mode: "Offline",
    registration: "Open",
    participants: 300,
    price: "Free",
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Live Scoreboard",
      "Team & Solo Participation",
      "Cash Prize ₹25,000",
      "Certificates",
      "Industry Mentors",
    ],
    agenda: [
      "Opening Ceremony",
      "Challenge Briefing",
      "Competition Begins",
      "Lunch Break",
      "Final Submission",
      "Prize Distribution",
    ],
    tags: ["CTF", "Web", "Crypto", "Pwn", "Forensics"],
  },

  {
    id: 2,
    title: "Web Security Bootcamp",
    slug: "web-security-bootcamp",
    description:
      "A practical bootcamp covering authentication, authorization, OWASP Top 10 vulnerabilities, secure APIs, JWT security, SQL Injection, XSS, CSRF, and secure deployment practices using hands-on demonstrations.",
    shortDescription:
      "Hands-on workshop on secure web development and OWASP Top 10.",
    date: "10 May 2026",
    time: "10:00 AM - 04:00 PM",
    venue: "Seminar Hall, IIIT Bhopal",
    organizer: "Null Community",
    speaker: "Senior Security Engineer",
    category: "Workshop",
    level: "Beginner",
    mode: "Offline",
    registration: "Open",
    participants: 220,
    price: "Free",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Hands-on Labs",
      "OWASP Top 10",
      "Secure Coding",
      "Certificate",
    ],
    agenda: [
      "Introduction",
      "Authentication & JWT",
      "OWASP Top 10",
      "Live Exploitation",
      "Secure Coding Practices",
      "Q&A Session",
    ],
    tags: ["Workshop", "OWASP", "React", "Node.js"],
  },

  {
    id: 3,
    title: "Ethical Hacking Workshop",
    slug: "ethical-hacking-workshop",
    description:
      "Learn professional penetration testing methodologies including reconnaissance, scanning, vulnerability assessment, exploitation, privilege escalation, and responsible disclosure using industry-standard tools.",
    shortDescription:
      "Learn ethical hacking with Kali Linux and professional security tools.",
    date: "24 May 2026",
    time: "09:30 AM - 03:30 PM",
    venue: "Cyber Security Lab",
    organizer: "Null Community",
    speaker: "Certified Ethical Hacker",
    category: "Workshop",
    level: "Intermediate",
    mode: "Offline",
    registration: "Open",
    participants: 180,
    price: "Free",
    image:
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Kali Linux",
      "Burp Suite",
      "Nmap",
      "Wireshark",
      "Certificates",
    ],
    agenda: [
      "Reconnaissance",
      "Scanning",
      "Enumeration",
      "Exploitation",
      "Privilege Escalation",
      "Responsible Disclosure",
    ],
    tags: ["Ethical Hacking", "Kali", "Networking"],
  },

  {
    id: 4,
    title: "Bug Bounty Hunting Session",
    slug: "bug-bounty-hunting",
    description:
      "Discover how successful bug bounty hunters identify, validate, and responsibly disclose vulnerabilities on major platforms. Learn reconnaissance techniques, automation, reporting, and strategies to maximize rewards.",
    shortDescription:
      "Explore real-world bug bounty methodology and reporting workflow.",
    date: "08 June 2026",
    time: "11:00 AM - 04:00 PM",
    venue: "Innovation Centre",
    organizer: "Null Community",
    speaker: "Top Bug Bounty Hunter",
    category: "Talk",
    level: "Advanced",
    mode: "Hybrid",
    registration: "Open",
    participants: 160,
    price: "Free",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Recon Automation",
      "Live Demonstration",
      "Responsible Disclosure",
      "Q&A",
    ],
    agenda: [
      "Introduction",
      "Recon Workflow",
      "Automation",
      "Finding Vulnerabilities",
      "Writing Reports",
      "Career Guidance",
    ],
    tags: ["Bug Bounty", "Automation", "Recon"],
  },

  {
    id: 5,
    title: "Blue Team Defense Workshop",
    slug: "blue-team-defense",
    description:
      "Learn how security operation centers detect, investigate, and respond to cyber attacks using SIEM platforms, endpoint monitoring, threat intelligence, and incident response playbooks.",
    shortDescription:
      "Defend enterprise infrastructure using modern blue team techniques.",
    date: "22 June 2026",
    time: "09:00 AM - 03:00 PM",
    venue: "Cyber Defence Lab",
    organizer: "Null Community",
    speaker: "SOC Analyst",
    category: "Workshop",
    level: "Intermediate",
    mode: "Offline",
    registration: "Coming Soon",
    participants: 120,
    price: "Free",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Incident Response",
      "SOC Workflow",
      "Threat Hunting",
      "SIEM",
    ],
    agenda: [
      "SOC Overview",
      "Threat Detection",
      "Alert Investigation",
      "Incident Response",
      "Threat Hunting",
    ],
    tags: ["Blue Team", "SOC", "Threat Hunting"],
  },

  {
    id: 6,
    title: "Cyber Security Career Summit",
    slug: "career-summit",
    description:
      "Meet industry professionals, recruiters, and security researchers to learn about cybersecurity career paths, certifications, internships, higher studies, and interview preparation.",
    shortDescription:
      "Connect with recruiters and security experts to kickstart your cybersecurity career.",
    date: "05 July 2026",
    time: "10:00 AM - 05:00 PM",
    venue: "Convention Hall",
    organizer: "Null Community",
    speaker: "Industry Experts",
    category: "Conference",
    level: "All Levels",
    mode: "Offline",
    registration: "Coming Soon",
    participants: 500,
    price: "Free",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Panel Discussions",
      "Networking",
      "Resume Reviews",
      "Mock Interviews",
    ],
    agenda: [
      "Keynote",
      "Career Roadmap",
      "Industry Panel",
      "Networking",
      "Resume Review",
    ],
    tags: ["Career", "Conference", "Networking"],
  },
];


export const team = [
  { name: "Darsh Dave", role: "Coordinator", image: "/Images/drive-download-20260318T080635Z-3-001/IMG_1417 - DARSH DAVE.jpeg", linkedin: "#", github: "#" },
  { name: "Shashank", role: "PR & Outreach Lead", image: "/Images/drive-download-20260318T080635Z-3-001/IMG-20260226-WA0019 - Shashank.jpg", linkedin: "#", github: "#" },
  { name: "Aayush Sharma", role: "Social Media Lead", image: "/Images/drive-download-20260318T080635Z-3-001/IMG_20251028_115206 - Aayush Sharma.jpg", linkedin: "#", github: "#" },
  { name: "Chirag Prasad", role: "Flagmaster", image: "/Images/drive-download-20260318T080635Z-3-001/WhatsApp Image 2026-03-03 at 6.11.44 PM - Chirag Prasad.jpeg", linkedin: "#", github: "#" },
  { name: "Rhit Shukla", role: "Assist. Offensive Security Lead", image: "/Images/drive-download-20260318T080635Z-3-001/WhatsApp Image 2026-02-12 at 21.48.45.jpeg", linkedin: "#", github: "#" },
  { name: "Karan Misra", role: "Assistant Web Security Lead", image: "/Images/drive-download-20260318T080635Z-3-001/me_xploit - Karan Mishra.jpg", linkedin: "#", github: "#" },
  { name: "Hirdesh Kumar", role: "Assistant Design Lead", image: "/Images/drive-download-20260318T080635Z-3-001/IMG_20251101_171409 - Hirdesh Kumar.jpg", linkedin: "#", github: "#" },
  { name: "Ashish Jangra", role: "Assistant Design Lead", image: "/Images/drive-download-20260318T080635Z-3-001/IMG-20260228-WA0270(1) - Ashish Jangra.jpg", linkedin: "#", github: "#" },
  { name: "Asbaa Thakur", role: "Assist. Defensive Security Lead", image: "/Images/drive-download-20260318T080635Z-3-001/GDSC_FORMAL_SQUARE - Asbaa Thakur.jpg", linkedin: "#", github: "#" },
  { name: "Vishvas Patil", role: "Assist. Flag Master", image: "/Images/drive-download-20260318T080635Z-3-001/Picsart_26-02-28_19-35-41-722 - Vishvas Patil.jpg", linkedin: "#", github: "#" },
  { name: "Abhishek Yadav", role: "Assist. Event Lead", image: "/Images/drive-download-20260318T080635Z-3-001/IMG_20250419_215922 - ABHISHEK YADAV.jpg", linkedin: "#", github: "#" },
  { name: "Nikilesh Dasaratha", role: "Assist. Event Lead", image: "/Images/drive-download-20260318T080635Z-3-001/IMG-20251109-WA0038 - Nikilesh Dasaratha.jpg", linkedin: "#", github: "#" },
  { name: "Dhruv Nihate", role: "Assist. Social Media Lead", image: "/Images/drive-download-20260318T080635Z-3-001/IMG_20260104_111353 - _ PREDATOR.jpg", linkedin: "#", github: "#" },
  { name: "Sneha Verma", role: "Assist. Social Media Lead", image: "/Images/drive-download-20260318T080635Z-3-001/photo - Sneha Verma.jpg", linkedin: "#", github: "#" },
  { name: "Pranav Polawar", role: "Assist. PR & Outreach Lead", image: "/Images/drive-download-20260318T080635Z-3-001/IMG_20260304_212729 - Pranav Polawar.jpg", linkedin: "#", github: "#" },
  { name: "Abhinay Choudhary", role: "Assist. Gaming & Esports Lead", image: "/Images/drive-download-20260318T080635Z-3-001/IMG-20260102-WA0030 - Abhinay Choudhari.jpg", linkedin: "#", github: "#" },
  { name: "Priyansi Mishra", role: "Team Member", image: "/Images/drive-download-20260318T080635Z-3-001/image - Priyansi Mishra.jpeg", linkedin: "#", github: "#" },
];

export const expertise = [
  "Network Security",
  "Web Application Security",
  "Cryptography",
  "Reverse Engineering",
  "Malware Analysis",
  "Digital Forensics",
];

export const gallery = [
  "/Gallery/twot.png",
  "/Gallery/onet.jpeg",
  "/Gallery/twot.png",
  "/Gallery/gallery4.jpg",
];
