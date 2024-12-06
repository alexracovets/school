"use client";

import { cn } from "@/shared/lib";
import { InputFormType } from "@/shared/types";

export const TextAreaForm = ({ placeholder, name, register, error, validation, className }: InputFormType) => {

    if (!register) return null;

    return (
        <>
            <textarea
                placeholder={placeholder}
                {...register(name, validation)}
                className={cn(
                    "text-[1.5rem] px-[1.6rem] py-[1rem] rounded-[.5rem] w-full h-[10rem] max-h-[10rem] font-kyiv_titling placeholder:text-regal-black outline outline-[.2rem] outline-[#0059FF]",
                    "max-tablet:text-[2rem] max-tablet:h-[13rem] max-tablet:max-h-[13rem]",
                    "max-mobile:text-[1.4rem] max-mobile:px-[.8rem] max-mobile:h-[9.8rem] max-mobile:max-h-[9.8rem]",
                    className
                )}
            />
            {error && <span className="text-red-500 text-[1.2rem]">{error.message}</span>}
        </>

    )
}