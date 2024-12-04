"use client";

import { BlurDot } from "@/shared/components";
import { cn } from "@/shared/lib";

export const BlurDotsGroup = () => {

    return (
        <>
            <BlurDot
                className={cn(
                    "top-[12rem] right-[9.5rem] w-[24.068rem] h-[35.472rem] bg-regal-dot-blue blur-[12rem]",
                    "max-tablet:top-[6.5rem] max-tablet:right-[2.03rem] max-tablet:w-[13.624rem] max-tablet:h-[20.08rem] max-tablet:blur-[6rem]",
                    "max-mobile:top-[30.2rem] max-mobile:right-[2.1rem] max-mobile:w-[14rem] max-mobile:h-[19.7rem] max-mobile:blur-[7rem]"
                )}
            />
            <BlurDot
                className={cn(
                    "top-[24rem] right-[6rem] w-[15.602rem] h-[22.994rem] bg-regal-dot-blue blur-[12rem]",
                    "max-tablet:top-[14rem] max-tablet:right-0 max-tablet:w-[8.832rem] max-tablet:h-[13.016rem] max-tablet:blur-[6rem]",
                    "max-mobile:top-[37rem] max-mobile:w-[9.074rem] max-mobile:h-[12.77rem] max-mobile:blur-[7rem]"
                )}
            />
            <BlurDot
                className={cn(
                    "top-[12rem] right-[60rem] w-[10.039rem] h-[14.795rem] bg-regal-dot-red blur-[12rem]",
                    "max-tablet:top-[6.5rem] max-tablet:right-[31rem] max-tablet:w-[5.683rem] max-tablet:h-[8.375rem] max-tablet:blur-[6rem]",
                    "max-mobile:top-[30.2rem] max-mobile:right-auto max-mobile:left-0 max-mobile:w-[5.838rem] max-mobile:h-[8.217rem] "
                )}
            />
        </>

    )
}