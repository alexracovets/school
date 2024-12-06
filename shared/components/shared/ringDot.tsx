"use client";

import { cn } from "@/shared/lib";

export const RingDot = () => {

    return (
        <div className={cn(
            "absolute z-[-1] rounded-[50%] flex justify-center items-center animate-hideIn origin-right",
            "bg-[#DEF1FE]",
            "max-mobile:z-[-2]",
            "top-0 right-0 max-mobile:top-auto max-mobile:bottom-[2.027rem]",
            "w-[33.1rem] h-[33.1rem] max-tablet:w-[21.992rem] max-tablet:h-[19.717rem] max-mobile:w-[19.95rem] max-mobile:h-[17.887rem]",

        )}>
            <div className={cn(
                "w-[60%] h-[60%] rounded-[50%] border-[#2480C3] border-[.2rem] animate-ping duration-3000 max-mobile:border-[.1rem]",
            )} />
        </div>
    )
}