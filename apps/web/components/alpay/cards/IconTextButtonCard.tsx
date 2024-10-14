import React, { FC, ReactNode } from "react";
import RightIconButton from "../buttons/RightIconButton";

interface IconTextButtonCardProps {
    icon: ReactNode;
    title: string;
    body: string;
    buttonText: string;
    buttonIcon: ReactNode;
    className?: string;
    titleClassName?: string;
    bodyClassName?: string;
    buttonClassName?: string;
}

const IconTextButtonCard: FC<IconTextButtonCardProps> = ({
    icon,
    title,
    body,
    buttonText,
    buttonIcon,
    className,
    titleClassName,
    bodyClassName,
    buttonClassName,
}) => {
    return (
        <div
            className={
                `flex flex-col justify-between items-center gap-5 p-10 rounded-2xl shadow-2xl ` +
                className
            }
        >
            {icon}
            <h2
                className={
                    `text-center text-2xl font-semibold ` + titleClassName
                }
            >
                {title}
            </h2>
            <p className={`text-sm text-justify ` + bodyClassName}>{body}</p>
            <RightIconButton
                text={buttonText}
                icon={buttonIcon}
                className={`font-semibold ` + buttonClassName}
            />
        </div>
    );
};

export default IconTextButtonCard;
