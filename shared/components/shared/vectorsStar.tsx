"use client";

import { cn } from "@/shared/lib";
import Image from "next/image";

export const VectorsStar = () => {

    return (
        <div
            className={cn(
                "absolute",
                "top-[3rem] right-[28.752rem] max-tablet:top-[1.4rem] max-tablet:right-[16rem] max-mobile:top-[.7rem] max-mobile:right-[2rem]",
                "w-[13rem] h-[13.4rem] max-tablet:w-[7.4rem] max-tablet:h-[7.2rem] max-mobile:w-[5.3rem] max-mobile:h-[5.5rem]"
            )}
        >
            <Image src="/vectors/star.png" alt="star" fill className="object-cover animate-echo duration-3000" />
            <Image src="/vectors/star.png" alt="star" fill className="object-cover animate-beat duration-3000" />
        </div>
    )
}