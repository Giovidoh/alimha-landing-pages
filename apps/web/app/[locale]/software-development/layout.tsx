import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/softwareDevelopmentGlobals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Header from "@/components/software-development/layouts/Header";
import Footer from "@/components/software-development/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Software Development",
    description:
        "Welcome to Alimha and Company - Your trusted partner in technology solutions. Transform your ideas into innovative realities with our expertise, creativity, and cutting-edge technology. We combine these elements to turn your visions into concrete solutions.",
};

export default async function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    const localActive = await getLocale();

    return (
        <html lang="en" dir={localActive == "ar" ? "rtl" : "ltr"}>
            <body className={inter.className}>
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    {children}
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
