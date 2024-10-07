'use client';
import Image from "next/image";
import { experience } from "../data/experience"
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { MdWork } from "react-icons/md";
import ItemHolder from "./ItemHolder";
import { useState } from "react";

function Responsibilities({ responsibilities, skills }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <button onClick={() => setIsExpanded(!isExpanded)} className="md:transition-all text-slate-300 md:hover:text-slate-800 md:shadow-sm shadow md:text-base text-xs font-bold bg-slate-700 md:rounded-md rounded md:px-4 px-3 py-2 md:mt-3 mt-1 md:hover:bg-amber-500">{isExpanded ? "Hide Responsibilities" : "View Responsibilities"}</button>
            {
                isExpanded && (<>
                    <ul className="list-disc col-span-5 md:pl-10 pl-5 md:p-4 p-2 md:mt-4 mt-2 bg-slate-700 md:rounded-md rounded">
                        {
                            responsibilities.map((desc, ind) => <li key={ind} className="text-slate-300 md:text-base text-xs">{desc}</li>)
                        }
                    </ul>
                    <div className="flex flex-wrap md:p-2 p-1 md:mt-2 mt-1 bg-slate-700 md:rounded-md rounded">
                        {
                            skills.map((skill, ind) => <p key={ind} className="md:rounded-full md:text-base text-xs rounded px-3 py-1 m-1 bg-slate-600 text-slate-300 border-2 border-slate-700">{skill.icon}{" "}{skill.title}</p>)
                        }
                    </div>
                </>)
            }
        </>
    )
}

function ExperienceCard(experience) {
    return (
        <div className="bg-slate-600 rounded md:p-4 p-3">
            <div className="hidden md:grid md:grid-cols-8">
                <div className="col-span-1 p-4">
                    <Image placeholder="blur" src={experience.image} alt={experience.company} className="rounded-lg shadow-lg h-auto w-full" />
                </div>
                <div className="col-span-7 p-3">
                    <h3 className="text-3xl font-extrabold text-slate-200">{experience.role}</h3>
                    <h4 className="text-xl text-green-400">{experience.company}</h4>
                    <h6 className="text-md text-slate-300 mt-2"><FaLocationDot className="inline-icon" />{experience.location}</h6>
                    <p className="text-md text-slate-400">{experience.start} - {experience.end}</p>
                    <Responsibilities responsibilities={experience.description} skills={experience.skills} />
                </div>
            </div>
            <div className="md:hidden grid grid-cols-6 gap-1">
                <div className="col-span-5">
                    <h3 className="text-md font-bold text-slate-200">{experience.role}</h3>
                    <h4 className="text-sm text-green-400">{experience.company}</h4>
                    <h5 className="text-xs text-slate-300 mt-1"><FaLocationDot className="inline-icon" />{experience.location}</h5>
                    <p className="text-xs text-slate-400"><MdDateRange className="inline-icon" />{experience.start} - {experience.end}</p>
                </div>
                <div className="col-span-1">
                    <Image placeholder="blur" src={experience.image} alt={experience.company} className="rounded shadow-lg h-auto w-full" />
                </div>
                <div className="col-span-6">
                    <Responsibilities responsibilities={experience.description} skills={experience.skills} />
                </div>
            </div>
        </div>
    )
}

export default function Experience() {
    return (
        <ItemHolder title="Work Experience" icon={<MdWork className="inline-icon" />}>
            <div className="grid grid-cols-1 gap-5">
                {
                    experience.map((exp, ind) => <ExperienceCard key={ind} {...exp} />)
                }
            </div>
        </ItemHolder>
    )
}


