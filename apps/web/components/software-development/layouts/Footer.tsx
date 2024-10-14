import React from "react";
import Image from "next/image";
import alimhaLogoWhite from "@/public/assets/alimha-logo-white.png";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Button1 from "../buttons/Button1";

const Footer = () => {
    const t = useTranslations("SoftwareDevelopmentPage.Footer");
    return (
        <footer className="relative flex justify-center items-center bg-[#012773] w-full px-[5%] min-[1200px]:px-[10%]">
            <div className="flex flex-col justify-evenly items-center w-full max-w-[1200px]">
                <div className="flex flex-wrap md:flex-nowrap justify-between items-start w-full pt-40 gap-20">
                    <div className="flex flex-col gap-10 text-pretty">
                        <Image src={alimhaLogoWhite} alt="alimha's logo" />
                        <p className="font-extralight text-white text-base min-[1200px]:text-lg tracking-wide">
                            {t("description")}
                        </p>
                        <div className="flex flex-nowrap items-center">
                            <input
                                type="email"
                                name="email"
                                id=""
                                placeholder={t("subscribe form.email")}
                                className="bg-white w-2/3 p-4 outline-none tracking-wide rounded-md"
                            />
                            <Button1
                                text={t("subscribe form.subscribe")}
                                className="border border-white w-1/3 py-[15px] -ml-3"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between w-full gap-10 text-white font-extralight">
                        <div className="flex flex-col gap-3">
                            <h3 className="font-semibold text-xl">
                                {t("col1.title")}
                            </h3>
                            <Link href="#">{t("col1.link1")}</Link>
                            <Link href="#">{t("col1.link2")}</Link>
                            <Link href="#">{t("col1.link3")}</Link>
                            <Link href="#">{t("col1.link4")}</Link>
                            <Link href="#">{t("col1.link5")}</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="font-semibold text-xl">
                                {t("col2.title")}
                            </h3>
                            <Link href="#">{t("col2.link1")}</Link>
                            <Link href="#">{t("col2.link2")}</Link>
                            <Link href="#">{t("col2.link3")}</Link>
                        </div>
                    </div>
                </div>
                <div className="w-full pt-40 pb-10">
                    <div className="flex flex-col sm:flex-row justify-between items-center w-full text-sm text-center font-light text-white border-t border-t-white pt-3 gap-3">
                        <span>{t("copyright")}</span>
                        <span>ALIMAH</span>
                    </div>
                </div>
            </div>
            <div className="absolute -top-10 left-[80%] bg-white bg-opacity-50 backdrop-blur p-14 rounded-full"></div>
        </footer>
    );
};

export default Footer;
