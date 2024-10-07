'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoCaretDownCircle, IoCaretUpCircle } from "react-icons/io5";

export default function ProjectCard({ title, description, image, link, skills }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const buttonClasses = "transition-color text-2xl text-slate-400 hover:text-slate-100";
    // Split the description into bullet points
    const descriptionPoints = description.split("\n").filter(point => point.trim());

    return (
        <div className="group transition-colors md:hover:bg-green-400 col-span-1 bg-slate-700 md:p-4 p-3 rounded-lg md:shadow-md shadow">
            <div className="bg-slate-900 rounded p-1">
                <Link href={link} target="_blank">
                    <Image src={image} alt={title} className="rounded md:h-44 h-22 w-full object-cover" />
                </Link>
                <div className="grid grid-cols-10">
                    <div className="col-span-9 px-2 pt-2">
                        {isExpanded ? (
                            <div className="bg-slate-800 rounded-md flex flex-wrap p-1 mb-1">
                                {skills.map((skill, index) => (
                                    <span key={index} className="text-slate-200 text-xs bg-slate-600 rounded-full px-2 py-1 m-1 shadow-md">{skill.title}</span>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-wrap">
                                {skills.map((skill, index) => (
                                    <span key={index} className="text-slate-200 text-lg mr-2 mb-1">{skill.icon}</span>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="col-span-1 pt-2">
                        <button onClick={() => setIsExpanded(!isExpanded)}>
                            {isExpanded ? <IoCaretUpCircle className={buttonClasses} /> : <IoCaretDownCircle className={buttonClasses} />}
                        </button>
                    </div>
                </div>
            </div>
            <h2 className="text-slate-100 md:text-2xl text-lg md:my-3 my-1 transition-colors md:group-hover:text-black font-bold">{title}</h2>
            <ul className="text-slate-300 md:text-sm text-xs transition-colors md:group-hover:text-black list-disc pl-5 space-y-1">
                {descriptionPoints.map((point, index) => (
                    <li key={index}>{point.replace(/^•\s*/, '')}</li>
                ))}
            </ul>
        </div>
    );
}