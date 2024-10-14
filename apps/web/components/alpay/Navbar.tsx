"use client";
import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
    headerLinks: { text: string; url: string }[];
}

const Navbar: FC<NavbarProps> = ({ headerLinks }) => {
    const [activeLink, setActiveLink] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        headerLinks.forEach(
            (link, index) => link.url == pathname && setActiveLink(index)
        );
    }, [headerLinks, pathname]);

    return (
        <nav className="w-full">
            <ul className="flex flex-col min-[1000px]:flex-row justify-between items-center w-full gap-4 max-[1000px]:pb-3">
                {headerLinks.map((link, index) => (
                    <li
                        key={index}
                        className={`${
                            activeLink == index
                                ? "text-secondary-blue scale-105"
                                : "hover:text-secondary-blue hover:scale-105 transition"
                        } list-none max-[1200px]:text-sm whitespace-nowrap`}
                        onClick={() => setActiveLink(index)}
                    >
                        <Link href={link.url}>{link.text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
