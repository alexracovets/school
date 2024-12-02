"use client";

import Image from "next/image";

import { cn } from "@/shared/lib";

export const Prices = () => {
    return (
        <div className={cn(
            "flex justify-center",
            "max-mobile:flex-col"
        )}>
            <div className={cn(
                "w-[50%] h-[33.1rem] flex flex-col items-center justify-center",
                "max-tablet:h-[19.812rem]",
                "max-mobile:w-full max-mobile:h-[15.5rem] max-mobile:justify-start"
            )}>
                <h3
                    className={cn(
                        "text-[4.4rem] leading-[1.2] font-kyiv_titling",
                        "max-tablet:text-[2.844rem] max-tablet:lowercase",
                        "max-mobile:text-[2.699rem]"
                    )}
                >
                    РЕПЕТИТОРИ
                </h3>
                <div className={cn(
                    "relative w-[2.1rem] h-[6.968rem] mt-[4rem] mb-[1.7rem]",
                    "max-tablet:h-[4.171rem] max-tablet:mt-[1.5rem] max-tablet:mb-[1rem]",
                    "max-mobile:h-[3.784rem] max-mobile:mt-[1rem]"
                )}>
                    <Image src={"/ui/arrow.svg"} alt="arrow" fill className="object-contain" />
                </div>
                <p
                    className={cn(
                        "text-[5.7rem] leading-[1.472] font-sawarabi",
                        "max-tablet:text-[3.413rem]",
                        "max-mobile:text-[3.239rem]"
                    )}
                >
                    300 <span
                        className={cn(
                            "text-[3.8rem]",
                            "max-tablet:text-[2.275rem]",
                            "max-mobile:text-[2.16rem]"
                        )}
                    >
                        грн/годину
                    </span>
                </p>
            </div>
            <div className={cn(
                "w-[50%] h-[33.1rem] flex flex-col items-center justify-center bg-regal-light-blue-third",
                "max-tablet:h-[19.812rem]",
                "max-mobile:w-full max-mobile:h-[17.973rem]"
            )}>
                <h3
                    className={cn(
                        "text-[4.4rem] leading-[1.2] font-kyiv_titling",
                        "max-tablet:text-[2.844rem] max-tablet:lowercase",
                        "max-mobile:text-[2.699rem]"
                    )}
                >
                    ТОП - РЕПЕТИТОРИ
                </h3>
                <div className={cn(
                    "relative w-[2.1rem] h-[6.968rem] mt-[4rem] mb-[1.7rem]",
                    "max-tablet:h-[4.171rem] max-tablet:mt-[1.5rem] max-tablet:mb-[1rem]",
                    "max-mobile:h-[3.784rem] max-mobile:mt-[1rem]"
                )}>
                    <Image src={"/ui/arrow.svg"} alt="arrow" fill className="object-contain" />
                </div>
                <p
                    className={cn(
                        "text-[5.7rem] leading-[1.472] font-sawarabi",
                        "max-tablet:text-[3.413rem]",
                        "max-mobile:text-[3.239rem]"
                    )}
                >
                    400 <span
                        className={cn(
                            "text-[3.8rem]",
                            "max-tablet:text-[2.275rem]",
                            "max-mobile:text-[2.16rem]"
                        )}
                    >грн/годину</span>
                </p>
            </div>
        </div>
    )
}