import { Cryptocurrency, SupportedCurrency } from "@/types";
import React from "react";

interface CryptoCurrencyTableProps {
  isLoading: boolean;
  error: Error | null;
  cryptos: Cryptocurrency[];
  currency: SupportedCurrency;
}

export const CryptoCurrencyTable: React.FC<CryptoCurrencyTableProps> = ({
  cryptos,
  isLoading,
  error,
  currency,
}) => {
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!cryptos) return <div>No data</div>;

  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full bg-white border border-gray-200">
        <thead className="bg-gray-100 shadow-md">
          <tr>
            <th className="py-2 px-4 border-b"></th>
            <th className="py-2 px-4 border-b text-left">Name</th>
            <th className="py-2 px-4 border-b text-left">Symbol</th>
            <th className="py-2 px-4 border-b text-left">
              Current Price ({currency.toUpperCase()})
            </th>
            <th className="py-2 px-4 border-b text-left hidden md:table-cell">Market Cap</th>
            <th className="py-2 px-4 border-b text-left hidden lg:table-cell">24h Volume</th>
            <th className="py-2 px-4 border-b text-left hidden lg:table-cell">24h High</th>
            <th className="py-2 px-4 border-b text-left hidden lg:table-cell">24h Low</th>
            <th className="py-2 px-4 border-b text-left hidden md:table-cell">24h Change (%)</th>
          </tr>
        </thead>
        <tbody className="overflow-y-scroll">
          {cryptos.map((crypto) => (
            <tr key={crypto.id}>
              <td className="py-2 px-4 border-b">
                <img src={crypto.image} alt={crypto.name} className="w-8 h-8" />
              </td>
              <td className="py-2 px-4 border-b">{crypto.name}</td>
              <td className="py-2 px-4 border-b">
                {crypto.symbol.toUpperCase()}
              </td>
              <td className="py-2 px-4 border-b">
                {crypto.current_price.toFixed(2)}
              </td>
              <td className="py-2 px-4 border-b hidden md:table-cell">
                {crypto.market_cap.toLocaleString()}
              </td>
              <td className="py-2 px-4 border-b hidden lg:table-cell">
                {crypto.total_volume.toLocaleString()}
              </td>
              <td className="py-2 px-4 border-b hidden lg:table-cell">
                {crypto.high_24h.toFixed(2)}
              </td>
              <td className="py-2 px-4 border-b hidden lg:table-cell">
                {crypto.low_24h.toFixed(2)}
              </td>
              <td className="py-2 px-4 border-b hidden md:table-cell">
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
