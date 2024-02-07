"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import ProductsGrid from "@/components/ProductsGrid";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className="w-full">
        <Navbar />
        <ProductsGrid />
      </main>
    </QueryClientProvider>
  );
}
