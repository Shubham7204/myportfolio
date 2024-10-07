import { GITHUB_LINK, EMAIL_ID, INSTAGRAM_LINK, LINKEDIN_LINK, LOCATION, PHONE_NUMBER } from '../data/constants'
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import Link from 'next/link';

const links = [
    {
        title: EMAIL_ID,
        icon: <MdEmail className="inline-icon" />,
        content: 'mailto:' + EMAIL_ID,
        clickable: true,
    },
    {
        title: 'Github',
        icon: <FaGithub className="inline-icon" />,
        content: GITHUB_LINK,
        clickable: true,
    },
    {
        title: 'LinkedIn',
        icon: <FaLinkedin className="inline-icon" />,
        content: LINKEDIN_LINK,
        clickable: true,
    },
    {
        title: 'Instagram',
        icon: <FaInstagram className="inline-icon" />,
        content: INSTAGRAM_LINK,
        clickable: true,
    },
    {
        title: PHONE_NUMBER,
        icon: <FaPhoneAlt className="inline-icon" />,
        content: "",
        clickable: false,
    },
    {
        title: LOCATION,
        icon: <FaLocationDot className="inline-icon" />,
        content: "",
        clickable: false,
    },
]

export default function Links() {
    return (
        <div className="mt-24">
            <h1 className="md:text-5xl text-2xl font-extrabold text-slate-200 text-center"><MdContactMail className="inline-icon" />{" "}Contact Details</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 mt-12 gap-2">
                <div className="md:block hidden col-span-1">
                    <dotlottie-player src="https://lottie.host/c5c59e07-a174-40c6-a5ce-19f3293bb2a4/jnRTc9LEGF.json" background="transparent" speed="1" className="h-auto w-full" loop autoplay></dotlottie-player>
                </div>
                <div className="col-span-1 grid grid-cols-1 bg-gray-800 bg-opacity-85 rounded-3xl md:p-6 p-4 md:gap-6 gap-3">
                    {
                        links.map((link, index) => (
                            <div key={index} className='bg-slate-600 rounded-xl md:p-4 p-2'>
                                <div className="md:text-xl text-sm text-slate-300 flex items-center">
                                    <span className='mr-5 ml-2 md:text-5xl text-lg text-slate-300'>{link.icon}</span>
                                    {
                                        link.clickable ? (
                                            <Link href={link.content} target="_blank" className='transition-all hover:text-amber-500 hover:underline hover:underline-offset-8'>{link.title}</Link>
                                        ) : (
                                            <p>{link.title}</p>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div >
                <div className="md:hidden col-span-1">
                    <dotlottie-player src="https://lottie.host/c5c59e07-a174-40c6-a5ce-19f3293bb2a4/jnRTc9LEGF.json" background="transparent" speed="1" className="h-auto w-full" loop autoplay></dotlottie-player>
                </div>
            </div>
        </div >
    )
}
