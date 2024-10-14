import React, { FC } from "react";
interface ButtonProps {
    text?: string;
    className?: string;
}
const Button: FC<ButtonProps> = ({ text, className }) => {
    return (
        <button
            className={`hover:scale-105 rounded-md transition ` + className}
        >
            {text}
        </button>
    );
};

export default Button;
