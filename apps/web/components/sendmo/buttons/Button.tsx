import React, { FC } from "react";

interface ButtonProps {
    text?: string;
    className?: string;
}

const Button: FC<ButtonProps> = ({ text = "Button", className }) => {
    return (
        <button
            className={
                `bg-secondary-blue hover:bg-primary-blue hover:scale-105 text-white rounded-md transition ` +
                className
            }
        >
            {text}
        </button>
    );
};

export default Button;
