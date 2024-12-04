"use client";

import Image from "next/image";

import { cn } from "@/shared/lib";

import useResponsive from '@/store/useResponsive';
import { BlurDotsGroup } from "./blurDotsGroup";
import { RingDot } from "./ringDot";

const dots = [
    {
        position: cn(
            "top-[4.7rem] right-[22.1rem]",
            "max-tablet:top-[2.8rem] max-tablet:right-[9.2rem]",
            "max-mobile:top-[0rem] max-mobile:right-[2.1rem]"
        ),
        size: cn(
            "w-[25.367rem] h-[25.656rem]",
            "max-tablet:w-[15.183rem] max-tablet:h-[15.357rem]",
            "max-mobile:w-[14rem] max-mobile:h-[13rem]"
        ),
        blur: cn(
            "blur-[12rem]",
            "max-tablet:blur-[7rem]",
            "max-mobile:blur-[7rem]"
        ),
        color: "bg-[#2480C3]",
    },
    {
        position: cn(
            "top-[2.3rem] left-[-5.8rem]",
            "max-tablet:top-[2.8rem] max-tablet:left-[-3rem]",
            "max-mobile:top-[0rem] max-mobile:left-[-2rem]"
        ),
        size: cn(
            "w-[6.333rem] h-[6.405rem]",
            "max-tablet:w-[6.33rem] max-tablet:h-[6.405rem]",
            "max-mobile:w-[5.84rem] max-mobile:h-[5.422rem]"
        ),
        blur: cn(
            "blur-[5rem]",
            "max-tablet:blur-[4rem]"
        ),
        color: "bg-[#008EF5]",
    },
    {
        position: cn(
            "top-[7.573rem] right-[6.769rem]",
            "max-tablet:top-[2.8rem] max-tablet:right-[9.2rem]",
            "max-mobile:top-[0rem] max-mobile:right-[5rem]"
        ),
        size: cn(
            "w-[9.842rem] h-[9.955rem]",
            "max-tablet:w-[6.33rem] max-tablet:h-[6.405rem]",
            "max-mobile:w-[5.84rem] max-mobile:h-[5.422rem]"
        ),
        blur: cn(
            "blur-[10rem]",
            "max-tablet:blur-[5rem]"
        ),
        color: "bg-[#E86980]",
    }
]

export const Prices = () => {
    const isMobile = useResponsive(state => state.isMobile);

    return (
        <div className={cn(
            "flex justify-center",
            "max-mobile:flex-col"
        )}>
            <div className={cn(
                "relative w-[50%] h-[33.1rem] flex flex-col items-center justify-center",
                "max-tablet:h-[19.812rem]",
                "max-mobile:w-full max-mobile:h-[15.5rem] max-mobile:justify-start"
            )}>
                <BlurDotsGroup dots={dots} />
                {isMobile ? <RingDot /> : null}
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
                "relative w-[50%] h-[33.1rem] bg-regal-light-blue-third",
                "max-tablet:h-[19.812rem]",
                "max-mobile:w-full max-mobile:h-[17.973rem]"
            )}>
                {!isMobile ? <RingDot /> : null}
                <div className="relative z-[1] flex flex-col items-center justify-center h-full">
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
        </div>
    )
}