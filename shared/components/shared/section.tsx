"use client";

import { ChildrenType } from "@/shared/types";
import { cn } from "@/shared/lib";

export const Section = ({ children, id, className }: ChildrenType) => {
    return (
        <section id={id}
            className={cn(
                "py-[4rem] overflow-hidden",
                className
            )}
        >
            {children}
        </section>
    )
}