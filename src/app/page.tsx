"use client";
import Product from "@/components/Product";
import { useGetProducts } from "@/lib/queries/useProduct";
import { IProduct } from "@/types/product";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function Home() {
  const { data: products } = useGetProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortQuery, setSortQuery] = useState("");

  const handleSearch = (search: string) => {
    const filteredData = products?.filter((product: IProduct) =>
      product?.title?.toLowerCase()?.startsWith(search?.toLowerCase())
    );
    setFilteredProducts(filteredData);
  };

  const handleSort = (e: string) => {
    const filteredData = products?.sort((a: IProduct, b: IProduct) =>
      e?.toLowerCase() === "ascending" ? a.price - b.price : b.price - a.price
    );
    setFilteredProducts(filteredData);
  };

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
              name="product"
              placeholder="Search product..."
              className="font-normal w-3/4 focus:outline-none"
              onChange={(e) => {
                setSearchQuery(e?.target?.value);
                handleSearch(e?.target?.value);
              }}
            />
            <IoSearch />
          </span>

          <div className="flex items-center gap-2">
            <label>Sort by</label>
            <select
              className="border border-product-border rounded-lg p-2 focus:outline-none"
              onChange={(e) => {
                setSortQuery(e?.target?.value);
                handleSort(e?.target?.value);
              }}
            >
              <option value="ascending">low to high</option>
              <option value="descending">high to low</option>
            </select>
          </div>
        </div>
        <div className="py-10 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {filteredProducts?.map((product: IProduct) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
