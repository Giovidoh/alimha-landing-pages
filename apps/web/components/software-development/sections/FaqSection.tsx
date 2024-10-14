import React from "react";
import Accordion from "../Accordion";
import { useTranslations } from "next-intl";

const FaqSection = () => {
    const t = useTranslations("SoftwareDevelopmentPage.FaqSection");
    const accordionInfos = [
        {
            title: t("accordion.item1.question"),
            body: t("accordion.item1.answer"),
        },
        {
            title: t("accordion.item2.question"),
            body: t("accordion.item2.answer"),
        },
        {
            title: t("accordion.item3.question"),
            body: t("accordion.item3.answer"),
        },
        {
            title: t("accordion.item4.question"),
            body: t("accordion.item4.answer"),
        },
    ];

    return (
        <section
            id="faq"
            className="flex justify-center items-center px-[5%] min-[1200px]:px-[10%] pt-10 pb-16 min-[950px]:pt-16 min-[950px]:pb-28"
        >
            <div className="flex flex-col justify-between items-center w-full max-w-[1200px] gap-6 sm:gap-10">
                <div className="flex flex-col items-center gap-3">
                    <span className="bg-tertiary text-primary-blue text-sm min-[1200px]:text-base px-8 py-2 rounded-md">
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
                    <p className="text-[#1E1E1E] text-center text-sm lg:text-base min-[1200px]:text-lg tracking-wide w-full md:w-3/4">
                        {t("subheading")}
                    </p>
                </div>

                <div className="flex flex-col w-[95%] sm:w-[80%] gap-4">
                    {accordionInfos.map((accordion, index) => (
                        <Accordion
                            key={index}
                            title={accordion.title}
                            body={accordion.body}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
