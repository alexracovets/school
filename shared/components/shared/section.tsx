"use client";

import { ChildrenType } from "@/shared/types";
import { cn } from "@/shared/lib";
import { forwardRef } from "react";

export const Section = forwardRef<HTMLDivElement, ChildrenType>(
    ({ children, id, className }, ref) => {
        return (
            <section
                id={id}
                ref={ref}
                className={cn(
                    "py-[4rem] overflow-x-clip overflow-y-visible",
                    "max-tablet:py-[3rem]",
                    "max-mobile:py-[1.7rem]",
                    className
                )}
            >
                {children}
            </section>
        )
    });

Section.displayName = 'Section';