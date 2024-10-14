"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import aboutUsIllustration from "@/public/assets/about-us-illustration.png";
import DottedTextCard from "../cards/DottedTextCard";
import { motion } from "framer-motion";
import { getLangDir } from "rtl-detect";

const AboutUsSection = () => {
    const localActive = useLocale();
    const direction = getLangDir(localActive);
    const t = useTranslations("AlimhaPage.AboutUsSection");

    return (
        <section
            id="about-us"
            className="relative flex justify-center items-center bg-white w-full h-fit px-[5%] lg:px-[10%] pt-20 py-24 min-[900px]:pt-32 min-[900px]:pb-56 overflow-hidden"
        >
            <div className="flex flex-col items-center gap-20">
                <span className="bg-tertiary text-secondary-blue text-sm min-[1280px]:text-base px-3 py-2 rounded-md">
                    {t("tag")}
                </span>

                <div className="grid grid-cols-1 min-[800px]:grid-cols-3 items-center w-full h-full gap-x-5 gap-y-5 min-[800px]:gap-y-60 min-[1200px]:gap-y-20">
                    <div className="flex justify-center items-center min-w-[330px] h-fit min-[800px]:min-h-[230px] place-self-center min-[800px]:place-self-start">
                        <DottedTextCard
                            title={t("card1.title")}
                            body={t("card1.body")}
                            cardBgColor="bg-primary-blue"
                            dotBgColor="bg-white"
                            dotColor="bg-primary-blue"
                            titleColor="text-white"
                            bodyColor="text-white"
                        />
                    </div>
                    <div className="hidden min-[800px]:block row-span-2 place-self-center">
                        <Image
                            src={aboutUsIllustration}
                            alt="about us illustration"
                            height={450}
                        />
                    </div>
                    <div className="flex justify-center items-center min-w-[330px] h-fit min-[800px]:min-h-[230px] place-self-center min-[800px]:place-self-end">
                        <DottedTextCard
                            title={t("card2.title")}
                            body={t("card2.body")}
                        />
                    </div>
                    <div className="flex justify-center items-center min-w-[330px] h-fit min-[800px]:min-h-[230px] place-self-center min-[800px]:place-self-start">
                        <DottedTextCard
                            title={t("card3.title")}
                            body={t("card3.body")}
                        />
                    </div>
                    <div className="flex justify-center items-center min-w-[330px] h-fit min-[800px]:min-h-[230px] place-self-center min[800px]:place-self-end">
                        <DottedTextCard
                            title={t("card4.title")}
                            body={t("card4.body")}
                            cardBgColor="bg-primary-blue"
                            dotBgColor="bg-white"
                            dotColor="bg-primary-blue"
                            titleColor="text-white"
                            bodyColor="text-white"
                        />
                    </div>
                </div>
            </div>
            <motion.div
                initial={{
                    x: direction == "rtl" ? "-100%" : "100%",
                    y: "-100%",
                    rotate: direction == "rtl" ? 210 : -30,
                }}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`absolute top-[100%] ${
                    direction == "rtl" ? "left-[70%]" : "right-[70%]"
                } z-10`}
            >
                <div className="bg-gradient-to-r from-secondary-blue to-white/0 w-[1000px] h-[80px] ml-5 rounded-full"></div>
                <div className="bg-gradient-to-r from-secondary-blue to-white/0  w-[930px] h-[150px] rounded-full"></div>
            </motion.div>
        </section>
    );
};

export default AboutUsSection;
