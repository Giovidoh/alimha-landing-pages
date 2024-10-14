import React from "react";
import Badge from "../badges/Badge";
import IconTextCard from "../cards/IconTextCard";
import ThumbUpIcon from "@/public/assets/thumb-up-icon.svg";
import TimeIcon from "@/public/assets/time-icon.svg";
import AdvancedSecurityIcon from "@/public/assets/advanced-security-icon.svg";
import MultideviseFlexibilityIcon from "@/public/assets/multidevise-flexibility-icon.svg";
import Button from "../buttons/Button";
import Image from "next/image";
import blackManImage from "@/public/assets/black-man-image.png";
import StickGraphIcon from "@/public/assets/stick-graph-icon.svg";
import GraphIcon from "@/public/assets/graph-icon.svg";
import SvgIconsCollection from "../SvgIconsCollection";
import { useTranslations } from "next-intl";

const AdvantagesSection = () => {
    const t = useTranslations("SendmoPage.AdvantagesSection");
    return (
        <section
            id="advantages_section"
            className="flex flex-col min-[1300px]:flex-row justify-between items-center bg-gray-50 w-full px-5 sm:px-20 min-[1120px]:px-40 pt-20 pb-28"
        >
            <div className="flex flex-col items-center min-[1300px]:items-start w-full min-[1300px]:w-1/2 gap-4">
                <div className="mb-5">
                    <Badge text={t("tag")} />
                </div>
                <h2 className="text-2xl md:text-4xl text-center min-[1300px]:text-start leading-snug font-bold tracking-wide">
                    {t("heading.first")}
                    <br className="hidden min-[1300px]:block" />{" "}
                    {t("heading.second")}
                </h2>
                <div className="flex flex-col gap-2 mb-3">
                    <div>
                        <IconTextCard
                            icon={<ThumbUpIcon />}
                            title={t("card1.title")}
                            body={t("card1.description")}
                        />
                    </div>
                    <div>
                        <IconTextCard
                            icon={<TimeIcon />}
                            title={t("card2.title")}
                            body={t("card2.description")}
                        />
                    </div>
                    <div>
                        <IconTextCard
                            icon={<AdvancedSecurityIcon />}
                            title={t("card3.title")}
                            body={t("card3.description")}
                        />
                    </div>
                    <div>
                        <IconTextCard
                            icon={<MultideviseFlexibilityIcon />}
                            title={t("card4.title")}
                            body={t("card4.description")}
                        />
                    </div>
                </div>
                <Button text={t("Download App")} className="px-7 py-4" />
            </div>
            <div className="hidden min-[1300px]:block relative w-1/2">
                <Image src={blackManImage} alt="black man image" />
                <div className="absolute top-0 right-14">
                    <SvgIconsCollection
                        icons={[<StickGraphIcon key={"stickGraphIcon"} />]}
                    />
                </div>
                <div className="absolute -bottom-8 left-7">
                    <SvgIconsCollection
                        icons={[<GraphIcon key={"graphIcon"} />]}
                    />
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;
