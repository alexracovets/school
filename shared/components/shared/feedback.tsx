"use client";

import { FeedBackSlider } from "@/shared/components";
import { cn } from "@/shared/lib";

import useResponsive from '@/store/useResponsive';

const feedBackData = [
    {
        title: 'Ангеліна (11 клас)',
        comment: [
            "Мені дуже подобається займатися з репетиторкою Софією. Заняття відбуваються дуже продуктивно, якщо мені не зрозуміла тема, або я забула її, то ми зупиняємося, щоб швиденько повторити її, або наздогнати. Я стала краще розуміти матеріал, і одну тему навіть перегнала по програмі, вивчивши з Софією раніше. З моменту як почала займатися з Софією, я відчуваю, що краще засвоюю теми у школі та більше розумію, і можу розвʼязати важчі завдання."
        ]
    },
    {
        title: 'Мама Тимофія (7 клас)',
        comment: [
            "Дуже рада, що є можливість підтягнути знання дитини онлайн. За станом здоров'я на початку навчального року син пропустив майже 2 місяці, відповідно з новими предметами (алгебра та геометрія) виникли труднощі, тому розпочали пошуки репетитора.",
            "Сину дуже подобається займатися з Дмитром, після декількох занять сказав, що ніколи не думав, що математика може бути цікавою. Мої найкращі рекомендації."
        ]
    },
    {
        title: 'Мама Ярослава (6 клас)',
        comment: [
            "Хочу виразити подяку нашому репетитору Ярославу.Він займається з моїм сином,Ярослав цікаво та доступно подає інформацію,він знайшов підхід до дитини,моїй дитині подобаються заняття,доступно,зрозуміло.Спілкування між репетитором та учнем проходять на дружньому рівні,це головне."
        ]
    },
    {
        title: 'Мама Дениса (6 клас)',
        comment: [
            "Рекомендую!!! Цікавий підхід до викладання матеріалу. Доступно, зрозуміло! Дитина з задоволенням підключається до занять!"
        ]
    }
]

export const Feedback = () => {
    const isMobile = useResponsive(state => state.isMobile);

    return (
        <>
            {isMobile ?
                <FeedBackSlider slides={feedBackData} /> :
                <div
                    className={cn(
                        "flex flex-wrap gap-x-[3rem] gap-y-[7.5rem]",
                        "max-tablet:gap-x-[1.6rem] max-tablet:gap-y-[4.369rem]",
                        "max-mobile:flex-col"
                    )}
                >
                    {
                        feedBackData.map((item, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className={cn(
                                        "w-[calc(50%-1.5rem)] p-[3.5rem] rounded-[5.4rem] border-[.35rem] border-regal-blue-second",
                                        "max-tablet:w-[calc(50%-.8rem)] max-tablet:p-[1.8rem] max-tablet:rounded-[3.1rem] max-tablet:border-[1px]",
                                        "max-mobile:w-full max-mobile:p-[1.877rem] max-mobile:rounded-[2.895rem]"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "text-[3.3rem] pb-[3rem] text-center font-kyiv_titling",
                                            "max-tablet:text-[1.872rem] max-tablet:pb-[1.7rem]",
                                            "max-mobile:text-[1.75rem] max-mobile:pb-[1.6rem]"
                                        )}
                                    >
                                        {item.title}
                                    </div>
                                    <div>
                                        {
                                            item.comment.map((text, index) => {
                                                return (
                                                    <p
                                                        key={index}
                                                        className={cn(
                                                            "text-[2.4rem] font-sawarabi leading-[1.4721]",
                                                            "max-tablet:text-[1.37rem]",
                                                            "max-mobile:text-[1.287rem]"
                                                        )}
                                                    >
                                                        {text}
                                                    </p>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            } 
        </>
    )
}