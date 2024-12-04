"use client";

import { useEffect, useRef, useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react';
import Headroom from 'react-headroom';

import { Button, Container, HeaderNavigation, Logo } from "@/shared/components";
import useResponsive from '@/store/useResponsive';
import useFormState from '@/store/useFormState';
import useNavMenu from '@/store/useNavMenu';
import { cn } from "@/shared/lib";

export const Header = () => {
    const isOpen = useNavMenu(state => state.isOpen);
    const setIsOpen = useNavMenu(state => state.setIsOpen);
    const setHeaderHeight = useNavMenu(state => state.setHeaderHeight);
    const headerRef = useRef<HTMLDivElement | null>(null);
    const isTablet = useResponsive(state => state.isTablet);
    const isMobile = useResponsive(state => state.isMobile);
    const setActiveForm = useFormState(state => state.setIsActive);
    const [isPin, setIsPin] = useState(false);
    const [burgerSize, setBurgerSize] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.clientHeight);
                const currentResposive = isMobile ? 375 : isTablet ? 837 : 1440;
                setBurgerSize(window.innerWidth / (currentResposive) * 21)
            }
        };

        handleResize();

        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                handleResize();
            }
        };

        window.addEventListener('resize', handleResize);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [isTablet, isMobile, setHeaderHeight]);
    console.log(isPin)
    return (
        <header
            ref={headerRef}
            className="relative z-[2]"
        >
            <Headroom
                onPin={() => setIsPin(true)}
                onUnpin={() => setIsPin(false)}
                onUnfix={() => setIsPin(false)}
            >
                <Container className={cn(
                    "w-full transition ease-in duration-300",
                    isPin ? "bg-regal-white" : "bg-transparent"
                )}
                >
                    <div
                        className={cn(
                            "flex justify-between items-center relative z-[50]"
                        )}
                    >
                        <Logo />
                        <HeaderNavigation />
                        <div
                            className={cn(
                                "flex justify-center items-center gap-x-[4rem]",
                                "max-mobile:gap-x-[3rem]"
                            )}
                        >
                            <Button
                                variant="header"
                                className={cn(
                                    "max-w-[29.423rem] text-left",
                                    "max-tablet:max-w-[16.5rem]",
                                    "max-mobile:max-w-[15.8rem]"
                                )}
                                onClick={() => setActiveForm(true)}
                            >
                                Записатись на безкоштовне заняття
                            </Button>
                            <div className={cn(
                                'hidden max-tablet:block'
                            )}>
                                <Hamburger toggled={isOpen} toggle={setIsOpen} color="#171717" size={burgerSize} />
                            </div>
                        </div>
                    </div>
                </Container>
            </Headroom>
        </header >
    )
}