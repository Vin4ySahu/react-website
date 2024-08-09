import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
interface T_HeaderOptions {
  id: number;
  name: string;
  redirectTo: string;
}
const RightMenuBar = ({ data }: { data: T_HeaderOptions[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative w-full z-30  flex md:hidden justify-center items-center">
      {" "}
      {!isOpen ? (
        <RiMenuLine
          className="w-12 h-auto fixed  right-4 z-20  p-2 text-black stroke-black"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      ) : (
        <MdCancel
          className="w-12 h-auto fixed  right-4 z-20 p-2 top-[1%] text-black stroke-white"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      )}
      <div
        className={`fixed top-0 right-0 w-full h-full  z-10 bg-white text-black transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <h1
            className={`text-2xl mb-4 font-semibold  transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-1000 ease-in-out`}
          >
            LOGO
          </h1>
          <div className="flex justify-center items-center">
            <ul className="space-y-5 my-8">
              {Array.isArray(data) &&
                data.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`  w-80  uppercase flex justify-center text-xl border-2 p-2 border-black  font-semibold items-center cursor-pointer hover:text-blue-700 hover:border-blue-700  transform ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                      } transition-transform duration-1000 ease-in-out`}
                      onClick={() => navigate(item?.redirectTo)}
                    >
                      {item?.name}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightMenuBar;
