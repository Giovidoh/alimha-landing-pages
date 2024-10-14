import React, { FC, ReactNode } from "react";

interface AppDownloadersButton1Props {
    text?: string;
    icon: ReactNode;
    className?: string;
}

const AppDownloadersButton1: FC<AppDownloadersButton1Props> = ({
    text,
    icon,
    className,
}) => {
    return (
        <button
            className={`flex justify-center items-center group p-3 gap-3 border-[2px] hover:scale-105 rounded-lg capitalize transition ${className}`}
        >
            {icon}
            {text}
        </button>
    );
};

export default AppDownloadersButton1;
