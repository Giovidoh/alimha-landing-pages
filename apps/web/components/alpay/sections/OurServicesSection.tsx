import React from "react";
import IconTextButtonCard from "../cards/IconTextButtonCard";
import PaymentMethodProtectionIcon from "@/public/assets/payment-method-protection-icon.svg";
import UniversalIntegrationIcon from "@/public/assets/universal-integration-icon.svg";
import AdvancedSecurityIcon2 from "@/public/assets/advanced-security-icon2.svg";
import ArrowRightIcon from "@/public/assets/arrow-right-icon.svg";
import { useTranslations } from "next-intl";

const OurServicesSection = () => {
    const t = useTranslations("AlpayPage.OurServicesSection");
    return (
        <section
            id="our-services"
            className="flex flex-col items-center w-full py-24 px-5 sm:px-20 min-[1330px]:px-40 gap-3"
        >
            <span className="font-medium text-base sm:text-lg text-center text-primary-blue">
                {t("tag")}
            </span>
            <h2 className="font-bold text-2xl sm:text-3xl min-[1000px]:text-4xl text-center mb-5 sm:mb-10">
                {t("heading")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <IconTextButtonCard
                    icon={<PaymentMethodProtectionIcon />}
                    title={t("card1.title")}
                    body={t("card1.body")}
                    buttonText={t("Learn more")}
                    buttonIcon={<ArrowRightIcon />}
                    className="bg-white border border-tertiary"
                    titleClassName="text-primary-blue"
                    bodyClassName="text-[#292D32] pb-7"
                    buttonClassName="text-primary-blue fill-primary-blue"
                />
                <IconTextButtonCard
                    icon={<UniversalIntegrationIcon className="mb-2" />}
                    title={t("card2.title")}
                    body={t("card2.body")}
                    buttonText={t("Learn more")}
                    buttonIcon={<ArrowRightIcon />}
                    className="bg-primary-blue border border-primary-blue"
                    titleClassName="text-white"
                    bodyClassName="text-white pb-7"
                    buttonClassName="text-white fill-white"
                />
                <IconTextButtonCard
                    icon={<AdvancedSecurityIcon2 />}
                    title={t("card3.title")}
                    body={t("card3.body")}
                    buttonText={t("Learn more")}
                    buttonIcon={<ArrowRightIcon />}
                    className="bg-white border border-tertiary"
                    titleClassName="text-primary-blue"
                    bodyClassName="text-[#292D32] pb-7"
                    buttonClassName="text-primary-blue fill-primary-blue"
                />
            </div>
        </section>
    );
};

export default OurServicesSection;
