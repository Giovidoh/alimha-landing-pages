import React from "react";
import LeftIconTextCard from "../cards/LeftIconTextCard";
import Image from "next/image";
import teamwork from "@/public/assets/teamwork.png";
import businessMeeting from "@/public/assets/business-meeting.png";
import dotVector1 from "@/public/assets/dot-vector-1.png";
import linkedLines from "@/public/assets/linked-line-vectors.png";
import FlexibilityIcon from "@/public/assets/flexibility-icon.svg";
import InnovationIcon from "@/public/assets/innovation-icon.svg";
import ClientSatisfactionIcon from "@/public/assets/client-satisfaction-icon.svg";
import { useTranslations } from "next-intl";

const WhyUsSection = () => {
    const t = useTranslations("AlpayPage.WhyUsSection");
    return (
        <section
            id="why-us"
            className="relative flex flex-row-reverse items-end w-full py-10 min-[1000px]:py-24 px-5 sm:px-20 min-[1330px]:px-40 gap-5 overflow-hidden"
        >
            <div className="absolute bottom-[60%] left-0 rotate-180">
                <Image
                    src={linkedLines}
                    alt="linked lines vector"
                    width={1500}
                />
            </div>
            <div className="flex flex-col justify-center items-center min-[1000px]:items-start w-full min-[1000px]:w-1/2 min-h-[600px] gap-4 z-10">
                <span className="font-medium text-base sm:text-lg text-primary-blue">
                    {t("tag")}
                </span>
                <h1 className="font-bold text-2xl sm:text-3xl min-[1000px]:text-4xl text-center min-[1000px]:text-start">
                    {t("heading")}
                </h1>
                <p className="text-sm text-[#292D32] mt-2 mb-5">
                    {t("subheading")}
                </p>
                <div className="flex flex-col gap-8">
                    <LeftIconTextCard
                        icon={<FlexibilityIcon />}
                        title={t("card1.title")}
                        body={t("card1.body")}
                    />
                    <LeftIconTextCard
                        icon={<InnovationIcon />}
                        title={t("card2.title")}
                        body={t("card2.body")}
                    />
                    <LeftIconTextCard
                        icon={<ClientSatisfactionIcon />}
                        title={t("card3.title")}
                        body={t("card3.body")}
                    />
                </div>
            </div>
            <div className="relative hidden min-[1000px]:block w-1/2 h-[600px] z-10">
                <div className="absolute top-10 right-5">
                    <Image
                        src={teamwork}
                        alt="phone computer image"
                        height={492}
                    />
                </div>
                <div className="absolute bottom-0 right-[25%]">
                    <Image
                        src={businessMeeting}
                        alt="computer image"
                        height={263}
                    />
                </div>
                <div className="absolute top-40 right-[70%] -z-10">
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

export default WhyUsSection;
