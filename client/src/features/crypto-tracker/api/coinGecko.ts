import { api } from '@/lib/api-client';
import { Cryptocurrency, SupportedCurrency } from '@/types';

export const coinGeckoApi = {
  getTop50Cryptocurrencies: async (currency: SupportedCurrency): Promise<Cryptocurrency[]> => {
    try {
      const response = await api.get(
        `/coins/markets`,
        {
          params: {
            vs_currency: currency,
            order: 'market_cap_desc',
            per_page: 50,
            page: 1,
            sparkline: false
          }
        }
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch cryptocurrency data');
    }
  }
};