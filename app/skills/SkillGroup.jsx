"use client"
import { GiShipWheel } from "react-icons/gi";
import { motion } from 'framer-motion';

function SkillTile({ title, icon }) {
    return (
        <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
            className="group cursor-pointer col-span-1 text-center bg-slate-600 md:rounded-3xl rounded-xl md:shadow-md shadow"
        >
            <div className="bg-slate-800 md:p-4 p-2 md:rounded-tl-3xl rounded-tl-xl md:rounded-tr-3xl rounded-tr-xl transition-colors group-hover:bg-green-400 group-hover:shadow-inner">
                <p className="md:text-5xl text-2xl text-slate-200 transition-colors group-hover:text-black">{icon}</p>
            </div>
            <p className="select-none text-slate-200 md:text-lg text-xs my-2">{title}</p>
        </motion.div>
    )
}

export default function SkillGroup({ skillName, skillIcon, skills }) {
    return <div className="md:my-12 my-6 bg-slate-700 md:rounded-3xl rounded-xl shadow-2xl md:py-12 py-6">
        <h1 className="select-none md:text-4xl text-lg text-slate-200 md:font-extrabold font-bold text-center">
            {skillIcon} {skillName}
        </h1>
        <hr className="md:w-24 w-12 md:h-1 h-0.5 mx-auto bg-gray-900 border-0 rounded md:my-10 my-5" />
        <div className="grid md:grid-cols-6 grid-cols-3 md:px-8 px-4 md:gap-5 gap-3">
            {
                skills.map((skill, index) => (
                    <SkillTile key={index} title={skill.title} icon={skill.icon} />
                ))
            }
        </div>
    </div>
}