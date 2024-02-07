import { useGetProducts } from "@/lib/queries/useProduct";
import Product from "./Product";

const ProductsGrid = () => {
  const { data: products } = useGetProducts();

  return (
    <div className="p-10 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 pt-24 md:pt-40">
      {products?.map(
        (product: {
          title: string;
          image: string;
          id: number;
          price: number;
        }) => (
          <Product
            name={product?.title}
            img={product?.image}
            price={product?.price}
            key={product?.id}
          />
        )
      )}
    </div>
  );
};

export default ProductsGrid;
