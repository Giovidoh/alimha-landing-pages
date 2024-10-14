"use client";
import React, { useEffect } from "react";
import soudhuLogo from "@/public/assets/soudhu-logo.png";
import welichangeLogo from "@/public/assets/welichange-logo.png";
import alpayLogo from "@/public/assets/alpay-logo.png";
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
import ProjectCard from "../cards/ProjectCard";

const ProjectsCarousel = () => {
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
                <CarouselContent className="-ml-1 p-2">
                    <CarouselItem className="basis-[60%]">
                        <div className="h-[100px] min-[950px]:h-[150px] pl-1">
                            <ProjectCard image={soudhuLogo} />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-[60%]">
                        <div className="h-[100px] min-[950px]:h-[150px] pl-1">
                            <ProjectCard image={welichangeLogo} />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-[60%]">
                        <div className="h-[100px] min-[950px]:h-[150px] pl-1">
                            <ProjectCard image={alpayLogo} />
                        </div>
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

export default ProjectsCarousel;
