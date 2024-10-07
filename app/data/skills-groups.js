import { FaCode } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { SiFramework } from "react-icons/si";
import { VscTools } from "react-icons/vsc";
import { techSkills } from "./skills";

const programmingSkills = [
  "python",
  "c",
  "cpp",
  "java",
  "php",
].map((skill) => techSkills[skill] || { title: skill, icon: null });

const databaseSkills = [
  "mysql",
  "mongodb",
  "firebase",
  "mssql",
  "sqlite",
].map((skill) => techSkills[skill] || { title: skill, icon: null });

const frameworkSkills = [
  "bootstrap",
  "materialui",
  "tailwindcss",
  "flask",
  "django",
].map((skill) => techSkills[skill] || { title: skill, icon: null });

const webdevSkills = [
  "html",
  "css",
  "javascript",
  "typescript",
  "nodejs",
  "expressjs",
  "aspnet",
  "reactjs",
  "nextjs",
].map((skill) => techSkills[skill] || { title: skill, icon: null });

const toolsSkills = [
  "postman",
  "canva",
].map((skill) => techSkills[skill] || { title: skill, icon: null });

export const skillGroup = [
  {
    title: "Programming Languages",
    skills: programmingSkills,
    skillIcon: <FaCode className="inline-icon" />,
  },
  {
    title: "Web Development",
    skills: webdevSkills,
    skillIcon: <TbWorldWww className="inline-icon" />,
  },
  {
    title: "Database",
    skills: databaseSkills,
    skillIcon: <FaDatabase className="inline-icon" />,
  },
  {
    title: "Frameworks",
    skills: frameworkSkills,
    skillIcon: <SiFramework className="inline-icon" />,
  },
  {
    title: "Tools & Software",
    skills: toolsSkills,
    skillIcon: <VscTools className="inline-icon" />,
  },
];
