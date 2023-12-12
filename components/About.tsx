"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
    return (
        <motion.section
            className="mb-28 max-w-2xl text-center leading-8 sm:mb-40"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.15,
            }}
        >
            <SectionHeading text="About Me" />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                minus. Culpa totam dicta odit suscipit, exercitationem fugit
                accusamus harum eos inventore, fuga nesciunt amet enim odio.
                Iusto nemo libero dicta.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                officiis?
            </p>
        </motion.section>
    );
}
