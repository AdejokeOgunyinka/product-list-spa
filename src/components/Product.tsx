import Image from "next/image";
import { TbShoppingBagPlus } from "react-icons/tb";
import { useProviderContext } from "@/context/product";
import { IProduct } from "@/types/product";
const Product = ({ product }: { product: IProduct }) => {
  const { cartProducts, setCartProducts } = useProviderContext();

  const isPartOfCartArray = cartProducts?.filter(
    (cartProduct: IProduct) => cartProduct?.id === product?.id
  );

  const handleAddToCart = (product: IProduct) => {
    if (isPartOfCartArray?.length > 0) {
      setCartProducts(
        cartProducts.filter(
          (cartProduct: IProduct) => cartProduct?.id !== product?.id
        )
      );
    } else {
      setCartProducts([...cartProducts, product]);
    }
  };
  return (
    <div className="w-fit">
      <div className="border border-product-border bg-product-bg rounded-sm flex justify-center items-center h-fit w-fit p-5">
        <Image
          src={product.image}
          alt="product"
          className="object-cover"
          width={300}
          height={300}
        />
      </div>
      <div>
        <h2 className="text-wrap font-medium text-base md:text-lg">
          {product.title}
        </h2>
        <p>₦{product.price}</p>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        className={`flex justify-center items-center flex-col md:flex-row gap-2 w-full border border-product-border py-2 rounded-lg text-sm ${
          isPartOfCartArray?.length > 0 ? "bg-blue text-white" : "bg-unset"
        }`}
      >
        <TbShoppingBagPlus />
        {isPartOfCartArray?.length > 0 ? "Remove from cart" : "Add to cart"}
      </button>
    </div>
  );
};

export default Product;
