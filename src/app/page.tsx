"use client";
import { useCallback, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import Product from "@/components/Product";
import { useGetProducts } from "@/lib/queries/useProduct";
import { IProduct } from "@/types/product";
import LoadingState from "@/components/LoadingState";
import { EmptyState } from "@/components/EmptyState";

export default function Home() {
  const { data: products, isLoading: isLoadingProducts } = useGetProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortQuery, setSortQuery] = useState("");

  /** Start Search functionality using useCallBack */
  const handleQueryChange = useCallback(
    (event: any) => {
      const handleSearch = (search: string) => {
        const filteredData = products?.filter((product: IProduct) =>
          product?.title?.toLowerCase()?.startsWith(search?.toLowerCase())
        );
        setFilteredProducts(filteredData);
      };

      setSearchQuery(event?.target?.value);
      handleSearch(event?.target?.value);
    },
    [products]
  );
  /** End Search functionality using useCallBack */

  /** Sort functionality using useCallBack */
  const handleSortQueryChange = useCallback(
    (event: any) => {
      const handleSort = (e: string) => {
        const filteredData = products?.sort((a: IProduct, b: IProduct) =>
          e?.toLowerCase() === "ascending"
            ? a.price - b.price
            : b.price - a.price
        );
        setFilteredProducts(filteredData);
      };

      setSortQuery(event?.target?.value);
      handleSort(event?.target?.value);
    },
    [products]
  );
  /** End Sort functionality using useCallBack */

  useEffect(() => {
    if (!searchQuery && !sortQuery) {
      setFilteredProducts(products);
    }
  }, [searchQuery, products, sortQuery]);

  return (
    <main className="w-full">
      <div className="w-full pt-24 md:pt-40 px-5 md:px-10 grid gap-1">
        <h2 className="text-xl md:text-3xl font-bold">All Products</h2>
        <div className="w-full flex flex-col md:flex-row md:justify-end items-center gap-2">
          <span className="border border-product-border w-48 h-10 p-2 rounded-full flex items-center justify-between">
            <input
              name="search"
              placeholder="Search product..."
              className="font-normal w-3/4 focus:outline-none"
              onChange={handleQueryChange}
            />
            <IoSearch />
          </span>

          <div className="flex items-center gap-2">
            <label>Sort by</label>
            <select
              className="border border-product-border rounded-lg p-2 focus:outline-none"
              onChange={handleSortQueryChange}
              name="sort"
            >
              <option value="ascending">low to high</option>
              <option value="descending">high to low</option>
            </select>
          </div>
        </div>
        {isLoadingProducts ? (
          <LoadingState />
        ) : filteredProducts?.length === 0 ? (
          <EmptyState title="No product available!" />
        ) : (
          <div className="py-10 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {filteredProducts?.map((product: IProduct) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
