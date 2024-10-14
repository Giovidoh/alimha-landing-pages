"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useLocale } from "next-intl";
import Image, { StaticImageData } from "next/image";
import frFlag from "@/public/assets/fr-flag.png";
import usFlag from "@/public/assets/us-flag.png";
import saFlag from "@/public/assets/sa-flag.png";
import ChevronDownOutline from "@/public/assets/chevron-down-outline.svg";
import { animate, motion } from "framer-motion";

type LanguageInfo = {
    id: string;
    flag: StaticImageData;
    alt: string;
    label: string;
    height: number;
};

const LocalSwitcherSelect = () => {
    const router = useRouter();
    const localActive = useLocale();
    const [toggleLocalSwitcher, setToggleLocalSwitcher] = useState(false);

    // Choose the selected language
    const selectedLanguages: Record<string, LanguageInfo> = {
        en: {
            id: "",
            flag: usFlag,
            alt: "usa flag",
            label: "English",
            height: 15,
        },
        fr: {
            id: "",
            flag: frFlag,
            alt: "french flag",
            label: "Français",
            height: 20,
        },
        ar: {
            id: "",
            flag: saFlag,
            alt: "saudi arabia flag",
            label: "Arabic",
            height: 20,
        },
    };

    const selectedLanguage = (
        <div className="flex justify-between items-center bg-white w-full px-3 py-2 gap-2 border-[2px] border-secondary-blue rounded-md shadow-lg">
            <Image
                src={selectedLanguages[localActive].flag}
                alt={selectedLanguages[localActive].alt}
                height={selectedLanguages[localActive].height}
                className="pointer-events-none"
            />
            <span className="font-semibold">
                {selectedLanguages[localActive].label}
            </span>
            <motion.div animate={{ rotate: toggleLocalSwitcher ? 180 : 0 }}>
                <ChevronDownOutline className="h-5" />
            </motion.div>
        </div>
    );

    // Show the non-selected languages
    const languages: Record<string, LanguageInfo[]> = {
        en: [
            {
                id: "ar",
                flag: saFlag,
                alt: "saudi arabia flag",
                label: "Arabic",
                height: 20.5,
            },
            {
                id: "fr",
                flag: frFlag,
                alt: "french flag",
                label: "Français",
                height: 20,
            },
        ],
        fr: [
            {
                id: "ar",
                flag: saFlag,
                alt: "saudi arabia flag",
                label: "Arabic",
                height: 20.5,
            },
            {
                id: "en",
                flag: usFlag,
                alt: "usa flag",
                label: "English",
                height: 15,
            },
        ],
        ar: [
            {
                id: "en",
                flag: usFlag,
                alt: "usa flag",
                label: "English",
                height: 15,
            },
            {
                id: "fr",
                flag: frFlag,
                alt: "french flag",
                label: "Français",
                height: 20,
            },
        ],
    };

    const handleChangeLanguage = (e: any) => {
        const { id } = e.target.closest("div");
        router.replace(`/${id}/sendmo`);
    };

    const nonSelectedLanguages = languages[localActive].map(
        ({ id, flag, alt, label, height }) => (
            <div
                key={id}
                id={id}
                className="flex items-center px-3 py-2 gap-3 hover:bg-tertiary cursor-pointer"
                onClick={handleChangeLanguage}
            >
                <Image
                    src={flag}
                    alt={alt}
                    height={height}
                    className="pointer-events-none"
                />
                <span className="font-semibold">{label}</span>
            </div>
        )
    );

    return (
        <>
            <div
                className="relative w-[170px] select-none z-0"
                onClick={() => setToggleLocalSwitcher((prev) => !prev)}
            >
                <div className="cursor-pointer">{selectedLanguage}</div>

                <div
                    className={`${
                        !toggleLocalSwitcher && "hidden"
                    } absolute top-[105%] left-0 flex flex-col bg-white w-full gap-1 py-3 border-[1px] border-t-0 border-secondary-blue rounded-bl-md rounded-br-md select-none -z-10`}
                >
                    {nonSelectedLanguages}
                </div>
            </div>
        </>
    );
};

export default LocalSwitcherSelect;
