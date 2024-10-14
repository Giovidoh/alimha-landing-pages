import React, { FC, ReactNode } from "react";

interface IconTextCardProps {
    icon: ReactNode;
    title?: string;
    body?: string;
}

const IconTextCard: FC<IconTextCardProps> = ({
    icon,
    title = "Card Title",
    body = "Card Body",
}) => {
    return (
        <div className="relative w-full h-full z-0">
            <div className="absolute top-5 -left-5 bg-primary-blue w-full h-full shadow-2xl rounded-[50px] -z-10"></div>
            <div className="bg-white flex flex-col items-center w-full h-full p-7 gap-5 shadow-2xl rounded-[45px]">
                <div className="p-5 bg-tertiary rounded-full">{icon}</div>
                <h2 className="text-xl text-primary-blue font-bold">{title}</h2>
                <p className="text-sm text-center text-pretty">{body}</p>
            </div>
        </div>
    );
};

export default IconTextCard;
