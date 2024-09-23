const API_KEY = "03acb3afc8c189ee2878d872";
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`; //

export const getLatestCurrencyRates = async (): Promise<{
  USD: number;
  EUR: number;
}> => {
  try {
    const EURtoUAH = await fetch(`${BASE_URL}/latest/EUR`)
      .then((data) => data.json())
      .then((data) => data.conversion_rates.UAH.toFixed(2));

    const USDtoUAH = await fetch(`${BASE_URL}/latest/USD`)
      .then((data) => data.json())
      .then((data) => data.conversion_rates.UAH.toFixed(2));

    return {
      USD: USDtoUAH,
      EUR: EURtoUAH,
    };
  } catch (error) {
    console.log(error);

    return {
      USD: 0,
      EUR: 0,
    };
  }
};

export const getCurrencyExchange = async ({
  baseCurrency,
  targetCurrency,
  amount,
}: {
  baseCurrency: string;
  targetCurrency: string;
  amount: number | "";
}): Promise<number> => {
  try {
    const result = await fetch(`${BASE_URL}/pair/${baseCurrency}/${targetCurrency}/${amount}`)
      .then((data) => data.json())
      .then((result) => result.conversion_result);

    return result;
  } catch (error) {
    console.log(error);

    return 0;
  }
};
