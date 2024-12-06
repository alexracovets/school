"use client";

import { Drawer, DrawerContent, DrawerTitle, DrawerHeader, DrawerDescription, ResponseModal, Form } from "@/shared/components";

import useFormState from '@/store/useFormState';
import { cn } from "@/shared/lib";


export const FormPopUp = () => {
    const isOpen = useFormState(state => state.isActive);
    const isResponse = useFormState(state => state.isResponse);
    const setIsOpen = useFormState(state => state.setIsActive);


    return (
        <>
            <Drawer open={isOpen} onOpenChange={setIsOpen} direction="top">
                <DrawerContent className="flex justify-center items-center">
                    <DrawerHeader className="hidden">
                        <DrawerTitle></DrawerTitle>
                        <DrawerDescription></DrawerDescription>
                    </DrawerHeader>
                    <div
                        className={cn(
                            "relative flex flex-col justify-center items-center mx-auto bg-regal-blue px-[10rem] py-[3rem] rounded-[2rem] pointer-events-auto max-h-[100dvh]",
                            "max-mobile:px-[5rem] max-mobile:py-[4rem] max-mobile:rounded-none max-mobile:h-[100dvh] max-mobile:w-full max-mobile:justify-start max-mobile:overflow-auto"
                        )}
                    >
                        {!isResponse ? <Form /> : <ResponseModal />}
                    </div>
                </DrawerContent>
            </Drawer >
        </>

    )
}