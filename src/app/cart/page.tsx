"use client";
import { useProviderContext } from "@/context/product";
import { IProduct } from "../../types/product";
import Image from "next/image";
import { EmptyState } from "@/components/EmptyState";

const Cart = () => {
  const { cartProducts } = useProviderContext();
  return (
    <div className="w-full flex justify-center px-5 md:px-10 pt-24 md:pt-40">
      {cartProducts?.length === 0 ? (
        <EmptyState title="You've not added any product to your cart yet" />
      ) : (
        <table className="border-collapse overflow-y-scroll">
          <thead>
            <tr>
              <th className="text-left p-2">Product Details</th>
              <th className="text-left p-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts?.map((product: IProduct) => (
              <tr key={product?.id} className="border border-product-border">
                <td className="p-2">
                  <span className="flex gap-2 items-center">
                    <Image
                      src={product?.image}
                      width={80}
                      height={80}
                      alt="product"
                    />
                    <p>{product?.title}</p>
                  </span>
                </td>

                <td className="p-2">{product?.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
