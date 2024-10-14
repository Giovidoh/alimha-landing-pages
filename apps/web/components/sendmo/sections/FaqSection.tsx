import React from "react";
import Badge from "../badges/Badge";
import Accordion from "../Accordion";
import { useTranslations } from "next-intl";

const FaqSection = () => {
    const t = useTranslations("SendmoPage.FaqSection");
    const accordionInfos = [
        {
            title: t("Accordion.question1.title"),
            body: t("Accordion.question1.body"),
        },
        {
            title: t("Accordion.question2.title"),
            body: t("Accordion.question2.body"),
        },
        {
            title: t("Accordion.question3.title"),
            body: t("Accordion.question3.body"),
        },
        {
            title: t("Accordion.question4.title"),
            body: t("Accordion.question4.body"),
        },
        {
            title: t("Accordion.question5.title"),
            body: t("Accordion.question5.body"),
        },
    ];

    return (
        <section
            id="faq_section"
            className="flex flex-col justify-between items-center gap-6 sm:gap-10 px-5 sm:px-20 min-[1120px]:px-40 py-20"
        >
            <Badge text={t("tag")} px="px-14" />
            <div className="flex flex-col items-center gap-3">
                <h2 className="text-2xl md:text-4xl text-center leading-snug font-bold tracking-wide">
                    {t("heading")}
                </h2>
                <p className="text-gray-1 text-center text-pretty font-light">
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
        </section>
    );
};

export default FaqSection;
