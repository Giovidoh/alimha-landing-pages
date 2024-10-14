/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React from "react";
import actor3 from "@/public/assets/actor3.png";
import jigsaw from "@/public/assets/jigsaw-img.png";
import saas from "@/public/assets/saas-img.png";
import api from "@/public/assets/api-img.png";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { getLangDir } from "rtl-detect";
import ButtonStyle2 from "../buttons/ButtonStyle2";

const HeroSection = () => {
    const localActive = useLocale();
    const direction = getLangDir(localActive);
    const t = useTranslations("AlimhaPage.HeroSection");

    return (
        <section className="bg-white bg-hero-image bg-cover bg-no-repeat">
            <div className="relative flex justify-between items-center w-full h-full px-[5%] lg:px-[10%] pt-24 pb-20 min-[900px]:pb-0">
                <div className="flex flex-col items-center min-[900px]:items-start bg-white bg-opacity-80 min-[900px]:bg-transparent w-full min-[900px]:w-1/2 gap-3 min-[1280px]:gap-5 py-10 px-2 min-[900px]:px-0 rounded-2xl shadow-2xl shadow-white min-[900px]:shadow-none z-10">
                    <span className="bg-tertiary text-secondary-blue text-sm min-[1200px]:text-base px-3 py-2 rounded-md">
                        {t("tag")}
                    </span>
                    <h1 className="font-bold text-3xl lg:text-4xl min-[1200px]:text-5xl text-center min-[900px]:text-start leading-tight min-[1200px]:leading-snug min-[900px]:whitespace-nowrap">
                        {t("heading.first")} <br />
                        <span className="text-primary-blue">
                            {t("heading.second")}
                        </span>
                    </h1>
                    <p className="text-[#1E1E1E] text-center min-[900px]:text-justify text-sm lg:text-base min-[1200px]:text-lg">
                        {t("supporting text")}
                    </p>
                    <div className="w-full text-center min-[900px]:text-start">
                        <ButtonStyle2
                            href={`/${localActive}/alimha/become-partner`}
                            text={t("Become partner")}
                            bgColor="bg-primary-blue"
                            className="border-none z-10"
                        />
                    </div>
                </div>
                <div className="hidden min-[900px]:block z-10">
                    <Image
                        src={actor3}
                        alt="hero actor image"
                        height={641}
                        className="pointer-events-none select-none"
                    />
                </div>

                <motion.div
                    initial={{
                        x: direction == "rtl" ? "-100%" : "100%",
                        y: "-100%",
                        rotate: direction == "rtl" ? 210 : -30,
                    }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`absolute -top-[5%] ${
                        direction == "rtl" ? "right-[57%]" : "left-[57%]"
                    } `}
                >
                    <div className="bg-gradient-to-r from-primary-blue to-white/0 w-[1000px] h-[80px] ml-5 rounded-full"></div>
                    <div className="bg-gradient-to-r from-primary-blue to-white/0  w-[1000px] h-[180px] rounded-full"></div>
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360, x: 10 }}
                    transition={{ duration: 0.3, ease: "linear" }}
                    className={`hidden min-[900px]:block absolute top-[30%] ${
                        direction == "rtl" ? "right-[70%]" : "left-[60%]"
                    }`}
                >
                    <motion.div
                        animate={{ x: [0, 10, 0], y: [0, 5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute top-4 left-4 w-14 xl:w-20 h-14 xl:h-20 bg-white/20 rounded-lg"
                    ></motion.div>
                    <motion.div
                        animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="relative bg-white/90 w-14 xl:w-20 h-14 xl:h-20 p-2 rounded-lg"
                    >
                        <Image
                            src={jigsaw}
                            alt="jigsaw image"
                            className="absolute bottom-0 right-1 w-10 xl:w-14 h-10 xl:h-14 pointer-events-none select-none"
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360, x: 10 }}
                    transition={{ duration: 0.3, ease: "linear", delay: 0.3 }}
                    className={`hidden min-[900px]:block absolute top-[65%] ${
                        direction == "rtl" ? "right-[70%]" : "left-[60%]"
                    } z-20`}
                >
                    <motion.div
                        animate={{ x: [0, 10, 0], y: [0, 5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute top-4 left-4 w-14 xl:w-20 h-14 xl:h-20 bg-white/40 rounded-lg"
                    ></motion.div>
                    <motion.div
                        animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="relative flex justify-center items-center bg-white/90 w-14 xl:w-20 h-14 xl:h-20 p-2 rounded-lg"
                    >
                        <Image
                            src={saas}
                            alt="saas image"
                            className="w-10 xl:w-14 h-10 xl:h-14 pointer-events-none select-none"
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360, x: 10 }}
                    transition={{ duration: 0.3, ease: "linear", delay: 0.6 }}
                    className={`hidden min-[900px]:block absolute top-[70%] ${
                        direction == "rtl" ? "right-[52%]" : "left-[78%]"
                    } z-20`}
                >
                    <motion.div
                        animate={{ x: [0, 10, 0], y: [0, 5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute -top-5 -left-5 w-14 xl:w-20 h-14 xl:h-20 bg-white/30 rounded-lg"
                    ></motion.div>
                    <motion.div
                        animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="relative flex justify-center items-center bg-white/80 w-14 xl:w-20 h-14 xl:h-20 p-2 rounded-lg"
                    >
                        <Image
                            src={api}
                            alt="api image"
                            className="w-10 xl:w-14 h-10 xl:h-14 pointer-events-none select-none"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
