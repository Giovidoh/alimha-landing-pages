"use client";
import Image from "next/image";
import React from "react";
import codifyLogo from "@/public/assets/codify-logo.png";
import soudhuLogo from "@/public/assets/soudhu-logo.png";
import odeytech from "@/public/assets/Odeytech.jpg";
import ubaLogo from "@/public/assets/uba-logo.png";
import ecobankLogo from "@/public/assets/ecobank-logo.png";
import { motion } from "framer-motion";
import { FC } from "react";
import { useLocale } from "next-intl";
import { getLangDir } from "rtl-detect";

interface TheyTrustUsSectionProps {
    tag: string;
    title: string;
    description: string;
}

const TheyTrustUsSection: FC<TheyTrustUsSectionProps> = ({
    tag,
    title,
    description,
}) => {
    const localActive = useLocale();
    const direction = getLangDir(localActive);

    return (
        <section className="relative flex flex-col justify-evenly items-center bg-[#F8F8F8] text-center w-full h-fit pt-12 pb-24">
            <div className="flex flex-col items-center gap-4 px-[5%] lg:px-[10%] mb-7">
                <span className="bg-tertiary text-secondary-blue text-sm min-[1280px]:text-base px-3 py-2 rounded-md">
                    {tag}
                </span>

                <div className="flex flex-col gap-3">
                    <h2 className="font-bold text-center text-2xl lg:text-3xl min-[1200px]:text-4xl leading-tight min-[1200px]:leading-snug">
                        {title}
                    </h2>
                    <p className="max-w-[595px] text-[#333333] text-sm lg:text-base min-[1200px]:text-lg">
                        {description}
                    </p>
                </div>
            </div>
            <div className="flex w-full overflow-hidden px-10">
                <motion.div
                    animate={{
                        translateX: direction == "rtl" ? "50%" : "-50%",
                    }}
                    transition={{
                        duration: 15,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    className={`flex flex-none md:hidden items-center gap-16 ${
                        direction == "rtl" ? "pl-16" : "pr-16"
                    } py-3`}
                >
                    {/* Small devices */}
                    <div className="flex justify-center items-center bg-white w-[130px] h-[80px] rounded-xl shadow-lg">
                        <Image
                            src={ecobankLogo}
                            alt="ecobank logo"
                            height={32.5}
                        />
                    </div>
                    <div className="flex justify-center items-center bg-white w-[130px] h-[80px] rounded-xl shadow-lg">
                        <Image
                            src={soudhuLogo}
                            alt="soudhu logo"
                            height={32.5}
                        />
                    </div>
                    <div className="flex justify-center items-center bg-white w-[130px] h-[80px] rounded-xl shadow-lg">
                        <Image src={ubaLogo} alt="uba logo" height={65} />
                    </div>
                    <div className="flex justify-center items-center bg-white w-[130px] h-[80px] rounded-xl shadow-lg">
                        <Image
                            src={codifyLogo}
                            alt="codify logo"
                            height={47.5}
                        />
                    </div>
                    <div className="flex justify-center items-center bg-white w-[130px] h-[80px] rounded-xl shadow-lg">
                        <Image src={odeytech} alt="odeytech logo" height={58} />
                    </div>

                    {/* Second set of logos for animation */}
                    <div className="flex justify-center items-center bg-white w-[130px] h-[80px] rounded-xl shadow-lg">
                        <Image
                            src={ecobankLogo}
                            alt="ecobank logo"
                            height={32.5}
                        />
                    </div>
                    <div className="flex justify-center items-center bg-white w-[130px] h-[80px] rounded-xl shadow-lg">
                        <Image
                            src={soudhuLogo}
                            alt="soudhu logo"
                            height={32.5}
                        />
                    </div>
                    <div className="flex justify-center items-center bg-white w-[130px] h-[80px] rounded-xl shadow-lg">
                        <Image src={ubaLogo} alt="uba logo" height={65} />
                    </div>
                    <div className="flex justify-center items-center bg-white w-[130px] h-[80px] rounded-xl shadow-lg">
                        <Image
                            src={codifyLogo}
                            alt="codify logo"
                            height={47.5}
                        />
                    </div>
                    <div className="flex justify-center items-center bg-white w-[130px] h-[80px] rounded-xl shadow-lg">
                        <Image src={odeytech} alt="odeytech logo" height={58} />
                    </div>
                </motion.div>
                <motion.div
                    animate={{
                        translateX: direction == "rtl" ? "50%" : "-50%",
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                    }}
                    className={`hidden md:flex md:flex-none items-center gap-24 ${
                        direction == "rtl" ? "pl-24" : "pr-24"
                    } py-7`}
                >
                    {/* Large devices */}
                    <div className="flex justify-center items-center bg-white w-[230px] h-[120px] rounded-xl shadow-lg">
                        <Image
                            src={ecobankLogo}
                            alt="ecobank logo"
                            height={65}
                        />
                    </div>
                    <div className="flex justify-center items-center bg-white w-[230px] h-[120px] rounded-xl shadow-lg">
                        <Image src={soudhuLogo} alt="soudhu logo" height={65} />
                    </div>
                    <div className="flex justify-center items-center bg-white w-[230px] h-[120px] rounded-xl shadow-lg">
                        <Image src={ubaLogo} alt="uba logo" height={130} />
                    </div>
                    <div className="flex justify-center items-center bg-white w-[230px] h-[120px] rounded-xl shadow-lg">
                        <Image src={codifyLogo} alt="codify logo" height={95} />
                    </div>
                    <div className="flex justify-center items-center bg-white w-[230px] h-[120px] rounded-xl shadow-lg">
                        <Image src={odeytech} alt="odeytech logo" height={85} />
                    </div>

                    {/* Second set of logos for animation */}
                    <div className="flex justify-center items-center bg-white w-[230px] h-[120px] rounded-xl shadow-lg">
                        <Image
                            src={ecobankLogo}
                            alt="ecobank logo"
                            height={65}
                        />
                    </div>

                    <div className="flex justify-center items-center bg-white w-[230px] h-[120px] rounded-xl shadow-lg">
                        <Image src={soudhuLogo} alt="soudhu logo" height={65} />
                    </div>

                    <div className="flex justify-center items-center bg-white w-[230px] h-[120px] rounded-xl shadow-lg">
                        <Image src={ubaLogo} alt="uba logo" height={130} />
                    </div>

                    <div className="flex justify-center items-center bg-white w-[230px] h-[120px] rounded-xl shadow-lg">
                        <Image src={codifyLogo} alt="codify logo" height={95} />
                    </div>

                    <div className="flex justify-center items-center bg-white w-[230px] h-[120px] rounded-xl shadow-lg">
                        <Image src={odeytech} alt="odeytech logo" height={85} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TheyTrustUsSection;
