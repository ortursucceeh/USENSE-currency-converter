"use client";

import { ArrowRightLeft } from "lucide-react";

import { CURRENCIES } from "@/lib/constants";
import { Input, Label, Card } from "./ui";
import { useConverter } from "@/hooks/useConverter";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const Converter = () => {
  const {
    amount,
    onChangeAmount,
    swapCurrencies,
    baseCurrency,
    onChangeBaseCurrency,
    targetCurrency,
    onChangeTargetCurrency,
    rate,
  } = useConverter();

  return (
    <div className="flex flex-col gap-4 font-medium">
      <Label className="text-md" htmlFor="amount">
        Amount
        <Input
          className="text-md"
          id="amount"
          inputMode="numeric"
          pattern="[0-9]*"
          min={0}
          value={amount}
          onChange={onChangeAmount}
        />
      </Label>

      <div className="flex justify-between items-end">
        <div>
          <Label htmlFor="fromCurrency">From</Label>
          <Select value={baseCurrency} onValueChange={onChangeBaseCurrency}>
            <SelectTrigger id="fromCurrency" className="w-[80px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {CURRENCIES.map((currency) => (
                  <SelectItem key={`from-${currency}`} value={currency}>
                    {currency}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <ArrowRightLeft
          size={40}
          className="p-2.5 ring-[0.5px] ring-gray-300 rounded-full ring-current transition cursor-pointer hover:ring-1"
          onClick={swapCurrencies}
        />

        <div>
          <Label htmlFor="toCurrency">To</Label>
          <Select value={targetCurrency} onValueChange={onChangeTargetCurrency}>
            <SelectTrigger id="toCurrency" className="w-[80px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {CURRENCIES.map((currency) => (
                  <SelectItem key={`to-${currency}`} value={currency}>
                    {currency}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="p-4 grid place-content-center text-xl font-medium bg-gray-100">
        {+amount > 0 ? `${amount} ${baseCurrency} = ${rate} ${targetCurrency}` : "Enter The Amount"}
      </Card>
    </div>
  );
};
