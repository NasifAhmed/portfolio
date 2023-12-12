import { projectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-28">
            <SectionHeading text="My Projects" />
            <div className="space-y-10">
                {projectsData.map((project, index) => {
                    return <ProjectCard {...project} key={index} />;
                })}
            </div>
        </section>
    );
}
