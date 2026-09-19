import {
  ContactInfo,
  EducationItem,
  ProjectItem,
  SkillCategory,
  CertificationItem,
  ExtracurricularItem,
  ResponsibilityItem,
} from '../types';

export const contactData: ContactInfo = {
  name: 'KUNWAR PANDEY',
  email: 'ku36pd@gmail.com',
  mobile: '+91-706-8953-051',
  tagline: 'Electronics & Instrumentation Pre-Final Year Undergraduate • Software & Hardware Builder',
  summary: 'Pre-final year Electronics & Instrumentation undergraduate at NIT Silchar (Batch 2024–2028) with a deep passion for C++, Python, Data Structures & Algorithms, Space-Tech AI, and Autonomous Robotics. Proven track record building production systems, competing in ISRO Bharatiya Antariksh Hackathon (Project Cool Earth), and building robotics hardware for Tecnoesis NIT Silchar.',
  github: {
    handle: 'github.com/kunwarpandey36',
    url: 'https://github.com/kunwarpandey36',
  },
  linkedin: {
    handle: 'linkedin.com/in/kunwarpandey36',
    url: 'https://linkedin.com/in/kunwarpandey36',
  },
  leetcode: {
    handle: 'leetcode.com/u/kunwarpandey36/',
    url: 'https://leetcode.com/u/kunwarpandey36/',
  },
  links: {
    github: 'https://github.com/kunwarpandey36',
    linkedin: 'https://linkedin.com/in/kunwarpandey36',
    leetcode: 'https://leetcode.com/u/kunwarpandey36/',
    codeforces: 'https://codeforces.com',
  },
};

export const codingStats = {
  totalQuestions: 164,
  leetcode: {
    solved: 121,
    rating: 1287,
    profileUrl: 'https://leetcode.com/u/kunwarpandey36/',
  },
  codeforces: {
    solved: 43,
    rating: 816,
    profileUrl: 'https://codeforces.com',
  },
};

export const educationData: EducationItem[] = [
  {
    id: 'nits',
    institution: 'National Institute of Technology, Silchar',
    location: 'Assam, India',
    degreeOrGrade: 'Bachelor of Technology - Electronics and Instrumentation (Pre-Final Year)',
    score: 'CGPA: 6.87/10',
    period: '2024 - 2028',
  },
  {
    id: 'lfs-12',
    institution: 'Little Flower School',
    location: 'Varanasi, Uttar Pradesh',
    degreeOrGrade: '12th Standard',
    score: 'Percentage: 84.6%',
    period: '2021 - 2023',
  },
  {
    id: 'lfs-10',
    institution: 'Little Flower School',
    location: 'Varanasi, Uttar Pradesh',
    degreeOrGrade: '10th Standard',
    score: 'Percentage: 90.3%',
    period: '2021',
  },
];

