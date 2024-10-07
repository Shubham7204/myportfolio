import PageContainer from "../components/PageContainer"
import { skillGroup } from "../data/skills-groups"
import SkillGroup from "./SkillGroup"

export default function Skills() {
    return (
        <PageContainer title="Skill Vault">
            {
                skillGroup.map((skill, index) => (
                    <SkillGroup
                        key={index}
                        skillName={skill.title}
                        skills={skill.skills}
                        skillIcon={skill.skillIcon}
                    />
                ))
            }
        </PageContainer>
    )
}