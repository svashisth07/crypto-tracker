import { Request, Response } from 'express';
import { fetchCoinsMarkets } from '../services/coins-service';
import { setCache } from '../middlewares/cache-middleware';

export const getCoinsMarkets = async (req: Request, res: Response) => {
  try {
    const { currency = 'usd', per_page = 50, page = 1, searchText } = req.query;
    const cacheKey = (req as any).cacheKey;

    const data = await fetchCoinsMarkets({
      currency: currency as string,
      perPage: parseInt(per_page as string, 10),
      page: parseInt(page as string, 10),
      searchText: searchText as string,
    });

    // Cache the data
    setCache(cacheKey, data);

    // Stream the data
    res.setHeader('Content-Type', 'application/json');
    res.write('[');
    data?.forEach((crypto: any, index: number) => {
      res.write(JSON.stringify(crypto) + (index < data.length - 1 ? ',' : ''));
    });
    res.write(']');
    res.end();
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};