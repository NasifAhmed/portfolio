"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll } from "framer-motion";
import { BookOpenText, Github } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];
export default function ProjectCard({
    title,
    description,
    tags,
    imageUrl,
    live,
    source,
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.30 1"],
    });
    return (
        <motion.div
            ref={ref}
            style={{
                scale: scrollYProgress,
                opacity: scrollYProgress,
            }}
        >
            <section className="bg-slate-100 max-w-2xl border border-black/10 rounded-sm shadow-md">
                <div className="w-fll max-h-60 overflow-hidden mx-3 mt-3 rounded-t-lg border-t border-x border-black/5">
                    <Image
                        src={imageUrl}
                        alt="Project I worked on"
                        quality={95}
                        className="rounded-t-lg"
                    />
                </div>
                <div className="p-10 border-t border-black/10">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <ul className="flex gap-3 flex-wrap mt-3">
                        {tags.map((tag, index) => {
                            return (
                                <li
                                    key={index}
                                    className="bg-slate-900 px-3 py-1 text-[10px] uppercase tracking-wider text-white rounded-2xl"
                                >
                                    {tag}
                                </li>
                            );
                        })}
                    </ul>
                    <p className="mt-5 leading-relaxed text-slate-700 mb-6">
                        {description}
                    </p>
                    <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row justify-around">
                        <a
                            className="bg-slate-900 text-white text-xs px-5 py-3 rounded-sm cursor-pointer focus:scale-110 hover:scale-110 active:scale-105 transition-transform border"
                            href={live}
                        >
                            Live Site
                            <BookOpenText className="ml-3 inline-block" />
                        </a>
                        <a
                            className="bg-slate-900 text-white text-xs px-5 py-3 rounded-sm cursor-pointer focus:scale-110 hover:scale-110 active:scale-105 transition-transform border"
                            href={source}
                        >
                            Source Code
                            <Github className="ml-3 inline-block" />
                        </a>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
