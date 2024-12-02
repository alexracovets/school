"use client";

import { ChildrenType } from "@/shared/types";
import { cn } from "@/shared/lib";

export const Container = ({ children, className }: ChildrenType) => {
    return (
        <div className={cn(
            "w-full relative",
            'px-[6rem]',
            'max-tablet:px-[4rem]',
            className
        )}>
            {children}
        </div>
    )
}