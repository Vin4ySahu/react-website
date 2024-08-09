import Slider from "react-slick";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
interface T_ImageData {
  img: string;
  title?: string;
  heading?: string;
  descriptionHeading: string;
  description?: string;
  redirectTo: string;
}
const CenterImageSlider = ({ data }: { data: T_ImageData[] }) => {
  const [transitioning, setTransitioning] = useState(false);
  const navigate = useNavigate();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 400,
    beforeChange: () => setTransitioning(true),
    afterChange: () => {
      setTransitioning(false);
    },
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {Array.isArray(data) &&
          data.map((item, index) => {
            return (
              <div key={index}>
                <div className="imagess w-11/12">
                  <img src={item?.img} className="" />
                  <div
                    className={`transition-all duration-100  transform  ${
                      transitioning
                        ? "translate-y-5 opacity-0"
                        : "translate-y-0 opacity-100"
                    }`}
                  >
                    <div className="text-sm  md:text-base font-semibold my-2">
                      {item?.title}
                    </div>
                    <p className="text-xs md:text-base font-manrope">
                      {item?.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </Slider>
      <div className="flex justify-center my-10">
        <button
          onClick={() => navigate("#")}
          className=" duration-300 ease-in-out px-5 py-2 text-black font-normal text-sm bg-[#5CD6FF] rounded-full hover:bg-[#41c8f5]"
        >
          How do we innovate?{" "}
        </button>
      </div>
    </div>
  );
};

export default CenterImageSlider;
