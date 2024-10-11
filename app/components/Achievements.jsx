'use client';
import Image from "next/image";
import { FaTrophy } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { achievements } from "../data/achievements";

function AchievementCard({ achievement }) {
    return (
        <div className="group transition-all duration-300 hover:bg-green-400/20 bg-slate-700/50 rounded-lg overflow-hidden">
            <div className="h-full flex flex-col">
                <div className="relative w-full pt-[75%]"> {/* 4:3 aspect ratio */}
                    <Image 
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="p-4 flex items-center flex-grow">
                    <GiAchievement className="text-xl text-slate-200 flex-shrink-0 mr-2" />
                    <span className="text-slate-100 text-sm">{achievement.title}</span>
                </div>
            </div>
        </div>
    );
}

export default function Achievements() {
    return (
        <section className="mt-16 md:mt-24">
            <h1 className="md:text-5xl text-2xl font-extrabold text-slate-200 text-center flex items-center justify-center gap-2">
                <FaTrophy className="inline" />
                Achievements
            </h1>
            <div className="mt-8 md:mt-12 bg-gray-800/85 p-4 md:p-8 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {achievements.map((achievement, index) => (
                        <AchievementCard
                            key={index}
                            achievement={achievement}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}