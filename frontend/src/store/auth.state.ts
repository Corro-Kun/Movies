import { create } from 'zustand'

interface AuthStore {
    auth: boolean,
    setState: (active: boolean) => void
}

export const useAuthStore =  create<AuthStore>((set) => ({
    auth: false,
    setState: (auth: boolean) => set({ auth })
}))