import { useTranslations } from "next-intl";
import React, { useEffect } from "react";
import Button1 from "../buttons/Button1";
import TeamCarousel from "../carousels/TeamCarousel";

const MeetExpertsSection = () => {
    const t = useTranslations("SoftwareDevelopmentPage.MeetExpertsSection");

    return (
        <section
            id="team"
            className="flex justify-center items-center px-[5%] min-[1200px]:px-[10%] pt-10 pb-16 min-[950px]:pt-16 min-[950px]:pb-28"
        >
            <div className="flex flex-col min-[950px]:flex-row justify-between items-center w-full max-w-[1200px] gap-16">
                <div className="flex flex-col items-center min-[950px]:items-start bg-white bg-opacity-80 min-[950px]:bg-transparent w-full min-[950px]:w-1/2 gap-3 min-[1280px]:gap-5 py-10 px-2 min-[950px]:px-0 rounded-2xl shadow-2xl shadow-white min-[950px]:shadow-none z-10">
                    <span className="bg-tertiary text-secondary-blue text-sm min-[1200px]:text-base px-3 py-2 rounded-md">
                        {t("tag")}
                    </span>
                    <h1 className="font-bold text-2xl lg:text-3xl min-[1200px]:text-4xl text-center min-[950px]:text-start leading-tight min-[1200px]:leading-snug min-[950px]:whitespace-nowrap">
                        {t.rich("heading", {
                            span: (chunks) => (
                                <span className="text-primary-blue">
                                    {chunks}
                                </span>
                            ),
                            br: () => <br />,
                        })}
                    </h1>
                    <p className="text-[#1E1E1E] text-center min-[950px]:text-justify text-sm lg:text-base min-[1200px]:text-lg tracking-wide">
                        {t("subheading")}
                    </p>
                    <div>
                        <Button1 text={t("cta text")} />
                    </div>
                </div>
                <div className="flex justify-center min-[950px]:justify-end w-full">
                    <TeamCarousel />
                </div>
            </div>
        </section>
    );
};

export default MeetExpertsSection;
