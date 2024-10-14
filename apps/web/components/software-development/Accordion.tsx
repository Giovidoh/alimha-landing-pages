"use client";
import React, { FC, useState } from "react";
import PlusIcon from "@/public/assets/plus-icon-2.svg";
import MinusIcon from "@/public/assets/minus-icon.svg";

interface AccordionProps {
    title?: string;
    body?: string;
}

const Accordion: FC<AccordionProps> = ({ title, body }) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`${
                open
                    ? "bg-secondary-blue w-full h-fit px-5 sm:px-14 py-5 border border-secondary-blue rounded-xl transition-transform"
                    : "bg-[#F7F7F7] w-full px-5 sm:px-14 py-5 rounded-xl shadow-md"
            }`}
        >
            <button
                className="flex justify-between items-center w-full h-full"
                onClick={() => setOpen((prev) => !prev)}
            >
                <span
                    className={`text-base sm:text-xl text-start font-bold max-w-[70%] ${
                        open ? "text-white" : "text-black"
                    }`}
                >
                    {title}
                </span>

                {open ? (
                    <MinusIcon />
                ) : (
                    <div className="bg-tertiary p-1 rounded-md">
                        <PlusIcon />
                    </div>
                )}
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out font-extralight text-white ${
                    open
                        ? "grid-rows-[1fr] pt-2 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <p className="overflow-hidden">{body}</p>
            </div>
        </div>
    );
};

export default Accordion;
