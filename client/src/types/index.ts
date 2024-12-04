export interface Cryptocurrency {
    id: string;
    symbol: string;
    name: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    image: string;
    price_change_percentage_24h: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
  }

export type SupportedCurrency = "usd" | "eur" | "gbp" | "chf" | "inr";