import { cn } from "@/shared/lib";
import Image from "next/image";

import { Button } from "@/shared/components";
import { ExclamationMark } from "../shared/exclamationMark";

export const StartSection = () => {
    return (
        <section
            id="start"
            className="w-full flex justify-between"
        >
            <div
                className={cn(
                    'relative w-full max-w-[85.2rem] min-w-[85.2rem] h-[52.9rem] rounded-[1.633rem] overflow-hidden'
                )}>
                <Image src="/start/books.jpg" alt="books" fill />
            </div>
            <div
                className={cn(
                    "flex flex-col px-[3.5rem]"
                )}
            >
                <div
                    className="flex justify-between items-end mb-[4rem]"
                >
                    <p
                        className={cn(
                            "text-[3.058rem] font-[400] font-kyiv_titling"
                        )}>
                        Індивідуальні онлайн-заняття з топ-репетиторами для школярів та дорослих
                    </p>
                    <ExclamationMark />
                </div>
                <p
                    className={cn(
                        "text-[2.549rem] font-[400] font-sawarabi pr-[14rem] mb-[4rem] leading-[1.471]"
                    )}
                >
                    Отримайте якісну освіту з досвіченими викладачами в школі Aptly, не виходячи з дому. Підготовка до іспитів, покращення успішності та розвиток навичок у зручний для вас час.
                </p>
                <Button>
                    Записатись на безкоштовне заняття
                </Button>
            </div>
        </section>
    )
}