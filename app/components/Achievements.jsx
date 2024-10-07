import { FaTrophy } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { achievements } from "../data/achievements";

export default function Achievements() {
    return (
        <div className="mt-24">
            <h1 className="md:text-5xl text-2xl font-extrabold text-slate-200 text-center"><FaTrophy className="inline-icon" />{" "}Achievements</h1>
            <div className="mt-12 bg-gray-800 bg-opacity-85 md:p-10 px-4 py-2 rounded-3xl">
                <ul className="text-slate-300 md:px-5 md:mx-8">
                    {
                        achievements.map((achievement, index) => (
                            <li key={index} className="md:text-xl text-xs flex my-2">
                                <div className="md:p-4 p-3 bg-gray-900 bg-opacity-75 rounded-l-xl flex justify-center items-center">
                                    <GiAchievement className="md:text-3xl text-xl text-slate-200" />
                                </div>
                                <div className="md:p-4 p-3 bg-slate-700 rounded-r-lg flex-grow">
                                    {achievement}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div >
        </div >
    )
}
