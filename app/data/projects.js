import { techSkills } from "./skills";
import UrlShortner from "../../public/urlshort.png";

export const projects = [
  {
    title: "URL Shortener",
    link: "https://github.com/Shubham7204/url_shortner",
    image: UrlShortner,
    description: 
      "Developed a URL shortening service with the following features:\n" +
      "• User registration and login.\n" +
      "• URL creation and management.\n" +
      "• Secure authentication using JWT and cookie-based sessions.\n" +
      "• Dynamic analytics dashboard for tracking URL performance metrics.\n" +
      "• Designed and integrated RESTful APIs for robust URL management with error handling.\n" +
      "• Incorporated third-party services for QR code generation and bulk URL creation.",
    skills: [
      techSkills.reactjs,
      techSkills.tailwindcss,
      techSkills.javascript,
      techSkills.nodejs,
      techSkills.mongodb,
    ]
  },
];
