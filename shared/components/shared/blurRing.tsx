"use client";

import { cn } from "@/shared/lib";
import { useEffect, useState } from "react";

interface BlurDotType {
    position: string;
    blurRing: string;
    borderRing: string;
}

export const BlurRing = ({ position, blurRing, borderRing }: BlurDotType) => {

    return (
        <div
            className={cn(
                "absolute z-[-1] pointer-events-none",
                position
            )}
        >
            <div className="relative">
                <div
                    className={cn(
                        "absolute border-[#2480C3] rounded-[50%]",
                        borderRing
                    )}
                />
                <div
                    className={cn(
                        "absolute bg-[#93D1FE] rounded-[50%]",
                        blurRing
                    )}
                />

            </div>
        </div>
    )
}