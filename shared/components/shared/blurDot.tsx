"use client";

import { cn } from "@/shared/lib";
import { useEffect, useState } from "react";

interface BlurDotType {
    className: string;
}

export const BlurDot = ({ className }: BlurDotType) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const randomX = Math.random() * 100 - 50;
            const randomY = Math.random() * 100 - 50;

            setPosition({
                x: randomX,
                y: randomY,
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={cn(
                "absolute z-[-1] rounded-[50%] transition ease-linear duration-2000 pointer-events-none",
                className
            )}
            style={{
                transform: `translate(${position.x}%, ${position.y}%)`
            }}
        />
    )
}