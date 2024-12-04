import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Cryptocurrency, SupportedCurrency } from "@/types";

interface CryptoTrackerState {
  selectedCurrency: SupportedCurrency;
  recentSearches: Cryptocurrency[];
  setSelectedCurrency: (currency: SupportedCurrency) => void;
  addRecentSearch: (coin: Cryptocurrency) => void;
}

export const useCryptoTrackerStore = create<CryptoTrackerState>()(
  persist(
    (set) => ({
      selectedCurrency: "usd",
      recentSearches: [],
      setSelectedCurrency: (currency) => set({ selectedCurrency: currency }),
      addRecentSearch: (coin) =>
        set((state) => ({
          recentSearches: [
            coin,
            ...state.recentSearches.filter((c) => c.id !== coin.id),
          ].slice(0, 10),
        })),
    }),
    {
      name: "crypto-tracker-storage",
    }
  )
);
