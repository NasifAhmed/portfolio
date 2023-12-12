"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
    return (
        <motion.section
            className="mb-28 max-w-2xl text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.15,
            }}
            id="about"
        >
            <SectionHeading text="About Me" />
            <p>
                {`I am a passionate new full stack developer from `}
                <span className="font-semibold">Dhaka, Bangladesh</span>
                {` . I develop fully featured well-structured `}
                <span className="font-semibold">websites/webapps</span>
                {` with latest available technology. I aspire to become a successful `}
                <span className="font-semibold">
                    web developer/ software engineer
                </span>
                {` in future. Exploring, learning and tinkring with latest technology speically in the web development field is my hobby.`}
            </p>
            <p>
                {`My favorite technology to use are `}
                <span className="font-bold">React</span>
                {`, `}
                <span className="font-bold">NextJS</span>
                {`, `}
                <span className="font-bold">Tailwind</span>
                {` and `}
                <span className="font-bold">Typescript</span>
                {`. I also love Linux, Neovim and FOSS culture.`}
            </p>
        </motion.section>
    );
}
