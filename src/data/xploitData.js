/** Shared XPLOIT club content — IIIT Bhopal Cyber Security Club */

export const SITE = {
  name: "XPLOIT",
  tagline: "The Cyber Security Club of IIIT Bhopal",
  email: "xploit@iiitb.ac.in",
  location: "IIIT Bhopal, Kothri Kalan, Bhopal",
  heroTitle: "Code. Compete. Conquer.",
  heroSub:
    "We grow a culture of builders and breakers—CTFs, ethical hacking labs, workshops, and real-world security. Learn by doing. Compete with the best. Level up together.",
};

export const STATS = [
  { label: "Active members", value: 150, suffix: "+" },
  { label: "Contests & CTFs hosted", value: 24, suffix: "+" },
  { label: "Practice problems solved", value: 5000, suffix: "+" },
];

export const TEAM_PHOTO_DIR = "/Images/drive-download-20260318T080635Z-3-001";
export const teamPhoto = (filename) => `${TEAM_PHOTO_DIR}/${encodeURIComponent(filename)}`;
export const PLACEHOLDER = "https://i.pravatar.cc/300?img=";

export const CORE_TEAM = [
  { name: "Darsh Dave", role: "Coordinator", image: teamPhoto("IMG_1417 - DARSH DAVE.jpeg"), linkedin: "#", github: "#" },
  { name: "Bhushan Wayal", role: "Co-Coordinator", image: `${PLACEHOLDER}12`, linkedin: "#", github: "#" },
  { name: "Saurav Sagar", role: "Co-Coordinator", image: `${PLACEHOLDER}13`, linkedin: "#", github: "#" },
];

export const LEADS_TEAM = [
  { name: "Rohit Kumar Dhaka", role: "Event Lead", image: `${PLACEHOLDER}14`, linkedin: "#", github: "#" },
  { name: "Shashank", role: "PR & Outreach Lead", image: teamPhoto("IMG-20260226-WA0019 - Shashank.jpg"), linkedin: "#", github: "#" },
  { name: "Aayush Sharma", role: "Social Media Lead", image: teamPhoto("IMG_20251028_115206 - Aayush Sharma.jpg"), linkedin: "#", github: "#" },
  { name: "Shreyash Jadhav", role: "Design Lead", image: `${PLACEHOLDER}17`, linkedin: "#", github: "#" },
  { name: "Abhay Jadon", role: "Web Development Lead", image: `${PLACEHOLDER}18`, linkedin: "#", github: "#" },
  { name: "Kapil Meena", role: "Web Security Lead", image: `${PLACEHOLDER}19`, linkedin: "#", github: "#" },
  { name: "Jasvant Singh Dhaked", role: "Bug Bounty Lead", image: `${PLACEHOLDER}20`, linkedin: "#", github: "#" },
  { name: "Anirudha Ingle", role: "Esports & Gaming Lead", image: `${PLACEHOLDER}21`, linkedin: "#", github: "#" },
  { name: "Prakhar Dwivedi", role: "Offensive Security Lead", image: `${PLACEHOLDER}22`, linkedin: "#", github: "#" },
  { name: "Chirag Prasad", role: "Flagmaster", image: teamPhoto("WhatsApp Image 2026-03-03 at 6.11.44 PM - Chirag Prasad.jpeg"), linkedin: "#", github: "#" },
];

