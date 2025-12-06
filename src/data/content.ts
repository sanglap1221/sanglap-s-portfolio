/**
 * ============================================
 * CONTENT DATA FILE
 * ============================================
 * 
 * This is where ALL your portfolio content lives!
 * Edit this file to update your:
 * - Personal info (name, title, bio)
 * - Skills
 * - Services
 * - Projects
 * - Contact details
 * - Social links
 * 
 * The components will automatically use this data.
 */

// ============================================
// PERSONAL INFO
// ============================================
// Change these to update your name, title, and bio

export const personalInfo = {
  // Your name (shown in hero and navbar)
  name: "Sanglap Ghosh",
  
  // Short name/initials for the logo
  initials: "SG",
  
  // Your title (shown below your name)
  title: "Flutter App Developer | AI/ML Enthusiast",
  
  // Hero section intro text
  heroIntro: "I develop scalable and modern mobile apps using Flutter & Firebase, focused on great user experience and smart technology.",
  
  // About section bio (longer description)
  aboutBio: "I am a Mobile App Developer specializing in Flutter with internship experience building real-world applications. I am passionate about combining intelligent solutions with seamless UI, working across domains like AI/ML and full-stack concepts to deliver impactful digital experiences.",
  
  // Footer tagline
  footerTagline: "Flutter App Developer crafting beautiful mobile experiences with passion and precision.",
};

// ============================================
// EDUCATION
// ============================================
// Add or remove education items here

export interface Education {
  degree: string;
  school: string;
  year: string;
  score: string;
  isCurrent?: boolean;
}

