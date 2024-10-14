import React, { FC, ReactNode } from "react";

interface RightIconButtonProps {
    text?: string;
    icon: ReactNode;
    className?: string;
}

const RightIconButton: FC<RightIconButtonProps> = ({
    text = "RightIconButton",
    icon,
    className,
}) => {
    return (
        <button className={`flex items-center gap-3 ` + className}>
            {text}
            {icon}
        </button>
    );
};

export default RightIconButton;
