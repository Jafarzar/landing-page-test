import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Content from "@/components/Content";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-48 ${inter.className}`}
    >
      <Header />
      <Hero />
      <Products />
      <Content />
    </main>
  );
}
