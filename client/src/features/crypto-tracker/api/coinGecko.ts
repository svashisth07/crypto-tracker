import { api } from "@/lib/api-client";
import { Cryptocurrency, SupportedCurrency } from "@/types";

export const coinGeckoApi = {
  getTopCryptocurrencies: async (
    currency: SupportedCurrency,
    searchText?: string,
    perPage?: number,
  ): Promise<Cryptocurrency[]> =>
    await api.get(`/coins/markets`, {
      params: {
        currency,
        // order: 'market_cap_desc',
        per_page: perPage,
        page: 1,
        // sparkline: false
        search: searchText,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }),
};
