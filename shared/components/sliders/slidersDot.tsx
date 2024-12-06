"use client";

import React, { ComponentPropsWithRef, useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import { cn } from '@/shared/lib';

type UseDotButtonType = {
    selectedIndex: number,
    scrollSnaps: number[],
    onDotButtonClick: (index: number) => void
}

export const useDotButton = (emblaApi: EmblaCarouselType | undefined): UseDotButtonType => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onDotButtonClick = useCallback(
        (index: number) => {
            if (!emblaApi) return;
            emblaApi.scrollTo(index);
        },
        [emblaApi]
    );

    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
    }, [emblaApi, onInit, onSelect]);

    return {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick
    }
}

type DotButtonProps = ComponentPropsWithRef<'button'> & {
    selected: boolean;
};

export const DotButton: React.FC<DotButtonProps> = (props) => {
    const { children, selected, ...restProps } = props;

    return (
        <button
            type="button"
            {...restProps}
            className={cn(
                "w-[1.7rem] h-[1.7rem] rounded-[50%] transition-all duration-300 ease-in-out",
                "max-tablet:w-[1.2rem] max-tablet:h-[1.2rem]",
                "max-mobile:w-[.9rem] max-mobile:h-[.9rem]",
                selected ? "bg-[#AEAAAA] scale-[1.05]" : "bg-[#D9D9D9]"
            )}
        >
            <span className='hidden'>.</span>
            {children}
        </button>
    )
};
