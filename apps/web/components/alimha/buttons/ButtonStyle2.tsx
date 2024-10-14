import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface ButtonStyle2Props {
    bgColor?: string;
    href?: string;
    text?: string;
    className?: string;
}

const ButtonStyle2: React.FC<ButtonStyle2Props> = ({
    bgColor = "bg-primary-blue",
    href = "#",
    text = "Button",
    className,
}) => {
    return (
        <Link
            href={href}
            target="_blank"
            className={cn(
                `flex justify-center items-center border ${bgColor} text-white hover:scale-105 font-medium tracking-wide rounded-md w-[194px] h-[45px] transition ease-in`,
                className
            )}
        >
            {text}
        </Link>
    );
};

export default ButtonStyle2;
