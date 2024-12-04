"use client";

import { BlurRing } from "@/shared/components";
import { cn } from "@/shared/lib";

export const BlurRingsGroup = () => {

    const rings = [
        {
            position: cn(
                "top-[9.685rem] right-[1.5rem]",
                "max-tablet:top-[2rem] max-tablet:right-[-4rem]",
                "max-mobile:top-[35.5rem] max-mobile:right-[27.5rem]"
            ),
            blurRing: cn(
                "right-0 top-0 w-[21.069rem] h-[18.86rem] blur-[8rem]",
                "max-tablet:w-[12.113rem] max-tablet:h-[10.843rem] max-tablet:blur-[4.5rem]"
            ),
            borderRing: cn(
                "right-0 top-0 w-[22.768rem] h-[21.918rem] border-[0.17rem]",
                "max-tablet:w-[13.09rem] max-tablet:h-[12.601rem] max-tablet:border-[0.1rem]"
            )
        },
        {
            position: cn(
                "top-[63rem] left-[-7rem]",
                "max-tablet:top-[33rem] max-tablet:left-[0rem]",
                "max-mobile:top-[68rem] max-mobile:left-[22rem]"
            ),
            blurRing: cn(
                "left-0 top-0 w-[21.069rem] h-[18.86rem] blur-[8rem]",
                "max-tablet:w-[12.113rem] max-tablet:h-[10.843rem] max-tablet:blur-[4.5rem]"
            ),
            borderRing: cn(
                "left-0 top-0 w-[22.768rem] h-[21.918rem] border-[0.17rem]",
                "max-tablet:w-[13.09rem] max-tablet:h-[12.601rem] max-tablet:border-[0.1rem]"
            )
        }
    ]

    return (
        <>
            {
                rings.map((item, idx) => {
                    return (
                        <BlurRing key={idx} position={item.position} blurRing={item.blurRing} borderRing={item.borderRing} />
                    )
                })
            }
        </>
    )
}