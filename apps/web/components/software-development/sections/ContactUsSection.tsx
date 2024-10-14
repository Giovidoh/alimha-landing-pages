import { useTranslations } from "next-intl";
import React from "react";
import ContactUsForm from "../forms/ContactUsForm";
import IconTextCard3 from "../cards/IconTextCard3";
import PhoneIcon from "@/public/assets/phone-icon.svg";
import MessageIcon from "@/public/assets/message-icon.svg";
import AddressIcon from "@/public/assets/address-icon.svg";

const ContactUsSection = () => {
    const t = useTranslations("SoftwareDevelopmentPage.ContactUsSection");
    return (
        <section
            id="contact"
            className="flex justify-center items-center px-[5%] min-[1200px]:px-[10%] pt-10 pb-16 min-[950px]:pt-16 min-[950px]:pb-28"
        >
            <div className="flex flex-col items-center w-full max-w-[1200px] gap-5">
                <span className="bg-tertiary text-primary-blue text-sm min-[1200px]:text-base px-3 py-2 rounded-md">
                    {t("tag")}
                </span>

                <h2 className="font-bold text-center text-2xl lg:text-3xl min-[1200px]:text-4xl leading-tight min-[1200px]:leading-snug tracking-wide">
                    {t.rich("heading", {
                        span: (chunks) => (
                            <span className="text-primary-blue">{chunks}</span>
                        ),
                        br: () => <br />,
                    })}
                </h2>

                <p className="text-[#1E1E1E] text-center text-sm lg:text-base min-[1200px]:text-lg tracking-wide w-full md:w-1/2">
                    {t("subheading")}
                </p>

                <div className="w-full mt-5">
                    <ContactUsForm
                        namePlaceholder={t("contact form.name")}
                        emailPlaceholder={t("contact form.email")}
                        subjectPlaceholder={t("contact form.subject")}
                        messagePlaceholder={t("contact form.message")}
                        sendButtonText={t("contact form.send")}
                    />
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] w-full gap-10">
                    <div className="w-full">
                        <IconTextCard3
                            icon={<PhoneIcon />}
                            title={t("card1.title")}
                            body={t("card1.body")}
                        />
                    </div>
                    <div className="w-full">
                        <IconTextCard3
                            icon={<MessageIcon />}
                            title={t("card2.title")}
                            body={t("card2.body")}
                        />
                    </div>
                    <div className="w-full">
                        <IconTextCard3
                            icon={<AddressIcon />}
                            title={t("card3.title")}
                            body={t("card3.body")}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsSection;
