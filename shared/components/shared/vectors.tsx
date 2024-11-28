"use client";

import { cn } from "@/shared/lib";

import { Separator } from "@/shared/components";

const vectors = [
    {
        title: "Молодша школа",
        description: "Заняття для учнів 1-4 класів, спрямовані на формування базових знань з математики, читання та письма",
        list: [
            "Ігрові методики для легкого засвоєння матеріалу.",
            "Розвиток логічного мислення та мовних навичок.",
            "Підтримка батьків у навчальному процесі."
        ]
    },
    {
        title: "Дорослі",
        description: "Індивідуальні уроки для дорослих, які бажають покращити свої знання для кар’єри чи особистого розвитку",
        list: [
            "Гнучкий графік занять.",
            "Практичне використання знань у реальних життєвих ситуаціях.",
            "Розвиток навичок для професійного зростання."
        ]
    },
    {
        title: "Середня школа",
        description: "Допомога учням 5-9 класів з основними шкільними предметами.",
        list: [
            "Поглиблене вивчення ключових предметів.",
            "Підготовка до самостійних робіт і контрольних.",
            "Підтримка в адаптації до шкільних вимог та програм."
        ]
    },
    {
        title: "Іспити",
        description: "Інтенсивна підготовка до НМТ, ЄВІ та інших важливих іспитів.",
        list: [
            "Розбір екзаменаційних завдань та стратегій.",
            "Інтенсивні тренування на базі реальних тестів минулих років.",
            "Підготовка за визначеними МОН програмами."
        ]
    }
]

export const Vectors = () => {

    return (
        <div
            className="relative flex flex-wrap gap-y-[7rem]"
        >
            <Separator
                orientation="vertical"
                className="absolute left-[50%] top-0 translate-x-[-50%]"
            />
            {
                vectors.map((item, idx) => {
                    return (
                        <div
                            key={idx}
                            className={cn(
                                "w-[50%]"
                            )}
                        >
                            <div
                                className={cn(
                                    "w-[55.39rem] mx-auto"
                                )}
                            >
                                <div
                                    className="w-[38.909rem] mx-auto pb-[2.814rem]"
                                >
                                    <Separator />
                                    <h3
                                        className={cn(
                                            "text-[3.208rem] text-center font-kyiv_titling leading-[1] py-[2.4rem]"
                                        )}
                                    >
                                        <p
                                            data-title={item.title}
                                            className={cn(
                                                "relative",
                                                "before:content-[attr(data-title)] before:absolute before:left-0 before:top-[.4rem] before:text-center before:w-full before:text-regal-light-gray before:blur-[.4rem]"
                                            )}
                                        >
                                            {item.title}
                                        </p>
                                    </h3>
                                    <Separator />
                                </div>
                                <div>
                                    <p
                                        className="text-[2.7rem] text-center leading-[1.4718] pb-[5.5rem]"
                                    >
                                        {item.description}
                                    </p>
                                    <ul
                                        className="flex flex-col gap-y-[1rem] vector_list text-[2.674rem] font-sawarabi w-[40.948rem] mx-auto leading-[1.4719]"
                                    >
                                        {
                                            item.list.map((li, index) => {
                                                return <li key={index} className="pl-[2rem]">
                                                    <p
                                                        data-text={li}
                                                    >
                                                        {li}
                                                    </p>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}