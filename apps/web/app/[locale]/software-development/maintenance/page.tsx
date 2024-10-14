"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/alimha-logo.png";
import { motion } from "framer-motion";

export default function Page() {
    const localActive = useLocale();
    const t = useTranslations("SoftwareDevelopmentPage.MaintenancePage");

    return (
        <main className="flex justify-center items-center bg-gray-100 w-full h-full">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1] }}
                transition={{
                    duration: 0.5,
                }}
                className="flex flex-col items-center bg-white gap-5 p-10 border shadow-lg rounded-3xl"
            >
                <Image src={logo} alt="alimha's logo" height={80} />
                <h1 className="font-bold text-lg md:text-xl xl:text-2xl text-center">
                    {t("heading")}
                </h1>
                <p className="text-sm md:text-base xl:text-lg text-center">
                    {t("message")}
                </p>
                <Link
                    href={`/${localActive}/alimha`}
                    className="bg-primary-blue text-white text-base md:text-lg tracking-wide px-5 py-3 rounded-md"
                >
                    {t("redirect link")}
                </Link>
            </motion.div>
        </main>
    );
}
