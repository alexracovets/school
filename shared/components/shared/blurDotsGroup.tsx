"use client";

import { BlurDot } from "@/shared/components";

interface Dot {
    position: string;
    size: string;
    blur: string;
    color: string;
};

interface BlurDotsGroupProps {
    dots: Dot[];
};

export const BlurDotsGroup = ({ dots }: BlurDotsGroupProps) => {

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