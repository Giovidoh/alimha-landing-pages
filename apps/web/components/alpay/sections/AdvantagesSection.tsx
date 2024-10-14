import React from "react";
import LeftIconTextCard from "../cards/LeftIconTextCard";
import PercentageIcon from "@/public/assets/percentage-icon.svg";
import GraphicIcon from "@/public/assets/graphic-icon.svg";
import Support247 from "@/public/assets/support-24-7-icon.svg";
import Image from "next/image";
import unsplashPhoneComputerImage from "@/public/assets/unsplash-phone-computer.png";
import computerImage from "@/public/assets/computer.png";
import dotVector1 from "@/public/assets/dot-vector-1.png";
import { useTranslations } from "next-intl";

const AdvantagesSection = () => {
    const t = useTranslations("AlpayPage.AdvantagesSection");
    return (
        <section
            id="advantages"
            className="flex bg-gray-50 bg-alpay-advantages-bg bg-cover bg-no-repeat bg-center w-full h-fit py-10 min-[1000px]:py-24 px-5 sm:px-20 min-[1330px]:px-40 gap-3"
        >
            <div className="flex flex-col justify-center items-center min-[1000px]:items-start w-full min-[1000px]:w-1/2 min-h-[600px] gap-4">
                <span className="font-medium text-base sm:text-lg text-primary-blue">
                    {t("tag")}
                </span>
                <h2 className="font-bold text-2xl sm:text-3xl min-[1000px]:text-4xl text-center min-[1000px]:text-start">
                    {t("heading")}
                </h2>
                <p className="text-sm text-[#292D32] text-center min-[1000px]:text-start mt-2 mb-5">
                    {t("subheading")}
                </p>
                <div className="flex flex-col gap-8">
                    <LeftIconTextCard
                        icon={<PercentageIcon />}
                        title={t("card1.title")}
                        body={t("card1.body")}
                    />
                    <LeftIconTextCard
                        icon={<GraphicIcon />}
                        title={t("card2.title")}
                        body={t("card2.body")}
                    />
                    <LeftIconTextCard
                        icon={<Support247 />}
                        title={t("card3.title")}
                        body={t("card3.body")}
                    />
                </div>
            </div>
            <div className="relative hidden min-[1000px]:block w-1/2 h-[600px] z-10">
                <div className="absolute top-0">
                    <Image
                        src={unsplashPhoneComputerImage}
                        alt="phone computer image"
                        height={485}
                    />
                </div>
                <div className="absolute top-64 left-1/4">
                    <Image
                        src={computerImage}
                        alt="computer image"
                        height={287}
                    />
                </div>
                <div className="absolute left-[60%] top-24 -z-10">
                    <Image
                        src={dotVector1}
                        alt="dot vector image"
                        height={137}
                    />
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;
