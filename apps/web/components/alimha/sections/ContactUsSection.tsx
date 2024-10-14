"use client";
import React from "react";
import ContactForm from "../forms/ContactForm";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { getLangDir } from "rtl-detect";
import LeftIconTextCard from "../cards/LeftIconTextCard";
import PhoneIcon from "@/public/assets/phone-icon.svg";
import MessageIcon from "@/public/assets/message-icon.svg";
import AddressIcon from "@/public/assets/address-icon.svg";

const ContactUsSection = () => {
    const localActive = useLocale();
    const direction = getLangDir(localActive);
    const t = useTranslations("AlimhaPage.ContactUsSection");

    return (
        <section
            id="contact"
            className="relative flex flex-col justify-evenly items-center bg-white w-full h-fit px-[5%] lg:px-[10%] pt-20 pb-32"
        >
            <span className="bg-tertiary text-secondary-blue text-sm min-[1280px]:text-base px-3 py-2 mb-4 rounded-md">
                {t("tag")}
            </span>
            <div className="flex flex-col gap-4 mb-6 z-10">
                <h2 className="font-bold text-center text-2xl lg:text-3xl min-[1200px]:text-4xl leading-tight min-[1200px]:leading-snug">
                    {t.rich("heading", {
                        span: (chunks) => (
                            <span className="text-primary-blue">{chunks}</span>
                        ),
                    })}
                </h2>
                <p className="font-medium text-[#333333] text-sm lg:text-base min-[1200px]:text-lg text-center">
                    {t("description")}
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-5 w-full z-10">
                <div className="relative flex flex-col justify-evenly gap-5 bg-primary-blue px-10 py-5 rounded-3xl overflow-hidden">
                    <motion.div
                        initial={{
                            x: direction == "rtl" ? "-100%" : "100%",
                            y: "-100%",
                            rotate: direction == "rtl" ? 30 : 150,
                        }}
                        animate={{ x: "-50%", y: "-50%" }}
                        transition={{ duration: 0.8 }}
                        className={`absolute ${
                            direction == "rtl"
                                ? "top-2/3 left-1/2"
                                : "top-1/2 left-0"
                        }  w-full h-full`}
                    >
                        <div className="bg-gradient-to-r from-secondary-blue to-white/0 w-3/4 h-[80px] ml-5 rounded-full"></div>
                        <div className="bg-gradient-to-r from-secondary-blue to-white/0 w-3/4 h-[180px] rounded-full"></div>
                    </motion.div>
                    <div className="flex flex-col items-start gap-1 text-white z-10">
                        <h3 className="font-semibold text-xl lg:text-2xl min-[1200px]:text-3xl">
                            {t("address card.title")}
                        </h3>
                        <p className="font-light text-sm lg:text-base min-[1200px]:text-lg text-pretty tracking-wide">
                            {t("address card.body")}
                        </p>
                    </div>
                    <div className="flex flex-col gap-10 z-10">
                        <LeftIconTextCard
                            icon={<PhoneIcon />}
                            title={t("address card.card1.title")}
                            body={t("address card.card1.body")}
                        />
                        <LeftIconTextCard
                            icon={<MessageIcon />}
                            title={t("address card.card2.title")}
                            body={t("address card.card2.body")}
                        />
                        <LeftIconTextCard
                            icon={<AddressIcon />}
                            title={t("address card.card3.title")}
                            body={t("address card.card3.body")}
                        />
                    </div>
                </div>

                <ContactForm
                    namePlaceholder={t("contact form.name")}
                    emailPlaceholder={t("contact form.email")}
                    messagePlaceholder={t("contact form.your message")}
                    buttonText={t("contact form.send")}
                />
            </div>
        </section>
    );
};

export default ContactUsSection;
