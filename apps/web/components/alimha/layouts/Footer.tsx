/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import logo from "@/public/assets/alimha-logo.png";
import FacebookIcon from "@/public/assets/alimha-footer-facebook-icon.svg";
import LinkedInIcon from "@/public/assets/alimha-footer-linkedin-icon.svg";
import InstagramIcon from "@/public/assets/alimha-footer-instagram-icon.svg";
import XIcon from "@/public/assets/alimha-footer-x-icon.svg";
import YoutubeIcon from "@/public/assets/alimha-footer-youtube-icon.svg";
import alimhaGraphicLogo from "@/public/assets/alimha-logo-graphic-min-blue-gradient.png";
import FooterLink from "../FooterLink";
import { useLocale, useTranslations } from "next-intl";
import ButtonStyle2 from "../buttons/ButtonStyle2";
import { getLangDir } from "rtl-detect";

const Footer = () => {
    const localActive = useLocale();
    const direction = getLangDir(localActive);
    const t = useTranslations("AlimhaPage.Footer");

    return (
        <footer className="relative flex flex-col justify-evenly items-center bg-[#F7F7F7] px-[5%] xl:px-[10%] overflow-hidden">
            <div className="flex flex-wrap md:flex-nowrap items-start w-full gap-20 pt-20 min-[900px]:pt-40 z-10">
                <div className="flex flex-col max-w-[280px] gap-16">
                    <Image src={logo} alt="alimha's logo" />
                    {/* <div className="flex justify-between">
                        <FacebookIcon />
                        <LinkedInIcon />
                        <InstagramIcon />
                        <XIcon />
                        <YoutubeIcon />
                    </div> */}
                </div>
                <div className="flex flex-wrap justify-between w-full gap-5">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-primary-blue text-base lg:text-lg min-[1200px]:text-xl">
                            {t("col1.title")}
                        </h3>
                        <div className="flex flex-col gap-2">
                            <FooterLink
                                href={`/${localActive}/alimha#about-us`}
                                text={t("col1.link1")}
                            />
                            <FooterLink
                                href={`/${localActive}/alimha#why-us`}
                                text={t("col1.link2")}
                            />
                            <FooterLink
                                href={`/${localActive}/alimha#about-us`}
                                text={t("col1.link3")}
                            />
                            <FooterLink
                                href={`/${localActive}/alimha#about-us`}
                                text={t("col1.link4")}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-primary-blue text-base lg:text-lg min-[1200px]:text-xl">
                            {t("col2.title")}
                        </h3>
                        <div className="flex flex-col gap-2">
                            <FooterLink href="#" text={t("col2.link1")} />
                            <FooterLink href="#" text={t("col2.link2")} />
                            <FooterLink href="#" text={t("col2.link3")} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between min-w-[300px] max-w-[400px] gap-10">
                        <p className="text-justify text-sm lg:text-base min-[1200px]:text-lg text-pretty tracking-wide mt-5">
                            {t("description")}
                        </p>
                        <div className="flex flex-nowrap items-center">
                            <input
                                type="email"
                                name="email"
                                id=""
                                placeholder={t("subscribe form.email")}
                                className="bg-white w-2/3 p-3 outline-none tracking-wide"
                            />
                            <ButtonStyle2
                                text={t("subscribe form.subscribe")}
                                className="w-1/3"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full pt-28 pb-10">
                <div className="flex flex-col sm:flex-row justify-between items-center w-full text-sm text-center font-light text-dark-blue border-t border-t-dark-blue pt-3 gap-3">
                    <span>{t("Copyright")}</span>
                    <span>ALIMHA</span>
                </div>
            </div>
            <div
                className={`absolute -bottom-5 ${
                    direction == "rtl" ? "left-0" : "right-0"
                }`}
            >
                <Image src={alimhaGraphicLogo} alt="alimha graphic logo" />
            </div>
        </footer>
    );
};

export default Footer;
