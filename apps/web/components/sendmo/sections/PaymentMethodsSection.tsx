import React from "react";
import Badge from "../badges/Badge";
import ImageTextIconCard from "../cards/ImageTextIconCard";
import senegalFlag from "@/public/assets/senegal.png";
import togoFlag from "@/public/assets/togo.png";
import guineaFlag from "@/public/assets/guinee.png";
import djiboutiFlag from "@/public/assets/djibouti.png";
import centraficanRepublicFlag from "@/public/assets/republique-centrafricaine.png";
import DropdownIcon from "@/public/assets/dropdown-icon.svg";
import { useTranslations } from "next-intl";

const countriesImages = [
    {
        src: senegalFlag,
        alt: "senegal flag image",
        name: "Sénégal",
    },
    {
        src: togoFlag,
        alt: "togo flag image",
        name: "Togo",
    },
    {
        src: guineaFlag,
        alt: "guinea flag image",
        name: "Guinée",
    },
    {
        src: djiboutiFlag,
        alt: "djibouti flag image",
        name: "Djibouti",
    },
    {
        src: centraficanRepublicFlag,
        alt: "centrafican republic flag image",
        name: "RCA",
    },
];

const PaymentMethodsSection = () => {
    const t = useTranslations("SendmoPage.PaymentMethodsSection");
    const countriesImages = [
        {
            src: senegalFlag,
            alt: "senegal flag image",
            name: t("Senegal"),
        },
        {
            src: togoFlag,
            alt: "togo flag image",
            name: t("Togo"),
        },
        {
            src: guineaFlag,
            alt: "guinea flag image",
            name: t("Guinea"),
        },
        {
            src: djiboutiFlag,
            alt: "djibouti flag image",
            name: t("Djibouti"),
        },
        {
            src: centraficanRepublicFlag,
            alt: "centrafican republic flag image",
            name: t("central african republic"),
        },
    ];
    return (
        <section className="flex flex-col justify-between items-center px-5 sm:px-20 min-[1120px]:px-40 pt-20 pb-28 gap-5">
            <Badge text={t("tag")} />
            <div className="flex flex-col items-center w-full min-[950px]:w-1/2 gap-4 text-center">
                <h2 className="text-2xl md:text-4xl leading-snug font-bold tracking-wide">
                    {t("heading")}
                </h2>
                <p className="flex font-light text-pretty mb-4">
                    {t("subheading")}
                </p>
            </div>
            <div className="flex flex-wrap justify-center w-full gap-7">
                {countriesImages.map((image, index) => (
                    <ImageTextIconCard
                        key={index}
                        image={image}
                        title={image.name}
                        icon={<DropdownIcon />}
                        className="w-full sm:w-[160px]"
                    />
                ))}
            </div>
        </section>
    );
};

export default PaymentMethodsSection;
