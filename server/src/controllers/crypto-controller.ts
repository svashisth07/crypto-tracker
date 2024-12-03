import { Request, Response } from 'express';
import { fetchCryptocurrencies } from '../services/crypto-service';

export const getCryptocurrencies = async (req: Request, res: Response) => {
  try {
    const { currency = 'usd', per_page = 50, page = 1 } = req.query;
    const data = await fetchCryptocurrencies({
      currency: currency as string,
      perPage: parseInt(per_page as string, 10),
      page: parseInt(page as string, 10),
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from CoinGecko' });
  }
};