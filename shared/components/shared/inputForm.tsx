"use client";

import InputMask from "react-input-mask-next";

import { cn } from "@/shared/lib";
import { InputFormType } from "@/shared/types";

export const InputForm = ({ type, placeholder, name, register, validation, mask, error, className }: InputFormType) => {
    const isMasked = !!mask;
    if (!register) return null;
    
    return (
        <>
            {isMasked ? (
                <InputMask
                    mask={mask}
                    placeholder={placeholder}
                    {...register(name, validation)}
                    className={cn(
                        "text-[1.5rem] px-[1.6rem] py-[1rem] rounded-[.5rem] w-full font-kyiv_titling placeholder:text-regal-black outline outline-[.2rem] outline-[#0059FF]",
                        "max-tablet:text-[2rem]",
                        "max-mobile:text-[1.4rem] max-mobile:px-[.8rem]",
                        className
                    )}
                />
            ) : (
                // Звичайне поле вводу
                <input
                    type={type}
                    placeholder={placeholder}
                    {...register(name, validation)}
                    className={cn(
                        "text-[1.5rem] px-[1.6rem] py-[1rem] rounded-[.5rem] w-full font-kyiv_titling placeholder:text-regal-black outline outline-[.2rem] outline-[#0059FF]",
                        "max-tablet:text-[2rem]",
                        "max-mobile:text-[1.4rem] max-mobile:px-[.8rem]",
                        className
                    )}
                />
            )}
            {error && <span className="text-red-500 text-[1.2rem]">{error.message}</span>}
        </>
    )
}