import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useNavMenu = create(
    immer((set) => ({
        isActive: true,
        isOpen: false,
        headerHeight: 0,
        setIsOpen: (value) =>
            set((state) => {
                if (state.isActive) {
                    state.isOpen = value;
                    state.isActive = false;
                    setTimeout(() => {
                        set((state) => {
                            state.isActive = true;
                        });
                    }, 300);
                }
            }),
        setHeaderHeight: (value) =>
            set((state) => {
                state.headerHeight = value;
            }),
    }))
);

export default useNavMenu;