export const ASSISTANT_TEAM = [
  { name: "Rhit Shukla", role: "Assist. Offensive Security Lead", image: teamPhoto("WhatsApp Image 2026-02-12 at 21.48.45.jpeg"), linkedin: "#", github: "#" },
  { name: "Aryan Singh", role: "Assist. Offensive Security Lead", image: `${PLACEHOLDER}25`, linkedin: "#", github: "#" },
  { name: "Vala Kautak", role: "Assist. Bug Bounty Lead", image: `${PLACEHOLDER}26`, linkedin: "#", github: "#" },
  { name: "Karan Misra", role: "Assistant Web Security Lead", image: teamPhoto("me_xploit - Karan Mishra.jpg"), linkedin: "#", github: "#" },
  { name: "Hirdesh Kumar", role: "Assistant Design Lead", image: teamPhoto("IMG_20251101_171409 - Hirdesh Kumar.jpg"), linkedin: "#", github: "#" },
  { name: "Ashish Jangra", role: "Assistant Design Lead", image: teamPhoto("IMG-20260228-WA0270(1) - Ashish Jangra.jpg"), linkedin: "#", github: "#" },
  { name: "Asbaa Thakur", role: "Assist. Defensive Security Lead", image: teamPhoto("GDSC_FORMAL_SQUARE - Asbaa Thakur.jpg"), linkedin: "#", github: "#" },
  { name: "Vishvas Patil", role: "Assist. Flag Master", image: teamPhoto("Picsart_26-02-28_19-35-41-722 - Vishvas Patil.jpg"), linkedin: "#", github: "#" },
  { name: "Anoop Soni", role: "Assist. Web Development Lead", image: `${PLACEHOLDER}32`, linkedin: "#", github: "#" },
  { name: "Abhishek Yadav", role: "Assist. Event Lead", image: teamPhoto("IMG_20250419_215922 - ABHISHEK YADAV.jpg"), linkedin: "#", github: "#" },
  { name: "Nikilesh Dasaratha", role: "Assist. Event Lead", image: teamPhoto("IMG-20251109-WA0038 - Nikilesh Dasaratha.jpg"), linkedin: "#", github: "#" },
  { name: "Dhruv Nihate", role: "Assist. Social Media Lead", image: teamPhoto("IMG_20260104_111353 - _ PREDATOR.jpg"), linkedin: "#", github: "#" },
  { name: "Sneha Verma", role: "Assist. Social Media Lead", image: teamPhoto("photo - Sneha Verma.jpg"), linkedin: "#", github: "#" },
  { name: "Pranav Polawar", role: "Assist. PR & Outreach Lead", image: teamPhoto("IMG_20260304_212729 - Pranav Polawar.jpg"), linkedin: "#", github: "#" },
  { name: "Ayush Kumar", role: "Assist. PR & Outreach Lead", image: `${PLACEHOLDER}38`, linkedin: "#", github: "#" },
  { name: "Abhinay Choudhary", role: "Assist. Gaming & Esports Lead", image: teamPhoto("IMG-20260102-WA0030 - Abhinay Choudhari.jpg"), linkedin: "#", github: "#" },
  { name: "Lakshay Chahar", role: "Assist. Gaming & Esports Lead", image: `${PLACEHOLDER}40`, linkedin: "#", github: "#" },
];

/** Flat list for team page (order: core → leads → assistants) */
export const ALL_TEAM_MEMBERS = [...CORE_TEAM, ...LEADS_TEAM, ...ASSISTANT_TEAM];

export const SPONSOR_LOGO_ITEMS = [
  { src: "/Images/sponsors/xploit_sponsors/barbeque-nation.png", alt: "Barbeque Nation", href: "https://www.barbequenation.com/" },
  { src: "/Images/sponsors/xploit_sponsors/40f0503a-b19f-47fb-8646-d969f46d3095.png", alt: "Altered Security", href: "https://www.alteredsecurity.com/" },
  { src: "/Images/sponsors/xploit_sponsors/Screenshot%202026-03-02%20010955.png", alt: "NDMSK Technology Pvt. Ltd", href: "#" },
  { src: "/Images/sponsors/xploit_sponsors/Screenshot%202026-03-02%20011013.png", alt: "Sugam Informatics Society", href: "#" },
  { src: "/Images/sponsors/xploit_sponsors/Screenshot%202026-03-02%20011107.png", alt: "CampusTales", href: "#" },
  { src: "/Images/sponsors/xploit_sponsors/Screenshot%202026-03-02%20011122.png", alt: "The Dopamine Store", href: "#" },
  { src: "/Images/sponsors/xploit_sponsors/f53b0251-ca6a-494e-bcd1-27e1d569d4ed.png", alt: "iSEA Phase III", href: "#" },
  { src: "/Images/sponsors/xploit_sponsors/3933443c-38cb-438a-abad-f4d5f6201e06.png", alt: "MANIT CSE Department", href: "https://www.manit.ac.in/" },
];

