import { IoSchoolSharp } from "react-icons/io5";
import { education } from "../data/education";
import ItemHolder from "./ItemHolder";
import EducationCard from "./EducationCard";

export default function Education() {
    return (
        <ItemHolder title="Education" icon={<IoSchoolSharp className="inline-icon" />}>
            <div className="grid grid-cols-1 md:gap-5 gap-2">
                {
                    education.map((edu, ind) => <EducationCard key={ind} {...edu} />)
                }
            </div>
        </ItemHolder>
    )
}
