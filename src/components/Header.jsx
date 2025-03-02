import logo from "../assets/logo.avif";

const Header = () => {
  return (
    <header className="font-poppins h-[96px] backdrop-brightness-80">
      <div className="flex h-full w-full">
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
    </header>
  );
};

export default Header;
