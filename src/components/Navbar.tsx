import Image from "next/image";
import Link from "next/link";
import { RiShoppingCartLine } from "react-icons/ri";
import { useProviderContext } from "@/context/product";
import Logo from "../../public/logo.png";

const Navbar = () => {
  const { cartProducts } = useProviderContext();

  return (
    <nav className="h-20 md:h-24 w-full bg-blue flex justify-between items-center px-2 md:px-10 fixed top-0 z-10">
      <Link href="/">
        <Image src={Logo} alt="logo" width={80} height={80} />
      </Link>
      <div>
        <Link
          className="flex justify-center items-center p-2 bg-icon-bg rounded-full cursor-pointer relative"
          href="/cart"
        >
          <RiShoppingCartLine color="#fff" className="w-5 h-5" />
          {cartProducts?.length > 0 && (
            <div className="bg-white text-icon-bg rounded-full absolute -bottom-1 -right-1.5 w-5 h-5 text-sm flex justify-center items-center p-2">
              {cartProducts?.length}
            </div>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
