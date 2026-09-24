export const personalInfo = {
  name: "Sanglap Ghosh",
  initials: "SG",
  title: "Full Stack Developer",
  heroIntro:
    "B.Tech CSE student building production mobile apps, web platforms, backend systems, and AI/ML solutions.",
  aboutBio:
    "I'm a B.Tech Computer Science student at UEM Jaipur and a developer working across Flutter, React.js, Node.js, and AI/ML.\n\nI currently work at One Aim IT Solutions on production mobile applications, backend APIs, and live Play Store releases. Previously, I interned at One Aim and ShivKalp IT Services, shipping real community and healthcare apps.\n\nI like building complete products: clean UI, reliable APIs, and practical machine-learning tools that actually get used.",
  footerTagline:
    "Full Stack Developer working across Flutter, React.js, Node.js, and AI/ML.",
};

export interface Education {
  degree: string;
  school: string;
  year: string;
  score: string;
  coursework?: string;
  isCurrent?: boolean;
}

export const education: Education[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "University of Engineering & Management (UEM), Jaipur",
    year: "2023 – 2027",
    score: "CGPA: 8.37/10",
    coursework:
      "Data Structures & Algorithms, Machine Learning, Database Systems",
    isCurrent: true,
  },
  {
    degree: "Higher Secondary",
    school: "Bongaon High School",
    year: "2020 – 2022",
    score: "Score: 90%",
    isCurrent: false,
  },
];

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location?: string;
  summary: string;
  highlights: string[];
  certificateUrl?: string;
  playStoreUrl?: string;
  tag?: string;
  tags?: string[];
}

export const experiences: Experience[] = [
  {
    role: "Junior Flutter & Android Developer",
    company: "One Aim IT Solutions",
    duration: "April 2026 – Present",
    location: "Remote",
    tag: "Full-time",
    summary:
      "Building and maintaining production Flutter/Android applications and Node.js backend systems for live client products.",
    highlights: [
      "Working on EkBhavishya, a production suite of 4 apps: User, Astrologer, Seller, and Admin",
      "Building Node.js, Express, and MongoDB backend modules with REST APIs",
      "Implementing calling, chat, wallet/billing, and FCM notification flows",
      "Handling production debugging, Play Console tasks, and app deployment",
      "Collaborating with designers, QA, and backend developers on live releases",
    ],
    tags: ["Flutter", "Node.js", "MongoDB", "REST API", "Firebase"],
  },
  {
    role: "Flutter Developer Intern",
    company: "One Aim IT Solutions",
    duration: "Dec 2025 – Mar 2026",
    location: "Remote",
    tag: "Internship",
    summary:
      "Contributed to production Flutter applications, including RelaxDoc Health and Play Store release workflows.",
    highlights: [
      "Developed and maintained Flutter features for live client applications",
      "Managed Play Console tasks and supported the RelaxDoc Health release",
      "Worked on API integration, bug fixes, and production-ready UI",
      "Collaborated with the team across design, QA, and backend tasks",
    ],
    certificateUrl: "/SANGLAP.pdf",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.relaxdoc.health",
    tags: ["Flutter", "Firebase", "REST API", "Play Store"],
  },
  {
    role: "Flutter Development Intern",
    company: "ShivKalp IT Services",
    duration: "May 2025 – Jul 2025",
    location: "Nashik, Maharashtra",
    tag: "Internship",
    summary:
      "Built and shipped Flutter features for a production community app published on the Google Play Store.",
    highlights: [
      "Implemented Flutter UI and core logic for the Jiremali Samaj App",
      "Integrated Firebase Authentication, Firestore, Storage, and FCM",
      "Contributed to a live Play Store release used by 1,000+ community members",
      "Optimized UI rendering and focused on maintainable production code",
    ],
    certificateUrl: "/sanglap_cerf.pdf",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.community.jiremalisamajapp",
    tags: ["Flutter", "Firebase", "Real-time", "Push Notifications"],
  },
];

export interface Skill {
  name: string;
  description: string;
  level: number;
  color: "primary" | "secondary" | "accent";
  icon: string;
}

