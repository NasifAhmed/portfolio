"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];
export default function ProjectCard({
    title,
    description,
    tags,
    imageUrl,
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "0.99 1"],
    });
    return (
        <motion.div
            ref={ref}
            style={{
                scale: scrollYProgress,
                opacity: scrollYProgress,
            }}
        >
            <section className="bg-slate-100 max-w-2xl border border-black/5 rounded-sm shadow-md">
                <div className="w-fll max-h-60 overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt="Project I worked on"
                        quality={95}
                    />
                </div>
                <div className="p-10 border-t">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <ul className="flex gap-3 flex-wrap mt-3">
                        {tags.map((tag, index) => {
                            return (
                                <li
                                    key={index}
                                    className="bg-slate-900 px-3 py-1 text-xs uppercase tracking-wider text-white rounded-2xl"
                                >
                                    {tag}
                                </li>
                            );
                        })}
                    </ul>
                    <p className="mt-2 leading-relaxed text-slate-700">
                        {description}
                    </p>
                </div>
            </section>
        </motion.div>
    );
}
