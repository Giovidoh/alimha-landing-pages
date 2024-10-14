import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";

interface Button1Props {
    href?: string;
    text?: string;
    className?: string;
}

const Button1: FC<Button1Props> = ({
    href = "#",
    text = "Button1",
    className,
}) => {
    return (
        <Link
            href={href}
            className={cn(
                `flex justify-center items-center bg-primary-blue text-white tracking-wide whitespace-nowrap px-5 py-3 rounded-md`,
                className
            )}
        >
            {text}
        </Link>
    );
};

export default Button1;
