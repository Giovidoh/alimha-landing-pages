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
            <div className="bg-primary-blue p-3 shadow-md shadow-primary-blue rounded-xl">
                {icon}
            </div>
            <div>
                <h2 className="font-bold">{title}</h2>
                <p className="text-sm">{body}</p>
            </div>
        </div>
    );
};

export default LeftIconTextCard;
