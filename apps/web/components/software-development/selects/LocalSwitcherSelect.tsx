"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import { useTransition } from "react";
import { ChangeEvent } from "react";
import { useLocale } from "next-intl";
import Image, { StaticImageData } from "next/image";
import frFlag from "@/public/assets/fr-flag.png";
import usFlag from "@/public/assets/us-flag.png";
import saFlag from "@/public/assets/sa-flag.png";
import ChevronDownOutline from "@/public/assets/chevron-down-outline.svg";
import { motion } from "framer-motion";

type LanguageInfo = {
    id: string;
    flag: StaticImageData;
    alt: string;
    label: string;
    height: number;
};

const LocalSwitcherSelect = () => {
    // const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();
    const [toggleLocalSwitcher, setToggleLocalSwitcher] = useState(false);
    const pathname = usePathname();
    const pathnameWithoutIntl = pathname.slice(4);

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
        <div className="flex justify-between items-center bg-white w-full px-3 py-2 gap-2 border-[1px] border-primary-blue rounded-md">
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

    // const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    //     const nextLocale = e.target.value;
    //     startTransition(() => router.replace(`/${nextLocale}/alimha`));
    // };

    const handleChangeLanguage = (e: any) => {
        const { id } = e.target.closest("div");
        router.replace(`/${id}/${pathnameWithoutIntl}`);
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
            {/* <select
                defaultValue={localActive}
                className="p-3 outline-none border-[2px] border-primary-blue rounded-full font-semibold text-xs cursor-pointer"
                onChange={onSelectChange}
                disabled={isPending}
            >
                <Image src={frFlag} alt="France flag" />
                <option value="en" className="font-semibold">
                    ENGLISH
                </option>
                <Image src={usFlag} alt="USA flag" />
                <option value="fr" className="font-semibold">
                    FRANÇAIS
                </option>
            </select> */}
            <div
                className="relative w-full select-none z-0"
                onClick={() => setToggleLocalSwitcher((prev) => !prev)}
            >
                <div className="cursor-pointer">{selectedLanguage}</div>

                <div
                    className={`${
                        !toggleLocalSwitcher && "hidden"
                    } absolute top-[105%] left-0 flex flex-col bg-white w-full gap-1 py-3 border-[1px] border-t-0 border-primary-blue rounded-bl-md rounded-br-md select-none -z-10`}
                >
                    {nonSelectedLanguages}
                </div>
            </div>
        </>
    );
};

export default LocalSwitcherSelect;
