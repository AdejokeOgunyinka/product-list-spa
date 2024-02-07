"use client";

import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductProvider } from "@/context/product";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <ProductProvider>
            <div className="w-full">
              <Navbar />
              {children}
            </div>
          </ProductProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
