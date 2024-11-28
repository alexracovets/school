"use client";

import Image from "next/image";

export const Prices = () => {
    return (
        <div className="flex justify-center">
            <div className="w-[50%] h-[33.1rem] flex flex-col items-center p-[2.8rem]">
                <h3
                    className="text-[4.4rem] leading-[1.2] font-kyiv_titling"
                >
                    РЕПЕТИТОРИ
                </h3>
                <div className="relative w-[2.1rem] h-[6.968rem] mt-[4rem] mb-[1.7rem]">
                    <Image src={"/ui/arrow.svg"} alt="arrow" fill className="object-contain" />
                </div>
                <p
                    className="text-[5.7rem] leading-[1.472] font-sawarabi"
                >
                    300 <span className="text-[3.8rem]">грн/годину</span>
                </p>
            </div>
            <div className="w-[50%] h-[33.1rem] flex flex-col items-center p-[2.8rem] bg-regal-light-blue-third">
                <h3
                    className="text-[4.4rem] leading-[1.2] font-kyiv_titling"
                >
                    ТОП - РЕПЕТИТОРИ
                </h3>
                <div className="relative w-[2.1rem] h-[6.968rem] mt-[4rem] mb-[1.7rem]">
                    <Image src={"/ui/arrow.svg"} alt="arrow" fill className="object-contain" />
                </div>
                <p
                    className="text-[5.7rem] leading-[1.472] font-sawarabi"
                >
                    400 <span className="text-[3.8rem]">грн/годину</span>
                </p>
            </div>
        </div>
    )
}