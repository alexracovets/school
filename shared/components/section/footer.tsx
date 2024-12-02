"use client";

import { FaInstagram } from "react-icons/fa6";

import { Container } from "@/shared/components";
import { cn } from "@/shared/lib";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer>
            <Container className={cn(
                "py-[5rem]",
                "max-tablet:py-[3rem]"
            )}>
                <div
                    className="flex justify-between"
                >
                    <Link
                        href="/"
                        className="flex flex-col items-center"
                    >
                        <p
                            className={cn(
                                "text-[4.7rem] font-kyiv_titling mb-[1.3rem]",
                                "max-tablet:text-[2.7rem] max-tablet:mb-[.7rem]"
                            )}
                        >
                            контакти
                        </p>
                        <p
                            className={cn(
                                "text-[4rem] font-sawarabi",
                                "max-tablet:text-[2rem]"
                            )}
                        >
                            +380 68 039 44 75
                        </p>
                    </Link>
                    <Link
                        href="/"
                        className="flex flex-col items-center"
                    >
                        <p
                            className={cn(
                                "text-[4.7rem] font-kyiv_titling mb-[1.3rem]",
                                "max-tablet:text-[2.7rem] max-tablet:mb-[.7rem]"
                            )}
                        >
                            ми в соц. мережах
                        </p>
                        <FaInstagram
                            className={cn(
                                "w-[9.138rem] h-[9.138rem]",
                                "max-tablet:w-[5.825rem] max-tablet:h-[5.825rem]"
                            )} />
                    </Link>
                </div>
            </Container>
        </footer>
    )
}