import Image from "next/image";
import { TbShoppingBagPlus } from "react-icons/tb";
const Product = ({
  name,
  img,
  price,
}: {
  name: string;
  img: string;
  price: number;
}) => {
  return (
    <div className="w-fit grid gap-2">
      <div className="border border-product-border bg-product-bg rounded-sm flex justify-center items-center h-fit w-fit p-5">
        <Image
          src={img}
          alt="product"
          className="object-cover"
          width={300}
          height={300}
        />
      </div>
      <div>
        <h2 className="text-wrap font-medium text-base md:text-lg">{name}</h2>
        <p>₦{price}</p>
      </div>
      <button className="flex justify-center items-center gap-2 w-full border border-product-border py-3 rounded-lg text-sm">
        <TbShoppingBagPlus />
        Add to cart
      </button>
    </div>
  );
};

export default Product;
