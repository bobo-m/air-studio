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
import heroDestopImage1 from "../assets/hero-desktop-1.avif";
import heroImage2 from "../assets/hero-2.avif";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="max-w-screen relative">
      <Header />
      <div className="lg:h-[90vh] w-full flex items-end pl-40 pb-16 mb-16">
        <div className="flex h-64 gap-5">
          <hr className="w-[1px] h-full bg-black" />
          <div className="flex flex-col justify-end gap-5">
            <h2 className="text-7xl font-medium uppercase font-barlow">
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
      <img
        src={heroImage2}
        alt=""
        className="w-full fixed -z-10 top-0"
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      <img
        src={heroDestopImage1}
        alt="Hero Image"
        className="w-full object-cover object-[50%_100%] fixed top-0 -z-20"
      />
      <div className="">
        <ClientsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
