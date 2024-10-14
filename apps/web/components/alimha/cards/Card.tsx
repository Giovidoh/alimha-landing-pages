"use client";
import React, { ReactNode } from "react";
import CardIcon from "./CardIcon";
import ButtonStyle2 from "../buttons/ButtonStyle2";
import { motion } from "framer-motion";
import { getLangDir } from "rtl-detect";
import { useLocale } from "next-intl";

interface CardProps {
    icon: ReactNode;
    bgColor?: string;
    href?: string;
    title?: any;
    titleColor?: string;
    description?: string;
    buttonText?: string;
    buttonBgColor?: string;
    highlighted?: boolean;
}

const Card: React.FC<CardProps> = ({
    icon,
    bgColor,
    href,
    title = "Card Title",
    titleColor = "#292D32",
    description = "Card Description",
    buttonText = "Button",
    buttonBgColor,
    highlighted = false,
}) => {
    const localActive = useLocale();
    const direction = getLangDir(localActive);

    return (
        <div
            className={`relative flex flex-col items-start ${
                highlighted ? "bg-primary-blue text-white" : "bg-white"
            } w-full h-fit gap-4 px-7 py-8 rounded-3xl shadow-xl md:shadow-2xl overflow-hidden z-20`}
        >
            <CardIcon
                icon={icon}
                bgColor={highlighted ? "bg-white" : bgColor}
                className="z-10"
            />
            <h2
                className={`${titleColor} text-xl lg:text-2xl min-[1200px]:text-3xl font-semibold z-10`}
            >
                {title}
            </h2>
            <p
                className={`${
                    highlighted ? "text-white" : "text-[#333333]"
                } font-light text-sm lg:text-base min-[1200px]:text-lg text-pretty tracking-wide pb-3 z-10`}
            >
                {description}
            </p>
            <ButtonStyle2
                href={href}
                text={buttonText}
                bgColor={buttonBgColor}
                className="z-10"
            />

            {highlighted && (
                <motion.div
                    initial={{
                        x: direction == "rtl" ? "-110%" : "110%",
                        y: "-100%",
                        rotate: direction == "rtl" ? 210 : -30,
                    }}
                    animate={{ x: "0%", y: "-65%" }}
                    transition={{ duration: 0.8, delay: 3 }}
                    className={`absolute top-1/2 ${
                        direction == "rtl" ? "right-3" : "left-3"
                    } z-0`}
                >
                    <div className="bg-gradient-to-r from-secondary-blue/60 via-secondary-blue/30 to-white/0 w-[450px] h-[70px] ml-5 rounded-full"></div>
                    <div className="bg-gradient-to-r from-secondary-blue/60 via-secondary-blue/30 to-white/0  w-[390px] h-[120px] rounded-full"></div>
                </motion.div>
            )}
        </div>
    );
};

export default Card;
