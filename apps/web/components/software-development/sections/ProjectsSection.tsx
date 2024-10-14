import { useTranslations } from "next-intl";
import React from "react";
import ProjectsCarousel from "../carousels/ProjectsCarousel";

const ProjectsSection = () => {
    const t = useTranslations("SoftwareDevelopmentPage.ProjectsSection");
    return (
        <section
            id="our-achievements"
            className="flex justify-center items-center bg-white w-full px-[5%] min-[1200px]:px-[10%] pt-20 pb-28"
        >
            <div className="flex flex-col max-w-[1200px] gap-14">
                <div className="flex flex-col items-center gap-4">
                    <span className="bg-tertiary text-primary-blue text-sm min-[1200px]:text-base px-3 py-2 rounded-md">
                        {t("tag")}
                    </span>
                    <h2 className="font-bold text-center text-2xl lg:text-3xl min-[1200px]:text-4xl leading-tight min-[1200px]:leading-snug tracking-wide">
                        {t.rich("heading", {
                            span: (chunks) => (
                                <span className="text-primary-blue">
                                    {chunks}
                                </span>
                            ),
                            br: () => <br />,
                        })}
                    </h2>
                    <p className="text-[#1E1E1E] text-center text-sm lg:text-base min-[1200px]:text-lg tracking-wide w-full md:w-1/2">
                        {t("subheading")}
                    </p>
                </div>
                <div className="flex justify-center w-full">
                    <ProjectsCarousel />
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
