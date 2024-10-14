import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { FC } from "react";

interface IconTextCardProps {
    icon: ReactNode;
    title?: string;
    body?: string;
    className?: string;
}

const IconTextCard: FC<IconTextCardProps> = ({
    icon,
    title = "CardTitle",
    body = "CardBody",
    className,
}) => {
    return (
        <div
            className={cn(
                `flex flex-col items-start text-white w-full h-full gap-3`,
                className
            )}
        >
            <div className={`bg-[#001E44] p-4 rounded-2xl shadow-md`}>
                {icon}
            </div>
            <h3 className={`font-semibold text-xl min-[1200px]:text-2xl`}>
                {title}
            </h3>
            <p className={`text-sm text-pretty tracking-wide`}>{body}</p>
        </div>
    );
};

export default IconTextCard;
