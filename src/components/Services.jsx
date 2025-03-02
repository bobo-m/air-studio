import heroMobileImage2 from "../assets/hero-mobile-2.avif";

const Services = () => {
  return (
    <div className="font-poppins lg:h-[90vh] bg-transparent text-white w-full max-md:pb-5 max-lg:pb-32 relative">
      <h2 className="font-barlow text-5xl md:text-6xl text-center py-5 md:my-16">
        Our Services
      </h2>
      <div className="flex max-md:flex-col md:h-[307px] justify-center w-full gap-4">
        <div className="w-full md:w-[237px] bg-white/40 h-full flex flex-col items-center justify-center">
          <span className="text-[100px] leading-none font-didot">01</span>
          <hr className="w-1/5 h-[2px] mb-10" />
          <span className="font-futura tracking-widest">Studio Spaces</span>
        </div>
        <div className="w-full md:w-[237px] bg-white/40 h-full flex flex-col items-center justify-center">
          <span className="text-[100px] leading-none font-didot">02</span>
          <hr className="w-1/5 h-[2px] mb-10" />
          <span className="font-futura tracking-widest">
            Photography & Videography
          </span>
        </div>
        <div className="w-full md:w-[237px] bg-white/40 h-full flex flex-col items-center justify-center">
          <span className="text-[100px] leading-none font-didot">03</span>
          <hr className="w-1/5 h-[2px] mb-10" />
          <span className="font-futura tracking-widest">Production</span>
        </div>
        <div className="w-full md:w-[237px] bg-white/40 h-full flex flex-col items-center justify-center">
          <span className="text-[100px] leading-none font-didot">04</span>
          <hr className="w-1/5 h-[2px] mb-10" />
          <span className="font-futura tracking-widest">Set Construction</span>
        </div>
      </div>
      <img
        src={heroMobileImage2}
        alt=""
        className="md:hidden absolute top-0 w-full -z-10"
      />
    </div>
  );
};

export default Services;
