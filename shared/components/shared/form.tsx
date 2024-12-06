"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

import { Button, InputForm, TextAreaForm, RadioForm } from "@/shared/components";
import { FormType, RadioFormType } from "@/shared/types";
import useFormState from '@/store/useFormState';
import { cn } from "@/shared/lib";


export const Form = () => {
    const [isFirstView, setIsFirstView] = useState(true);
    const setIsOpen = useFormState(state => state.setIsActive);
    const setIsResponse = useFormState(state => state.setIsResponse);

    const { register, handleSubmit, trigger, reset, control, formState: { errors, isValid } } = useForm<FormType>({
        mode: "onChange",
        defaultValues: {
            userName: "",
            userPhone: "",
            userComment: "",
            userConnect: "",
            formName: "Замовлення зі школи Aptly"
        }
    });

    const radioOptions: Array<RadioFormType> = [
        {
            title: "Як з вами зв`язатися?",
            name: "userConnect",
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


    const submit: SubmitHandler<FormType> = async (data) => {
        const response = await fetch('/send-mail.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            reset();
            setIsFirstView(true);
            setIsResponse(true);
        } else {
            console.log(data);
        }
    }

    const handleInputChange = async () => {
        if (isFirstView) {
            setIsFirstView(false);
            await trigger();
        }
    };

    return (
        <>
            <IoMdClose
                className={cn(
                    "absolute right-[2rem] top-[2rem] w-[3.6rem] h-[3.6rem] cursor-pointer hover:scale-[1.2] hover:rotate-90 transition-all ease-in duration-300",
                    "max-tablet:w-[4rem] max-tablet:h-[4rem] max-tablet:right-[2.5rem] max-tablet:top-[2.5rem]",
                    "max-mobile:w-[3.6rem] max-mobile:h-[3.6rem] max-mobile:right-[1rem]"
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
                    onChange={handleInputChange}
                >
                    <InputForm
                        type="text"
                        name="userName"
                        placeholder="Ваше ім’я"
                        register={register}
                        error={errors?.userName}
                        validation={{
                            required: "Поле повинно бути заповнене!",
                            minLength: {
                                value: 2,
                                message: "Ім'я повинно бути не менше 2 символів"
                            },
                            maxLength: {
                                value: 50,
                                message: "Ім'я повинно бути не більше 50 символів"
                            }
                        }}
                    />
                    <InputForm
                        type="tel"
                        name="userPhone"
                        placeholder="Номер телефону"
                        register={register}
                        error={errors?.userPhone}
                        mask="+38 (999) 999-99-99"
                        validation={{
                            required: "Поле повинно бути заповнене!",
                            pattern: {
                                value: /^\+38\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
                                message: "Некоректний формат номеру телефону. Використовуйте формат +38 (XXX) XXX-XX-XX"
                            }
                        }}
                    />
                    <TextAreaForm
                        name="userComment"
                        placeholder="Коментар"
                        register={register}
                        error={errors?.userComment}
                        validation={{
                            maxLength: {
                                value: 600,
                                message: "Коментар повинний бути не більше 600 символів"
                            }
                        }}
                    />
                    {
                        radioOptions.map((radio, idx) => {
                            return (
                                <RadioForm
                                    key={idx}
                                    name={radio.name}
                                    title={radio.title}
                                    options={radio.values}
                                    control={control}
                                    id={idx}
                                    validation={{
                                        required: "Оберіть варіант зв'язку!"
                                    }}
                                    error={errors[radio.name]}
                                />
                            )
                        })
                    }
                    <Button
                        className="mx-auto mt-[2rem]"
                        variant="secondary"
                        onClick={handleInputChange}
                        disabled={isFirstView ? false : !isValid}
                    >
                        ВІДПРАВИТИ
                    </Button>
                </form>
            </div>
        </>
    )

}