/** category: hackathon | contest | workshop — for Events page filters */
export const EVENTS = [
  {
    id: 1,
    title: "Capture The Flag",
    tag: "CTF",
    category: "contest",
    date: "Mar 15, 2025",
    venue: "IIIT Bhopal",
    desc: "Compete in challenges across crypto, forensics, web, and pwn. Win prizes and bragging rights.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Ethical Hacking Workshop",
    tag: "Workshop",
    category: "workshop",
    date: "Apr 2, 2025",
    venue: "Lab 101",
    desc: "Hands-on session on reconnaissance, exploitation, and secure coding practices.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Bug Bounty 101",
    tag: "Talk",
    category: "workshop",
    date: "Apr 20, 2025",
    venue: "Auditorium",
    desc: "Learn how to find and report vulnerabilities responsibly. Guest speaker from industry.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Network Security Lab",
    tag: "Lab",
    category: "contest",
    date: "May 5, 2025",
    venue: "Networking Lab",
    desc: "Configure firewalls, sniff traffic, and defend against common network attacks.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Cyber Awareness Week",
    tag: "Series",
    category: "hackathon",
    date: "May 12–18, 2025",
    venue: "Campus-wide",
    desc: "Talks, demos, and a mini-CTF. Open to all students.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Secure Coding Bootcamp",
    tag: "Bootcamp",
    category: "workshop",
    date: "Jun 1, 2025",
    venue: "Online + Lab",
    desc: "Multi-day intensive on secure development and OWASP Top 10.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
  },
  {
    id: 7,
    title: "UDBHAV",
    tag: "Hackathon",
    category: "hackathon",
    date: "Oct 15, 2025",
    venue: "IIIT Bhopal",
    desc: "India's first ever Inter IIIT Hackathon. XPLOIT presents IIIT Bhopal Internal Round.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
  },
  {
    id: 8,
    title: "ROOTRUSH",
    tag: "Event",
    category: "hackathon",
    date: "TBA",
    venue: "IIIT Bhopal",
    desc: "In collaboration with Sugam Informatics Society & NM. A high-energy tech and cybersecurity showdown.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
  },
  {
    id: 9,
    title: "BGMI Battlegrounds Mobile India Tournament",
    tag: "Esports",
    category: "workshop",
    date: "TBA",
    venue: "Online / Campus",
    desc: "Presented by ALGOS. The ultimate battleground showdown. Goodies up to ₹2000 for winners.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
  },
];

export const ABOUT_MISSION =
  "Empower IIIT Bhopal students with practical offensive and defensive security skills through CTFs, labs, and mentorship—ethically, collaboratively, and at pace with industry.";

export const ABOUT_VISION =
  "A campus where every curious mind can reason about real threats, build resilient systems, and represent our institute in national and global security competitions.";

export const ABOUT_WHAT_WE_DO = [
  {
    title: "CTFs & contests",
    body: "Jeopardy and attack-defence style challenges across web, crypto, forensics, pwn, and more.",
  },
  {
    title: "Workshops & labs",
    body: "Hands-on sessions on ethical hacking, networking, secure coding, and tooling used by professionals.",
  },
  {
    title: "Talks & collaborations",
    body: "Expert sessions, sponsor-backed events, and partnerships that open doors to internships and research.",
  },
];

export const TIMELINE = [
  { year: "2023", title: "Club foundation", detail: "XPLOIT formed as the cybersecurity community hub at IIIT Bhopal." },
  { year: "2024", title: "CTF culture", detail: "Regular internal CTFs, practice tracks, and cross-club participation." },
  { year: "2025", title: "UDBHAV & scale", detail: "Inter IIIT hackathon internal round, ROOTRUSH, and growing industry sponsors." },
  { year: "Today", title: "Build in public", detail: "Leads and assistants across offensive security, web, design, PR, and esports—welcoming new members every semester." },
];

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "GitHub", href: "#", icon: "github" },
  { label: "Discord", href: "#", icon: "discord" },
];

/** IIIT Bhopal — embed-friendly map query */
export const MAP_EMBED_QUERY = "Indian+Institute+of+Information+Technology+Bhopal";
