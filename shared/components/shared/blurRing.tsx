"use client";

import { cn } from "@/shared/lib";
import { useEffect, useState } from "react";

interface BlurDotType {
    position: string;
    blurRing: string;
    borderRing: string;
}

export const BlurRing = ({ position, blurRing, borderRing }: BlurDotType) => {
    const [translateBorder, setTranslateBorder] = useState({ x: 0, y: 0 });
    const [translateBlur, setTranslateBlur] = useState({ x: 0, y: 0 });

    const getRandom = () => {
        return Math.random() * 100 - 50;
    }

    const updatePositions = () => {
        setTranslateBorder({ x: getRandom(), y: getRandom() });
        setTranslateBlur({ x: getRandom(), y: getRandom() });
    };

    useEffect(() => {
        updatePositions();

        const interval = setInterval(() => {
            updatePositions();
        }, 10000);

        return () => clearInterval(interval);
    }, []);

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
                        "absolute border-[#2480C3] rounded-[50%] transition ease-linear duration-10000",
                        borderRing
                    )}
                    style={{
                        transform: `translate(${translateBorder.x}%, ${translateBorder.y}%)`
                    }}
                />
                <div
                    className={cn(
                        "absolute bg-[#93D1FE] rounded-[50%] transition ease-linear duration-10000",
                        blurRing
                    )}
                    style={{
                        transform: `translate(${translateBlur.x}%, ${translateBlur.y}%)`
                    }}
                />

            </div>
        </div>
    )
}