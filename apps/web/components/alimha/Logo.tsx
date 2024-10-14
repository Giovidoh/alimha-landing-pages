import React from "react";
import Image from "next/image";
import logo from "@/public/assets/alimha-logo.png";

const Logo = () => {
    return <Image src={logo} alt="logo" height={45} />;
};

export default Logo;
