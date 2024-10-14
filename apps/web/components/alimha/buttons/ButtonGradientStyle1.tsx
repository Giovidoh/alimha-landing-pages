import React from "react";

interface ButtonGradientStyle1Props {
    fromColor?: string;
    toColor?: string;
    text?: string;
    width?: string;
    height?: string;
    marginRight?: string;
    disabled?: boolean;
}

const ButtonGradientStyle1: React.FC<ButtonGradientStyle1Props> = ({
    fromColor = "from-primary-blue",
    toColor = "to-secondary-blue",
    text = "Button",
    width = "w-[194px]",
    height = "h-[45px]",
    marginRight = "mr-0",
    disabled = false,
}) => {
    return (
        <button
            className={`bg-gradient-to-r hover:bg-gradient-to-l hover:scale-105 ${fromColor} ${toColor} font-medium capitalize tracking-wider whitespace-nowrap text-white ${width} ${height} ${marginRight} rounded-md transition ease-in disabled:cursor-not-allowed`}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default ButtonGradientStyle1;
