import React, { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState<number>(-1);
    const pathname = usePathname();
    const localActive = useLocale();
    const t = useTranslations("AlimhaPage.Header");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const navbarLinks = [
        { href: `/${localActive}/alimha#our-services`, text: t("Solutions") },
        { href: `/${localActive}/alimha#about-us`, text: t("About us") },
        { href: `/${localActive}/alimha/career`, text: t("Career") },
        { href: `/${localActive}/alimha#contact`, text: t("Contact") },
    ];

    useEffect(() => {
        navbarLinks.forEach(
            (link, index) => pathname == link.href && setActiveLink(index)
        );
    }, [pathname, navbarLinks]);

    return (
        <ul className="flex max-md:flex-col gap-5 min-[1135px]:gap-10 w-full max-w-[500px]">
            {navbarLinks.map((link, index) => (
                <Link
                    key={index}
                    href={link.href}
                    className={`${
                        activeLink == index && "text-primary-blue scale-105"
                    } text-[#171717] text-center px-1 inline-block transition-transform hover:text-primary-blue hover:scale-105`}
                    onClick={() => setActiveLink(index)}
                >
                    {link.text}
                </Link>
            ))}
        </ul>
    );
};

export default NavBar;
