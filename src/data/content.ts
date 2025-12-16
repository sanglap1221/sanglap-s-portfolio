export const personalInfo = {
  name: "Sanglap Ghosh",
  initials: "SG",
  title: "Flutter App Developer | AI/ML Enthusiast",
  heroIntro:
    "I build modern, scalable apps with Flutter & Firebase and explore AI & ML to deliver smarter user experiences.",
  aboutBio:
    "I am a Cross-Platform Mobile Engineer specializing in Flutter and Firebase, with valuable internship experience building and deploying real-world applications.\n\nMy passion lies in integrating intelligent solutions (AI/ML) with seamless UI/UX to build apps that are not just beautiful, but also smart and highly functional. I also leverage full-stack concepts for robust, end-to-end delivery.",
  footerTagline:
    "Flutter App Developer crafting beautiful mobile experiences with passion and precision.",
};

// ============================================
// EDUCATION
// ============================================

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

// ============================================
// EXPERIENCE
// ============================================

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location?: string;
  summary: string;
  highlights: string[];
  certificateUrl?: string;
}

export const experiences: Experience[] = [
  {
    role: "Flutter App Developer Intern",
    company: "ShivKalp IT Services",
    duration: "May 2025 – July 2025",
    location: "Remote",
    summary:
      "Built and shipped Flutter features for a production app while collaborating closely with designers and backend engineers.",
    highlights: [
      "Built and deployed production-ready Flutter applications using clean architecture",
      "Integrated Firebase Authentication, Firestore, and REST APIs",
      "Collaborated with designers and backend teams for scalable features",
      "Contributed to an app published on the Google Play Store",
      "Focused on performance optimization, responsive UI, and maintainable code",
    ],
    certificateUrl: "public/sanglap_cerf.pdf",
  },
];

// ============================================
// SKILLS
// ============================================

export interface Skill {
  name: string;
  description: string;
  level: number; // proficiency percentage
  color: "primary" | "secondary" | "accent";
  icon: string; // emoji only
}

export const skills: Skill[] = [
  {
    name: "Flutter",
    description: "Building responsive, performant cross-platform apps",
    level: 90,
    color: "primary",
    icon: "🧭",
  },
  {
    name: "Firebase",
    description: "Auth, Firestore, Cloud Functions, and FCM",
    level: 88,
    color: "secondary",
    icon: "🔥",
  },
  {
    name: "Dart",
    description: "Clean architectures, async patterns, and testing",
    level: 85,
    color: "accent",
    icon: "🎯",
  },
  {
    name: "State Management",
    description: "Provider, Riverpod, and scoped architecture",
    level: 80,
    color: "primary",
    icon: "🧩",
  },
  {
    name: "Backend APIs",
    description: "Node.js, Express, JWT auth, REST design",
    level: 78,
    color: "secondary",
    icon: "🛠️",
  },
  {
    name: "Python & ML",
    description: "OpenCV, Mediapipe, Scikit-learn, Streamlit",
    level: 76,
    color: "accent",
    icon: "🤖",
  },
  {
    name: "UI/UX Systems",
    description: "Design systems, motion, accessibility",
    level: 82,
    color: "primary",
    icon: "🎨",
  },
  {
    name: "DevOps Basics",
    description: "CI/CD, Play Store releases, crash monitoring",
    level: 70,
    color: "secondary",
    icon: "🚀",
  },
];

// ============================================
// SERVICES
// ============================================

export interface Service {
  title: string;
  description: string;
  features: string[];
  icon: string; // emoji only
}

export const services: Service[] = [
  {
    title: "Flutter App Development",
    description: "End-to-end mobile app delivery with clean architecture and smooth animations.",
    features: ["iOS & Android", "Clean Architecture", "Animations"],
    icon: "📱",
  },
  {
    title: "Backend & APIs",
    description: "Secure REST APIs, auth flows, and real-time features with Node.js & Firebase.",
    features: ["JWT Auth", "Realtime", "Scalable"],
    icon: "🛠️",
  },
  {
    title: "AI/ML Integrations",
    description: "Computer vision, predictive models, and intelligent in-app experiences.",
    features: ["OpenCV", "Mediapipe", "Scikit-learn"],
    icon: "🤖",
  },
  {
    title: "UI to Flutter Conversion",
    description: "Convert Figma or Adobe XD designs into pixel-perfect, responsive Flutter screens.",
    features: ["Responsive", "Pixel Perfect", "Animations"],
    icon: "🎨",
  },
  {
    title: "App Optimization",
    description: "Performance profiling, caching strategies, and crash/resilience hardening.",
    features: ["Caching", "Performance", "Error Handling"],
    icon: "⚡",
  },
  {
    title: "Launch & Analytics",
    description: "Play Store release prep, analytics wiring, and post-launch monitoring setup.",
    features: ["Play Store", "Analytics", "A/B Ready"],
    icon: "🚀",
  },
];

