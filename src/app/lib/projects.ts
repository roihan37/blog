import { FiActivity, FiBookOpen, FiBriefcase, FiCheckCircle, FiHeadphones, FiMessageSquare } from "react-icons/fi";
import type { IconType } from "react-icons";
import type { StaticImageData } from "next/image";
import dexbarber from "../public/dexbarber.png";
import magurame from "../public/magurame.png";
import magurameweb from "../public/magurameWeb.png";
import theflix from "../public/theflix.png";

type Project = {
  name: string;
  subtitle: string;
  date?: string;
  inProgress?: boolean;
  description: string;
  technologies: string[];
  icon: IconType;
  demo?: string;
  image?: StaticImageData;
  github?: string;
  story?: string;
};

export const portfolioProjects: Project[] = [
  {
    name: "IndoKerja",
    github: "https://github.com/roihan37/indokerja-job-application-management",
    demo: "https://indokerja-job-application-managemen-theta.vercel.app/login",
    subtitle: "Job Application Management System",
    date: "October 2026",
    description: "A job application management platform for job seekers and companies, with role-based access, job listings, resume uploads, application tracking, and applicant review.",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma", "TanStack Query", "Tailwind CSS", "Shadcn/ui", "JWT", "Supabase"],
    icon: FiBriefcase,
  },
  {
    name: "HelpDesk Mini",
    github: "https://github.com/roihan37/helpdesk-mini",
    subtitle: "Multi-Tenant Helpdesk Platform",
    date: "October 2026",
    description: "A multi-tenant helpdesk application with role-based access control, JWT authentication, real-time WebSocket messaging, ticket management, and Docker deployment.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Next.js", "TypeScript", "WebSocket", "Docker"],
    icon: FiHeadphones,
    demo: "https://helpdesk-frontend-production-0ce9.up.railway.app/",
  },
  {
    name: "Habit Shaper",
    github: "https://github.com/roihan37/habit-shaper",
    subtitle: "Habit Tracking & Goal Management",
    date: "September 2026",
    description: "A full-stack habit tracker for building positive habits and breaking negative ones, with daily tracking, streaks, statistics, and personal goals.",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "Prisma", "MySQL", "TanStack Query", "Tailwind CSS", "Shadcn/ui", "JWT", "Docker"],
    icon: FiCheckCircle,
  },
  {
    name: "NegotiAI",
    github: "https://github.com/roihan37/NegotiAI",
    demo: "https://negoti-ai-amber.vercel.app/",
    subtitle: "AI-Powered Negotiation Simulator",
    date: "August 2026",
    description: "An AI-powered web application that helps users prepare and simulate negotiation scenarios using generative AI.",
    technologies: ["Next.js", "TypeScript", "Shadcn/ui", "Tailwind CSS", "Gemini AI", "v0.dev"],
    icon: FiMessageSquare,
  },
  {
    name: "SIAKAD",
    github: "https://github.com/roihan37/SIAKAD",
    subtitle: "Academic Information System",
    date: "July 2026 – Present",
    inProgress: true,
    description: "A full-stack academic management system with role-based access control, course registration, scheduling, attendance, grades, tuition, and payment management.",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Redux Toolkit", "JWT"],
    icon: FiBookOpen,
  },
  {
    name: "MedicTrack",
    github: "https://github.com/roihan37/meditrack",
    subtitle: "Health Metrics Dashboard",
    date: "July 2025",
    description: "A health metrics dashboard designed to display patients’ lab results over time.",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Sequelize", "PostgreSQL", "Express.js", "Next.js", "Shadcn/ui"],
    icon: FiActivity,
  },
  {
    name: "Barber Dex",
    subtitle: "On-Demand Haircut Services",
    description: "An on-demand mobile app for home haircut services.",
    technologies: ["React Native", "React", "Redux", "Native Paper", "Express.js", "PostgreSQL", "Sequelize", "MongoDB", "Firestore", "Cloudinary", "Geomap API", "3rd Party API", "Stream.io"],
    icon: FiHeadphones,
    image: dexbarber,
    github: "https://github.com/BarberDelivery",
    story: "/blog/dex-barber",
  },
  {
    name: "Magurameudon App Mobile Clone",
    subtitle: "Restaurant Mobile Application",
    description: "A mobile application to display Restaurant Magurameudon.",
    technologies: ["Express.js", "PostgreSQL", "React Native", "Redux", "React", "Apollo Server", "AWS", "MongoDB", "NativeWind", "Expo", "Supabase"],
    icon: FiBookOpen,
    image: magurame,
    github: "https://github.com/roihan37/Magurameudon-Mobile-App-Clone",
  },
  {
    name: "Magurameudon Clone Website and Admin Side",
    subtitle: "Restaurant Website & Admin Dashboard",
    description: "A clone of the Magurameudon restaurant website with an admin dashboard.",
    technologies: ["Express.js", "PostgreSQL", "React", "Redux", "AWS", "Tailwind CSS", "Supabase", "Firebase"],
    icon: FiBookOpen,
    image: magurameweb,
    github: "https://github.com/roihan37/Magurameudon-Web-Clone",
  },
  {
    name: "The Flix",
    subtitle: "Movie Discovery Application",
    description: "A movie listing web application with IMDb information.",
    technologies: ["Express.js", "PostgreSQL", "Vue.js", "Pinia", "3rd Party API", "Bootstrap", "Supabase", "Firebase", "Railway"],
    icon: FiActivity,
    image: theflix,
    github: "https://github.com/roihan37/p2-iproject-client",
  },
];
