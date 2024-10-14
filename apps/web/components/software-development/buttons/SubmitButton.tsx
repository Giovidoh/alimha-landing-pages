import { cn } from "@/lib/utils";
import React, { FC } from "react";
interface SubmitButtonProps {
    text?: string;
    className?: string;
}
const SubmitButton: FC<SubmitButtonProps> = ({ text, className }) => {
    return (
        <button
            className={cn(
                `bg-primary-blue w-full text-white p-3 hover:scale-105 active:scale-95 rounded-md transition`,
                className
            )}
        >
            {text}
        </button>
    );
};

export default SubmitButton;
