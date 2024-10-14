import React from "react";
import IconTextCard from "../cards/IconTextCard";
import { useTranslations } from "next-intl";
import Image from "next/image";
import dashboardImage from "@/public/assets/dashboard-img.png";
import ApplicationIcon from "@/public/assets/application-icon.svg";
import AuditIcon from "@/public/assets/audit-icon.svg";
import MicrosystemIcon from "@/public/assets/microsystem-icon.svg";
import DeploymentIcon from "@/public/assets/deployment-icon.svg";

const ServicesSection = () => {
    const t = useTranslations("SoftwareDevelopmentPage.ServicesSection");
    return (
        <section
            id="our-services"
            className="relative flex justify-center items-center bg-primary-blue px-[5%] min-[1200px]:px-[10%] py-16"
        >
            <div className="relative flex flex-col items-center max-w-[1200px] gap-14 z-10">
                <div className="flex flex-col items-center gap-5">
                    <span className="bg-white text-primary-blue text-sm min-[1200px]:text-base px-3 py-2 rounded-md">
                        {t("tag")}
                    </span>
                    <h1 className="font-bold text-white text-center text-2xl lg:text-3xl min-[1200px]:text-4xl leading-tight min-[1200px]:leading-snug min-[950px]:whitespace-nowrap">
                        {t.rich("heading", {
                            span: (chunks) => (
                                <span className="text-dark-blue">{chunks}</span>
                            ),
                            br: () => <br />,
                        })}
                    </h1>
                    <p className="text-white text-center text-sm lg:text-base min-[1200px]:text-lg tracking-wide">
                        {t.rich("subheading", {
                            br: () => <br />,
                        })}
                    </p>
                </div>

                <div className="grid grid-cols-1 min-[950px]:grid-cols-3 items-center w-full h-full gap-10 min-[950px]:gap-y-60 min-[1200px]:gap-y-20">
                    <div className="flex justify-center items-center min-w-[330px] h-fit min-[950px]:min-h-[230px] place-self-center min-[950px]:place-self-start">
                        <IconTextCard
                            icon={<ApplicationIcon />}
                            title={t("card1.title")}
                            body={t("card1.body")}
                            className="items-center min-[950px]:items-start text-center min-[950px]:text-left"
                        />
                    </div>
                    <div className="hidden min-[950px]:block row-span-2 place-self-center">
                        <Image src={dashboardImage} alt="dashboard image" />
                    </div>
                    <div className="flex justify-center items-center min-w-[330px] h-fit min-[950px]:min-h-[230px] place-self-center min-[950px]:place-self-end">
                        <IconTextCard
                            icon={<AuditIcon />}
                            title={t("card2.title")}
                            body={t("card2.body")}
                            className="items-center min-[950px]:items-end text-center min-[950px]:text-right"
                        />
                    </div>
                    <div className="flex justify-center items-center min-w-[330px] h-fit min-[950px]:min-h-[230px] place-self-center min-[950px]:place-self-start">
                        <IconTextCard
                            icon={<MicrosystemIcon />}
                            title={t("card3.title")}
                            body={t("card3.body")}
                            className="items-center min-[950px]:items-start text-center min-[950px]:text-left"
                        />
                    </div>
                    <div className="flex justify-center items-center min-w-[330px] h-fit min-[950px]:min-h-[230px] place-self-center min[800px]:place-self-end">
                        <IconTextCard
                            icon={<DeploymentIcon />}
                            title={t("card4.title")}
                            body={t("card4.body")}
                            className="items-center min-[950px]:items-end text-center min-[950px]:text-right"
                        />
                    </div>
                </div>
            </div>

            {/* Decoration */}
            <div className={`absolute top-0 left-0 w-full h-full`}>
                <div className="absolute flex flex-col justify-center items-center w-full h-full -rotate-[40deg]">
                    <div className="bg-gradient-to-r from-primary-blue via-white/20 to-primary-blue w-[900px] h-[250px] rounded-full"></div>
                    <div className="bg-gradient-to-r from-primary-blue via-white/20 to-primary-blue w-[1000px] h-[100px] rounded-full"></div>
                </div>
            </div>
            <div className="absolute top-[95%] left-[83%] bg-white bg-opacity-50 backdrop-blur p-[5%] rounded-full"></div>
        </section>
    );
};

export default ServicesSection;
