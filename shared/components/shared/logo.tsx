"use client";

import { cn } from "@/shared/lib";
import Image from "next/image";

export const Logo = () => {
    return (
        <div className={cn(
            "relative w-[15.859rem] h-[11.606rem]",
            "max-tablet:w-[14.296rem] max-tablet:h-[8rem]",
            "max-mobile:w-[10.874rem] max-mobile:h-[6.188rem]"
        )}>
            <Image alt="logo" src="/logo.png" fill priority className="object-cover object-center" />
        </div >
    )
}