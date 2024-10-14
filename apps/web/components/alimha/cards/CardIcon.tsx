import React, { ReactNode } from "react";

interface cardIconProps {
    icon: ReactNode;
    bgColor?: string;
    className?: string;
}

const CardIcon: React.FC<cardIconProps> = ({ icon, bgColor, className }) => {
    return (
        <div
            className={`${bgColor} flex justify-center items-center h-[88px] w-[88px] p-2 rounded-[28px] ${className}`}
        >
            {icon}
        </div>
    );
};

export default CardIcon;
