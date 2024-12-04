"use client";

import { IoMdClose } from "react-icons/io";

import { Drawer, DrawerContent, DrawerTitle, DrawerHeader, DrawerDescription, Button, InputForm, TextAreaForm, RadioForm } from "@/shared/components";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormType, RadioFormType } from "@/shared/types";
import useFormState from '@/store/useFormState';
import { cn } from "@/shared/lib";

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

    const radioOptions: Array<RadioFormType> = [
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
                <DrawerHeader className="hidden">
                    <DrawerTitle></DrawerTitle>
                    <DrawerDescription></DrawerDescription>
                </DrawerHeader>
                <div
                    className={cn(
                        "relative flex flex-col justify-center items-center mx-auto bg-regal-blue px-[10rem] py-[3rem] rounded-[2rem] pointer-events-auto",
                        "max-mobile:px-[4.5rem] max-mobile:py-[4rem] max-mobile:rounded-none max-mobile:h-full max-mobile:w-full"
                    )}
                >
                    <IoMdClose
                        className={cn(
                            "absolute right-[2rem] top-[2rem] w-[3.6rem] h-[3.6rem] cursor-pointer hover:scale-[1.2] hover:rotate-90 transition-all ease-in duration-300",
                            "max-tablet:w-[4rem] max-tablet:h-[4rem] max-tablet:right-[2.5rem] max-tablet:top-[2.5rem]",
                            "max-mobile:w-[3.6rem] max-mobile:h-[3.6rem] max-mobile:right-[1.5rem]"
                        )}
                        onClick={() => setIsOpen(false)}
                    />
                    <div className={cn(
                        "max-w-[50.809rem] w-full",
                        "max-mobile:max-w-full"
                    )}>
                        <h2
                            className={cn(
                                "text-[3rem] font-kyiv_titling text-center mb-[3rem]",
                                "max-tablet:text-[3.5rem]",
                                "max-mobile:text-[2rem]"
                            )}
                        >
                            Записатись на безкоштовне заняття
                        </h2>
                        <form
                            action=""
                            className={cn(
                                "flex flex-col gap-y-[1rem]",
                                "max-tablet:gap-y-[1.5rem]",
                                "max-mobile:gap-y-[1.2rem]"
                            )}
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