'use client';
import { FaLocationDot } from "react-icons/fa6";
import { GrScorecard } from "react-icons/gr";
import { MdDateRange } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";

function CourseWork({ courseWork }) {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <button onClick={() => setIsExpanded(!isExpanded)} className="md:transition-all text-slate-300 md:hover:text-slate-800 md:shadow-sm shadow md:text-base text-xs font-bold bg-slate-700 md:rounded-md rounded md:px-4 px-3 py-2 md:mt-3 mt-1 md:hover:bg-amber-500">{isExpanded ? "Hide Coursework" : "View Coursework"}</button>
            {
                isExpanded && <div className="md:flex md:flex-wrap bg-slate-700 bg-opacity-75 md:rounded-md rounded md:p-2 p-0.5 md:mt-2 mt-1">
                    {
                        courseWork.map((course, ind) => <p key={ind} className="md:rounded-full md:text-base text-xs rounded px-3 py-1 m-1 bg-slate-600 text-slate-300 border-2 border-slate-700">{course}</p>)
                    }
                </div>
            }
        </>
    )
}

export default function EducationCard(education) {

    return (
        <div className="bg-slate-600 rounded md:p-4 p-3">
            <div className="hidden md:grid md:grid-cols-8">
                <div className="col-span-1 p-4">
                    <Image placeholder="blur" src={education.image} alt={education.school} className="rounded-lg shadow-lg h-auto w-full" />
                </div>
                <div className="col-span-6 p-3">
                    <h3 className="text-3xl font-extrabold text-slate-200">{education.school}</h3>
                    <h4 className="text-xl text-green-400">{education.degree} &bull; {education.major}</h4>
                    <h6 className="text-md text-slate-300 mt-2"><FaLocationDot className="inline-icon" />{education.location}</h6>
                    <p className="text-md text-slate-400"><MdDateRange className="inline-icon" />{education.start} - {education.end}</p>
                    <CourseWork courseWork={education.coursework} />
                </div>
                <div className="col-span-1 text-end pr-3">
                    <div className="mt-3">
                        <p className="text-slate-300 text-3xl font-extrabold">
                            {education.gpa}
                            <span className="text-lg text-slate-400">{" / "} {education.maxgpa}</span>
                        </p>
                        <p className="italic text-slate-400">{education.gpatype}</p>
                    </div>
                </div>
            </div>
            <div className="md:hidden grid grid-cols-6 gap-1">
                <div className="col-span-5">
                    <h3 className="text-md font-bold text-slate-200">{education.school}</h3>
                    <h4 className="text-sm text-green-400">{education.degree} &bull; {education.major}</h4>
                    <h5 className="text-xs text-slate-300 mt-1"><FaLocationDot className="inline-icon" />{education.location}</h5>
                    <h6 className="text-xs text-slate-300"><GrScorecard className="inline-icon" />{education.gpatype}: <span className="font-bold">{education.gpa}</span> <span className="text-slate-400">{" / "} {education.maxgpa}</span></h6>
                    <p className="text-xs text-slate-400"><MdDateRange className="inline-icon" />{education.start} - {education.end}</p>
                </div>
                <div className="col-span-1">
                    <Image placeholder="blur" src={education.image} alt={education.school} className="rounded shadow-lg h-auto w-full" />
                </div>
                <div className="col-span-6">
                    <CourseWork courseWork={education.coursework} />
                </div>
            </div>
        </div>
    )
}