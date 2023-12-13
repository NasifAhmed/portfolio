import { projectsData } from "@/lib/data";
import { BookOpenText, Github } from "lucide-react";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];
export default function ProjectCardMobile({
    title,
    description,
    tags,
    imageUrl,
    live,
    source,
}: ProjectProps) {
    return (
        <div>
            <section className="bg-slate-100 max-w-2xl border border-black/5 rounded-sm shadow-md">
                <div className="w-fll max-h-40 overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt="Project I worked on"
                        quality={95}
                    />
                </div>
                <div className="p-8 border-t">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <ul className="flex gap-3 flex-wrap mt-3">
                        {tags.map((tag, index) => {
                            return (
                                <li
                                    key={index}
                                    className="bg-slate-900 px-3 py-1 text-[9px] uppercase tracking-wider text-white rounded-2xl"
                                >
                                    {tag}
                                </li>
                            );
                        })}
                    </ul>
                    <p className="mt-5 leading-relaxed text-sm text-slate-700 mb-4">
                        {description}
                    </p>
                    <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row justify-around">
                        <a
                            className="bg-slate-900 text-white text-xs px-5 py-3 rounded-sm cursor-pointer focus:scale-110 hover:scale-110 active:scale-105 transition-transform border"
                            href={live}
                        >
                            <div className="flex justify-center items-center">
                                Live Site
                                <BookOpenText className="ml-3 inline-block" />
                            </div>
                        </a>
                        <a
                            className="bg-slate-900 text-white text-xs px-5 py-3 rounded-sm cursor-pointer focus:scale-110 hover:scale-110 active:scale-105 transition-transform border"
                            href={source}
                        >
                            <div className="flex justify-center items-center">
                                Source Code
                                <Github className="ml-3 inline-block" />
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
