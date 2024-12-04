import { SupportedCurrency } from "@/types";

interface CurrencySelectorProps {
  currency: SupportedCurrency;
  setCurrency: (value: SupportedCurrency) => void;
}

export const CurrencySelector = ({
  currency,
  setCurrency,
}: CurrencySelectorProps) => {
  const currencies = ["usd", "eur", "chf", "gbp", "inr"];

  return (
    <select
      className="px-4 py-[6px] rounded-md border border-gray-300"
      value={currency}
      onChange={(e) => setCurrency(e.target.value as SupportedCurrency)}
    >
      {currencies.map((curr) => (
        <option key={curr} value={curr}>
          {curr.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
