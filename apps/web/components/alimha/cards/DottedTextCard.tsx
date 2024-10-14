import React from "react";
import { FC } from "react";

interface DottedTextCardProps {
    title?: string;
    body?: string;
    cardBgColor?: string;
    dotBgColor?: string;
    dotColor?: string;
    titleColor?: string;
    bodyColor?: string;
}

const DottedTextCard: FC<DottedTextCardProps> = ({
    title = "CardTitle",
    body = "CardBody",
    cardBgColor = "bg-white",
    dotBgColor = "bg-tertiary",
    dotColor = "bg-secondary-blue",
    titleColor = "text-[#00194B]",
    bodyColor = "text-[#333333]",
}) => {
    return (
        <div
            className={`flex flex-col justify-start ${cardBgColor} w-full h-full gap-3 pl-3 pr-5 pt-3 py-5 rounded-lg shadow-lg shadow-tertiary`}
        >
            <div className="flex items-center gap-x-2 gap-y-10">
                <div className={`${dotBgColor} p-4 rounded-md`}>
                    <div className={`${dotColor} w-4 h-4 rounded-full`}></div>
                </div>
                <h3
                    className={`font-semibold ${titleColor} text-xl min-[1200px]:text-2xl`}
                >
                    {title}
                </h3>
            </div>
            <div className="flex pl-12">
                <p className={`${bodyColor} text-sm text-pretty tracking-wide`}>
                    {body}
                </p>
            </div>
        </div>
    );
};

export default DottedTextCard;
