import React from "react";

interface InputProps {
    type?: string;
    name: string;
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({
    type = "text",
    name,
    placeholder = "placeholder",
}) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="bg-[#F8FAFC] sm:text-xl text-[#8E91B5] border border-[#EDEDED] w-full px-5 py-2 sm:py-3 rounded-lg outline-none"
            required
        />
    );
};

export default Input;
