"use client";
import React, { useState } from "react";
import Logo from "../Logo";
import NavBar from "../NavBar";
import BurgerButton from "../buttons/BurgerButton";
import LocalSwitcherSelect from "../selects/LocalSwitcherSelect";
import { useLocale, useTranslations } from "next-intl";
import { motion, scroll } from "framer-motion";
import Link from "next/link";
import ButtonStyle2 from "../buttons/ButtonStyle2";

const Header = () => {
    const [burgerDropped, setBurgerDropped] = useState(false);
    const t = useTranslations("AlimhaPage.Header");
    const localActive = useLocale();

    const [background, setBackground] = useState<string>("");
    const [firstAnimationComplete, setfirstAnimationComplete] =
        useState<boolean>(false);

    scroll(
        (progress: number) =>
            progress > 0 ? setBackground("white") : setBackground(""),
        {
            source: document.body,
        }
    );

    return (
        <motion.header
            initial={{ paddingTop: 8, y: "-100%" }}
            animate={{ paddingTop: background ? 8 : 30, y: 0 }}
            transition={{
                ease: "easeIn",
                duration: 0.3,
                delay: firstAnimationComplete ? 0 : 1,
            }}
            onAnimationComplete={() => setfirstAnimationComplete(true)}
            className={`fixed flex justify-between ${
                background ? "bg-white bg-opacity-80 backdrop-blur-md" : ""
            } w-full gap-4 px-[5%] lg:px-[10%] py-2 z-50 transition`}
        >
            <div className="flex justify-between items-center">
                <Link href={`/${localActive}/alimha`}>
                    <Logo />
                </Link>
            </div>
            <div className="flex gap-10 mr-3">
                <nav
                    className="max-md:hidden flex justify-center items-center"
                    role="navigation"
                >
                    <NavBar />
                </nav>
                <div className="hidden min-[950px]:flex items-center gap-3">
                    <div className="hidden min-[1200px]:block">
                        <LocalSwitcherSelect />
                    </div>
                    <div className="block w-1/2">
                        <ButtonStyle2
                            href={`/${localActive}/alimha/become-partner`}
                            text={t("Become partner")}
                            bgColor="bg-primary-blue"
                            className="border-none z-10"
                        />
                    </div>
                </div>
                <div className="flex min-[1200px]:hidden justify-end items-center">
                    <BurgerButton setBurgerDropped={setBurgerDropped} />
                    {burgerDropped && (
                        <div
                            className={`absolute ${
                                localActive == "ar" ? "left-0" : "right-0"
                            } top-full flex flex-col gap-4 p-10 bg-white bg-opacity-80 backdrop-blur`}
                        >
                            <nav className="block md:hidden" role="navigation">
                                <NavBar />
                            </nav>
                            <div className="block min-[1200px]:hidden">
                                <LocalSwitcherSelect />
                            </div>
                            <div className="flex min-[950px]:hidden">
                                <ButtonStyle2
                                    href={`/${localActive}/alimha/become-partner`}
                                    text={t("Become partner")}
                                    bgColor="bg-primary-blue"
                                    className="border-none z-10"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
