import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useFormState = create(immer((set) => ({
    isActive: false,
    isResponse: false,
    setIsActive: (value) => set((state) => {
        state.isActive = value
    }),
    setIsResponse: (value) => set((state) => {
        state.isResponse = value
    })
})));

export default useFormState;
