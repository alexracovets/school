"use client";

import { useCallback, useEffect, useRef, useState, useImperativeHandle, forwardRef } from "react";
import Link from "next/link";

import { Drawer, DrawerContent, DrawerTitle, DrawerHeader, DrawerDescription, Separator } from "@/shared/components";
import useResponsive from '@/store/useResponsive';
import useNavMenu from '@/store/useNavMenu';
import { cn } from "@/shared/lib";

interface NavType {
    closeHeadroom: () => void;
}

export const HeaderNavigation = forwardRef(({ closeHeadroom }: NavType, ref) => {
    const isOpen = useNavMenu(state => state.isOpen);
    const setIsOpen = useNavMenu(state => state.setIsOpen);
    const headerHeight = useNavMenu(state => state.headerHeight);
    const isTablet = useResponsive(state => state.isTablet);
    const isMobile = useResponsive(state => state.isMobile);
    const [underlineStyles, setUnderlineStyles] = useState({ left: '0px', width: '0px' });
    const activeLink = useNavMenu(state => state.activeLink);
    const menuRef = useRef<HTMLUListElement>(null);

    const links = [
        {
            name: 'Хто ми?',
            path: "/#about",
            id: "aboutLink"
        },
        {
            name: 'Ціни',
            path: "/#price",
            id: "priceLink"
        },
        {
            name: 'Питання',
            path: "/#questions",
            id: "questionsLink"
        },
        {
            name: 'Відгуки',
            path: "/#feed_back",
            id: "feedBackLink"
        }
    ]

    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const linkRect = e.currentTarget.getBoundingClientRect();
        const menuRect = menuRef.current?.getBoundingClientRect();
        if (menuRect) {
            setUnderlineStyles({
                left: `${linkRect.left - menuRect.left}px`,
                width: `${linkRect.width}px`
            });
        }
    };

    const handleMouseLeave = useCallback(() => {
        const activeElement = document.getElementById(activeLink);
        const menuRect = menuRef.current?.getBoundingClientRect();
        if (activeElement && menuRect) {
            const linkRect = activeElement.getBoundingClientRect();
            setUnderlineStyles({
                left: `${linkRect.left - menuRect.left}px`,
                width: `${linkRect.width}px`
            });
        } else {
            setUnderlineStyles({
                left: `0px`,
                width: `0px`
            });
        }
    }, [activeLink]);

    useImperativeHandle(ref, () => ({
        handleMouseLeave,
    }));

    useEffect(() => {
        handleMouseLeave();
    }, [activeLink, handleMouseLeave]);

    useEffect(() => {
        if (!isMobile && !isTablet) {
            setIsOpen(false);
        }
    }, [isMobile, isTablet, setIsOpen]);

    return (
        <>
            <Drawer open={isOpen} onOpenChange={setIsOpen} direction='right'>
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
                        <ul
                            className={cn(
                                "flex flex-col min-w-[50vw]",
                                "max-mobile:min-w-[100vw] max-mobile:w-full"
                            )}
                        >
                            {links.map((item, idx) => {
                                return (
                                    <li key={idx} className="w-full">
                                        <Link
                                            id={item.id}
                                            href={item.path}
                                            onClick={() => {
                                                closeHeadroom();
                                                setIsOpen(false);
                                            }}
                                            passHref
                                            className={cn(
                                                "flex text-[1.6rem] font-kyiv_titling leading-1 px-[1.6rem] py-[1.5rem] w-full",
                                                item.id === activeLink ? "bg-[#D5EEFF]" : "bg-regal-light-blue-fourd",
                                                "hover:bg-[#D5EEFF]"
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
            <nav
                ref={menuRef}
                className="relative max-tablet:hidden"
            >
                <div
                    style={underlineStyles}
                    className={cn(
                        'absolute bottom-[-.5rem] h-[0.3rem] bg-[#2480c3] transition-all ease-out duration-300',
                        'max-tablet:h-[0.1rem]'
                    )} />
                <ul
                    className="flex text-[3.058rem] font-[400] font-kyiv_titling gap-[9.5rem]"
                >
                    {links.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <Link
                                    id={item.id}
                                    href={item.path}
                                    passHref
                                    onMouseEnter={handleMouseEnter}
                                    onClick={() => {
                                        closeHeadroom();
                                        setIsOpen(false);
                                    }}
                                    className="block p-[.5rem] hover:scale-[1.1] transition ease-in-out duration-300 will-change-transform"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })
                    }
                </ul>
            </nav>
        </>
    );
});

HeaderNavigation.displayName = "HeaderNavigation";