import type { IconType } from "react-icons";
import {
    SiAmazonec2,
    SiApollographql,
    SiBootstrap,
    SiClaude,
    SiCss3,
    SiFastapi,
    SiFirebase,
    SiGit,
    SiGithub,
    SiGithubcopilot,
    SiGooglegemini,
    SiHtml5,
    SiMongoose,
    SiMui,
    SiOpenai,
    SiPostman,
    SiPrisma,
    SiPython,
    SiRailway,
    SiSequelize,
    SiShadcnui,
    SiSocketdotio,
    SiSqlalchemy,
    SiSupabase
} from "react-icons/si";

type Skill = {
  name: string;
  logo?: string;
  icon?: IconType;
  initials?: string;
};

type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skillsData: SkillGroup[] = [
  {
    title: "Language",
    skills: [
      { name: "JavaScript (ES6+)", logo: "/icons/icons8-javascript.svg" },
      { name: "TypeScript", logo: "/icons/icons8-typescript.svg" },
      { name: "Python", icon: SiPython },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "SQL", initials: "SQL" },
    ],
  },
  {
    title: "Front End",
    skills: [
      { name: "React.js", logo: "/icons/icons8-react.svg" },
      { name: "Next.js", logo: "/icons/icons8-nextjs.svg" },
      { name: "Redux (Toolkit)", logo: "/icons/icons8-redux.svg" },
      { name: "Vue.js", logo: "/icons/icons8-vue.svg" },
      { name: "Pinia", logo: "/icons/pinia.svg" },
      { name: "React Native", logo: "/icons/icons8-react.svg" },
      { name: "Tailwind CSS", logo: "/icons/icons8-tailwind.svg" },
      { name: "Material UI", icon: SiMui },
      { name: "Shadcn/ui", icon: SiShadcnui },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    title: "Back-End & Databases",
    skills: [
      { name: "Node.js", logo: "/icons/icons8-nodejs.svg" },
      { name: "Express.js", logo: "/icons/icons8-express.svg" },
      { name: "Sequelize (ORM)", icon: SiSequelize },
      { name: "Prisma (ORM)", icon: SiPrisma },
      { name: "Mongoose (ODM)", icon: SiMongoose },
      { name: "PostgreSQL", logo: "/icons/icons8-postgresql.svg" },
      { name: "MongoDB", logo: "/icons/icons8-mongodb.svg" },
      { name: "Redis", logo: "/icons/icons8-redis.svg" },
      { name: "GraphQL", logo: "/icons/icons8-graphql.svg" },
      { name: "Apollo Server", icon: SiApollographql },
      { name: "FastAPI", icon: SiFastapi },
      { name: "SQLAlchemy", icon: SiSqlalchemy },
      { name: "Alembic", initials: "Al" },
    ],
  },
  {
    title: "Tools, Cloud & DevOps",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "RESTful APIs", logo: "/icons/restapi.svg" },
      { name: "Docker", logo: "/icons/icons8-docker.svg" },
      { name: "AWS (EC2)", icon: SiAmazonec2 },
      { name: "Supabase", icon: SiSupabase },
      { name: "Firebase", icon: SiFirebase },
      { name: "Railway", icon: SiRailway },
      { name: "Postman", icon: SiPostman },
      { name: "Socket.io", icon: SiSocketdotio },
    ],
  },
  {
    title: "AI & Development Tools",
    skills: [
      { name: "Gemini AI", icon: SiGooglegemini },
      { name: "AI-assisted Development", initials: "AI" },
      { name: "v0.dev", initials: "v0" },
      { name: "Cursor", initials: "Cu" },
      { name: "Claude", icon: SiClaude },
      { name: "ChatGPT", icon: SiOpenai },
      { name: "GitHub Copilot", icon: SiGithubcopilot },
      { name: "Codex", icon: SiOpenai },
      { name: "OpenCode", initials: "OC" },
    ],
  },
  {
    title: "Testing",
    skills: [
      { name: "Unit Testing (Jest, Supertest)", logo: "/icons/Jest.svg" },
    ],
  },
];
