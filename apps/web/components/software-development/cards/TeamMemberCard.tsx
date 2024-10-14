import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React, {
    FC,
    JSXElementConstructor,
    ReactElement,
    ReactNodeArray,
} from "react";

interface TeamMemberCardProps {
    image: StaticImageData;
    name:
        | string
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactNodeArray;
    role: string;
}

const TeamMemberCard: FC<TeamMemberCardProps> = ({ image, name, role }) => {
    return (
        <div
            className={`bg-tertiary flex flex-col items-center gap-3 p-7 rounded-3xl`}
        >
            <div className="flex justify-center items-center min-w-20 w-40 min-h-20 h-40 rounded-full overflow-hidden">
                <Image src={image} alt="member image" height={160} />
            </div>
            <div className="flex flex-col gap-1 items-center">
                <h3 className="text-center text-xl tracking-wide whitespace-nowrap">
                    {name}
                </h3>
                <p className="font-light text-center text-sm tracking-wide">
                    {role}
                </p>
            </div>
        </div>
    );
};

export default TeamMemberCard;
