"use client";

import { Button, Container, HeaderNavigation, Logo } from "@/shared/components";
import { cn } from "@/shared/lib";

export const Header = () => {
    return (
        <header>
            <Container className={cn(
                "flex justify-between items-center"
            )}>
                <Logo />
                <HeaderNavigation />
                <Button
                    variant="header"
                    className={cn(
                        "max-w-[29.423rem] text-left",
                        "max-tablet:max-w-[16.5rem]"
                    )}>
                    Записатись на безкоштовне заняття
                </Button>
            </Container>
        </header>
    )
}