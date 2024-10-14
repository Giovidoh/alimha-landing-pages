import React from "react";
import ContactUsForm from "../ContactUsForm";
import IconTextCard2 from "../cards/IconTextCard2";
import PhoneIcon from "@/public/assets/phone-icon.svg";
import MessageIcon from "@/public/assets/message-icon.svg";
import AddressIcon from "@/public/assets/address-icon.svg";
import bluredVectors from "@/public/assets/blured-vectors.png";
import dotVector1 from "@/public/assets/dot-vector-1.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ContactUsSection = () => {
    const t = useTranslations("AlpayPage.ContactUsSection");
    return (
        <section
            id="contact-us"
            className="relative flex flex-col items-center bg-tertiary w-full h-fit pt-20 pb-14 px-5 sm:px-20 min-[1120px]:px-40 gap-5"
        >
            <div>
                <Image
                    src={bluredVectors}
                    alt="blured vectors image"
                    height={100}
                    className="absolute top-14 left-[10%]"
                />
            </div>
            <div>
                <Image
                    src={dotVector1}
                    alt="dot vector image"
                    height={137}
                    className="absolute right-[10%] -top-7"
                />
            </div>
            <span className="font-medium text-base sm:text-lg text-primary-blue z-10">
                {t("tag")}
            </span>

            <h1 className="font-bold text-2xl sm:text-3xl min-[1000px]:text-4xl text-center w-full md:w-1/2 mb-8">
                {t("heading")}
            </h1>

            <ContactUsForm
                namePlaceholder={t("contact form.name")}
                emailPlaceholder={t("contact form.email")}
                subjectPlaceholder={t("contact form.subject")}
                messagePlaceholder={t("contact form.your message")}
                sendButtonText={t("contact form.send")}
            />

            <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] w-full gap-3">
                <div className="w-full">
                    <IconTextCard2
                        icon={<PhoneIcon />}
                        title={t("card1.title")}
                        body={t("card1.body")}
                    />
                </div>
                <div className="w-full">
                    <IconTextCard2
                        icon={<MessageIcon />}
                        title={t("card2.title")}
                        body={t("card2.body")}
                    />
                </div>
                <div className="w-full">
                    <IconTextCard2
                        icon={<AddressIcon />}
                        title={t("card3.title")}
                        body={t("card3.body")}
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactUsSection;
