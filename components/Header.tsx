"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [activeSection, setActiveSection] = useState("Home");

    return (
        <header className="z-50 relative">
            <motion.div
                className="fixed top-0 h-[5.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:h-[3.25rem]  "
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <nav className="w-full fixed flex justify-center">
                    <ul className="flex flex-wrap items-center justify-center font-medium text-slate-500 text-sm">
                        {links.map((link) => {
                            return (
                                <motion.li
                                    className="h-3/4 flex items-center justify-center relative"
                                    key={link.hash}
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                >
                                    <Link
                                        className={`flex w-full items-center justify-center px-3 py-1 md:py-3 hover:text-slate-950 transition-all ${
                                            activeSection === link.name
                                                ? `text-slate-950 text-base`
                                                : ""
                                        }`}
                                        href={link.hash}
                                        onClick={() => {
                                            setActiveSection(link.name);
                                        }}
                                    >
                                        {link.name}
                                        {link.name === activeSection && (
                                            <motion.span
                                                className="bg-slate-200 rounded-md absolute inset-0 -z-10"
                                                layoutId="activeSection"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 380,
                                                    damping: 30,
                                                }}
                                            ></motion.span>
                                        )}
                                    </Link>
                                </motion.li>
                            );
                        })}
                    </ul>
                </nav>
            </motion.div>
        </header>
    );
}
