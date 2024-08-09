import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
interface T_Banner {
  img: string;
  title?: string;
  heading?: string;
  descriptionHeading: string;
  description?: string;
  redirectTo: string;
}

interface T_SliderSettings {
  arrows: boolean;
  dots: boolean;
  infinite: boolean;
  autoplay: boolean;
  fade: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  speed: number;

  appendDots: (dots: React.ReactNode) => React.ReactElement;
  customPaging: (i: number) => React.ReactElement;
  beforeChange: any;
  afterChange: any;
}
const MainSlider = ({ data }: { data: T_Banner[] }) => {
  const sliderRef = useRef<Slider | null>(null);
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("transitioning", transitioning);
  const settings: T_SliderSettings = {
    arrows: false,
    dots: true,
    // swipeToSlide: true,
    infinite: false,
    autoplay: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,

    appendDots: (dots) => (
      <div className="dotss">
        <ul className="slick_dots m-2 flex md:flex-col gap-3 overflow-x-scroll md:overflow-x-hidden">
          {" "}
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "",
          // color: "blue",
          display: "flex",
          margin: "",
          // border: "1px blue solid",
        }}
        className="w-full  text-xs uppercase whitespace-nowrap text-black md:text-white "
      >
        {`${data[i]?.title} `}
      </div>
    ),
    beforeChange: () => setTransitioning(true),
    afterChange: (current: number) => {
      setTransitioning(false);
      setCurrentIndex(current);
    },
  };
  useEffect(() => {
    const slider = sliderRef.current;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (currentIndex === data.length - 1) {
        // If the last slide is reached, scroll vertically
        window.scrollBy({ top: event.deltaY });
      } else {
        if (event.deltaY < 0) {
          slider?.slickPrev();
        } else {
          slider?.slickNext();
        }
      }
    };

    const sliderDiv = document.querySelector(".horizontal-scroll-container");
    if (sliderDiv) {
      sliderDiv.addEventListener("wheel", handleWheel as EventListener);
    }

    return () => {
      if (sliderDiv) {
        sliderDiv.removeEventListener("wheel", handleWheel as EventListener);
      }
    };
  }, [currentIndex]);
  return (
    <div className="horizontal-scroll-container overflow-hidden">
      <Slider {...settings} ref={sliderRef}>
        {Array.isArray(data) &&
          data.map((item, index) => {
            return (
              <div className=" " key={index}>
                <div className="relative">
                  <h3 className="hidden md:block absolute top-[15%] left-[6%]  text-xl md:text-4xl text-white">
                    {item?.heading}
                  </h3>
                  <img
                    src={item?.img}
                    alt="First Slide"
                    className="w-full  h-[360px] md:h-[650px]"
                  />
                  <div
                    className={`absolute bottom-5 md:bottom-[12%] left-[6%]  text-white font-thin  transition-all duration-100  transform  ${
                      transitioning
                        ? "translate-y-5 opacity-0"
                        : "translate-y-0 opacity-100"
                    }`}
                  >
                    <h4 className={` text-2xl md:text-3xl my-3  `}>
                      {item?.descriptionHeading}
                    </h4>
                    <p className=" text-sm md:text-base w-11/12 md:w-5/6">
                      {item?.description}
                    </p>
                    <div className="my-5">
                      <button
                        onClick={() => navigate(item?.redirectTo)}
                        className=" duration-300 ease-in-out px-3 py-1 md:px-5 md:py-2 text-black font-normal text-sm bg-[#5CD6FF] rounded-full hover:bg-[#41c8f5]"
                      >
                        Know more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default MainSlider;
