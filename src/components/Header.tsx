import { useNavigate } from "react-router-dom";
import RightMenuBar from "./RightMenuBar";
const Header = () => {
  const navigate = useNavigate();
  const headerOptions = [
    { id: 1, name: "Applications", redirectTo: "#" },
    { id: 2, name: "Innovation", redirectTo: "#" },
    { id: 3, name: "Company", redirectTo: "#" },
    { id: 4, name: "Careers", redirectTo: "#" },
  ];

  return (
    <div className=" flex md:justify-center  h-14 md:h-20  bg-white  items-center">
      <div className=" hidden md:flex justify-center gap-12   items-center">
        {Array.isArray(headerOptions) &&
          headerOptions.map((item, index) => {
            return (
              <div
                key={index}
                className="text-sm uppercase cursor-pointer font-semibold hover:text-blue-700"
                onClick={() => navigate(item?.redirectTo)}
              >
                {item?.name}
              </div>
            );
          })}
      </div>
      {/* <div className=" flex md:hidden justify-end w-full"> */}{" "}
      <RightMenuBar data={headerOptions} />
      {/* </div> */}
      {/* {showMenu && <RightMenuBar />} */}
    </div>
  );
};

export default Header;
