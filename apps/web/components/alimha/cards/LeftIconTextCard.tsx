import React, { FC, ReactNode } from "react";

interface LeftIconTextCardProps {
    icon: ReactNode;
    title?: string;
    body?: string;
}

const LeftIconTextCard: FC<LeftIconTextCardProps> = ({
    icon,
    title = "Card Title",
    body = "Card Body",
}) => {
    return (
        <div className="flex items-center gap-5">
            <div className="bg-white p-3 shadow-md rounded-2xl">{icon}</div>
            <div>
                <h2 className="font-bold text-white text-base lg:text-lg min-[1200px]:text-xl">
                    {title}
                </h2>
                <p className="font-light text-white text-sm lg:text-base min-[1200px]:text-lg text-pretty tracking-wide">
                    {body}
                </p>
            </div>
        </div>
    );
};

export default LeftIconTextCard;
