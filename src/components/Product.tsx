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
    <div className="w-full grid gap-2">
      <div className="border border-product-border bg-product-bg rounded-sm flex justify-center items-center w-full h-40 md:h-80 relative p-5 py-10">
        <Image
          src={product.image}
          alt="product"
          className="object-cover"
          layout="fill"
          objectFit="contain"
          sizes="100%"
          priority
        />
      </div>
      <div>
        <h2 className="text-wrap font-medium text-base md:text-lg">
          {product.title}
        </h2>
        <p className="font-bold">₦{product.price}</p>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        className={`flex justify-center items-center flex-col md:flex-row gap-2 w-full border border-product-border h-20 md:h-12 rounded-lg text-sm ${
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
