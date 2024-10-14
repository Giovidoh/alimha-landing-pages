import Image from "next/image";
import React, { FC } from "react";
import orange_money from "@/public/assets/orange-money.png";
import wave from "@/public/assets/wave.png";
import moov_money from "@/public/assets/moov-money.png";
import mtn_momo from "@/public/assets/mtn-momo.png";
import free_money from "@/public/assets/free-money.png";
import tmoney from "@/public/assets/tmoney.png";

interface ApplicationSectionProps {
    tag: string;
    heading: string;
}

const ApplicationSection: FC<ApplicationSectionProps> = ({ tag, heading }) => {
    return (
        <section className="relative flex flex-col justify-evenly items-center w-full h-fit px-5 sm:px-20 min-[1120px]:px-40 pt-12 pb-24 gap-3">
            <span className="font-medium text-base sm:text-lg text-primary-blue">
                {tag}
            </span>
            <h1 className="font-bold text-2xl sm:text-3xl min-[1000px]:text-4xl text-center mb-8">
                {heading}
            </h1>
            {/* Small devices */}
            <div className="flex min-[880px]:hidden flex-wrap justify-between items-center w-full gap-3">
                <Image src={orange_money} alt="orange money icon" height={25} />
                <Image src={wave} alt="wave icon" height={40} />
                <Image src={moov_money} alt="moov money icon" height={40} />
                <Image src={mtn_momo} alt="mtn momo icon" height={35} />
                <Image src={free_money} alt="free money icon" height={62.5} />
                <Image src={tmoney} alt="tmoney icon" height={37.5} />
            </div>
            <div className="hidden min-[880px]:flex flex-wrap justify-between items-center w-full gap-3">
                {/* Large devices */}
                <Image src={orange_money} alt="orange money icon" height={55} />
                <Image src={wave} alt="wave icon" height={80} />
                <Image src={moov_money} alt="moov money icon" height={80} />
                <Image src={mtn_momo} alt="mtn momo icon" height={70} />
                <Image src={free_money} alt="free money icon" height={125} />
                <Image src={tmoney} alt="tmoney icon" height={75} />
            </div>
        </section>
    );
};

export default ApplicationSection;
