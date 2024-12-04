"use client";

import { cn } from "@/shared/lib";
import { useEffect, useState } from "react";

export const BlurDots = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const randomX = Math.random() * 10;
            const randomY = Math.random() * 10;

            setPosition({
                x: randomX,
                y: randomY,
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div
                className={cn(
                    "absolute z-[-1] right-[9.5rem] rounded-[50%] top-[12rem] w-[24.068rem] h-[35.472rem] bg-regal-dot-blue blur-[12rem]"
                )}
                style={{
                    transform: `translate(${position.x}rem, ${position.y}rem)`,
                    transition: "transform 2s ease",
                }}
            />
            <div
                className={cn(
                    "absolute z-[-1] right-[6rem] rounded-[50%] top-[24.3rem] w-[15.602rem] h-[22.994rem] bg-regal-dot-blue blur-[12rem]"
                )}
                style={{
                    transform: `translate(${position.x}rem, ${position.y}rem)`,
                    transition: "transform 2s ease",
                }}
            />
            <div
                className={cn(
                    "absolute z-[-1] right-[60rem] rounded-[50%] top-[12rem] w-[10.039rem] h-[14.795rem] bg-regal-dot-red blur-[12rem]"
                )}
                style={{
                    transform: `translate(${position.x}rem, ${position.y}rem)`,
                    transition: "transform 2s ease",
                }}
            />
        </>

    )
}