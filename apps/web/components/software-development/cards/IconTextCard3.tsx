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
        <div className="flex flex-col items-center bg-primary-blue text-white w-full h-full px-10 pt-5 pb-10 gap-5 shadow-2xl rounded-2xl">
            <div className="bg-tertiary p-5 rounded-xl">{icon}</div>
            <div className="flex flex-col items-center gap-0">
                <h2 className="font-bold text-lg lg:text-xl min-[1200px]:text-2xl">
                    {title}
                </h2>
                <p className="font-light text-sm lg:text-base min-[1200px]:text-lg tracking-wide text-pretty">
                    {body}
                </p>
            </div>
        </div>
    );
};

export default IconTextCard2;
