"use client";
import React, { FC, useState } from "react";
import SendmoLogo from "@/public/assets/sendmo-logo.svg";
import Button from "../buttons/Button";
import Navbar from "../Navbar";
import BurgerButtonIcon from "@/public/assets/burger-button-icon.svg";
import LocalSwitcherSelect from "../selects/LocalSwitcherSelect";
import { useLocale } from "next-intl";

interface HeaderProps {
    headerLinks: { text: string; url: string }[];
    downloadApp: string;
}

const Header: FC<HeaderProps> = ({ headerLinks, downloadApp }) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const localActive = useLocale();

    return (
        <header className="sticky top-0 left-0 flex justify-center bg-white w-screen px-5 sm:px-20 min-[1120px]:px-40 py-5 z-50">
            <div className="flex justify-between items-center w-full gap-8">
                <SendmoLogo className="h-7" />
                <div className="w-1/2 hidden min-[870px]:block">
                    <Navbar headerLinks={headerLinks} />
                </div>
                <div className="hidden min-[1160px]:flex gap-4">
                    <div className="hidden min-[1440px]:block">
                        <LocalSwitcherSelect />
                    </div>
                    <Button text={downloadApp} className="px-3 py-2" />
                </div>
                <div className="min-[1440px]:hidden">
                    <button
                        className=""
                        onClick={() => setToggleMenu((prev) => !prev)}
                    >
                        <BurgerButtonIcon className="fill-black h-4" />
                    </button>

                    {toggleMenu && (
                        <div
                            className={`absolute ${
                                localActive == "ar" ? "left-0" : "right-0"
                            } top-full flex flex-col gap-3 bg-white bg-opacity-80 backdrop-blur p-10 border`}
                        >
                            <div className="min-[870px]:hidden">
                                <Navbar headerLinks={headerLinks} />
                            </div>
                            <div className="block min-[1440px]:hidden">
                                <LocalSwitcherSelect />
                            </div>
                            <div className="block min-[1160px]:hidden">
                                <Button
                                    text={downloadApp}
                                    className="px-3 py-2 w-full"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
