import React, { FC } from "react";

interface BurgerButtonProps {
    setBurgerDropped: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerButton: FC<BurgerButtonProps> = ({ setBurgerDropped }) => {
    const handleClick = () => {
        setBurgerDropped((prev) => !prev);
    };

    return (
        <svg
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleClick}
            className="cursor-pointer"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.75 3V0.5H23.25V3H0.75ZM0.75 9.25H23.25V6.75H0.75V9.25ZM0.75 15.5H23.25V13H0.75V15.5Z"
                fill="#171717"
            />
        </svg>
    );
};

export default BurgerButton;
