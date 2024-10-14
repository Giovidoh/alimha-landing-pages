import Image from "next/image";
import React from "react";
import circle_vector6 from "@/public/assets/circle-vector-6.png";
import plus_vector4 from "@/public/assets/plus-vector-4.png";
import AlpayLogoWhite from "@/public/assets/alpay-logo-white.svg";
import facebook_icon from "@/public/assets/facebook-icon.png";
import linkedin_icon from "@/public/assets/linkedin-icon.png";
import instagram_icon from "@/public/assets/instagram-icon.png";
import x_icon from "@/public/assets/x-icon.png";
import youtube_icon from "@/public/assets/youtube-icon.png";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
    const t = useTranslations("AlpayPage.Footer");
    return (
        <footer className="relative flex flex-col justify-evenly items-center bg-primary-blue w-full px-[5%] xl:px-[10%] overflow-hidden">
            <Image
                src={circle_vector6}
                alt="circle vector"
                height={35}
                className="absolute bottom-56 left-5"
            />
            <Image
                src={plus_vector4}
                alt="plus vector"
                height={20}
                className="absolute bottom-32 right-10"
            />

            <div className="flex flex-wrap md:flex-nowrap justify-between items-start w-full pt-40 gap-20">
                <div className="max-w-[380px] mr-5 mb-10 text-pretty">
                    <AlpayLogoWhite />
                    <p className="font-extralight text-white text-justify leading-[19.13px] mt-5">
                        {t("description")}
                    </p>
                    <div className="flex justify-between items-center w-2/3 pt-7">
                        <Image
                            src={facebook_icon}
                            alt="facebook icon"
                            height={16}
                        />
                        <Image
                            src={linkedin_icon}
                            alt="linkedin icon"
                            height={16}
                        />
                        <Image
                            src={instagram_icon}
                            alt="instagram icon"
                            height={16}
                        />
                        <Image src={x_icon} alt="x icon" height={16} />
                        <Image
                            src={youtube_icon}
                            alt="youtube icon"
                            height={16}
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
                    <div className="flex flex-col gap-3">
                        <h3 className="font-semibold text-xl">
                            {t("col3.title")}
                        </h3>
                        <Link href="#">{t("col3.email")}</Link>
                        <Link href="#">{t("col3.number")}</Link>
                        <Link href="#">{t("col3.address")}</Link>
                    </div>
                </div>
            </div>
            <div className="w-full pt-40 pb-10">
                <div className="flex flex-col sm:flex-row justify-between items-center w-full text-sm text-center font-light text-white border-t border-t-white pt-3 gap-3">
                    <span>{t("copyright")}</span>
                    <span>ALIMAH</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
