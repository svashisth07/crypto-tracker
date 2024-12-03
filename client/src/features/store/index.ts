import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SupportedCurrency } from "@/types";

interface AppState {
  selectedCurrency: SupportedCurrency;
  recentSearches: string[];
  setSelectedCurrency: (currency: SupportedCurrency) => void;
  addRecentSearch: (cryptoId: string) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      selectedCurrency: "usd",
      recentSearches: [],
      setSelectedCurrency: (currency) => set({ selectedCurrency: currency }),
      addRecentSearch: (cryptoId) =>
        set((state) => ({
          recentSearches: [
            cryptoId,
            ...state.recentSearches.filter((id) => id !== cryptoId),
          ].slice(0, 10),
        })),
    }),
    {
      name: "crypto-tracker-storage",
    }
  )
);
