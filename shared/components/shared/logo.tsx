import { cn } from "@/shared/lib";
import Image from "next/image";

export const Logo = () => {
    return (
        <div className={cn(
            "relative w-[15.859rem] h-[11.606rem]"
        )}>
            <Image alt="logo" src="/logo.png" fill priority/>
        </div >
    )
}