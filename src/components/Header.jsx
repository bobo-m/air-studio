import MenuIcon from "../assets/icons/menu.svg?react";
import CloseIcon from "../assets/icons/x.svg?react";
import logo from "../assets/logo.avif";

const Header = ({ menuOpen, toggleMenu }) => {
  return (
    <header className="font-poppins h-[96px] backdrop-brightness-80 max-md:bg-black">
      <div className="flex h-full w-full max-md:hidden">
        <div className="flex-[196px] flex justify-center items-center h-full">
          <img src={logo} alt="Logo" className="" width={86} height={60} />
        </div>
        <nav className="w-full flex-[784px] text-white font-extralight md:px-10 lg:pr-20">
          <ul className="h-full w-full flex items-center md:justify-around lg:justify-end md:gap-10 lg:gap-20">
            <li>Home</li>
            <li>Studios</li>
            <li>Props</li>
            <li>Gallery</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className="md:hidden h-full flex items-center justify-center">
        <img src={logo} alt="Logo" className="" width={86} height={60} />
        {menuOpen ? (
          <CloseIcon
            className="md:hidden absolute right-5 top-5 w-8 h-8 cursor-pointer text-white z-10"
            onClick={toggleMenu}
          />
        ) : (
          <MenuIcon
            className="md:hidden absolute right-5 top-5 w-8 h-8 cursor-pointer text-white"
            onClick={toggleMenu}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
