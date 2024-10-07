'use client';
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaMagic } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import { RESUME_LINK } from "../data/constants";
import { useState } from "react";

var navLinks = [
    {
        title: 'Home',
        path: '/',
        icon: <FaHome className="inline-icon" />
    },
    {
        title: 'Skills',
        path: '/skills',
        icon: <FaStar className="inline-icon" />
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <FaMagic className="inline-icon" />
    },
    {
        title: 'Experience',
        path: '/experience',
        icon: <FaInfoCircle className="inline-icon" />
    }
]

export default function Navbar() {

    const pathName = usePathname();
    const [navOpen, setNavOpen] = useState(false);

    return (
        <nav>
            <div className="md:block hidden rounded-full py-4 px-6 bg-white shadow-lg">
                {
                    navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.path}
                            className={`px-4 py-2 rounded-full ${pathName == link.path ? 'bg-green-500 shadow mx-2 text-slate-50' : 'transition-colors hover:bg-slate-200 hover:shadow-inner mx-1'}`}
                        >
                            {link.icon} {link.title}
                        </Link>
                    ))
                }
                <Link
                    href={RESUME_LINK}
                    target="_blank"
                    className="px-4 py-2 rounded-full shadow bg-red-700 text-white transition-colors hover:bg-red-600 hover:shadow-inner mx-1"
                >
                    <IoMdDocument className="inline-icon" /> Resume
                </Link>
            </div>
            <button
                className="md:hidden rounded-lg p-2 ml-auto m-2 bg-slate-200 text-slate-800 opacity-95"
                onClick={() => setNavOpen(!navOpen)}
            >
                <GiHamburgerMenu className="text-2xl" />
            </button>
            {navOpen && (
                <div className="md:hidden fixed top-0 left-0 h-screen w-screen bg-slate-800 bg-opacity-95 z-50 p-4">
                    <div className="mr-2 flex">
                        <button
                            className="ml-auto md:hidden bg-slate-200 text-slate-800 opacity-95 rounded-lg p-2 m-2"
                            onClick={() => setNavOpen(!navOpen)}
                        >
                            <GiHamburgerMenu className="text-2xl" />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 gap-5 mt-5">
                        {
                            navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.path}
                                    className={`col-span-1 px-4 py-4 mx-1 rounded-lg ${pathName == link.path ? 'bg-green-500 text-slate-50' : 'text-slate-200'}`}
                                    onClick={() => setNavOpen(!navOpen)}
                                >
                                    {link.icon} {link.title}
                                </Link>
                            ))
                        }
                        <Link
                            href={RESUME_LINK}
                            target="_blank"
                            className="col-span-1 px-4 py-4 rounded-lg shadow bg-red-700 text-white transition-colors hover:bg-red-600 hover:shadow-inner mx-1"
                            onClick={() => setNavOpen(!navOpen)}
                        >
                            <IoMdDocument className="inline-icon" /> Resume
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
