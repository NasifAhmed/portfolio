import { projectsData } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import ProjectCardMobile from "./ProjectCardMobile";
import SectionHeading from "./SectionHeading";

export default function Projects() {
    return (
        <section
            id="projects"
            className="scroll-mt-36 sm:scroll-mt-28 mb-28 sm:mb-40"
        >
            <SectionHeading text="My Projects" />
            <div className="space-y-10 hidden sm:block">
                {projectsData.map((project, index) => {
                    return <ProjectCard {...project} key={index} />;
                })}
            </div>
            <div className="sm:hidden space-y-8">
                {projectsData.map((project, index) => {
                    return <ProjectCardMobile {...project} key={index} />;
                })}
            </div>
        </section>
    );
}
