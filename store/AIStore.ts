import { create } from 'zustand'

interface AIState {
    loading: boolean;
    setLoading: (loading: boolean) => void;
    suggestion: string;
    setSuggestion: (suggestion: string) => void;
}

export const useAIStore = create<AIState>((set) => ({
    loading: false,
    setLoading: (loading) => set({ loading }),
    suggestion: '',
    setSuggestion: (suggestion) => set({ suggestion }),
}))