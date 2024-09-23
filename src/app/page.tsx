import { Converter } from "@/components/converter";
import { Header } from "@/components/header";
import { Gem } from "lucide-react";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen  gap-16  font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-lg mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl">
        <div className="grid items-center p-8 w-[400px] h-[380px]">
          <h1 className="uppercase tracking-wide text-xl font-extrabold mb-1 text-center">
            Currency
            <Gem className="inline -translate-y-0.5 w-10" />
            Converter
          </h1>
          <Header />
          <Converter />
        </div>
      </div>
    </div>
  );
}
