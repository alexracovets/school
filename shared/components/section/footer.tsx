"use client";

import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

import { Container } from "@/shared/components";
import { cn } from "@/shared/lib";

export const Footer = () => {
    return (
        <footer>
            <Container className={cn(
                "py-[5rem]",
                "max-tablet:py-[3rem]"
            )}>
                <div
                    className={cn(
                        "flex justify-between",
                        "max-mobile:flex-col max-mobile:justify-start max-mobile:gap-y-[3.5rem]"
                    )}
                >
                    <div
                        className={cn(
                            "flex flex-col items-center",
                            "max-mobile:items-start"
                        )}
                    >
                        <p
                            className={cn(
                                "text-[4.7rem] font-kyiv_titling mb-[1.3rem]",
                                "max-tablet:text-[2.7rem] max-tablet:mb-[.7rem]",
                                "max-mobile:text-[2rem] max-mobile:mb-[.4rem]"
                            )}
                        >
                            контакти
                        </p>
                        <Link
                            href="/"
                            className={cn(
                                "text-[4rem] font-sawarabi",
                                "max-tablet:text-[2rem]",
                                "max-mobile:text-[2rem]",
                                "hover:scale-[1.1] transition ease-in-out duration-300 will-change-transform"
                            )}
                        >
                            +380 68 039 44 75
                        </Link>
                    </div>
                    <div
                        className={cn(
                            "flex flex-col items-center",
                            "max-mobile:items-start"
                        )}
                    >
                        <p
                            className={cn(
                                "text-[4.7rem] font-kyiv_titling mb-[1.3rem]",
                                "max-tablet:text-[2.7rem] max-tablet:mb-[.7rem]",
                                "max-mobile:text-[2rem]"
                            )}
                        >
                            ми в соц. мережах
                        </p>
                        <Link
                            href="/"
                        >
                            <FaInstagram
                                className={cn(
                                    "w-[9.138rem] h-[9.138rem]",
                                    "max-tablet:w-[5.825rem] max-tablet:h-[5.825rem]",
                                    "max-mobile:w-[3.79rem] max-mobile:h-[3.79rem]",
                                    "hover:scale-[1.1] transition ease-in-out duration-300 will-change-transform"
                                )} />
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}