'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

type Props = {
    label: string,
    href: string,
    icon: React.ReactNode
}
const SidebarLink = (item: Props) => {
    const pathname = usePathname();
    let linkClass = 'flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
    if (pathname === item.href) {
        linkClass += ' bg-gray-100 dark:bg-gray-800';
    }

    return (
        <Link className={linkClass} href={item.href}>
            {item.icon}
            {item.label}
        </Link>
    )
}

export default SidebarLink