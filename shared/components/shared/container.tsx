import { cn } from "@/shared/lib";

import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
}

export const Container = ({ children, className }: Props) => {
    return (
        <div className={cn(
            "w-full relative",
            'max-w-[144rem] px-[6rem]',
            className
        )}>
            {children}
        </div>
    )
}