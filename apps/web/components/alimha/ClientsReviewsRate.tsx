import React from "react";
import Star from "./Star";
import { useTranslations } from "next-intl";

const ClientsReviewsRate = () => {
    const t = useTranslations("AlimhaPage.HeroSection");
    return (
        <div className="flex flex-col items-center justify-between w-full h-14 md:w-fit">
            <div className="flex justify-evenly w-full">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
            <div>
                <span className="font-bold">(+100) </span>
                <span className="text-gray-1 font-medium">
                    {t("Customer reviews")}
                </span>
            </div>
        </div>
    );
};

export default ClientsReviewsRate;
