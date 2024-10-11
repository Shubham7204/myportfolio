'use client';
import Link from "next/link";
import { FaHome, FaMagic, FaInfoCircle, FaStar } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbHeadphones, TbHeadphonesOff } from 'react-icons/tb';
import { usePathname } from "next/navigation";
import { RESUME_LINK } from "../data/constants";
import { useState, useRef } from "react";

var navLinks = [
    {
        title: 'Home',
        path: '/',
        icon: <FaHome />
    },
    {
        title: 'Skills',
        path: '/skills',
        icon: <FaStar />
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <FaMagic />
    },
    {
        title: 'Experience',
        path: '/experience',
        icon: <FaInfoCircle />
    }
];

export default function Navbar() {
    const pathName = usePathname();
    const [navOpen, setNavOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <nav className="relative w-full bg-transparent shadow-lg">
            <audio ref={audioRef} src="/WhenWeWereFriends.mp3" loop />

            {/* Desktop view */}
            <div className="hidden md:flex items-center justify-center py-4 px-6 bg-white rounded-full shadow-lg">
                {navLinks.map((link, index) => (
                    <Link
                        key={index}
                        href={link.path}
                        className={`px-4 py-2 text-sm md:text-base rounded-full flex items-center ${
                            pathName == link.path 
                                ? 'bg-green-500 text-white shadow-lg mx-2' 
                                : 'hover:bg-slate-200 hover:shadow-inner mx-1 transition-all'
                        }`}
                    >
                        <span className="mr-2">{link.icon}</span>
                        <span>{link.title}</span>
                    </Link>
                ))}
                {/* Resume Link */}
                <Link
                    href={RESUME_LINK}
                    target="_blank"
                    className="px-4 py-2 text-sm md:text-base rounded-full bg-red-700 text-white shadow-lg mx-1 hover:bg-red-600 transition-all flex items-center"
                >
                    <IoMdDocument className="mr-2" />
                    <span>Resume</span>
                </Link>

                {/* Music toggle button */}
                <button
                    className="ml-4 p-2 rounded-full bg-gray-100 shadow-lg hover:bg-gray-200 transition-all flex items-center justify-center"
                    onClick={toggleMusic}
                >
                    {isPlaying ? <TbHeadphonesOff className="w-6 h-6" /> : <TbHeadphones className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Hamburger Menu */}
            <button
                className="md:hidden flex items-center justify-center p-2 ml-auto m-2 bg-slate-200 text-slate-800 rounded-lg shadow-lg"
                onClick={() => setNavOpen(!navOpen)}
            >
                <GiHamburgerMenu className="text-2xl" />
            </button>

            {/* Mobile view */}
            {navOpen && (
                <div className="md:hidden fixed top-0 left-0 h-full w-full bg-slate-800 bg-opacity-95 z-50 p-4">
                    <div className="flex justify-end">
                        <button
                            className="rounded-lg p-2 m-2 bg-slate-200 text-slate-800"
                            onClick={() => setNavOpen(!navOpen)}
                        >
                            <GiHamburgerMenu className="text-2xl" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center mt-8">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.path}
                                className={`w-full text-center px-4 py-4 rounded-lg mb-2 flex items-center justify-center ${
                                    pathName == link.path 
                                        ? 'bg-green-500 text-white' 
                                        : 'bg-slate-700 text-white hover:bg-slate-600 transition-all'
                                }`}
                                onClick={() => setNavOpen(!navOpen)}
                            >
                                <span className="mr-2">{link.icon}</span>
                                <span>{link.title}</span>
                            </Link>
                        ))}
                        {/* Resume link */}
                        <Link
                            href={RESUME_LINK}
                            target="_blank"
                            className="w-full text-center px-4 py-4 bg-red-700 text-white rounded-lg mb-2 hover:bg-red-600 transition-all flex items-center justify-center"
                            onClick={() => setNavOpen(!navOpen)}
                        >
                            <IoMdDocument className="mr-2" />
                            <span>Resume</span>
                        </Link>
                        {/* Music toggle button */}
                        <button
                            className="w-full flex justify-center items-center px-4 py-4 bg-gray-700 text-white rounded-lg mb-2 hover:bg-gray-600 transition-all"
                            onClick={toggleMusic}
                        >
                            {isPlaying ? <TbHeadphonesOff className="w-6 h-6" /> : <TbHeadphones className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}