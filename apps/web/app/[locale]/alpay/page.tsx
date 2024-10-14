import Footer from "@/components/alpay/layouts/Footer";
import { headerLinks } from "@/data/alpay/headerLinks";
import Header from "@/components/alpay/layouts/Header";
import HeroSection from "@/components/alpay/sections/HeroSection";
import OurServicesSection from "@/components/alpay/sections/OurServicesSection";
import AdvantagesSection from "@/components/alpay/sections/AdvantagesSection";
import HowItWorksSection from "@/components/alpay/sections/HowItWorksSection";
import WhyUsSection from "@/components/alpay/sections/WhyUsSection";
import ApplicationSection from "@/components/alpay/sections/ApplicationSection";
import ContactUsSection from "@/components/alpay/sections/ContactUsSection";
import { Toaster } from "sonner";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("AlpayPage");
    const translatedHeaderLinks: { text: string; url: string }[] =
        headerLinks.map((link) => ({
            text: t(`Header.${link.text}`),
            url: link.url,
        }));
    return (
        <main className="flex flex-col items-center">
            <Header
                headerLinks={translatedHeaderLinks}
                contactUs={t("Header.Contact us")}
            />
            <HeroSection />
            <OurServicesSection />
            <AdvantagesSection />
            <HowItWorksSection />
            <WhyUsSection />
            <ApplicationSection
                tag={t("ApplicationSection.tag")}
                heading={t("ApplicationSection.heading")}
            />
            <ContactUsSection />
            <Footer />
            <Toaster
                toastOptions={{
                    style: {
                        fontSize: "18px",
                    },
                }}
                position="bottom-left"
                closeButton
                richColors
            />
        </main>
    );
}
