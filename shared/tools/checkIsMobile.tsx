'use client';

import React, { useEffect } from 'react';

import useResponsive from '@/store/useResponsive';

export const CheckIsMobile: React.FC = () => {
    const setIsMobile = useResponsive(state => state.setIsMobile);
    const setIsTablet = useResponsive(state => state.setIsTablet);
    const setViewSize = useResponsive(state => state.setViewSize);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 540);
            setIsTablet(window.innerWidth < 838);
            setViewSize(window.innerWidth);
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [setIsMobile, setViewSize, setIsTablet]);

    return null;
};