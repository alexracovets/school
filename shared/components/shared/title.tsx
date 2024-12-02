"use client";

import { ChildrenType } from "@/shared/types";
import { cn } from "@/shared/lib";

export const Title = ({ children, className }: ChildrenType) => {

    return (
        <h2
            className={cn(
                "text-[6.6rem] text-center font-kyiv_titling mb-[10rem]",
                "max-tablet:text-[3.8rem] max-tablet:mb-[6.5rem]",
                "max-mobile:text-[2.6rem] max-mobile:mb-[3.2rem]",
                className
            )}
        >
            {children}
        </h2>
    )
}