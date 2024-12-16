import { create } from 'zustand'

interface WindowStore {
    active: boolean,
    setActive: (active: boolean) => void
}

export const useWindowStore =  create<WindowStore>((set) => ({
    active: false,
    setActive: (active: boolean) => set({ active })
}))