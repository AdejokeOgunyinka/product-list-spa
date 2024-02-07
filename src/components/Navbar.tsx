import Image from "next/image";
import { RiShoppingCartLine } from "react-icons/ri";
import Logo from "../../public/logo.png";
import { useProviderContext } from "@/context/product";

const Navbar = () => {
  const { cartProducts } = useProviderContext();

  return (
    <nav className="h-20 md:h-24 w-full bg-blue flex justify-between items-center px-2 md:px-10 fixed top-0">
      <Image src={Logo} alt="logo" width={80} height={80} />
      <div>
        <span className="flex justify-center items-center p-2 bg-icon-bg rounded-full cursor-pointer relative">
          <RiShoppingCartLine color="#fff" className="w-5 h-5 " />
          {cartProducts?.length > 0 && (
            <div className="bg-white text-icon-bg rounded-full absolute -bottom-1 -right-1.5 w-3 h-3 text-sm flex justify-center items-center p-2">
              {cartProducts?.length}
            </div>
          )}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
