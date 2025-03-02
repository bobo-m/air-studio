import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { shootData } from "../data/shootData";

const Caruosel = () => {
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {shootData.map((shoot, i) => (
        <div
          key={i}
          style={{ width: shoot.width }}
          className="h-[150px] md:h-[250px] lg:h-[381px] !flex !justify-center"
        >
          <img src={shoot.img} alt="" className="h-full" />
        </div>
      ))}
    </Slider>
  );
};

const Shoot = () => {
  return (
    <div className="bg-black w-full pb-20 relative">
      <div className="w-full">
        <div className="w-full max-md:justify-center md:px-44 flex gap-5 items-center py-7">
          <span className="uppercase text-[#878787]">Shoots At Air</span>
          <hr className="w-[2px] h-[16px] bg-[#878787]" />
          <span className="text-[#FF5900]">Watch All</span>
        </div>

        <div className="max-w-full overflow-hidden md:h-[381px]">
          <Caruosel />
        </div>

        <div className="flex justify-center gap-2 text-grey items-center mt-10 md:mt-20 text-base font-poppins flex-wrap px-2">
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
          <h2 className="text-2xl md:text-6xl font-barlow">About Studio Air</h2>
          <p className="text-grey2 px-5 md:w-1/2 text-center">
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
