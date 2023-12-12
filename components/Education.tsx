import Image from "next/image";
import SectionHeading from "./SectionHeading";
import bracu_logo from "@/public/bracu_logo.png";
import dc_logo from "@/public/dc_logo.png";
import isc_logo from "@/public/isc_logo.png";

export default function Education() {
    return (
        <section
            id="education"
            className="mb-28 sm:mb-40 w-[min(100%,38rem)] scroll-mt-36 sm:scroll-mt-28 space-y-8"
        >
            <SectionHeading text="Education" />
            <div className="flex justify-center items-center gap-5">
                <div className="w-40">
                    <Image src={bracu_logo} alt="Logo of BRAC University" />
                </div>
                <div className="flex flex-col justify-center items-start">
                    <h3 className="text-lg">Bachelor in Computer Sciene</h3>
                    <h4 className="text-base">BRAC University</h4>
                </div>
            </div>
            <div className="flex justify-center items-center gap-5">
                <div className="w-40 flex justify-center items-center">
                    <Image
                        src={dc_logo}
                        alt="Logo of BRAC University"
                        className="w-24"
                    />
                </div>
                <div className="flex flex-col justify-center items-start">
                    <h3 className="text-lg">Higher Secondary Certificate</h3>
                    <h4 className="text-base">Dhaka College</h4>
                </div>
            </div>
            <div className="flex justify-center items-center gap-5">
                <div className="w-40 flex justify-center items-center">
                    <Image
                        src={isc_logo}
                        alt="Logo of BRAC University"
                        className="w-24"
                    />
                </div>
                <div className="flex flex-col justify-center items-start">
                    <h3 className="text-lg">Secondary School Certificate</h3>
                    <h4 className="text-base">Ideal school and college</h4>
                </div>
            </div>
        </section>
    );
}
