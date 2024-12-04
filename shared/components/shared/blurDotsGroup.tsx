"use client";

import { BlurDot } from "@/shared/components";
import { cn } from "@/shared/lib";

export const BlurDotsGroup = () => {

    const dots = [
        {
            position: cn(
                "top-[12rem] right-[9.5rem]",
                "max-tablet:top-[6.5rem] max-tablet:right-[2.03rem]",
                "max-mobile:top-[30.2rem] max-mobile:right-[2.1rem]"
            ),
            size: cn(
                "w-[24.068rem] h-[35.472rem]",
                "max-tablet:w-[13.624rem] max-tablet:h-[20.08rem]",
                "max-mobile:w-[14rem] max-mobile:h-[19.7rem]"
            ),
            blur: cn(
                "blur-[12rem]",
                "max-tablet:blur-[6rem]",
                "max-mobile:blur-[7rem]"
            ),
            color: "bg-regal-dot-blue",
        },
        {
            position: cn(
                "top-[24rem] right-[6rem]",
                "max-tablet:top-[14rem] max-tablet:right-0",
                "max-mobile:top-[37rem]"
            ),
            size: cn(
                "w-[15.602rem] h-[22.994rem]",
                "max-tablet:w-[8.832rem] max-tablet:h-[13.016rem]",
                "max-mobile:w-[9.074rem] max-mobile:h-[12.77rem]"
            ),
            blur: cn(
                "blur-[12rem]",
                "max-tablet:blur-[6rem]",
                "max-mobile:blur-[7rem]"
            ),
            color: "bg-regal-dot-blue",
        },
        {
            position: cn(
                "top-[12rem] right-[60rem]",
                "max-tablet:top-[6.5rem] max-tablet:right-[31rem]",
                "max-mobile:top-[30.2rem] max-mobile:right-auto max-mobile:left-0"
            ),
            size: cn(
                "w-[10.039rem] h-[14.795rem]",
                "max-tablet:w-[5.683rem] max-tablet:h-[8.375rem]",
                "max-mobile:w-[5.838rem] max-mobile:h-[8.217rem]"
            ),
            blur: cn(
                "blur-[12rem]",
                "max-tablet:blur-[6rem]",
                "max-mobile:blur-[7rem]"
            ),
            color: "bg-regal-dot-red",
        }
    ]

    return (
        <>
            {
                dots.map((dot, idx) => {
                    return (
                        <BlurDot key={idx} position={dot.position} size={dot.size} blur={dot.blur} color={dot.color} />
                    )
                })
            }
        </>

    )
}