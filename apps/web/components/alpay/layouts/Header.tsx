"use client";
import React, { FC, useState } from "react";
import AlpayLogo from "@/public/assets/alpay-logo.svg";
import Navbar from "@/components/alpay/Navbar";
import Button from "../buttons/Button";
import BurgerButtonIcon from "@/public/assets/burger-button-icon.svg";
import Link from "next/link";
import LocalSwitcherSelect from "../selects/LocalSwitcherSelect";
import { useLocale } from "next-intl";

interface HeaderProps {
    headerLinks: { text: string; url: string }[];
    contactUs: string;
}

const Header: FC<HeaderProps> = ({ headerLinks, contactUs }) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const localActive = useLocale();

    return (
        <header className="sticky top-0 left-0 flex justify-center bg-white w-screen px-5 sm:px-20 min-[1330px]:px-40 py-5 z-50">
            <div className="flex justify-between items-center w-full">
                <AlpayLogo />
                <div className="w-1/2 max-[1000px]:hidden">
                    <Navbar headerLinks={headerLinks} />
                </div>
                <div className="hidden min-[1070px]:flex items-center min-[1070px]:ml-16 gap-4">
                    {/* <Button
                        text="Contactez-nous"
                        className="bg-primary-blue text-white px-3 py-2"
                    /> */}
                    <div className="hidden min-[1440px]:block">
                        <LocalSwitcherSelect />
                    </div>
                    <Link
                        href="#contact-us"
                        className="flex justify-center items-center bg-primary-blue text-white hover:text-white border py-3 min-w-[185px] w-full hover:scale-105 rounded-md transition"
                    >
                        {contactUs}
                    </Link>
                </div>
                <div className="flex items-center min-[1440px]:hidden">
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
                            } top-full flex flex-col items-center bg-white bg-opacity-80 p-10 gap-3 border backdrop-blur`}
                        >
                            <div className="min-[1000px]:hidden">
                                <Navbar headerLinks={headerLinks} />
                            </div>
                            {/* <Button
                                href=""
                                text="Contactez-nous"
                                className="bg-primary-blue text-white px-3 py-2"
                            /> */}
                            <div className="block min-[1440px]:hidden">
                                <LocalSwitcherSelect />
                            </div>
                            <Link
                                href="#contact-us"
                                className="flex min-[1070px]:hidden justify-center items-center bg-primary-blue text-white hover:text-white border py-3 min-w-[185px] w-full hover:scale-105 rounded-md transition"
                            >
                                {contactUs}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
