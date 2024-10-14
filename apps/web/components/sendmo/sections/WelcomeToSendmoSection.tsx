import React from "react";
import Image from "next/image";
import blackWoman from "@/public/assets/black-woman.png";
import avatar1 from "@/public/assets/avatar-1.png";
import avatar2 from "@/public/assets/avatar-2.png";
import avatar3 from "@/public/assets/avatar-3.png";
import avatar4 from "@/public/assets/avatar-4.png";
import avatar5 from "@/public/assets/avatar-5.png";
import Badge from "../badges/Badge";
import Button from "../buttons/Button";
import ImagesCollections from "../ImagesCollection";
import { Inter } from "next/font/google";
import { useLocale, useTranslations } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

const avatarsImages = [
    {
        src: avatar1,
        alt: "avatar 1 image",
    },
    {
        src: avatar2,
        alt: "avatar 2 image",
    },
    {
        src: avatar3,
        alt: "avatar 3 image",
    },
    {
        src: avatar4,
        alt: "avatar 4 image",
    },
];

const WelcomeToSendmoSection = () => {
    const localActive = useLocale();
    const t = useTranslations("SendmoPage.WelcomeToSendmoSection");

    return (
        <section className="flex flex-col-reverse min-[930px]:flex-row justify-between items-center bg-gray-50 px-5 sm:px-20 min-[1120px]:px-40 min-[930px]:pt-10 pb-20">
            <div className="relative">
                <div className="max-sm:hidden min-[930px]:hidden">
                    <Image
                        src={blackWoman}
                        alt="black woman image"
                        height={400}
                    />
                </div>
                <div className="hidden min-[930px]:block">
                    <Image src={blackWoman} alt="black woman image" />
                </div>
                <div
                    className={`hidden sm:block absolute top-1/3 ${
                        localActive == "ar" ? "-right-[15%]" : "-left-[15%]"
                    }`}
                >
                    <ImagesCollections
                        images={avatarsImages}
                        imageHeight={40}
                    />
                </div>
                <div
                    className={`hidden sm:block absolute bottom-1 ${
                        localActive == "ar" ? "left-10" : "right-10"
                    }`}
                >
                    <div className="flex items-center w-fit px-3 py-2 gap-2 bg-white rounded-lg shadow-lg">
                        <Image src={avatar5} alt="avatar 5 image" height={40} />
                        <p
                            className={`font-extrabold text-2xl ${inter.className}`}
                        >
                            <span className="text-green-1">+</span>150 000
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center sm:items-start gap-5 mt-14 min-[930px]:mt-28">
                <Badge text={t("tag")} />
                <h2 className="text-2xl md:text-4xl text-center sm:text-start leading-snug font-bold tracking-wide">
                    {t("heading")}
                </h2>
                <p className="text-center sm:text-start font-light mb-4">
                    {t("description")}
                </p>
                <Button text={t("ctaText")} className="px-7 py-4" />
            </div>
        </section>
    );
};

export default WelcomeToSendmoSection;
