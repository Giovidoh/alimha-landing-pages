import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface ImagesCollectionsProps {
    images: { src: StaticImageData; alt: string }[];
    imageHeight?: number;
}

const ImagesCollections: FC<ImagesCollectionsProps> = ({
    images,
    imageHeight = 30,
}) => {
    return (
        <div className="flex items-center w-fit p-3 gap-3 bg-white rounded-lg shadow-lg">
            {images.map((image, index) => (
                <Image
                    src={image.src}
                    alt={image.alt}
                    key={index}
                    height={imageHeight}
                />
            ))}
        </div>
    );
};

export default ImagesCollections;
