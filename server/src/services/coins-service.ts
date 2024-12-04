import axios from 'axios';
import config from '../config';

interface FetchCoinsMarketsParams {
  currency: string;
  perPage: number;
  page: number;
  searchText: string;
}

export const fetchCoinsMarkets = async ({
  currency,
  perPage,
  page,
  searchText,
}: FetchCoinsMarketsParams) => {
  const response = await axios.get(`${config.coingeckoApiUrl}/coins/markets`, {
    params: {
      vs_currency: currency,
      order: 'market_cap_desc',
      per_page: perPage,
      page: page,
      search: searchText,
    },
  });
  return response.data;
};