import axios from 'axios';
import config from '../config';

interface FetchCryptocurrenciesParams {
  currency: string;
  perPage: number;
  page: number;
}

export const fetchCryptocurrencies = async ({
  currency,
  perPage,
  page,
}: FetchCryptocurrenciesParams) => {
  const response = await axios.get(`${config.coingeckoApiUrl}/coins/markets`, {
    params: {
      vs_currency: currency,
      order: 'market_cap_desc',
      per_page: perPage,
      page: page,
    },
  });
  return response.data;
};