export const skills: Skill[] = [
  {
    name: "Flutter & Dart",
    description: "Production mobile apps, clean architecture, Play Store releases",
    level: 90,
    color: "primary",
    icon: "📱",
  },
  {
    name: "React.js",
    description: "Web platforms, dashboards, and responsive UI",
    level: 82,
    color: "secondary",
    icon: "⚛️",
  },
  {
    name: "Node.js & Express",
    description: "REST APIs, auth, real-time features, and deployments",
    level: 84,
    color: "accent",
    icon: "🖥️",
  },
  {
    name: "Firebase",
    description: "Auth, Firestore, Cloud Functions, Storage, and FCM",
    level: 88,
    color: "primary",
    icon: "🔥",
  },
  {
    name: "MongoDB & SQL",
    description: "Data modeling, queries, and production persistence",
    level: 80,
    color: "secondary",
    icon: "🗄️",
  },
  {
    name: "Python & ML",
    description: "OpenCV, YOLOv5, Scikit-learn, Pandas, Streamlit",
    level: 78,
    color: "accent",
    icon: "🧠",
  },
  {
    name: "State Management",
    description: "BLoC, GetX, and scalable app architecture",
    level: 82,
    color: "primary",
    icon: "🧩",
  },
  {
    name: "Release & DevOps",
    description: "Play Console, CI basics, crash monitoring, hosting",
    level: 74,
    color: "secondary",
    icon: "🚀",
  },
];

