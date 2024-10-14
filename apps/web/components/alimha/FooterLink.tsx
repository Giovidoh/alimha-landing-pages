import Link from "next/link";
import React from "react";

interface FooterLinkProps {
    href?: string;
    text?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({
    href = "#",
    text = "FooterLink",
}) => {
    return (
        <Link
            href={href}
            className="font-light text-sm lg:text-base min-[1200px]:text-lg text-pretty tracking-wide"
        >
            {text}
        </Link>
    );
};

export default FooterLink;
