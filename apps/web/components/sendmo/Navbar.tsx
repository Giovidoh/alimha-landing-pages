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
            <ul className="flex max-[870px]:flex-col justify-between items-center w-full gap-3">
                {headerLinks.map((link, index) => (
                    <li
                        key={index}
                        className={`${
                            activeLink == index
                                ? "text-secondary-blue scale-105"
                                : "hover:text-secondary-blue hover:scale-105 transition"
                        } list-none max-[1235px]:text-sm`}
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
