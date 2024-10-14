"use client";
import React, { useEffect } from "react";
import avatar1 from "@/public/assets/avatar-1.png";
import avatar2 from "@/public/assets/avatar-2.png";
import avatar3 from "@/public/assets/avatar-3.png";
import Autoplay from "embla-carousel-autoplay";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";
import TeamMemberCard from "../cards/TeamMemberCard";

const TeamCarousel = () => {
    const t = useTranslations("SoftwareDevelopmentPage.MeetExpertsSection");
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <div className="flex flex-col w-full min-[950px]:min-w-0 max-w-2xl gap-4">
            <Carousel
                setApi={setApi}
                opts={{ loop: true }}
                plugins={[
                    Autoplay({
                        delay: 4000,
                    }),
                ]}
            >
                <CarouselContent>
                    <CarouselItem className="basis-full min-[950px]:basis-1/2 min-[1280px]:basis-1/3">
                        <TeamMemberCard
                            image={avatar1}
                            name={t.rich("card1.name", {
                                span: (chunks) => (
                                    <span className="font-semibold">
                                        {chunks}
                                    </span>
                                ),
                            })}
                            role={t("card1.role")}
                        />
                    </CarouselItem>
                    <CarouselItem className="basis-full min-[950px]:basis-1/2 min-[1280px]:basis-1/3">
                        <TeamMemberCard
                            image={avatar2}
                            name={t.rich("card2.name", {
                                span: (chunks) => (
                                    <span className="font-semibold">
                                        {chunks}
                                    </span>
                                ),
                            })}
                            role={t("card2.role")}
                        />
                    </CarouselItem>
                    <CarouselItem className="basis-full min-[950px]:basis-1/2 min-[1280px]:basis-1/3">
                        <TeamMemberCard
                            image={avatar3}
                            name={t.rich("card3.name", {
                                span: (chunks) => (
                                    <span className="font-semibold">
                                        {chunks}
                                    </span>
                                ),
                            })}
                            role={t("card3.role")}
                        />
                    </CarouselItem>
                    <CarouselItem className="basis-full min-[950px]:basis-1/2 min-[1280px]:basis-1/3">
                        <TeamMemberCard
                            image={avatar3}
                            name={t.rich("card3.name", {
                                span: (chunks) => (
                                    <span className="font-semibold">
                                        {chunks}
                                    </span>
                                ),
                            })}
                            role={t("card3.role")}
                        />
                    </CarouselItem>
                </CarouselContent>
                {/* <CarouselPrevious className="border-none text-primary-blue hover:text-primary-blue" />
                    <CarouselNext className="border-none text-primary-blue hover:text-primary-blue" /> */}
            </Carousel>
            <div className="flex justify-center w-full gap-3">
                {Array.from({ length: count }).map((_, index) => (
                    <div
                        key={index}
                        className={`${
                            index == current
                                ? "bg-primary-blue"
                                : "bg-[#EAEAEA]"
                        } p-[5px] rounded-full`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default TeamCarousel;
