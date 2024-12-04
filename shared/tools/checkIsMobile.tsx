'use client';

import React, { useEffect } from 'react';

import useResponsive from '@/store/useResponsive';

export const CheckIsMobile: React.FC = () => {
    const setIsMobile = useResponsive(state => state.setIsMobile);
    const setIsTablet = useResponsive(state => state.setIsTablet);
    const setViewSize = useResponsive(state => state.setViewSize);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            setIsTablet(window.innerWidth <= 1030 && window.innerWidth > 768);
            setViewSize(window.innerWidth);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [setIsMobile, setViewSize, setIsTablet]);

    return null;
};