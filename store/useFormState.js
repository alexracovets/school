import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useFormState = create(immer((set) => ({
    isActive: false,
    setIsActive: (value) => set((state) => {
        state.isActive = value
    })
})));

export default useFormState;