export interface Service {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export const services: Service[] = [
  {
    title: "Flutter App Development",
    description: "Production Android and iOS apps with clean architecture and maintainable UI.",
    features: ["iOS & Android", "Clean Architecture", "Play Store"],
    icon: "📱",
  },
  {
    title: "Backend & APIs",
    description: "REST APIs, authentication, and real-time features with Node.js, Express, and Firebase.",
    features: ["JWT Auth", "MongoDB", "FCM"],
    icon: "🖥️",
  },
  {
    title: "Web Applications",
    description: "Dashboards, admin panels, and public websites with React.js and Node.js.",
    features: ["React.js", "Admin Dashboard", "Live Deploy"],
    icon: "💻",
  },
  {
    title: "AI/ML Integrations",
    description: "Computer vision, predictive models, and practical ML tools for real use-cases.",
    features: ["OpenCV", "YOLOv5", "Scikit-learn"],
    icon: "🧠",
  },
  {
    title: "App Optimization",
    description: "Performance profiling, caching, crash handling, and production debugging.",
    features: ["Caching", "Performance", "Error Handling"],
    icon: "⚡",
  },
  {
    title: "Launch & Analytics",
    description: "Play Store release prep, versioning, and post-launch monitoring setup.",
    features: ["Play Store", "Analytics", "Release Ops"],
    icon: "🚀",
  },
];

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tech: string[];
  icon: string;
  isLive: boolean;
  whatILearned: string;
  liveLink?: string;
  screenshots?: string[];
  videoUrl?: string;
  githubLink?: string;
  trustTag?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Astro Freelance",
    category: "Full Stack",
    description:
      "Full-stack Vedic astrology platform with Next.js web interface, Electron desktop app, and Python FastAPI computation engine.",
    fullDescription:
      "Astro Freelance is a comprehensive traditional Vedic and Bengali astrology software platform built with Python (FastAPI + Swiss Ephemeris / pyswisseph), Next.js (React), and Electron for desktop. It computes planetary coordinates, birth charts (Kundli), Dasha timelines, Gochara transits, and generates automated astrological reports with Playwright PDF rendering.",
    tech: ["Python", "FastAPI", "Next.js", "Electron", "MongoDB", "pyswisseph"],
    icon: "🪐",
    isLive: false,
    whatILearned:
      "Implemented complex astronomical mathematics from first principles using Swiss Ephemeris and engineered a multi-client architecture supporting both web and cross-platform desktop users.",
    trustTag: "Web & Desktop",
    githubLink: "https://github.com/sanglap1221/Astro_freelance.git",
  },
  {
    id: 2,
    title: "EkBhavishya",
    category: "Full Stack",
    description:
      "Production astrology platform with 4 Flutter apps and a Node.js backend for users, astrologers, sellers, and admins.",
    fullDescription:
      "EkBhavishya is a live production suite built at One Aim IT Solutions. It includes four Flutter applications — User, Astrologer, Seller, and Admin — backed by Node.js, Express, and MongoDB. The system covers REST APIs, calling and chat flows, wallet/billing, FCM notifications, and production deployment. I work on both the mobile apps and backend modules used in real client releases.",
    tech: ["Flutter", "Node.js", "Express.js", "MongoDB", "Firebase", "REST API"],
    icon: "🔮",
    isLive: true,
    whatILearned:
      "How to ship and maintain a multi-app production system with shared backend APIs, real-time communication, payments/wallet logic, and Play Store release operations.",
    trustTag: "4 Production Apps",
  },
  {
    id: 3,
    title: "UEMJ Gaming Club",
    category: "Full Stack",
    description:
      "Live college gaming club platform with a user website, admin dashboard, and Node.js backend.",
    fullDescription:
      "UEMJ Gaming Club is a full-stack web platform for the Gaming Geeks Club at UEM Jaipur. It includes a public user platform, an admin dashboard, and a Node.js/Express/MongoDB backend. I built and deployed the live website used for club presence, events, and administration.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    icon: "🎮",
    isLive: true,
    whatILearned:
      "Built and deployed a complete web product with separate user and admin experiences, proving I can ship web applications as well as Flutter apps.",
    trustTag: "Live Website",
    liveLink: "https://uemj-gaming-club.vercel.app/",
  },
  {
    id: 4,
    title: "RelaxDoc Health",
    category: "Mobile App",
    description:
      "Health and wellness mobile application published on the Google Play Store.",
    fullDescription:
      "RelaxDoc Health is a production healthcare mobile application built with Flutter. I worked on UI implementation, API integration, performance improvements, and Google Play Console workflows from testing through production release.",
    tech: ["Flutter", "Dart", "Firebase", "Node.js", "REST API", "Play Console"],
    icon: "🏥",
    isLive: true,
    whatILearned:
      "Managed a live app lifecycle including Play Store publishing, crash monitoring, performance profiling, and iterative feature work.",
    trustTag: "Live on Play Store",
    liveLink:
      "https://play.google.com/store/apps/details?id=com.relaxdoc.health",
  },
  {
    id: 5,
    title: "Jiremali Samaj App",
    category: "Full Stack",
    description:
      "Community application with real-time chat and media posts, live on the Google Play Store.",
    fullDescription:
      "Jiremali Samaj App is a community mobile application developed during my ShivKalp internship. It supports real-time communication, media posts, and push notifications. I implemented the Flutter UI and client-side Firebase integration for Authentication, Firestore, Storage, and FCM, and helped take the app through Play Store release.",
    tech: [
      "Flutter",
      "Dart",
      "Firebase Firestore",
      "Firebase Authentication",
      "Cloud Storage",
      "FCM",
    ],
    icon: "👥",
    isLive: true,
    whatILearned:
      "Worked through a real production cycle: UI implementation, backend integration, Android optimization, and Play Store release.",
    trustTag: "Live on Play Store",
    liveLink:
      "https://play.google.com/store/apps/details?id=com.community.jiremalisamajapp",
    screenshots: [
      "/screenshots/jiremali1.png",
      "/screenshots/jiremali2.png",
      "/screenshots/jiremali3.png",
    ],
  },
  {
    id: 6,
    title: "GigFlow Smart Leads Dashboard",
    category: "Full Stack",
    description:
      "Lead-management dashboard for tracking, organizing, and acting on incoming business leads.",
    fullDescription:
      "GigFlow Smart Leads Dashboard is a web dashboard for managing incoming leads with a cleaner operational workflow. It focuses on organizing lead data, status tracking, and a usable admin/operator interface for follow-ups.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    icon: "📊",
    isLive: false,
    whatILearned:
      "Designed a practical operations dashboard with structured lead data, status flows, and a web UI meant for daily use rather than a demo-only layout.",
    trustTag: "Dashboard",
  },
  {
    id: 7,
    title: "Automatic App Generator",
    category: "Full Stack",
    description:
      "Tooling project for generating application structure and boilerplate from reusable templates.",
    fullDescription:
      "Automatic App Generator is a productivity project for scaffolding application structure from reusable templates. The goal is to reduce repetitive setup work and produce a consistent starting point for new apps.",
    tech: ["Node.js", "JavaScript", "Templates"],
    icon: "⚙️",
    isLive: false,
    whatILearned:
      "Thought about developer tooling: reusable project structure, consistent scaffolding, and reducing setup time for new applications.",
    trustTag: "Tooling",
  },
  {
    id: 8,
    title: "Soci-Go App",
    category: "Full Stack",
    description:
      "Social app with authentication, chatting, posts, and a Node.js backend.",
    fullDescription:
      "Soci-Go is a full-stack social media app built with Flutter on the frontend and a Node.js + TypeScript backend. It includes Firebase Authentication, REST API-based post management, messaging UI, profiles, and media uploads via Cloudinary and Firebase Storage.",
    tech: [
      "Flutter",
      "Dart",
      "Node.js",
      "Express.js",
      "TypeScript",
      "Firebase",
      "MongoDB",
      "Cloudinary",
      "REST API",
    ],
    icon: "💬",
    isLive: false,
    whatILearned:
      "Built both the Flutter client and backend API, including auth, posts, media storage, and environment-based API URL handling.",
    trustTag: "Full Stack App",
    githubLink: "https://github.com/sanglap1221/mini-soci.git",
    screenshots: [
      "/screenshots/soci/1.jpg",
      "/screenshots/soci/2.jpg",
      "/screenshots/soci/3.jpg",
      "/screenshots/soci/4.jpg",
      "/screenshots/soci/5.jpg",
    ],
  },
  {
    id: 9,
    title: "Crowd Detection using YOLOv5",
    category: "ML/AI",
    description:
      "Detects crowd formations in video using YOLOv5 and OpenCV with proximity-based tracking.",
    fullDescription:
      "This project detects crowd formation in video streams using a pretrained YOLOv5s model. It tracks people frame-by-frame and raises a crowd alert when three or more people stay close together across multiple frames, helping identify persistent groups rather than isolated detections.",
    tech: ["Python", "PyTorch", "OpenCV", "YOLOv5", "ffmpeg"],
    icon: "📹",
    isLive: false,
    whatILearned:
      "Integrated YOLOv5 with OpenCV, implemented distance-based grouping, and learned the trade-off between detection speed and accuracy.",
    screenshots: ["/screenshots/Crowd Detection using YOLOv5/6.png"],
    videoUrl: "/screenshots/Crowd Detection using YOLOv5/input_video.mp4",
    githubLink: "https://github.com/sanglap1221/Crowd_Detection-.git",
  },
  {
    id: 10,
    title: "Hand Gesture Mouse Control",
    category: "ML/AI",
    description: "Control a computer mouse using hand gestures and computer vision.",
    fullDescription:
      "A computer-vision project that tracks hand movements and maps them to mouse actions such as cursor movement, clicking, and scrolling.",
    tech: ["Python", "OpenCV", "Mediapipe", "PyAutoGUI"],
    icon: "🖐️",
    isLive: false,
    whatILearned:
      "Used MediaPipe and OpenCV for real-time gesture recognition and mapped landmarks to desktop mouse controls.",
    githubLink: "https://github.com/sanglap1221/Hand_Gesture_MouseControl.git",
    screenshots: ["/screenshots/Hand_Gesture_MouseControl/image.png"],
  },
  {
    id: 11,
    title: "Weather App",
    category: "Mobile App",
    description: "Location-based weather app with live API data and offline caching.",
    fullDescription:
      "A Flutter weather application that fetches live weather data, detects location, and caches results for offline use.",
    tech: ["Flutter", "OpenWeather API", "Geolocator", "Hive"],
    icon: "🌦️",
    isLive: false,
    whatILearned:
      "Worked with external APIs, network states, and local caching in a Flutter app.",
    githubLink: "https://github.com/sanglap1221/weather_app.git",
  },
  {
    id: 12,
    title: "Genetic Disease Risk Predictor",
    category: "ML Web App",
    description: "Streamlit app that predicts genetic disease risk from user and family-history inputs.",
    fullDescription:
      "A Streamlit web application that uses machine-learning models to estimate genetic disease risk based on user inputs and family history.",
    tech: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
    icon: "🧬",
    isLive: false,
    whatILearned:
      "Took an ML pipeline from preprocessing to a usable web interface.",
    githubLink: "https://github.com/sanglap1221/Genetic_Disease_Risk_Prediction.git",
    screenshots: [
      "/screenshots/Genetic_Disease_Risk_Prediction/1.png",
      "/screenshots/Genetic_Disease_Risk_Prediction/2.png",
    ],
  },
  {
    id: 13,
    title: "Token Rewards for Learning Modules",
    category: "Blockchain / Web3",
    description:
      "Smart-contract reward system that grants tokens after learning modules are completed.",
    fullDescription:
      "A blockchain reward system that issues tokens when learners complete modules. The Solidity contract records rewards on-chain and prevents duplicate claims for the same module.\n\nContract Address:\n0x7C4DDBcb27619883C561AaC082dB37d7CBbfEEdC",
    tech: ["Solidity", "Ethereum", "Smart Contracts", "Web3"],
    icon: "🪙",
    isLive: false,
    whatILearned:
      "Designed Solidity reward logic with transparent on-chain tracking and one-claim-per-module rules.",
    githubLink:
      "https://github.com/sanglap1221/EDU_Test_Token_rewards_for_learning_modules",
    screenshots: [
      "/screenshots/Token_Rewards/1.png",
      "/screenshots/Token_Rewards/2.png",
    ],
  },
];

export const projectCategories = [
  "All",
  "Mobile App",
  "ML/AI",
  "Full Stack",
  "ML Web App",
  "Blockchain / Web3",
];

export const contactInfo = {
  email: "sanglapghosh51@gmail.com",
  phone: "+91-9883483390",
  location: "Bongaon, West Bengal | UEM Jaipur",
};

export const socialLinks = {
  github: "https://github.com/sanglap1221",
  linkedin: "https://www.linkedin.com/in/sanglap-ghosh-62960328a/",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const clientTechStack = ["Flutter", "React", "Node.js", "Firebase", "REST APIs"];
