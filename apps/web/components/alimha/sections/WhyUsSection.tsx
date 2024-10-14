"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const WhyUsSection = () => {
    const t = useTranslations("AlimhaPage.WhyUsSection");
    const pathname = usePathname();

    return (
        <section
            id="why-us"
            className="relative flex justify-between items-center bg-primary-blue bg-why-us-bg-image bg-cover bg-center bg-no-repeat w-full h-fit"
        >
            <div className="relative w-full h-full py-10 md:py-20 z-10">
                <div className="absolute top-0 left-0 bg-gradient-to-r from-[#0133a9] to-[#0032A4] opacity-95 w-full h-full"></div>
                <div className="relative flex flex-col items-center w-full gap-8 md:gap-14">
                    <div className="flex flex-col items-center w-full gap-5 px-[5%] lg:px-[10%]">
                        <span className="bg-tertiary text-secondary-blue text-sm min-[1280px]:text-base px-3 py-2 rounded-md">
                            {t("tag")}
                        </span>
                        <h2 className="font-bold text-white text-center text-2xl lg:text-3xl min-[1200px]:text-4xl leading-tight min-[1200px]:leading-snug">
                            {t("heading")}
                        </h2>
                    </div>
                    <video
                        width="100%"
                        height="100%"
                        autoPlay
                        loop
                        muted
                        preload="auto"
                        className="rounded-xl"
                        playsInline
                    >
                        <source src="/videos/alimha-global-reach-video.mp4" />
                        <source src="/videos/alimha-global-reach-video.webm" />
                        Votre navigateur ne supporte pas ce format de vidéo.
                    </video>
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
