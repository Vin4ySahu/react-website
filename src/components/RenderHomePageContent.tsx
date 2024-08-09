import CenterImageSlider from "./CenterImageSlider";
import GetInTouch from "./GetInTouch";
import MainSlider from "./MainSlider";
import { mainBanners, centerImages } from "../lib/data/images.data";
const RenderHomePageContent = () => {
  return (
    <div>
      <div>
        <MainSlider data={mainBanners} />
      </div>

      <div className="text-[#00AEEF] flex justify-center text-2xl md:text-4xl gap-2 font-semibold my-12 md:my-16 ">
        Next era
        <span className="text-black font-normal"> of possibilities</span>
      </div>

      <div>
        <CenterImageSlider data={centerImages} />
      </div>
      <div className="flex justify-center my-10">
        <GetInTouch />
      </div>
    </div>
  );
};

export default RenderHomePageContent;
