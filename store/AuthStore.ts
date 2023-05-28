import { create } from 'zustand'

interface authState {
    name: string
    setName: (name: string) => void
    email: string
    setEmail: (email: string) => void
}

export const useAuthStore = create<authState>((set) => ({
    name: '',
    setName: (name: string) => set(() => ({ name })),
    email: '',
    setEmail: (email: string) => set(() => ({ email })),
}))