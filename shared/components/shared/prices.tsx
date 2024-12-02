"use client";

import Image from "next/image";

import { cn } from "@/shared/lib";

export const Prices = () => {
    return (
        <div className="flex justify-center">
            <div className={cn(
                "w-[50%] h-[33.1rem] flex flex-col items-center justify-center",
                "max-tablet:h-[19.812rem]"
            )}>
                <h3
                    className={cn(
                        "text-[4.4rem] leading-[1.2] font-kyiv_titling",
                        "max-tablet:text-[2.844rem] max-tablet:lowercase"
                    )}
                >
                    РЕПЕТИТОРИ
                </h3>
                <div className={cn(
                    "relative w-[2.1rem] h-[6.968rem] mt-[4rem] mb-[1.7rem]",
                    "max-tablet:h-[4.171rem] max-tablet:mt-[1.5rem] max-tablet:mb-[1rem]"
                )}>
                    <Image src={"/ui/arrow.svg"} alt="arrow" fill className="object-contain" />
                </div>
                <p
                    className={cn(
                        "text-[5.7rem] leading-[1.472] font-sawarabi",
                        "max-tablet:text-[3.413rem]"
                    )}
                >
                    300 <span
                        className={cn(
                            "text-[3.8rem]",
                            "max-tablet:text-[2.275rem]"
                        )}
                    >
                        грн/годину
                    </span>
                </p>
            </div>
            <div className={cn(
                "w-[50%] h-[33.1rem] flex flex-col items-center justify-center bg-regal-light-blue-third",
                "max-tablet:h-[19.812rem]"
            )}>
                <h3
                    className={cn(
                        "text-[4.4rem] leading-[1.2] font-kyiv_titling",
                        "max-tablet:text-[2.844rem] max-tablet:lowercase"
                    )}
                >
                    ТОП - РЕПЕТИТОРИ
                </h3>
                <div className={cn(
                    "relative w-[2.1rem] h-[6.968rem] mt-[4rem] mb-[1.7rem]",
                    "max-tablet:h-[4.171rem] max-tablet:mt-[1.5rem] max-tablet:mb-[1rem]"
                )}>
                    <Image src={"/ui/arrow.svg"} alt="arrow" fill className="object-contain" />
                </div>
                <p
                    className={cn(
                        "text-[5.7rem] leading-[1.472] font-sawarabi",
                        "max-tablet:text-[3.413rem]"
                    )}
                >
                    400 <span
                        className={cn(
                            "text-[3.8rem]",
                            "max-tablet:text-[2.275rem]"
                        )}
                    >грн/годину</span>
                </p>
            </div>
        </div>
    )
}