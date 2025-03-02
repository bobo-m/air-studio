import heroImage1 from "./assets/hero-desktop-1.avif";
import logo from "./assets/logo.avif";

const App = () => {
  return (
    <div className="max-w-screen">
      <header className="font-poppins h-[96px] backdrop-brightness-80">
        <div className="flex h-full w-full">
          <div className="flex-[196px] flex justify-center items-center h-full">
            <img src={logo} alt="Logo" className="" width={86} height={60} />
          </div>
          <nav className="w-full flex-[784px]"></nav>
        </div>
      </header>
      <img
        src={heroImage1}
        alt="Hero Image"
        className="w-full object-cover object-[50%_100%] absolute top-0 -z-10"
      />
    </div>
  );
};

export default App;
