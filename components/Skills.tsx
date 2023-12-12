"use client";

import { skillsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {
    return (
        <section
            id="skills"
            className="mb-28 sm:mb-40 max-w-3xl scroll-mt-36 sm:scroll-mt-28 text-center"
        >
            <SectionHeading text="My Skills" />
            <ul className="flex flex-wrap justify-center items-center gap-2 text-lg text-slate-800">
                {skillsData.map((skill, index) => {
                    return (
                        <motion.li
                            className="bg-white border border-black/[0.1] rounded-sm px-5 py-3"
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                        >
                            {skill}
                        </motion.li>
                    );
                })}
            </ul>
        </section>
    );
}
