import React from "react";
import Button from "../buttons/Button";
import Image from "next/image";
import womanWithComputerImage from "@/public/assets/woman-with-a-computer.png";
import { useTranslations } from "next-intl";
import Link from "next/link";

const HeroSection = () => {
    const t = useTranslations("AlpayPage.HeroSection");
    return (
        <section className="relative flex justify-between items-center bg-primary-blue w-full py-20 min-[1000px]:py-0 px-5 sm:px-20 min-[1330px]:px-40 before:content-[''] before:absolute before:top-0 before:left-0 before:bg-sendmo-download-app-bg before:bg-no-repeat before:bg-cover before:opacity-30 before:w-full before:h-full">
            <div className="relative flex justify-end items-center w-full h-full min-[1000px]:pt-14 z-10">
                <div className="flex flex-col items-center min-[1000px]:items-start w-full min-[1000px]:w-1/2 gap-3 min-[1000px]:gap-5 text-white">
                    <h1 className="font-semibold text-2xl sm:text-4xl min-[1000px]:text-5xl text-center min-[1000px]:text-start min-[1000px]:text-nowrap">
                        {t("main heading.first")}
                        <br /> {t("main heading.second")}
                    </h1>
                    <h2 className="font-semibold text-sm min-[1000px]:text-base text-center min-[1000px]:text-start min-[1000px]:text-nowrap">
                        {t("subheading")}
                    </h2>
                    <p className="font-light text-sm min-[1000px]:text-base text-center min-[1000px]:text-start mb-7">
                        {t("supporting text")}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center min-[1000px]:justify-start items-center w-full min-[1000px]:w-1/2 gap-5 min-[1000px]:gap-10">
                        {/* <Button
                            text={t("Contact us")}
                            className="bg-white hover:bg-secondary-blue text-primary-blue hover:text-white border border-white hover:border-primary-blue py-3 min-w-[185px] w-full"
                        />
                        <Button
                            text={t("Learn more")}
                            className="bg-primary-blue hover:bg-white capitalize text-white hover:text-primary-blue border border-white py-3 min-w-[185px] w-full"
                        /> */}
                        <Link
                            href="https://demo.alimha.com/"
                            target="_blank"
                            className="flex justify-center items-center bg-white hover:bg-secondary-blue text-primary-blue hover:text-white border border-white hover:border-primary-blue py-3 min-w-[185px] w-full hover:scale-105 rounded-md transition"
                        >
                            {t("Test the solution")}
                        </Link>
                    </div>
                </div>
                <div className="hidden min-[1000px]:block w-1/2">
                    <Image
                        src={womanWithComputerImage}
                        alt="image of a woman with a computer"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
