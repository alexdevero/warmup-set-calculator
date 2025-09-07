import { Calculator } from "@/components/Calculator/Calculator";
import { Footer } from "@/components/Footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warmup set calculator",
  description: "Calculate your warmup sets",
  openGraph: {
    title: "Warmup set calculator",
    description: "Calculate your warmup sets",
    url: "https://warmup-set-calculator.vercel.app/",
    siteName: "Warmup set calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Warmup set calculator",
    description: "Calculate your warmup sets",
  },
};

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl text-center w-full font-bold">
          Warmup set calculator
        </h1>

        <Calculator />
      </main>

      <Footer />
    </div>
  );
}
