import React from "react";
import IconTextCard from "../cards/IconTextCard";
import PersonInscriptionIcon from "@/public/assets/person-inscription-icon.svg";
import GearIcon from "@/public/assets/gear-icon.svg";
import TransactionIcon from "@/public/assets/transaction-icon.svg";
import Image from "next/image";
import dotVector2 from "@/public/assets/dot-vector-2.png";
import bluredVectors from "@/public/assets/blured-vectors.png";
import { useTranslations } from "next-intl";

const HowItWorksSection = () => {
    const t = useTranslations("AlpayPage.HowItWorksSection");
    return (
        <section
            id="how-it-works"
            className="relative flex flex-col items-center w-full bg-primary-blue bg-alpay-how-it-works-bg bg-cover bg-no-repeat bg-center pt-28 pb-32 px-5 sm:px-20 min-[1330px]:px-40 gap-3"
        >
            <div className="absolute top-10 left-[10%]">
                <Image src={dotVector2} alt="dot vector image" height={137} />
            </div>
            <div className="absolute top-16 right-[10%]">
                <Image
                    src={bluredVectors}
                    alt="dot vector image"
                    height={100}
                />
            </div>
            <span className="font-medium text-base sm:text-lg text-white z-0">
                {t("tag")}
            </span>
            <h1 className="font-bold text-2xl sm:text-3xl min-[1000px]:text-4xl text-center text-white mb-16">
                {t("heading")}
            </h1>
            <div className="grid place-items-center grid-cols-1 min-[890px]:grid-cols-2 min-[1170px]:grid-cols-3 w-full gap-20 min-[1170px]:gap-5">
                <div className="w-[320px] h-full">
                    <IconTextCard
                        icon={<PersonInscriptionIcon />}
                        title={t("card1.title")}
                        body={t("card1.body")}
                    />
                </div>
                <div className="w-[320px] h-full">
                    <IconTextCard
                        icon={<GearIcon />}
                        title={t("card2.title")}
                        body={t("card2.body")}
                    />
                </div>
                <div className="w-[320px] h-full">
                    <IconTextCard
                        icon={<TransactionIcon />}
                        title={t("card3.title")}
                        body={t("card3.body")}
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