// ============================================
// PROJECTS
// ============================================

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tech: string[];
  icon: string; // emoji
  isLive: boolean;
  whatILearned: string;
  liveLink?: string;
  screenshots?: string[];
  videoUrl?: string; // Video demo URL (e.g., for crowd detection)
  githubLink?: string; // GitHub repository link
}

export const projects: Project[] = [
 {
  id: 1,
  title: "Jiremali Samaj App",
  category: "Full Stack",
  description:
    "A full-stack community application with real-time chat and media posts, deployed on Google Play Store.",
  fullDescription:
    "Jiremali Samaj App is a full-stack community-based mobile application developed during my internship. It facilitates real-time communication, media-based post sharing, and push notifications among community members. On the frontend, I implemented the entire Flutter UI and core app logic, ensuring smooth navigation and responsive layout across devices. On the backend, the team used Firebase Firestore, Storage, and Authentication. I integrated all Firebase modules on the client side, handled real-time listeners, state management, and ensured production-level handling for app publishing.",
  tech: [
    "Flutter",
    "Dart",
    "Firebase Firestore",
    "Firebase Authentication",
    "Cloud Storage",
    "FCM",
  ],
  icon: "🏠",
  isLive: true,
  whatILearned:
    "Worked on a real production cycle including UI implementation, backend integration, deployment testing, optimization for Android devices, and user-feedback based improvements for Play Store release.",
  liveLink:
    "https://play.google.com/store/apps/details?id=com.community.jiremalisamajapp",
  
  // screenshots: [
  //   "/screenshots/jiremali1.png",
  //   "/screenshots/jiremali2.png",
  //   "/screenshots/jiremali3.png",
  // ],
},

  {
  id: 2,
  title: "Soci-Go App",
  category: "Full Stack",
  description:
    "A fully developed social media app with authentication, chatting, real-time posts, and backend API on Render.",
  fullDescription:
    "Soci-Go is a complete full-stack social media app built independently using Flutter for frontend and a Node.js + TypeScript backend deployed on Render. It includes secure Firebase Authentication, REST API-based post management, real-time messaging UI, user profile handling, and media uploads via Cloudinary + Firebase Storage. API URLs are resolved dynamically at runtime for emulator, physical device, and hosted builds using environment variables. I developed both the Flutter UI and the backend API including user login, post creation, fetching user posts, authorization, and request validation.",
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
    "Render Deployment",
  ],
  icon: "📱",
  isLive: false,
  whatILearned:
    "Deepened my understanding of full-stack product development — frontend architecture, backend REST APIs, Firebase authentication flows, media storage, deployment on Render, and secure JWT-based authorization.",
  liveLink: "",
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
  id: 3,
  title: "Crowd Detection using YOLOv5",
  category: "ML/AI",
  description:
    "Detects real-time crowd formations using YOLOv5 and OpenCV with intelligent proximity-based tracking.",
  fullDescription:
    "This project detects crowd formation in video streams using the pretrained YOLOv5s object detection model. It tracks human positions frame-by-frame and triggers a 'crowd alert' when 3 or more people stand close together across multiple frames. This logic helps identify persistent groups rather than just isolated detections. It displays crowd details directly in the terminal in real time.\n\nVideo preprocessing is required for best real-time performance and accuracy:\nffmpeg -i input_video.mp4 -c:v libx264 -preset fast -crf 23 -c:a aac converted_video.mp4\n\nTo run the project:\npython yourfile.py",
  tech: ["Python", "PyTorch", "OpenCV", "YOLOv5", "ffmpeg"],
  icon: "🧠",
  isLive: false,
  whatILearned:
    "I learned how to integrate YOLOv5 with OpenCV for object detection, implement real-time distance-based grouping logic, optimize video input using ffmpeg, and understand model speed vs accuracy trade-offs.",
  liveLink: "",
  screenshots: [
    "public/screenshots/Crowd Detection using YOLOv5/6.png"
   
   ],
   videoUrl: "public/screenshots/Crowd Detection using YOLOv5/input_video.mp4",
  githubLink:"https://github.com/sanglap1221/Crowd_Detection-.git",
},

  
  {
    id: 4,
    title: "Hand Gesture Mouse Control",
    category: "ML/AI",
    description: "Control your computer mouse using hand gestures with computer vision.",
    fullDescription:
      "An innovative project that uses computer vision to track hand movements and translate them into mouse actions. Supports gestures for clicking, scrolling, and cursor movement.",
    tech: ["Python", "OpenCV", "Mediapipe", "PyAutoGUI"],
    icon: "🖐️",
    isLive: false,
    whatILearned:
      "Gained hands-on experience with computer vision libraries and real-time gesture recognition algorithms.",
    liveLink: "",
    githubLink: "https://github.com/sanglap1221/Hand_Gesture_MouseControl.git",
    screenshots: ["/screenshots/Hand_Gesture_MouseControl/image.png"],
  },{
    id: 5,
    title: "Weather App",
    category: "Mobile App",
    description: "Real-time weather application with location-based forecasts and offline caching.",
    fullDescription:
      "A weather application that provides accurate forecasts using live API data. Features include location detection, 7-day forecasts, weather alerts, and offline mode with cached data.",
    tech: ["Flutter", "OpenWeather API", "Geolocator", "Hive"],
    icon: "🌤️",
    isLive: false,  
    whatILearned:
      "Learned about working with external APIs, handling network states, and implementing effective caching strategies.",
    liveLink: "",
    githubLink:"https://github.com/sanglap1221/weather_app.git"
  },

  {
    id: 6,
    title: "Genetic Disease Risk Predictor",
    category: "ML Web App",
    description: "A machine learning web application that predicts genetic disease risks.",
    fullDescription:
      "A Streamlit-based web application that uses machine learning models to predict the probability of genetic diseases based on user inputs and family history data.",
    tech: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
    icon: "🧬",
    isLive: false,
    whatILearned:
      "Understood the end-to-end ML pipeline from data preprocessing to model deployment in a user-friendly web interface.",
    liveLink: "",
    githubLink: "https://github.com/sanglap1221/Genetic_Disease_Risk_Prediction.git",
    screenshots: [
      "/screenshots/Genetic_Disease_Risk_Prediction/1.png",
      "/screenshots/Genetic_Disease_Risk_Prediction/2.png",
    ],
  },{
  id: 7,
  title: "Token Rewards for Learning Modules",
  category: "Blockchain / Web3",
  description:
    "A blockchain-based reward system that grants tokens to learners after completing learning modules, secured by smart contracts.",
  fullDescription:
    "Token Rewards for Learning Modules is a blockchain-based system that incentivizes learners by rewarding them with tokens when they complete specific learning modules. The core logic is implemented in a smart contract that ensures fair token distribution and prevents users from claiming rewards multiple times for the same module. All reward events are transparently recorded on-chain, making the system tamper-proof and verifiable.\n\nThe vision behind this project is to make online learning more engaging by attaching real value to progress and completion. In the future, this system can be integrated with decentralized learning platforms, support multiple types of learning modules, introduce staking mechanisms for unused tokens, and even issue NFT-based certificates when modules are completed.\n\nKey Features:\n• Smart contract-based token distribution for completed modules\n• Ensures each user can claim a reward only once per module\n• Transparent and immutable reward tracking on the blockchain\n• Secure token storage and retrieval\n• Owner-controlled module completion verification\n\nContract Address:\n0x7C4DDBcb27619883C561AaC082dB37d7CBbfEEdC",
  tech: ["Solidity", "Ethereum", "Smart Contracts", "Web3"],
  icon: "🏅",
  isLive: false,
  whatILearned:
    "I learned how to design and write Solidity smart contracts, handle token-based reward logic securely, and think about transparency, immutability, and user incentives on the blockchain. This project also helped me understand how blockchain can be applied to real use-cases like education and learner motivation.",
  liveLink: "",
  githubLink:
    "https://github.com/sanglap1221/EDU_Test_Token_rewards_for_learning_modules",
  screenshots: [
    "/screenshots/Token_Rewards/1.png",   // frontend UI image
    "/screenshots/Token_Rewards/2.png", // contract / dashboard image
  ],
}

];

export const projectCategories = ["All", "Mobile App", "ML/AI", "Full Stack", "ML Web App", "Blockchain / Web3"];

// ============================================
// CONTACT
// ============================================

export const contactInfo = {
  email: "sanglapghosh51@gmail.com",
  phone: "+91-9883483390",
  location: "Bongaon, West Bengal | UEM Jaipur",
};

// ============================================
// SOCIAL LINKS
// ============================================

export const socialLinks = {
  github: "https://github.com/sanglap1221",
  linkedin: "https://www.linkedin.com/in/sanglap-ghosh-62960328a/",
};

// ============================================
// NAVIGATION LINKS
// ============================================

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
