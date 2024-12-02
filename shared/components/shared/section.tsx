"use client";

import { ChildrenType } from "@/shared/types";
import { cn } from "@/shared/lib";

export const Section = ({ children, id, className }: ChildrenType) => {
    return (
        <section id={id}
            className={cn(
                "py-[4rem] overflow-hidden",
                "max-tablet:py-[3rem]",
                "max-mobile:py-[1.7rem]",
                className
            )}
        >
            {children}
        </section>
    )
}