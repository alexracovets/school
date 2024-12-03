"use client";

import { IoMdClose } from "react-icons/io";
import { useState } from "react";

import { Drawer, DrawerContent, DrawerTitle, DrawerHeader, DrawerDescription, Button, InputForm, TextAreaForm, RadioForm } from "@/shared/components";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormType } from "@/shared/types";
import useFormState from '@/store/useFormState';

export const FormPopUp = () => {
    const isOpen = useFormState(state => state.isActive);
    const setIsOpen = useFormState(state => state.setIsActive);

    const { register, handleSubmit } = useForm<FormType>({
        defaultValues: {
            userName: "",
            userPhone: "",
            userComment: "",
            useConnect: ""
        }
    });

    const radioOptions: Array<{
        title: string;
        name: keyof FormType;
        values: Array<{ name: string; label: string }>;
    }> = [
            {
                title: "Як з вами зв`язатися?",
                name: "useConnect",
                values: [
                    {
                        name: "Телефон",
                        label: "Зателефонуйте мені",
                    },
                    {
                        name: "Telegram",
                        label: "Напишіть в Telegram",
                    },
                ],
            },
        ];

    const submit: SubmitHandler<FormType> = data => {
        console.log(data)
    }

    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen} direction="left">
            <DrawerContent className="flex justify-center items-center">
                <DrawerHeader>
                    <DrawerTitle className="hidden"></DrawerTitle>
                    <DrawerDescription></DrawerDescription>
                </DrawerHeader>
                <div className="relative flex flex-col justify-center items-center mx-auto bg-regal-blue px-[10rem] py-[3rem] rounded-[2rem] pointer-events-auto">

                    <IoMdClose
                        className="absolute right-[2rem] top-[2rem] w-[3.6rem] h-[3.6rem] cursor-pointer hover:scale-[1.2] hover:rotate-90 transition-all ease-in duration-300"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="max-w-[50.809rem] w-full">
                        <h2
                            className="text-[3rem] font-kyiv_titling text-center mb-[3rem]"
                        >
                            Записатись на безкоштовне заняття
                        </h2>
                        <form
                            action=""
                            className="flex flex-col gap-y-[1rem]"
                            onSubmit={handleSubmit(submit)}
                        >
                            <InputForm
                                type="text"
                                name="userName"
                                placeholder="Ваше ім’я"
                                register={register}
                            />
                            <InputForm
                                type="tel"
                                name="userPhone"
                                placeholder="Номер телефону"
                                register={register}
                            />
                            <TextAreaForm
                                name="userComment"
                                placeholder="Коментар"
                                register={register}
                            />
                            {
                                radioOptions.map((radio, idx) => {
                                    return (
                                        <RadioForm
                                            key={idx}
                                            name={radio.name}
                                            title={radio.title}
                                            options={radio.values}
                                            register={register}
                                            id={idx}
                                        />
                                    )
                                })
                            }
                            <Button
                                className="mx-auto mt-[2rem]"
                                variant="secondary"
                                disabled
                            >
                                ВІДПРАВИТИ
                            </Button>
                        </form>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}