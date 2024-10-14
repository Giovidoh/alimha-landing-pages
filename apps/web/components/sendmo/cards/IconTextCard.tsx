import Image, { StaticImageData } from "next/image";
import React, { FC, ReactNode } from "react";

interface IconTextCardProps {
    icon: ReactNode;
    title: string;
    body: string;
}

const IconTextCard: FC<IconTextCardProps> = ({ icon, title, body }) => {
    return (
        <div
            className={`flex items-start bg-white w-full h-fit p-5 gap-4 rounded-2xl shadow-md`}
        >
            <div className="flex justify-center items-center p-3 bg-tertiary rounded-lg fill-secondary-blue">
                {icon}
            </div>
            <div>
                <h2 className="text-xl font-bold">{title}</h2>
                <div className="flex justify-between items-center">
                    <p className="font-light text-sm text-pretty text-gray-1">
                        {body}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default IconTextCard;
