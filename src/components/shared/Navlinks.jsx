"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { use } from 'react';

const Navlinks = ({ href, children }) => {
    const pathName = usePathname();

    const isActive = pathName === href;
    return (
        <Link href={href} className={`${isActive ? "text-primary font-bold" : ""} hover:text-primary transition-colors duration-300`}>
            {children}
        </Link>
    );
};

export default Navlinks;