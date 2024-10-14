import React from "react";

interface ButtonStyle1Props {
    text?: string;
    width?: string;
    height?: string;
    marginLeft?: string;
    marginTop?: string;
}

const ButtonStyle1: React.FC<ButtonStyle1Props> = ({
    text,
    width = "w-[194px]",
    height = "h-[45px]",
    marginLeft = "ml-0",
    marginTop = "mt-0",
}) => {
    return (
        <button
            className={`border border-primary-blue bg-white hover:bg-primary-blue hover:text-white hover:scale-105 text-[#171717] font-semibold tracking-wide rounded-md ${width} ${height} ${marginLeft} ${marginTop} transition ease-in`}
        >
            {text}
        </button>
    );
};

export default ButtonStyle1;
