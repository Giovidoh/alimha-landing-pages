import React from "react";
import Image from "next/image";
import sendmoDownloadAppMobileImage from "@/public/assets/sendmo-download-app-mobile-image.png";
import Badge from "../badges/Badge";
import AppDownloadersButton1 from "../buttons/AppDownloadersButton1";
import GooglePlayIcon from "@/public/assets/google-play-icon.svg";
import AppStoreIcon from "@/public/assets/app-store-icon.svg";
import { useTranslations } from "next-intl";

const DownloadAppSection = () => {
    const t = useTranslations("SendmoPage.DownloadAppSection");
    return (
        <section
            id="download_section"
            className="flex justify-between items-center px-5 sm:px-20 min-[1120px]:px-40"
        >
            <div className="relative bg-secondary-blue w-full h-full px-5 sm:px-10 min-[1120px]:px-20 pt-14 pb-14 rounded-md before:content-[''] before:absolute before:top-0 before:left-0 before:bg-sendmo-download-app-bg before:bg-no-repeat before:bg-cover before:opacity-45 before:w-full before:h-full">
                <div className="flex flex-col min-[1200px]:flex-row items-center">
                    <div className="relative flex flex-col items-center sm:items-start w-full min-[1200px]:w-1/2 gap-5 md:gap-8 text-white">
                        <Badge text={t("tag")} />
                        <h2 className="text-2xl md:text-4xl text-center sm:text-start leading-snug font-bold tracking-wide">
                            {t("heading.first")} <br /> {t("heading.second")}
                        </h2>
                        <p className="text-center sm:text-start font-light text-pretty">
                            <span className="font-bold text-base">
                                {t("subheading")}
                            </span>
                            <br /> {t("description")}
                        </p>
                        <div className="relative flex flex-col min-[650px]:flex-row w-full gap-3 min-[650px]:gap-6">
                            <AppDownloadersButton1
                                text="google play"
                                icon={
                                    <GooglePlayIcon className="fill-white group-hover:fill-black transition" />
                                }
                                className="border-white hover:border-black hover:text-black"
                            />
                            <AppDownloadersButton1
                                text="app store"
                                icon={
                                    <AppStoreIcon className="fill-white group-hover:fill-black transition" />
                                }
                                className="border-white hover:border-black hover:text-black"
                            />
                        </div>
                    </div>
                    <div className="relative hidden min-[1200px]:block">
                        <Image
                            src={sendmoDownloadAppMobileImage}
                            alt="sendmo mobile app download image"
                            height={540}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadAppSection;
