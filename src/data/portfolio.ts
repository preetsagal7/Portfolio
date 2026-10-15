// Portfolio data for Sagalpreet Singh
// Update this file to modify portfolio content without touching UI components

export const personalInfo = {
  name: "Sagalpreet Singh",
  initials: "SS",
  tagline: "Cybersecurity Enthusiast | Software Developer | System Design Learner",
  introLabel: "COMPUTER SCIENCE & ENGINEERING",
  description:
    "I'm a Computer Science and Engineering undergraduate passionate about cybersecurity, network traffic analysis, secure software systems, and building practical technology solutions.",
  availability: "Open to Learning & Technical Opportunities",
  location: "Bidar, Karnataka, India",
  email: "preetsagal7@gmail.com",
  github: "https://github.com/preetsagal7",
  profileImage: "/images/sagalpreet-profile.jpg",
  resumePath: "/resume.pdf",
};

export const aboutText =
  "Detail-oriented Computer Science and Engineering undergraduate at Guru Nanak Dev Engineering College (GNDEC), with a strong interest in cybersecurity, network traffic analysis, software development, and system architecture. Experienced in hands-on cybersecurity assessments, packet inspection, identity-verification platform development, and resilient system design. Have taken lead developer, system architect, and team leadership responsibilities across technical projects and hackathon initiatives.";

export const aboutHighlights = [
  { icon: "Shield", label: "Cybersecurity and Network Analysis" },
  { icon: "Code", label: "Software Engineering" },
  { icon: "Lock", label: "Secure System Design" },
  { icon: "FileText", label: "Technical Research and Documentation" },
  { icon: "Users", label: "Collaborative Problem-Solving" },
  { icon: "Trophy", label: "Hackathon Participation and Leadership" },
];

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Cybersecurity & Networking",
    icon: "ShieldCheck",
    skills: [
      "Wireshark",
      "Nmap",
      "Gobuster",
      "Packet Inspection",
      "Network Enumeration",
      "Web Application Vulnerability Assessment",
      "Directory Brute-Forcing",
      "Traffic Interception",
    ],
  },
  {
    title: "Programming Languages",
    icon: "Terminal",
    skills: ["C", "Java", "Python", "C++", "8051 Assembly"],
  },
  {
    title: "Web Development & Tools",
    icon: "Globe",
    skills: [
      "React",
      "Tailwind CSS",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Git",
      "GitHub",
      "Netlify Deployment",
      "Keil µVision IDE",
    ],
  },
  {
    title: "Data Structures & System Design",
    icon: "Network",
    skills: [
      "Stacks and Queues",
      "Circular Queues",
      "Binary Search Trees",
      "AVL Trees",
      "Graph Algorithms",
      "Dynamic Memory Allocation",
    ],
  },
];

export interface Experience {
  role: string;
  organization: string;
  type: string;
  date: string;
  responsibilities: string[];
  tools: string[];
}

export const experiences: Experience[] = [
  {
    role: "Cybersecurity Research Intern",
    organization: "ShadowFox",
    type: "Virtual Internship",
    date: "September 2026",
    responsibilities: [
      "Executed structured network penetration and enumeration assessments using Nmap, Gobuster, and Wireshark.",
      "Intercepted and analyzed network traffic to identify potential vulnerabilities, misconfigurations, and plaintext exposure risks.",
      "Prepared technical documentation and reports outlining mitigation strategies and security patch recommendations.",
    ],
    tools: ["Nmap", "Gobuster", "Wireshark"],
  },
];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  date: string;
  event?: string;
  description: string;
  contributions: string[];
  technologies?: string[];
  githubUrl?: string;
  liveUrl?: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: "vanguard-id",
    title: "Vanguard ID",
    subtitle: "Automated Identity Screening & Fraud Detection",
    role: "Lead Developer & System Architect",
    date: "September 2026",
    description:
      "An automated document-verification platform designed to detect identity-document fraud and spoofing attempts.",
    contributions: [
      "Architected the identity-verification workflow.",
      "Integrated computer-vision and OCR workflows for automated data extraction.",
      "Designed validation workflows against relevant document standards.",
      "Focused on efficient verification and minimizing false acceptance.",
    ],
    icon: "Fingerprint",
  },
  {
    id: "sathi-jalchakra",
    title: "S.A.T.H.I. / Jal-Chakra",
    subtitle: "Community Resource Management",
    role: "Team Leader / Lead Architect",
    date: "2026",
    event: "Srishti Hackathon 2026 — 36-Hour National Hackathon",
    description:
      "An offline-first, community-driven resource tracking and water-distribution platform designed for underserved communities.",
    contributions: [
      "Designed an accessible resource-tracking workflow.",
      "Developed custom scoring concepts for equitable resource allocation.",
      "Focused on community usage reporting.",
      "Designed a lightweight interface for low-bandwidth environments.",
    ],
    icon: "Droplets",
  },
  {
    id: "ai-cybersecurity-bot",
    title: "AI Cybersecurity Bot",
    subtitle: "Educational Security Assistant",
    role: "Project Lead & Developer",
    date: "April 2026",
    description:
      "An interactive AI-assisted educational chatbot designed to explain cyber hygiene, cybersecurity threats, and mitigation practices.",
    contributions: [
      "Developed conversational educational workflows.",
      "Explained phishing and social engineering.",
      "Covered encryption and basic security practices.",
      "Focused on translating complex security topics into actionable advice.",
    ],
    icon: "Bot",
  },
];

export const education = {
  institution: "Guru Nanak Dev Engineering College (GNDEC)",
  location: "Bidar, Karnataka, India",
  degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
  university: "Visvesvaraya Technological University (VTU)",
  usn: "3GN24IC044",
  expectedGraduation: "June 2028",
  coursework: [
    "Data Structures and Algorithms",
    "Computer Networks",
    "Operating Systems",
    "Web Development",
    "Microcontrollers and Embedded Systems (8051)",
    "Database Management Systems",
  ],
};

export interface Certification {
  title: string;
  issuer: string;
  verifyUrl?: string;
}

export const certifications: Certification[] = [
  { title: "Programming in Java", issuer: "NPTEL/SWAYAM" },
  { title: "Data Structures & Algorithms", issuer: "NPTEL/SWAYAM" },
  { title: "IBM SkillsBuild Technical Credentials", issuer: "IBM SkillsBuild" },
  {
    title: "Infosys Springboard Certifications",
    issuer: "Infosys Springboard",
  },
];

export interface LeadershipActivity {
  title: string;
  role: string;
  date?: string;
  description: string[];
  icon: string;
}

export const leadershipActivities: LeadershipActivity[] = [
  {
    title: "Smart India Hackathon (SIH)",
    role: "Team Leader",
    description: [
      "Directed team formulation.",
      "Contributed to problem-statement analysis.",
      "Helped frame technical solutions for national-level competition entry.",
    ],
    icon: "Lightbulb",
  },
  {
    title: "Campus Bhangra Cultural Group",
    role: "Founder & Lead Coordinator",
    date: "December 2025",
    description: [
      "Drafted an organizational constitution.",
      "Developed recruitment plans.",
      "Structured a six-week training curriculum.",
    ],
    icon: "Music",
  },
  {
    title: "Environmental and Conservation Report",
    role: "Lead Author",
    date: "December 2025",
    description: [
      "Authored institutional documentation summarizing campus tree-plantation activities and rainwater-harvesting projects.",
    ],
    icon: "TreePine",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];
