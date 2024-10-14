import React, { FC } from "react";

interface InputProps {
    placeholder?: string;
    className?: string;
}

const Input: FC<InputProps> = ({ placeholder = "placeholder", className }) => {
    return (
        <input
            type="email"
            className={`bg-[#EDEDED] text-[#929292] px-5 py-2 outline-none ${className}`}
            placeholder={placeholder}
        />
    );
};

export default Input;
