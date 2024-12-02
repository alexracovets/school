"use client";

import { cn } from "@/shared/lib";

export const ExclamationMark = () => {
    return (
        <div className={cn(
            "mx-[1.5rem] min-w-[2.43rem] max-w-[2.43rem]",
            "max-tablet:mx-[.5rem] max-tablet:min-w-[1.375rem] max-tablet:max-w-[1.375rem]"
        )}>
            <svg width="100%" height="100%" viewBox="0 0 25 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12.5144" cy="84.5775" r="6.47887" fill="#32CADE" fillOpacity="0.44" />
                <path d="M0.366455 0.352112H24.6622L18.9932 63.5211H6.03547L0.366455 0.352112Z" fill="#32CADE" fillOpacity="0.47" />
            </svg>
        </div>
    )
}