"use client";

import { cn } from "@/shared/lib";
import { useEffect, useState } from "react";

interface BlurDotType {
    position: string;
    size: string;
    blur: string;
    color: string;
}

export const BlurDot = ({ position, size, blur, color }: BlurDotType) => {
    const [translate, setTranslate] = useState({ x: 0, y: 0 });

    const getRandom = (shift: number) => {
        return Math.random() * 100 - shift;
    }

    const updatePositions = () => {
        setTranslate({ x: getRandom(70), y: getRandom(50) });
    };

    useEffect(() => {
        updatePositions();

        const interval = setInterval(() => {
            updatePositions();
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={cn(
                "absolute z-[-1] rounded-[50%] transition ease-linear duration-2000 pointer-events-none",
                position,
                size,
                blur,
                color
            )}
            style={{
                transform: `translate(${translate.x}%, ${translate.y}%)`
            }}
        />
    )
}