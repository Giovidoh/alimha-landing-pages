import React, { FC, ReactNode } from "react";

interface IconTextCard2Props {
    icon: ReactNode;
    title?: string;
    body?: string;
}

const IconTextCard2: FC<IconTextCard2Props> = ({
    icon,
    title = "Card Title",
    body = "Card Body",
}) => {
    return (
        <div className="flex flex-col items-start bg-white w-full h-full px-10 pt-5 pb-10 gap-5 shadow-2xl rounded-2xl">
            <div className="p-5 bg-tertiary rounded-xl">{icon}</div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="font-light text-xl text-pretty">{body}</p>
        </div>
    );
};

export default IconTextCard2;
