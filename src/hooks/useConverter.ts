import { getCurrencyExchange } from "@/api";
import { MAX_AMOUNT } from "@/lib/constants";
import { useState, useEffect, ChangeEvent } from "react";

export const useConverter = () => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("UAH");
  const [amount, setAmount] = useState<number | "">(1);
  const [rate, setRate] = useState<number>();

  useEffect(() => {
    const getCurrencyRate = async () => {
      const newRate = await getCurrencyExchange({ baseCurrency, targetCurrency, amount });
      setRate(newRate);
    };

    getCurrencyRate();
  }, [baseCurrency, targetCurrency, amount]);

  const onChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue === "") {
      setAmount(inputValue);
    } else {
      if (!isNaN(parseFloat(inputValue)) && +inputValue < MAX_AMOUNT) {
        setAmount(+inputValue);
      }
    }
  };

  const onChangeBaseCurrency = (value: string) => setBaseCurrency(value);

  const onChangeTargetCurrency = (value: string) => setTargetCurrency(value);

  const swapCurrencies = () => {
    setBaseCurrency(targetCurrency);
    setTargetCurrency(baseCurrency);
  };

  return {
    amount,
    onChangeAmount,
    swapCurrencies,
    baseCurrency,
    onChangeBaseCurrency,
    targetCurrency,
    onChangeTargetCurrency,
    rate,
  };
};
