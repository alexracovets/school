import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useResponsive = create(immer((set) => ({
    isMobile: false,
    isTablet: false,
    viewSize: 0,
    setIsMobile: (value) => set((state) => {
        state.isMobile = value
    }),
    setIsTablet: (value) => set((state) => {
        state.isTablet = value
    }),
    setViewSize: (value) => set((state) => {
        state.viewSize = value
    })
})));

export default useResponsive;
