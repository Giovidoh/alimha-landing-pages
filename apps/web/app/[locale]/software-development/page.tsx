import AboutUsSection from "@/components/software-development/sections/AboutUsSection";
import ContactUsSection from "@/components/software-development/sections/ContactUsSection";
import FaqSection from "@/components/software-development/sections/FaqSection";
import HeroSection from "@/components/software-development/sections/HeroSection";
import MeetExpertsSection from "@/components/software-development/sections/MeetExpertsSection";
import ProjectsSection from "@/components/software-development/sections/ProjectsSection";
import ServicesSection from "@/components/software-development/sections/ServicesSection";
import YourProjectSection from "@/components/software-development/sections/YourProjectSection";

export default function Page() {
    return (
        <main className="w-full h-fit">
            <HeroSection />
            <ServicesSection />
            <AboutUsSection />
            <ProjectsSection />
            <YourProjectSection />
            <MeetExpertsSection />
            <ContactUsSection />
            <FaqSection />
        </main>
    );
}
