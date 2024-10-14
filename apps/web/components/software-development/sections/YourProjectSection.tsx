import { useTranslations } from "next-intl";
import React from "react";
import Button1 from "../buttons/Button1";
import Image from "next/image";
import meetingImg from "@/public/assets/meeting-img.png";

const YourProjectSection = () => {
    const t = useTranslations("SoftwareDevelopmentPage.YourProjectSection");
    return (
        <section className="flex justify-center items-center bg-white w-full px-[5%] min-[1200px]:px-[10%] pt-20 pb-28">
            <div className="relative bg-primary-blue w-full max-w-[1200px] h-full px-5 sm:px-10 min-[1120px]:px-20 py-10 rounded-3xl before:content-[''] before:absolute before:top-0 before:left-0 before:bg-sendmo-download-app-bg before:bg-no-repeat before:bg-cover before:bg-center before:opacity-20 before:w-full before:h-full">
                <div className="flex justify-between items-center text-white">
                    <div className="relative flex flex-col items-center min-[950px]:items-start w-full min-[950px]:w-1/2 gap-4">
                        <h2 className="font-bold text-center min-[950px]:text-start text-2xl lg:text-3xl min-[1200px]:text-4xl leading-tight min-[1200px]:leading-snug tracking-wide min-[950px]:whitespace-nowrap">
                            {t.rich("heading", {
                                span: (chunks) => (
                                    <span className="text-primary-blue">
                                        {chunks}
                                    </span>
                                ),
                                br: () => <br />,
                            })}
                        </h2>
                        <p className="text-center min-[950px]:text-start text-sm lg:text-base min-[1200px]:text-lg tracking-wide w-full">
                            {t("subheading")}
                        </p>
                        <div className="relative flex justify-center w-full min-[950px]:w-fit">
                            <Button1
                                text={t("cta text")}
                                className="bg-none border border-white"
                            />
                        </div>
                    </div>
                    <div className="relative hidden min-[950px]:block">
                        <Image
                            src={meetingImg}
                            alt="meeting image"
                            height={350}
                        />
                    </div>
                </div>
                <div className="absolute top-[80%] -left-[3%] bg-white bg-opacity-30 backdrop-blur-md p-[5%] rounded-full"></div>
            </div>
        </section>
    );
};

export default YourProjectSection;
