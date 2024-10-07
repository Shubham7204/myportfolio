import PageContainer from "../components/PageContainer";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function page() {
    return (
        <PageContainer title="Projects">
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-7 gap-3 md:my-12 my-6">
                {
                    projects.map((project, index) => (
                        <ProjectCard key={index} title={project.title} description={project.description} image={project.image} link={project.link} skills={project.skills} />
                    ))
                }
            </div>
        </PageContainer>
    )
}
