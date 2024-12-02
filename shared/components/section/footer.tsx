"use client";

import { FaInstagram } from "react-icons/fa6";

import { Container } from "@/shared/components";
import { cn } from "@/shared/lib";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer>
            <Container className="py-[5rem]">
                <div
                    className="flex justify-between"
                >
                    <Link
                        href="/"
                        className="flex flex-col items-center"
                    >
                        <p
                            className="text-[4.7rem] font-kyiv_titling mb-[1.3rem]"
                        >
                            контакти
                        </p>
                        <p
                            className="text-[4rem] font-sawarabi"
                        >
                            +380 68 039 44 75
                        </p>
                    </Link>
                    <Link
                        href="/"
                        className="flex flex-col items-center"
                    >
                        <p
                            className="text-[4.7rem] font-kyiv_titling mb-[1.3rem]"
                        >
                            ми в соц. мережах
                        </p>
                        <FaInstagram className="w-[9.138rem] h-[9.138rem]" />
                    </Link>
                </div>
            </Container>
        </footer>
    )
}