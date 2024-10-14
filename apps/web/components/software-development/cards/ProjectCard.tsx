import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
    image: StaticImageData;
}

const ProjectCard: FC<ProjectCardProps> = ({ image }) => {
    return (
        <div className="flex justify-center items-center bg-white w-full h-full p-8 rounded-3xl shadow-lg">
            <Image src={image} alt="project image" height={50} />
        </div>
    );
};

export default ProjectCard;
