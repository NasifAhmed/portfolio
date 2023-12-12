import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import blogit from "@/public/blogit.png";
import carmania from "@/public/carmania.png";
import medicamp from "@/public/medicamp.png";
import movietickethub from "@/public/movietickethub.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Medi Camp",
        description:
            "This is a full medical camp management system with different user type access and a payment gateway system with Stripe.",
        tags: [
            "React",
            "TypeScript",
            "Tailwind",
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "Mongoose",
            "Stripe",
        ],
        imageUrl: medicamp,
    },
    {
        title: "Blog.it",
        description:
            "This is a blog website that I made with all the features like reading, posting, commenting on blog posts.",
        tags: [
            "React",
            "Tailwind",
            "ShadCN UI",
            "NodeJS",
            "MongoDB",
            "Express",
        ],
        imageUrl: blogit,
    },
    {
        title: "Movie Ticket Hub",
        description:
            "This is a movie ticket selling website. Users can view and buy tickets with Stripe payment gateaway and admins can add schedules for new shows.",
        tags: [
            "React",
            "TypeScript",
            "Tailwind",
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "Mongoose",
            "Stripe",
        ],
        imageUrl: movietickethub,
    },
    {
        title: "Car Mania",
        description:
            "This is a shopping website for different brands of cars with all the shop website features like cart management, advertisements etc.",
        tags: ["React", "Tailwind", "Daisy UI"],
        imageUrl: carmania,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Java",
    "React",
    "Tailwind",
    "Next.js",
    "Node.js",
    "Git",
    "MongoDB",
    "Mongoose",
    "Express",
    "Linux",
    "Bash",
    "Vim/Neovim",
] as const;
