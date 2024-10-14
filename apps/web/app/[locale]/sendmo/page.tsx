import Footer from "@/components/sendmo/layouts/Footer";
import Header from "@/components/sendmo/layouts/Header";
import AdvantagesSection from "@/components/sendmo/sections/AdvantagesSection";
import ContactSection from "@/components/sendmo/sections/ContactSection";
import DownloadAppSection from "@/components/sendmo/sections/DownloadAppSection";
import FaqSection from "@/components/sendmo/sections/FaqSection";
import FeaturesSection from "@/components/sendmo/sections/FeaturesSection";
import HeroSection from "@/components/sendmo/sections/HeroSection";
import PaymentMethodsSection from "@/components/sendmo/sections/PaymentMethodsSection";
import WelcomeToSendmoSection from "@/components/sendmo/sections/WelcomeToSendmoSection";
import { headerLinks } from "@/data/sendmo/headerLinks";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("SendmoPage");
    const translatedHeaderLinks: { text: string; url: string }[] =
        headerLinks.map((link) => ({
            text: t(`Header.${link.text}`),
            url: link.url,
        }));
    return (
        <main className="flex flex-col items-center">
            <Header
                headerLinks={translatedHeaderLinks}
                downloadApp={t("Header.Download App")}
            />
            <HeroSection />
            <WelcomeToSendmoSection />
            <FeaturesSection />
            <AdvantagesSection />
            <PaymentMethodsSection />
            <DownloadAppSection />
            <ContactSection />
            <FaqSection />
            <Footer />
        </main>
    );
}
