"use client";

import Link from "next/link";

export const HeaderNavigation = () => {

    const links = [
        {
            name: 'Хто ми?',
            path: "/",
            to: "#start"
        },
        {
            name: 'Ціни',
            path: "/",
            to: "#start"
        },
        {
            name: 'Питання',
            path: "/",
            to: "#start"
        },
        {
            name: 'Відгуки',
            path: "/",
            to: "#start"
        }
    ]

    return (
        <nav className="hidden">
            <ul className="flex text-[3.058rem] font-[400] font-kyiv_titling gap-[10rem]">
                {links.map((item, idx) => {
                    return (
                        <li key={idx}>
                            <Link href={item.path}>
                                {item.name}
                            </Link>
                        </li>
                    )
                })
                }
            </ul>
        </nav>
    )
}