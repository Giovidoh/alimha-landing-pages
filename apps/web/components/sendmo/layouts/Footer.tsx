import React from "react";
import Input from "../Input";
import Button from "../buttons/Button";
import SendmoLogo from "@/public/assets/sendmo-logo.svg";
import Link from "next/link";
import LeftIconButton from "../buttons/LeftIconButton";
import AppStoreIcon from "@/public/assets/app-store-icon.svg";
import GooglePlayIcon from "@/public/assets/google-play-icon.svg";
import FacebookIcon from "@/public/assets/facebook-icon.svg";
import LinkedinIcon from "@/public/assets/linkedin-icon.svg";
import InstagramIcon from "@/public/assets/instagram-icon.svg";
import XIcon from "@/public/assets/x-icon.svg";
import YoutubeIcon from "@/public/assets/youtube-icon.svg";
import { useTranslations } from "next-intl";

const Footer = () => {
    const t = useTranslations("SendmoPage.Footer");
    return (
        <footer className="flex flex-col justify-between items-center w-full bg-gray-50 px-5 sm:px-20 min-[1120px]:px-40 pt-14 pb-5">
            <div className="flex flex-wrap justify-center min-[1380px]:justify-between items-center w-full gap-10">
                <h2 className="text-2xl md:text-4xl text-center min-[1380px]:text-start">
                    {t("heading.first")} <br /> {t("heading.second")}
                </h2>
                <div className="flex">
                    <Input
                        placeholder={t("E-mail")}
                        className="w-full text-xl font-light rounded-tl-md rounded-bl-md"
                    />
                    <div className="relative h-[44px] w-[200px]">
                        <Button
                            text={t("Subscribe")}
                            className="absolute top-0 -left-2 w-full h-full font-medium text-xl"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center min-[854px]:justify-between w-full gap-10 mt-24">
                <SendmoLogo className="h-12" />
                <div className="flex flex-wrap justify-center min-[854px]:justify-between w-[60%] gap-10">
                    <div className="flex flex-col items-center min-[854px]:items-start text-center gap-3">
                        <h2 className="text-[#5B5B5B] text-xl font-semibold">
                            {t("col1.title")}
                        </h2>
                        <Link href={"#"} className="text-[#313131] text-sm">
                            {t("col1.link1")}
                        </Link>
                        <Link href={"#"} className="text-[#313131] text-sm">
                            {t("col1.link2")}
                        </Link>
                        <Link href={"#"} className="text-[#313131] text-sm">
                            {t("col1.link3")}
                        </Link>
                        <Link href={"#"} className="text-[#313131] text-sm">
                            {t("col1.link4")}
                        </Link>
                        <Link href={"#"} className="text-[#313131] text-sm">
                            {t("col1.link5")}
                        </Link>
                    </div>
                    <div className="flex flex-col items-center min-[854px]:items-start text-center gap-3">
                        <h2 className="text-[#5B5B5B] text-xl font-semibold">
                            {t("col2.title")}
                        </h2>
                        <Link href={"#"} className="text-[#313131] text-sm">
                            {t("col2.link1")}
                        </Link>
                        <Link href={"#"} className="text-[#313131] text-sm">
                            {t("col2.link2")}
                        </Link>
                        <Link href={"#"} className="text-[#313131] text-sm">
                            {t("col2.link3")}
                        </Link>
                    </div>
                    <div className="flex flex-col items-center min-[854px]:items-start text-center gap-3">
                        <h2 className="text-[#5B5B5B] text-xl font-semibold">
                            {t("col3.title")}
                        </h2>
                        <LeftIconButton
                            icon={<AppStoreIcon className="fill-white" />}
                            text="App Store"
                            className="justify-center w-full h-14 px-3 gap-2"
                        />
                        <LeftIconButton
                            icon={<GooglePlayIcon className="fill-white" />}
                            text="Google Play"
                            className="justify-center w-full h-14 px-3 gap-2"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full mt-40">
                <div className="flex flex-wrap justify-center min-[430px]:justify-between items-center w-full gap-4 text-[12px] font-light text-[#A9A9A9] border-t border-t-[#B1B1B1] pt-3">
                    <span className="text-center">{t("Copyright")}</span>
                    <div className="flex gap-4">
                        <FacebookIcon className="fill-[#A0A0A0] h-4" />
                        <LinkedinIcon className="fill-[#A0A0A0] h-4" />
                        <InstagramIcon className="fill-[#A0A0A0] h-4" />
                        <XIcon className="fill-[#A0A0A0] h-4" />
                        <YoutubeIcon className="fill-[#A0A0A0] stroke-[#A0A0A0] h-4" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
