"use client";

import Link from "next/link";

import { Drawer, DrawerContent, DrawerTitle, DrawerHeader, DrawerDescription, Separator } from "@/shared/components";
import useResponsive from '@/store/useResponsive';
import useNavMenu from '@/store/useNavMenu';
import { cn } from "@/shared/lib";
import { useEffect } from "react";

export const HeaderNavigation = () => {
    const isOpen = useNavMenu(state => state.isOpen);
    const setIsOpen = useNavMenu(state => state.setIsOpen);
    const headerHeight = useNavMenu(state => state.headerHeight);
    const isTablet = useResponsive(state => state.isTablet);
    const isMobile = useResponsive(state => state.isMobile);

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

    useEffect(() => {
        if (!isMobile && !isTablet) {
            setIsOpen(false);
        }
    }, [isMobile, isTablet, setIsOpen]);

    return (
        <>
            <Drawer open={isOpen} onOpenChange={setIsOpen}  >
                <DrawerContent>
                    <DrawerHeader className='hidden'>
                        <DrawerTitle></DrawerTitle>
                        <DrawerDescription></DrawerDescription>
                    </DrawerHeader>
                    <nav
                        style={{ marginTop: headerHeight + "px" }}
                        className={cn(
                            "pointer-events-auto h-full bg-regal-white",
                            "max-mobile:w-full"
                        )}>
                        <ul className={cn(
                            "flex flex-col min-w-[50vw]",
                            "max-mobile:min-w-[100vw] max-mobile:w-full"
                        )}>
                            {links.map((item, idx) => {
                                return (
                                    <li key={idx} className="w-full">
                                        <Link
                                            href={item.path}
                                            className={cn(
                                                "flex text-[1.6rem] font-kyiv_titling leading-1 px-[1.6rem] py-[1.5rem] bg-regal-light-blue-fourd w-full"
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                        <Separator />
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </nav>
                </DrawerContent>
            </Drawer>
            <nav className="max-tablet:hidden">
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
        </>
    )
}