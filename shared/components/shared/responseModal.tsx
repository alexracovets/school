'use client';

import React from 'react';
import { IoMdClose } from "react-icons/io";
import useFormState from '@/store/useFormState';
import { cn } from '@/shared/lib';

export const ResponseModal = () => {
    const setIsDrawer = useFormState(state => state.setIsActive);
    const setIsResponse = useFormState(state => state.setIsResponse);

    const close = () => {
        setIsDrawer(false);
        setTimeout(() => setIsResponse(false), 500);
    }

    return (
        <div
            className='flex flex-col flex-grow justify-center items-center'
        >
            <IoMdClose
                className={cn(
                    "absolute right-[2rem] top-[2rem] w-[3.6rem] h-[3.6rem] cursor-pointer hover:scale-[1.2] hover:rotate-90 transition-all ease-in duration-300",
                    "max-tablet:w-[4rem] max-tablet:h-[4rem] max-tablet:right-[2.5rem] max-tablet:top-[2.5rem]",
                    "max-mobile:w-[3.6rem] max-mobile:h-[3.6rem] max-mobile:right-[1rem]"
                )}
                onClick={() => close()}
            />
            <div className="flex justify-center items-center mb-[2rem] gap-[2rem]">
                <div
                    className={cn(
                        "text-[3.5rem] text-[#2480c3] text-center font-milks_casual",
                        "max-mobile:text-[2.9rem]"
                    )}
                >
                    Запит прийнято
                </div>
            </div>
            <div
                className={cn(
                    'text-[5rem] text-[#2480c3] text-center font-milks_casual',
                    'max-mobile:text-[3.9rem]'
                )}
            >
                До зустрічі!
            </div>
        </div>
    );
};