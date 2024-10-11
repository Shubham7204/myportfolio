import Image from "next/image";
import WaveImage from "../../public/wave.svg";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GITHUB_LINK, EMAIL_ID, INSTAGRAM_LINK, LINKEDIN_LINK } from '../data/constants';

const name = "{Shubham Mourya}";

const contactLinks = [
    {
        title: 'Github',
        icon: <FaGithub className="text-slate-200 md:text-xl text-lg" />,
        url: GITHUB_LINK
    },
    {
        title: 'LinkedIn',
        icon: <FaLinkedin className="text-slate-200 md:text-xl text-lg" />,
        url: LINKEDIN_LINK
    },
    {
        title: 'Instagram',
        icon: <FaInstagram className="text-slate-200 md:text-xl text-lg" />,
        url: INSTAGRAM_LINK
    },
    {
        title: 'Email',
        icon: <MdEmail className="text-slate-200 md:text-xl text-lg" />,
        url: 'mailto:' + EMAIL_ID
    }
];

export default function Footer() {
    return (
        <footer className="relative">
            <Image src={WaveImage} alt="" className="w-full select-none" />
            <div className="bg-green-700 py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center">
                        {/* Contact Links */}
                        <div className="flex space-x-6 mb-4">
                            {contactLinks.map((link, index) => (
                                <Link 
                                    key={index} 
                                    href={link.url} 
                                    target="_blank" 
                                    className="hover:text-amber-500 transition-colors"
                                    aria-label={link.title}
                                >
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                        {/* Footer Text */}
                        <p className="text-slate-200 text-sm md:text-base text-center">
                            {new Date().getFullYear()} {name}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}