import SectionHeading from "./SectionHeading";

export default function Contact() {
    return (
        <section
            id="contact"
            className="mb-28 sm:mb-40 w-[min(100%,38rem)] scroll-mt-28"
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
            <form className="flex flex-col gap-3 w-full mt-8">
                <input
                    className="h-14 rounded-sm border border-black/10 px-4"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                />
                <textarea
                    className="h-56 my-3 rounded-sm border border-black/10 p-4"
                    placeholder="Your Message"
                ></textarea>
                <button
                    className="h-[3rem] w-[8rem] bg-slate-900 text-white rounded-sm outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 "
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </section>
    );
}
