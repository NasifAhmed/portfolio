"use client";

import { sendEmail } from "@/actions/sendEmail";
import SectionHeading from "./SectionHeading";
import SubmitBtn from "./SubmitBtn";

export default function Contact() {
    return (
        <section
            id="contact"
            className="mb-28 sm:mb-40 w-[min(100%,38rem)] scroll-mt-36 sm:scroll-mt-28"
        >
            <SectionHeading text="Contact Me" />
            <p className="text-slate-700 text-center">
                Please contact me directly at{" "}
                <a
                    href="mailto:nasif2ahmed@gmail.com"
                    className="underline cursor-pointer"
                >
                    nasif2ahmed@gmail.com
                </a>
                {` or through this form.`}
            </p>
            <form
                className="flex flex-col gap-3 w-full mt-8"
                action={async (formData) => {
                    await sendEmail(formData).then(() => {
                        const form = document.getElementById(
                            "form"
                        ) as HTMLFormElement;
                        form.reset();
                    });
                }}
                id="form"
            >
                <input
                    className="h-14 rounded-sm border border-black/10 px-4"
                    type="email"
                    name="email"
                    id="email"
                    required
                    maxLength={500}
                    placeholder="Your Email"
                />
                <textarea
                    className="h-56 my-3 rounded-sm border border-black/10 p-4"
                    placeholder="Your Message"
                    name="message"
                    required
                    maxLength={5000}
                ></textarea>
                <SubmitBtn />
            </form>
        </section>
    );
}
