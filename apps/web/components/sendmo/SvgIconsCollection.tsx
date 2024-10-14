import React, { FC, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface SvgIconsCollectionProps {
    icons: ReactNode[];
}

const SvgIconsCollection: FC<SvgIconsCollectionProps> = ({ icons }) => {
    return (
        <div className="flex items-center w-fit p-3 gap-3 bg-white rounded-lg shadow-lg">
            {icons.map((icon, index) => (
                <div key={index}>{icon}</div>
            ))}
        </div>
    );
};

export default SvgIconsCollection;
