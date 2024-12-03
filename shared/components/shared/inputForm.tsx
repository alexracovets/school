"use client";

import { cn } from "@/shared/lib";
import { InputFormType } from "@/shared/types";

export const InputForm = ({ type, placeholder, name, register, className }: InputFormType) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            {...register(name)}
            className={cn(
                "text-[1.5rem] px-[1.6rem] py-[1rem] rounded-[.5rem] w-full font-kyiv_titling placeholder:text-regal-black",
                "max-tablet:text-[2rem]",
                "max-mobile:text-[1.4rem] max-mobile:px-[.8rem]",
                className
            )}
        />
    )
}