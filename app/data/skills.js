import { FaPython } from "react-icons/fa";
import { TbHexagonLetterC } from "react-icons/tb";
import { TbBrandCpp } from "react-icons/tb";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiFlutterFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMariadb } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMsqlServer } from "react-icons/di";
import { SiSqlite } from "react-icons/si";
import { DiDotnet } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { SiRstudio } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiAdobecreativecloud } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { SiGodotengine } from "react-icons/si";
import { SiAndroidstudio } from "react-icons/si";
import { SiAdobeacrobatreader } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { SiApollographql } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiDart } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiJson } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";

export const techSkills = {
  // Programming
  python: { title: "Python", icon: <FaPython className="inline-icon" /> },
  c: { title: "C", icon: <TbHexagonLetterC className="inline-icon" /> },
  cpp: { title: "C++", icon: <TbBrandCpp className="inline-icon" /> },
  csharp: { title: "C#", icon: <TbBrandCSharp className="inline-icon" /> },
  java: { title: "Java", icon: <FaJava className="inline-icon" /> },
  kotlin: { title: "Kotlin", icon: <SiKotlin className="inline-icon" /> },
  dart: { title: "Dart", icon: <SiDart className="inline-icon" /> },
  r: { title: "R", icon: <SiRstudio className="inline-icon" /> },
  php: { title: "PHP", icon: <FaPhp className="inline-icon" /> },
  gdscript: { title: "GDScript", icon: <SiGodotengine className="inline-icon" /> },

  // Database
  mysql: { title: "MySQL", icon: <SiMysql className="inline-icon" /> },
  mariadb: { title: "MariaDB", icon: <SiMariadb className="inline-icon" /> },
  mongodb: { title: "MongoDB", icon: <SiMongodb className="inline-icon" /> },
  firebase: {
    title: "Firebase",
    icon: <IoLogoFirebase className="inline-icon" />,
  },
  mssql: {
    title: "MS SQL Server",
    icon: <DiMsqlServer className="inline-icon" />,
  },
  sqlite: { title: "SQLite", icon: <SiSqlite className="inline-icon" /> },

  // Frameworks
  flutter: {
    title: "Flutter",
    icon: <RiFlutterFill className="inline-icon" />,
  },
  bootstrap: {
    title: "Bootstrap",
    icon: <FaBootstrap className="inline-icon" />,
  },
  materialui: { title: "Material UI", icon: <SiMui className="inline-icon" /> },
  tailwindcss: {
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="inline-icon" />,
  },
  flask: { title: "Flask", icon: <SiFlask className="inline-icon" /> },
  django: { title: "Django", icon: <SiDjango className="inline-icon" /> },
  fastapi: { title: "FastAPI", icon: <SiFastapi className="inline-icon" /> },
  discordpy: {
    title: "Discord.py",
    icon: <FaDiscord className="inline-icon" />,
  },
  discordjs: {
    title: "Discord.js",
    icon: <IoLogoDiscord className="inline-icon" />,
  },
  tensorflowjs: {
    title: "TensorFlow.js",
    icon: <SiTensorflow className="inline-icon" />,
  },

  // Web Development
  html: { title: "HTML", icon: <FaHtml5 className="inline-icon" /> },
  css: { title: "CSS", icon: <FaCss3 className="inline-icon" /> },
  javascript: {
    title: "JavaScript",
    icon: <IoLogoJavascript className="inline-icon" />,
  },
  typescript: {
    title: "TypeScript",
    icon: <SiTypescript className="inline-icon" />,
  },
  nodejs: { title: "Node.js", icon: <FaNode className="inline-icon" /> },
  expressjs: {
    title: "Express.js",
    icon: <SiExpress className="inline-icon" />,
  },
  aspnet: { title: "ASP.NET", icon: <DiDotnet className="inline-icon" /> },
  reactjs: { title: "React.js", icon: <FaReact className="inline-icon" /> },
  reactnative: { title: "React Native", icon: <TbBrandReactNative className="inline-icon" /> },
  nextjs: { title: "Next.js", icon: <SiNextdotjs className="inline-icon" /> },
  redux: { title: "Redux", icon: <SiRedux className="inline-icon" /> },
  angular: { title: "Angular", icon: <FaAngular className="inline-icon" /> },
  dotnet: { title: ".Net", icon: <DiDotnet className="inline-icon" /> },
  json: { title: "JSON", icon: <SiJson className="inline-icon" /> },
  wordpress: { title: "WordPress", icon: <FaWordpress className="inline-icon" /> },

  // Cloud Development
  restapi: { title: "REST API", icon: <TbApi className="inline-icon" /> },
  graphql: { title: "GraphQL", icon: <GrGraphQl className="inline-icon" /> },
  apollo: { title: "Apollo", icon: <SiApollographql className="inline-icon" /> },
  aws: { title: "AWS", icon: <FaAws className="inline-icon" /> },
  azure: {
    title: "Microsoft Azure",
    icon: <SiMicrosoftazure className="inline-icon" />,
  },
  heroku: { title: "Heroku", icon: <SiHeroku className="inline-icon" /> },
  git: { title: "Git", icon: <FaGitAlt className="inline-icon" /> },

  // Tools & Software
  postman: { title: "Postman", icon: <SiPostman className="inline-icon" /> },
  canva: { title: "Canva", icon: <SiCanva className="inline-icon" /> },
  adobeexpress: {
    title: "Adobe Express",
    icon: <SiAdobecreativecloud className="inline-icon" />,
  },
  adobephotoshop: {
    title: "Adobe Photoshop",
    icon: <SiAdobephotoshop className="inline-icon" />,
  },
  godotengine: {
    title: "Godot Engine",
    icon: <SiGodotengine className="inline-icon" />,
  },
  androidstudio: {
    title: "Android Studio",
    icon: <SiAndroidstudio className="inline-icon" />,
  },
  rstudio: { title: "RStudio", icon: <SiRstudio className="inline-icon" /> },
  adobeacrobat: {
    title: "Adobe Acrobat",
    icon: <SiAdobeacrobatreader className="inline-icon" />,
  },
};