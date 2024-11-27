"use client";

import { ChildrenType } from "@/shared/types";
import { cn } from "@/shared/lib";

export const Container = ({ children, className }: ChildrenType) => {
    return (
        <div className={cn(
            "w-full relative",
            'max-w-[144rem] px-[6rem]',
            className
        )}>
            {children}
        </div>
    )
}