import React from "react";
import Image from "next/image";
import logo_graphic from "@/public/assets/alimha-logo-graphic.png";
import logo_typo from "@/public/assets/alimha-logo-typo-white.png";

const LogoFooter = () => {
    return (
        <div className="flex justify-between items-center h-fit w-[190px]">
            <Image src={logo_graphic} alt="logo" height={55} />
            <Image src={logo_typo} alt="logo" height={40} />
        </div>
    );
};

export default LogoFooter;