export const projectData: ProjectItem[] = [
  {
    id: 'infinits',
    title: 'Infinits Portal',
    linkText: 'infinits.onrender.com',
    linkUrl: 'https://infinits.onrender.com',
    roleOrCategory: 'Full-Stack Student Ecosystem Platform',
    bullets: [
      'Developed an unofficial student-centric website for NIT Silchar, consolidating essential academic resources, past papers, syllabus portals, and tools required by students throughout their four-year B.Tech journey.',
      'Built and deployed the entire application from A to Z using AI-assisted development, with all coding, implementation, integration, and deployment workflows executed through AI tools with minimal manual coding.',
    ],
    technologies: ['TypeScript', 'JavaScript', 'Python', 'Render Cloud'],
  },
  {
    id: 'isro-bah',
    title: 'ISRO Bharatiya Antariksh Hackathon 2026 - Project Cool Earth',
    period: 'June 2026',
    roleOrCategory: '4-Member Team (Member-1) • National Finalist',
    linkText: 'ISRO BAH Hackathon Presentation',
    linkUrl: '#isro-presentation',
    bullets: [
      'Team: Project Cool Earth (4 Members across 3 Universities) | 1. Namrata Saikia (Team Leader, Mizoram Univ) | 2. Kunwar Pandey (Team Member-1, NIT Silchar) | 3. Anwesha Maity (Team Member-2, UEM) | 4. Sanika Santosh Bamane (Team Member-3, Mizoram Univ).',
      'Problem Statement: Optimizing Urban Heat Mitigation and cooling strategies via Artificial Intelligence and Machine Learning (AIML).',
      'Engineered a micro-level hyper-local hotspot mapping and two-phased interactive mitigation simulator using ISRO Bhuvan, Landsat-8/9, Sentinel-2, MODIS, Cartosat satellite data with an XGBoost AI model.',
      'Designed a Physics Validation Layer validating AI predictions through thermodynamics (surface energy balance, heat conduction, solar radiation & albedo consistency checks).',
      'Simulated short-term high-albedo cool roof rollouts (dropping indoor temperatures by 4–11°C) and long-term strategic tree canopy urban forestry.',
    ],
    technologies: ['Python', 'FastAPI', 'XGBoost', 'Thermodynamics', 'ISRO Bhuvan GIS', 'Leaflet.js', 'Streamlit'],
  },
  {
    id: 'tecnoesis-bot',
    title: 'Tecnoesis NIT Silchar Robotic War Bot & Combat Rover',
    organization: 'N.E.R.D.S., NIT Silchar',
    roleOrCategory: 'Team Captain • The Inevitables',
    period: 'Nov 2024',
    linkText: 'Bot Showcase',
    linkUrl: '#tecnoesis-bot',
    bullets: [
      'Participated in Tecnoesis (Annual Techno-Management Fest of NIT Silchar) where our team built a custom high-torque combat bot for the Robowar competition in the Robotron Module.',
      'Engineered an accelerometer & IMU-based gesture-controlled robotic vehicle with wireless transceivers, rugged high-impact chassis, and motor-driver H-bridge circuitry.',
      'Built and tested under strict hackathon time frames, strengthening hardware integration, real-time wireless telemetry, and rapid mechanical troubleshooting under pressure.',
    ],
    technologies: ['Robotics', 'C++', 'Microcontrollers', 'IMU Gestures', 'Motor Drivers', 'Hardware Design'],
  },
  {
    id: 'smart-attendance',
    title: 'Smart Attendance System',
    linkText: 'smart-attendance-system-woad.vercel.app',
    linkUrl: 'https://smart-attendance-system-woad.vercel.app/',
    roleOrCategory: 'AI-Powered Multi-Face Recognition System',
    bullets: [
      'Developed an AI-powered attendance system that registers students and marks attendance through real-time face recognition, enabling simultaneous attendance for multiple students from a single camera feed.',
      'Implemented teacher-wise, subject-wise, and date-wise attendance management with instant attendance recording, reducing manual effort and minimizing proxy and duplicate attendance.',
      'Live deployment ready with seamless browser interface and automated student biometric logging.',
    ],
    technologies: ['OpenCV', 'FaceNet', 'Python', 'FastAPI', 'Vercel'],
  },
  {
    id: 'aeromodelling',
    title: 'DIY Delta-Wing Aircraft Prototyping',
    period: 'June 2025',
    roleOrCategory: 'Aerospace Prototyping & Flight Testing',
    linkText: 'LinkedIn Flight Video & Details',
    linkUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7352694564446437376/',
    bullets: [
      'Crafted a delta-wing aircraft from scratch using cardboard, foam, a high-KV brushless motor, propeller, and elevon servos.',
      'Gained practical insights into aerodynamics, successfully managing challenges related to center of gravity (CG), servo linkages, and motor thrust alignment.',
      'Documented flight test trials, aerodynamic stability calibration, and control-surface responsiveness.',
    ],
    technologies: ['Aerodynamics', 'RC Avionics', 'Brushless Propulsion', 'Servo Linkages', 'Flight Dynamics'],
  },
];

export const skillsData: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    content: 'C++, Python',
  },
  {
    id: 'core-skills',
    label: 'Core Skills',
    content: 'Data Structures & Algorithms (43 Codeforces, 121 LeetCode), Computer Vision, OpenCV',
  },
  {
    id: 'tools',
    label: 'Tools',
    content: 'Git, GitHub, VS Code',
  },
  {
    id: 'platforms',
    label: 'Platforms & Systems',
    content: 'Linux, Web, Windows, Arduino, Embedded Robotics',
  },
];

export const certificationData: CertificationItem[] = [
  {
    id: 'nism',
    title: 'NISM Finance Knowledge for India',
    description: 'Completed a comprehensive certification on NISM Finance Knowledge for Indian capital markets and securities regulation.',
  },
  {
    id: 'trading-sim',
    title: 'Trading Simulation Competition (Big Shot 3.0)',
    description: 'Earned certification in the Campus Level Trading Simulation Competition (Big Shot 3.0) by StockGro and the Finance & Investment Club, NIT Silchar, demonstrating strong risk management and portfolio optimization.',
  },
];

export const extracurricularData: ExtracurricularItem[] = [
  {
    id: 'tecnoesis-bot-event',
    title: 'Tecnoesis NIT Silchar - Robowar (Robotron Module)',
    description: 'Participated in Tecnoesis NIT Silchar, designing and competing with a custom combat bot with gesture control capabilities.',
  },
  {
    id: 'razzmatazz',
    title: 'Razzmatazz, Incandescence ’25',
    description: 'Volunteered at the annual cultural extravaganza organized by NIT Silchar.',
  },
  {
    id: 'ecell',
    title: 'E-Cell, NIT Silchar',
    description: 'Participated in campus-wide entrepreneurship and startup ideation events.',
  },
  {
    id: 'arduino-hack',
    title: 'Arduino Hackathon, INSEES',
    description: 'Participated in an intensive Arduino-based hardware hackathon at NIT Silchar.',
  },
  {
    id: 'git-training',
    title: 'Git & GitHub Training, CSS',
    description: 'Completed Git and GitHub version control training conducted by the Computer Science Society, NIT Silchar.',
  },
];

export const responsibilityData: ResponsibilityItem[] = [
  {
    id: 'nerds-core',
    title: 'Core Member, N.E.R.D.S., NIT Silchar',
    description: 'Organized and managed the RoboWar event at NIT Silchar, resolved technical issues in junior participants’ robots, and provided real-time technical guidance.',
  },
];
