import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  coingeckoApiUrl: string;
  cacheTTL: number;
}

const config: Config = {
  port: parseInt(process.env.PORT || '4000', 10),
  coingeckoApiUrl: 'https://api.coingecko.com/api/v3',
  cacheTTL: 300
};

export default config;
