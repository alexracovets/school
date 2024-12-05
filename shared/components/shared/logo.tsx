"use client";

import { cn } from "@/shared/lib";

export const Logo = () => {
    return (

        <h1 className={cn(
            "text-[3rem] text-regal-white text-center font-milks_casual flex flex-col justify-center items-center logo select-none",
            "max-tablet:text-[2.5rem]",
            "max-mobile:text-[2rem]"
        )}>
            <span className={cn(
                "tracking-[.5rem] leading-[1] border-b-[#2480c3] border-b-[.3rem] inline-block w-full name",
                "max-tablet:tracking-[.4rem]",
                "max-mobile:border-b-[3px]"
            )}>
                Aptly
            </span>
            <span className={cn(
                "leading-[1] inline-block w-full pt-[.2rem] school",
                "max-tablet::pt-[.1rem] max-tablet:tracking-[0.05rem]",
            )}>
                SChool
            </span>
        </h1>
    )
}