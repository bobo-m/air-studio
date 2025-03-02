import { useState, useEffect } from "react";
import Header from "../components/Header";
import Shoot from "../components/Shoot";
import Services from "../components/Services";
import VideoPlayer from "../components/VideoPlayer";
import ClientsSection from "../components/ClientSection";
import Footer from "../components/Footer";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import heroMobileImage1 from "../assets/hero-mobile-1.avif";
import heroTabletImage1 from "../assets/hero-tablet-1.avif";
import heroDesktopImage1 from "../assets/hero-desktop-1.avif";
import heroMobileImage2 from "../assets/hero-mobile-2.avif";
import heroTabletImage2 from "../assets/hero-tablet-2.avif";
import heroDesktopImage2 from "../assets/hero-desktop-2.avif";
import CloseIcon from "../assets/icons/x.svg?react";
import ChevronUp from "../assets/icons/chevron-up.svg?react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e) => {
    const scrollY = e.target.scrollTop; // Get scroll position of the div
    const triggerHeight =
      window.innerWidth <= 1024
        ? window.innerHeight * 0.7
        : window.innerHeight * 1.2;

    setIsVisible(scrollY > triggerHeight);
  };

  const scrollTop = () => {
    const scrollContainer = document.getElementById("scroll-container");
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="overflow-hidden max-w-screen h-screen relative">
      <button
        className="absolute bottom-1/4 left-2 border-2 border-white p-5 md:hidden z-10"
        onClick={scrollTop}
      >
        <ChevronUp className="text-white" />
      </button>
      {menuOpen && (
        <div className="md:hidden max-w-screen h-screen overflow-hidden bg-white/50 flex justify-end font-poppins absolute z-10">
          <nav className="w-3/4 h-full bg-black text-white">
            <CloseIcon
              onClick={() => setMenuOpen(false)}
              className="md:hidden absolute right-5 top-5 w-8 h-8 cursor-pointer text-white z-10 block"
            />
            <ul className="h-full w-full flex flex-col items-end mt-[100px] text-xl gap-5 p-10">
              <li>Home</li>
              <hr className="w-full h-[2px] bg-grey" />
              <li>Studios</li>
              <hr className="w-full h-[2px] bg-grey" />

              <li>Props</li>
              <hr className="w-full h-[2px] bg-grey" />

              <li>Gallery</li>
              <hr className="w-full h-[2px] bg-grey" />

              <li>About Us</li>
              <hr className="w-full h-[2px] bg-grey" />

              <li>Contact</li>
              <hr className="w-full h-[2px] bg-grey" />
            </ul>
          </nav>
        </div>
      )}
      <div
        id="scroll-container"
        className="max-w-screen h-full min-h-screen relative overflow-x-hidden overflow-y-scroll"
        onScroll={(e) => handleScroll(e)}
      >
        <Header
          menuOpen={menuOpen}
          toggleMenu={() => setMenuOpen((prev) => !prev)}
        />
        <div className="md:h-[55vh] lg:h-[90vh] w-full flex items-end pl-10 md:pl-28 lg:pl-40 pb-8 md:pb-16 md:mb-16">
          <div className="flex md:h-56 lg:h-64 md:gap-3 lg:gap-5">
            <hr className="w-[1px] h-full bg-black max-md:hidden" />
            <div className="flex flex-col justify-end gap-2 md:gap-5 max-md:mt-28">
              <h2 className="text-2xl max-md:tracking-wider md:text-7xl font-medium uppercase font-barlow">
                Studio Air
              </h2>
              <p>
                At Air, we streamline creative direction. <br /> Featuring the
                largest Cyclorama in Delhi
              </p>
              <button className="uppercase bg-[#FF5900] text-white px-10 py-2 w-min whitespace-nowrap">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <Shoot />
          <Services />
        </div>

        <VideoPlayer src="https://video.wixstatic.com/video/fd1748_9284db98685d462bbf9b67eabd0cae3b/1080p/mp4/file.mp4" />

        <div className="">
          <ClientsSection />
          <Footer />
        </div>

        <picture className="max-md:hidden">
          <source media="(min-width: 1024px)" srcSet={heroDesktopImage2} />
          <source media="(min-width: 600px)" srcSet={heroTabletImage2} />

          {/* Default Desktop */}
          <img
            src={heroDesktopImage2}
            alt="Hero Image 2"
            style={{ opacity: isVisible ? 1 : 0 }}
            className="w-full h-full object-cover object-[50%_100%] fixed top-0 -z-10"
          />
        </picture>

        <picture>
          <source media="(min-width: 1024px)" srcSet={heroDesktopImage1} />
          <source media="(min-width: 600px)" srcSet={heroTabletImage1} />
          <img
            src={heroMobileImage1}
            alt="Hero Image"
            className="w-full md:h-full object-cover object-[50%_100%] absolute md:fixed top-[96px] md:top-0 -z-20"
          />
        </picture>
      </div>
    </div>
  );
};

export default Home;
