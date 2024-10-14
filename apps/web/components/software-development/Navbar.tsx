import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, useState } from "react";

interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const [activeLink, setActiveLink] = useState<number>(-1);
    const pathname = usePathname();
    const localActive = useLocale();
    const t = useTranslations("SoftwareDevelopmentPage.Header");

    const navbarLinks = [
        { href: `/${localActive}/software-development`, text: t("link1") },
        {
            href: `/${localActive}/software-development#our-services`,
            text: t("link2"),
        },
        {
            href: `/${localActive}/software-development#our-achievements`,
            text: t("link3"),
        },
        {
            href: `/${localActive}/software-development#team`,
            text: t("link4"),
        },
        {
            href: `/${localActive}/software-development#contact`,
            text: t("link5"),
        },
        { href: `/${localActive}/software-development#faq`, text: t("link6") },
    ];

    return (
        <nav className={cn("flex gap-4", className)}>
            {navbarLinks.map((link, index) => (
                <Link
                    key={index}
                    href={link.href}
                    className="text-center hover:text-primary-blue hover:scale-105 transition"
                >
                    {link.text}
                </Link>
            ))}
        </nav>
    );
};

export default Navbar;
