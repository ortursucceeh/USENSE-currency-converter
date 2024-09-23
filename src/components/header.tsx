import { getLatestCurrencyRates } from "@/api";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";

export const Header = async () => {
  const UAHRates = await getLatestCurrencyRates();

  return (
    <header className="flex justify-center gap-3 ">
      <Card className="flex items-center justify-between p-2 w-[120px]">
        <span>USD</span>
        <Separator orientation="vertical" />
        {UAHRates.USD}₴
      </Card>
      <Card className="flex items-center justify-between p-2 w-[120px]">
        <span>EUR</span>
        <Separator orientation="vertical" />
        {UAHRates.EUR}₴
      </Card>
    </header>
  );
};
