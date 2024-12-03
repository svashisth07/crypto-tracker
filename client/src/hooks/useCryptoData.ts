import { coinGeckoApi } from "@/features/crypto-tracker/api/coinGecko";
import { useQuery } from "@tanstack/react-query";
import { SupportedCurrency } from "@/types";

export const useTop50Cryptocurrencies = (currency: SupportedCurrency) => {
  return useQuery({
    queryKey: ['top-50-cryptocurrencies', currency],
    queryFn: () => coinGeckoApi.getTop50Cryptocurrencies(currency)
  });
};
