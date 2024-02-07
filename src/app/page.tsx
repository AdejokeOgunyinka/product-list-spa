"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import ProductsGrid from "@/components/ProductsGrid";
import { ProductProvider } from "@/context/product";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ProductProvider>
        <main className="w-full">
          <Navbar />
          <ProductsGrid />
        </main>
      </ProductProvider>
    </QueryClientProvider>
  );
}
