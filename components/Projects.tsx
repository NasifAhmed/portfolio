import { projectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Projects() {
    return (
        <section>
            <SectionHeading text="My Projects" />
            <div>
                {projectsData.map((project, index) => {
                    return <ProjectCard {...project} key={index} />;
                })}
            </div>
        </section>
    );
}

type ProjectProps = (typeof projectsData)[number];
function ProjectCard({ title, description, tags, imageUrl }: ProjectProps) {
    return <div>{title}</div>;
}
