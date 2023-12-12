"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronsDown, Download, Github, Linkedin } from "lucide-react";

export default function Intro() {
    return (
        <section className="flex flex-col space-y-10 items-center justify-center mb-28 sm:mb-0">
            <motion.h1
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "tween",
                    duration: 0.25,
                }}
            >
                <Image
                    src="https://avatars.githubusercontent.com/u/33228097?s=400&u=6a03fbdf6115844ad3ceb4cfecc5f37b66d659b3&v=4:w
                "
                    alt="Nasif Ahmed"
                    width="192"
                    height="192"
                    quality="100"
                    priority={true}
                    className="h-35 w-35 rounded-full border-[0.35rem] border-white shadow-xl object-cover"
                />
            </motion.h1>
            <motion.div
                className="text-center max-w-xl space-y-2"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <p className="text-xl sm:text-2xl">
                    Hello, I am{" "}
                    <span className="font-bold text-slate-700">
                        Nasif Ahmed
                    </span>
                    {` 👋`}
                </p>
                <p className="text-xl sm:text-2xl">
                    {`I am a junior `}
                    <span className="font-bold">full-stack developer</span>
                    {` looking for hire.`}
                </p>
                {/* <p className="text-xl">
                    {`I build `}
                    <span className="font-bold italic">websites</span>
                    {` and `}
                    <span className="font-bold italic">webapps</span>
                    {` with latest available tech`}
                </p> */}
                <p className="text-lg sm:text-xl">
                    {`I specialize in `}
                    <span className="font-bold italic underline">MERN</span>
                    {` Stack development`}
                </p>
            </motion.div>

            <motion.div
                className="md:space-x-5 flex flex-col-reverse md:flex-row  gap-5 md:gap-0 justify-center items-center"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href="#contact"
                    className="bg-slate-900 text-white px-7 py-3 rounded-sm
                    focus:scale-110 hover:scale-110 active:scale-105 transition-transform"
                >
                    Contact me <ChevronsDown className="inline-block" />
                </Link>
                <a
                    className="bg-white px-7 py-3 rounded-sm cursor-pointer focus:scale-110 hover:scale-110 active:scale-105 transition-transform border"
                    href="/cv.pdf"
                    download={true}
                >
                    Download CV <Download className="inline-block" />
                </a>
                <div className="space-x-5">
                    <a
                        className="bg-white px-3 py-3 rounded-sm cursor-pointer focus:scale-110 hover:scale-110 active:scale-105 transition-transform border"
                        href="https://www.linkedin.com/in/nasif2ahmed"
                    >
                        <Linkedin className="inline-block" />
                    </a>
                    <a
                        className="bg-white px-3 py-3 rounded-sm cursor-pointer focus:scale-110 hover:scale-110 active:scale-105 transition-transform"
                        href="https://github.com/NasifAhmed"
                    >
                        <Github className="inline-block" />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
