"use client";

import { ChildrenType } from "@/shared/types";
import { cn } from "@/shared/lib";

export const Title = ({ children, className }: ChildrenType) => {

    return (
        <h2
            className={cn(
                "text-[6.6rem] text-center font-kyiv_titling mb-[10rem]",
                className
            )}
        >
            {children}
        </h2>
    )
}