export const education: Education[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "University of Engineering & Management (UEM), Jaipur",
    year: "2023 – 2027",
    score: "CGPA: 8.37/10",
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
// SKILLS
// ============================================
// Add, remove, or edit skills here
// Each skill has a name, description, level (0-100), and color

export interface Skill {
  name: string;
  description: string;
  level: number; // 0 to 100
  color: 'primary' | 'secondary' | 'accent';
  icon: string; // Emoji icon
}

export const skills: Skill[] = [
  {
    name: "Flutter",
    description: "Cross-Platform Development",
    level: 90,
    color: "primary",
    icon: "📱",
  },
  {
    name: "Dart",
    description: "Primary Programming Language",
    level: 88,
    color: "primary",
    icon: "💻",
  },
  {
    name: "Firebase",
    description: "Auth & Firestore",
    level: 85,
    color: "secondary",
    icon: "🔥",
  },
  {
    name: "REST API",
    description: "Integration & Management",
    level: 82,
    color: "secondary",
    icon: "🌐",
  },
  {
    name: "Python & ML",
    description: "Machine Learning Basics",
    level: 70,
    color: "accent",
    icon: "🐍",
  },
  {
    name: "UI/UX",
    description: "Clean & Responsive Design",
    level: 85,
    color: "primary",
    icon: "🎨",
  },
  {
    name: "Git",
    description: "Version Control",
    level: 80,
    color: "secondary",
    icon: "📦",
  },
  {
    name: "Dev Tools",
    description: "VS Code, Android Studio, Postman",
    level: 88,
    color: "primary",
    icon: "🛠️",
  },
];

// ============================================
// SERVICES
// ============================================
// Edit your services here

export interface Service {
  title: string;
  description: string;
  features: string[];
  icon: string; // Emoji icon
}

export const services: Service[] = [
  {
    title: "Flutter App Development",
    description: "Building beautiful, natively compiled applications for Android and iOS from a single codebase.",
    features: ["Cross-Platform", "Native Performance", "Custom UI"],
    icon: "📱",
  },
  {
    title: "Firebase Backend Setup",
    description: "Complete backend infrastructure using Firebase including authentication, database, and cloud functions.",
    features: ["Authentication", "Firestore DB", "Cloud Storage"],
    icon: "🔥",
  },
  {
    title: "REST API Integration",
    description: "Seamless integration of third-party APIs and services into your mobile applications.",
    features: ["HTTP Clients", "Data Parsing", "Error Handling"],
    icon: "🔗",
  },
  {
    title: "Performance Optimization",
    description: "Improving app performance, fixing bugs, and ensuring smooth user experience.",
    features: ["Speed Boost", "Bug Fixing", "Code Review"],
    icon: "⚡",
  },
  {
    title: "UI to Flutter Conversion",
    description: "Converting Figma, Adobe XD, or any UI designs into pixel-perfect Flutter screens.",
    features: ["Responsive", "Pixel Perfect", "Animations"],
    icon: "🎨",
  },
];

// ============================================
// PROJECTS
// ============================================
// Add your projects here

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tech: string[];
  icon: string; // Emoji for the project
  isLive: boolean; // Is it published/live?
  whatILearned: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Jiremali Samaj App",
    category: "Mobile App",
    description: "A community app with real-time chat and post sharing functionality. Successfully published on Google Play Store.",
    fullDescription: "Built during my internship, this community-focused application enables real-time communication and content sharing among members. Features include instant messaging, post creation with media support, user authentication, and push notifications.",
    tech: ["Flutter", "Firebase", "Firestore", "FCM"],
    icon: "🏠",
    isLive: true,
    whatILearned: "Working on a production app taught me about handling real-world scenarios, optimizing for different devices, and the importance of user feedback in development.",
  },
  {
    id: 2,
    title: "Soci-Go App",
    category: "UI/UX",
    description: "A responsive social media application UI with modern design patterns and smooth animations.",
    fullDescription: "A beautifully designed social media application featuring a complete feed system, stories, messaging interface, and profile management. Built with attention to responsive design principles.",
    tech: ["Flutter", "Dart", "Custom Widgets"],
    icon: "📱",
    isLive: false,
    whatILearned: "This project enhanced my UI/UX skills significantly, teaching me about creating intuitive navigation and engaging visual hierarchies.",
  },
  {
    id: 3,
    title: "CRUD App for Books",
    category: "Full Stack",
    description: "A complete book management system with REST API integration and Provider state management.",
    fullDescription: "Full-featured CRUD application for managing a book collection. Includes search, filtering, categorization, and persistent storage using REST APIs with clean architecture patterns.",
    tech: ["Flutter", "REST API", "Provider", "SQLite"],
    icon: "📚",
    isLive: false,
    whatILearned: "Mastered state management with Provider and understood the importance of clean architecture in maintaining scalable applications.",
  },
  {
    id: 4,
    title: "Weather App",
    category: "Mobile App",
    description: "Real-time weather application with location-based forecasts and offline caching.",
    fullDescription: "A weather application that provides accurate forecasts using live API data. Features include location detection, 7-day forecasts, weather alerts, and offline mode with cached data.",
    tech: ["Flutter", "OpenWeather API", "Geolocator", "Hive"],
    icon: "🌤️",
    isLive: false,
    whatILearned: "Learned about working with external APIs, handling network states, and implementing effective caching strategies.",
  },
  {
    id: 5,
    title: "Hand Gesture Mouse Control",
    category: "ML/AI",
    description: "Control your computer mouse using hand gestures with computer vision.",
    fullDescription: "An innovative project that uses computer vision to track hand movements and translate them into mouse actions. Supports gestures for clicking, scrolling, and cursor movement.",
    tech: ["Python", "OpenCV", "Mediapipe", "PyAutoGUI"],
    icon: "🖐️",
    isLive: false,
    whatILearned: "Gained hands-on experience with computer vision libraries and real-time gesture recognition algorithms.",
  },
  {
    id: 6,
    title: "Genetic Disease Risk Predictor",
    category: "ML Web App",
    description: "A machine learning web application that predicts genetic disease risks.",
    fullDescription: "A Streamlit-based web application that uses machine learning models to predict the probability of genetic diseases based on user inputs and family history data.",
    tech: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
    icon: "🧬",
    isLive: false,
    whatILearned: "Understood the end-to-end ML pipeline from data preprocessing to model deployment in a user-friendly web interface.",
  },
];

// Project categories for filtering
export const projectCategories = ["All", "Mobile App", "ML/AI", "Full Stack", "UI/UX", "ML Web App"];

// ============================================
// CONTACT INFO
// ============================================
// Update your contact details here

export const contactInfo = {
  email: "sanglapghosh51@gmail.com",
  phone: "+91-9883483390",
  location: "Bongaon, West Bengal | UEM Jaipur",
};

// ============================================
// SOCIAL LINKS
// ============================================
// Update your social media links here

export const socialLinks = {
  github: "https://github.com/sanglapghosh",
  linkedin: "https://linkedin.com/in/sanglapghosh",
};

// ============================================
// NAVIGATION LINKS
// ============================================
// These are the links in the navbar

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
