
import { Separator, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/shared/components";
import { cn } from "@/shared/lib";
import Image from "next/image";

export const AboutSlider = () => {
    return (
        <div
            className={cn(
                "py-[5rem]"
            )}>
            <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        <div className="w-[30.353rem] h-[45.5rem] bg-regal-light-blue rounded-[2.5rem] overflow-hidden">
                            <div className={cn(
                                "relative w-[5.097rem] h-[5.097rem] mx-auto"
                            )}>
                                <Image src="/about/slider/ico/slider_ico_1.svg" alt="slide" fill />
                            </div>
                            <Separator />
                            <h3
                                className={cn(
                                    "text-[1.8rem] text-center font-kyiv_titling py-[1.638rem]"
                                )}
                            >
                                ІНДИВІДУАЛЬНИЙ ПІДХІД
                            </h3>
                            <Separator />
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}