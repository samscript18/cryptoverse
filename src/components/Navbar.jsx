import logo from "../assets/cryptocurrency.png";
import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFund,
  AiOutlineMoneyCollect,
  AiOutlineBulb,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <nav>
      <div className="fixed top-0 left-0 w-[20vw] h-full bg-bgPrimary py-2 rounded-r-sm shadow-md z-10">
        <div className="w-full flex justify-start items-center p-4">
          <img
            src={logo}
            className="w-[40px] h-[40px] mr-4"
            alt="cryptoverse-logo"
          />
          <h1 className="text-white text-2xl font-bold">Cryptoverse</h1>
        </div>
        <ul>
          <li className="py-4">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "flex justify-start items-center w-[80%] bg-secondary text-white text-base font-medium py-2 pl-4 rounded-sm shadow-sm duration-300"
                  : "flex justify-start items-center text-gray-400 text-base font-medium py-2 px-4"
              }
            >
              <span>
                <AiOutlineHome size={15} />
              </span>
              <span className="ml-3">Home</span>
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink
              to={"/cryptocurrencies"}
              className={({ isActive }) =>
                isActive
                  ? "flex justify-start items-center w-[80%] bg-secondary text-white text-base font-medium py-2 pl-4 rounded-sm shadow-sm duration-300"
                  : "flex justify-start items-center text-gray-400 text-base font-medium py-2 px-4"
              }
            >
              <span>
                <AiOutlineFund size={15} />
              </span>
              <span className="ml-3">Cryptocurrencies</span>
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink
              to={"/exchanges"}
              className={({ isActive }) =>
                isActive
                  ? "flex justify-start items-center w-[80%] bg-secondary text-white text-base font-medium py-2 pl-4 rounded-sm shadow-sm duration-300"
                  : "flex justify-start items-center text-gray-400 text-base font-medium py-2 px-4"
              }
            >
              <span>
                <AiOutlineMoneyCollect size={15} />
              </span>
              <span className="ml-3">Exchanges</span>
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink
              to={"/news"}
              className={({ isActive }) =>
                isActive
                  ? "flex justify-start items-center w-[80%] bg-secondary text-white text-base font-medium py-2 pl-4 rounded-sm shadow-sm duration-300"
                  : "flex justify-start items-center text-gray-400 text-base font-medium py-2 px-4"
              }
            >
              <span>
                <AiOutlineBulb size={15} />
              </span>
              <span className="ml-3">News</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
