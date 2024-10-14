import React from "react";
import Badge from "../badges/Badge";
import IconTextIllustrationCard from "../cards/IconTextIllustrationCard";
import InstantDepositIcon from "@/public/assets/instant-deposit-icon.svg";
import instantDepositIllustration from "@/public/assets/instant-deposit-illustration.png";
import SubRegionalTransfersIcon from "@/public/assets/sub-regional-transfers-icon.svg";
import subRegionalTransfersIllustration from "@/public/assets/sub-regional-transfers-illustration.png";
import RealTimeTransactionTrackingIcon from "@/public/assets/real-time-transaction-tracking-icon.svg";
import realTimeTransactionTrackingIllustration from "@/public/assets/real-time-transaction-tracking-illustration.png";
import ClientSupportIcon from "@/public/assets/client-support-24-7-icon.svg";
import clientSupportIllustration from "@/public/assets/client-support-24-7-illustration.png";
import { useTranslations } from "next-intl";

const FeaturesSection = () => {
    const t = useTranslations("SendmoPage.FeaturesSection");
    return (
        <section
            id="features_section"
            className="flex flex-col items-center px-5 sm:px-20 min-[1120px]:px-40 pt-10 md:pt-20 py-36 gap-10"
        >
            <Badge text={t("tag")} />
            <h2 className="text-2xl md:text-4xl text-center leading-snug font-bold tracking-wide">
                {t("heading.first")} <br className="hidden md:block" />{" "}
                {t("heading.second")}
            </h2>
            <div className="grid min-[1300px]:grid-cols-2 gap-2">
                <IconTextIllustrationCard
                    backgroundColor="bg-secondary-blue"
                    icon={<InstantDepositIcon />}
                    title={t("card1.title")}
                    body={t("card1.description")}
                    illustration={instantDepositIllustration}
                />
                <IconTextIllustrationCard
                    backgroundColor="bg-gray-50"
                    foregroundColor="text-black"
                    icon={<SubRegionalTransfersIcon />}
                    title={t("card2.title")}
                    body={t("card2.description")}
                    illustration={subRegionalTransfersIllustration}
                />
                <IconTextIllustrationCard
                    backgroundColor="bg-gray-50"
                    foregroundColor="text-black"
                    icon={<RealTimeTransactionTrackingIcon />}
                    title={t("card3.title")}
                    body={t("card3.description")}
                    illustration={realTimeTransactionTrackingIllustration}
                />
                <IconTextIllustrationCard
                    backgroundColor="bg-secondary-blue"
                    icon={<ClientSupportIcon />}
                    title={t("card4.title")}
                    body={t("card4.description")}
                    illustration={clientSupportIllustration}
                />
            </div>
        </section>
    );
};

export default FeaturesSection;
