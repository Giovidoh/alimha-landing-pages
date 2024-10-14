import { useTranslations } from "next-intl";
import React from "react";
import IconTextCard2 from "../cards/IconTextCard2";
import ConnectivityIcon from "@/public/assets/connectivity-icon.svg";
import IndividualApproachIcon from "@/public/assets/individual-approach-icon.svg";
import ScreenCastIcon from "@/public/assets/screen-cast-icon.svg";
import GearIcon2 from "@/public/assets/gear-icon2.svg";
import Button1 from "../buttons/Button1";
import Image from "next/image";
import actor1 from "@/public/assets/actor1.png";
import taskProgressImg from "@/public/assets/task-progress-img.png";

const AboutUsSection = () => {
    const t = useTranslations("SoftwareDevelopmentPage.AboutUsSection");
    return (
        <section
            id="about-us"
            className="flex justify-center items-center bg-white w-full px-[5%] min-[1200px]:px-[10%] pt-20 pb-28"
        >
            <div className="flex flex-col min-[950px]:flex-row justify-between items-center max-w-[1200px] gap-10">
                <div className="flex flex-col items-center min-[950px]:items-start w-full min-[950px]:w-1/2 gap-4">
                    <span className="bg-tertiary text-primary-blue text-sm min-[1200px]:text-base px-3 py-2 rounded-md">
                        {t("tag")}
                    </span>
                    <h2 className="font-bold text-center min-[950px]:text-start text-2xl lg:text-3xl min-[1200px]:text-4xl leading-tight min-[1200px]:leading-snug tracking-wide">
                        {t.rich("heading", {
                            span: (chunks) => (
                                <span className="text-primary-blue">
                                    {chunks}
                                </span>
                            ),
                            br: () => <br />,
                        })}
                    </h2>
                    <div className="flex flex-col gap-4 mb-3">
                        <div>
                            <IconTextCard2
                                icon={<ConnectivityIcon />}
                                title={t("card1.title")}
                                body={t("card1.body")}
                            />
                        </div>
                        <div>
                            <IconTextCard2
                                icon={<IndividualApproachIcon />}
                                title={t("card2.title")}
                                body={t("card2.body")}
                            />
                        </div>
                        <div>
                            <IconTextCard2
                                icon={<ScreenCastIcon />}
                                title={t("card3.title")}
                                body={t("card3.body")}
                            />
                        </div>
                        <div>
                            <IconTextCard2
                                icon={<GearIcon2 />}
                                title={t("card4.title")}
                                body={t("card4.body")}
                            />
                        </div>
                    </div>
                    <Button1 text={t("button text")} className="px-7 py-4" />
                </div>
                <div className="relative hidden min-[950px]:flex justify-end w-1/2 h-full">
                    <div className="absolute self-end bg-primary-blue w-[80%] h-[95%] rounded-3xl"></div>
                    <div className="z-10">
                        <Image src={actor1} alt="actor image" height={600} />
                    </div>
                    <div className="absolute flex justify-center items-center w-full h-full">
                        <div className="absolute z-20 top-[80%] -left-[1%]">
                            <Image
                                src={taskProgressImg}
                                alt="task progress image"
                                height={160}
                            />
                        </div>
                        <div className="absolute -top-[1%] left-[88%] bg-white/60 backdrop-blur border border-white p-12 rounded-3xl overflow-hidden z-20"></div>
                        <div
                            className={`absolute top-[10%] -left-[5%] w-full h-full`}
                        >
                            <div className="absolute flex flex-col justify-center items-center w-full h-full -rotate-[40deg]">
                                <div className="bg-gradient-to-r from-primary-blue/5 via-white/20 to-primary-blue/5 w-[100%] h-[200px] rounded-full"></div>
                                <div className="absolute top-[58%] -left-[20%] bg-gradient-to-r from-primary-blue/5 via-white/20 to-primary-blue/5 w-[100%] h-[100px] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
