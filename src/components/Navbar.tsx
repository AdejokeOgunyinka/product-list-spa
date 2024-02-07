import Image from "next/image";
import { RiShoppingCartLine } from "react-icons/ri";
import Logo from "../../public/logo.png";

const Navbar = () => {
  return (
    <nav className="h-20 md:h-24 w-full bg-blue flex justify-between items-center px-10 fixed top-0">
      <Image src={Logo} alt="logo" width={80} height={80} />
      <div>
        <span className="flex justify-center items-center p-2 bg-icon-bg rounded-full cursor-pointer">
          <RiShoppingCartLine color="#fff" className="w-5 h-5 " />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
