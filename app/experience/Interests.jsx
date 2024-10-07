import React from 'react'
import ItemHolder from './ItemHolder'
import { MdInterests } from "react-icons/md";
import { interests } from '../data/interests';

export default function Interests() {
    return (
        <ItemHolder title="Interests" icon={<MdInterests className="inline-icon" />}>
            <div className="flex flex-wrap md:gap-3 gap-1">
                {
                    interests.map((interest, index) => (
                        <p key={index} className="rounded-full text-slate-300 md:text-xl text-xs bg-slate-800 md:px-6 px-3 md:py-2 py-1">{interest}</p>
                    ))
                }
            </div>
        </ItemHolder>
    )
}
