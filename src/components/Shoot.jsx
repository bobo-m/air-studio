import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { shootData } from "../data/shootData";
import heroImage2 from "../assets/hero-2.avif";

const Caruosel = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <Slider {...settings}>
      {shootData.map((shoot, i) => (
        <div key={i} style={{ width: shoot.width }} className="h-full">
          <img src={shoot.img} alt="" />
        </div>
      ))}
    </Slider>
  );
};

const Shoot = () => {
  return (
    <div className="bg-black w-full pb-20 relative">
      <div className="w-full">
        <div className="w-full px-44 flex gap-5 items-center py-7">
          <span className="uppercase text-[#878787]">Shoots At Air</span>
          <hr className="w-[2px] h-[16px] bg-[#878787]" />
          <span className="text-[#FF5900]">Watch All</span>
        </div>

        <div className="max-w-full overflow-hidden h-[381px]">
          <Caruosel />
        </div>

        <div className="flex justify-center gap-2 text-grey items-center mt-20 text-base font-poppins">
          <span>Photoshoots</span>
          <hr className="w-[2px] h-[16px] bg-grey" />
          <span>Campaign Shoots</span>
          <hr className="w-[2px] h-[16px] bg-grey" />
          <span>Brand Launches</span>
          <hr className="w-[2px] h-[16px] bg-grey" />
          <span>TV Commercials</span>
          <hr className="w-[2px] h-[16px] bg-grey" />
          <span>Music Videos </span>
        </div>

        <div className="font-poppins text-white flex flex-col items-center mt-12 gap-8">
          <h2 className="text-6xl font-barlow">About Studio Air</h2>
          <p className="text-grey2 w-1/2 text-center">
            Studio Air captures a feeling of ease. Here, we intend to decode pre
            and post production processes into small, achievable tasks and help
            you through each of them.
          </p>
          <span className="text-corvid">+ More Info</span>
        </div>
      </div>
    </div>
  );
};

export default Shoot;
