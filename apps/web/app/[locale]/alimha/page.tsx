import ContactUsSection from "@/components/alimha/sections/ContactUsSection";
import HeroSection from "@/components/alimha/sections/HeroSection";
import OurServicesSection from "@/components/alimha/sections/OurServicesSection";
import TheyTrustUsSection from "@/components/alimha/sections/TheyTrustUsSection";
import AboutUsSection from "@/components/alimha/sections/AboutUsSection";
import WhyUsSection from "@/components/alimha/sections/WhyUsSection";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("AlimhaPage");
    return (
        <main className="w-full h-fit">
            <HeroSection />
            <OurServicesSection />
            <AboutUsSection />
            <WhyUsSection />
            <TheyTrustUsSection
                tag={t("TheyTrustUsSection.tag")}
                title={t("TheyTrustUsSection.heading")}
                description={t("TheyTrustUsSection.description")}
            />
            <ContactUsSection />
        </main>
    );
}
