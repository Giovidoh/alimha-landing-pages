import React, { FC, ReactNode } from "react";

interface LeftIconButtonProps {
    icon: ReactNode;
    text?: string;
    className?: string;
}

const LeftIconButton: FC<LeftIconButtonProps> = ({
    icon,
    text = "LeftIconButton",
    className,
}) => {
    return (
        <button
            className={
                `flex items-center bg-secondary-blue hover:bg-primary-blue hover:scale-105 text-white text-base md:text-lg rounded-md transition ` +
                className
            }
        >
            {icon}
            {text}
        </button>
    );
};

export default LeftIconButton;
