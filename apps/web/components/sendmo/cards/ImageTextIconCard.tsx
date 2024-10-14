import Image, { StaticImageData } from "next/image";
import React, { FC, ReactNode } from "react";

interface ImageTextIconCardProps {
    image: { src: StaticImageData; alt: string };
    title: string;
    icon: ReactNode;
    className?: string;
}

const ImageTextIconCard: FC<ImageTextIconCardProps> = ({
    image,
    title,
    icon,
    className,
}) => {
    return (
        <div
            className={`flex justify-between items-center bg-white border border-tertiary p-3 gap-2 rounded-lg shadow-lg ${className}`}
        >
            <div className="flex items-center gap-2">
                <Image src={image.src} alt={image.alt} height={30} />
                <span className="text-[#575757]">{title}</span>
            </div>
            {icon}
        </div>
    );
};

export default ImageTextIconCard;
