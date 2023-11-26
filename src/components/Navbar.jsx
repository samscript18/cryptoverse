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
    <nav className="w-full">
      <div className="fixed top-0 left-0 w-auto h-full bg-bgPrimary py-2 rounded-r-sm shadow-md z-10 sm:block xs:hidden">
        <div className="w-full flex justify-start items-center p-4">
          <img
            src={logo}
            className="md:w-[40px] sm:w-[30px] h-[40px] sm:h-[30px] md:mr-4 sm:mr-2"
            alt="cryptoverse-logo"
          />
          <h1 className="text-white md:text-2xl sm:text-lg font-bold italic">
            Cryptoverse
          </h1>
        </div>
        <ul>
          <li className="py-4">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "flex justify-start items-center w-[80%] bg-secondary text-white md:text-base xs:text-sm font-medium py-2 pl-4 rounded-sm shadow-sm duration-300"
                  : "flex justify-start items-center text-gray-400 md:text-base xs:text-sm font-medium py-2 px-4"
              }
            >
              <span>
                <AiOutlineHome size={15} />
              </span>
              <span className="md:ml-3 xs:ml-2">Home</span>
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink
              to={"/cryptocurrencies"}
              className={({ isActive }) =>
                isActive
                  ? "flex justify-start items-center w-[90%] bg-secondary text-white md:text-base xs:text-sm font-medium py-2 pl-4 rounded-sm shadow-sm duration-300"
                  : "flex justify-start items-center text-gray-400 md:text-base xs:text-sm font-medium py-2 px-4"
              }
            >
              <span>
                <AiOutlineFund size={15} />
              </span>
              <span className="md:ml-3 xs:ml-2">Cryptocurrencies</span>
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink
              to={"/exchanges"}
              className={({ isActive }) =>
                isActive
                  ? "flex justify-start items-center w-[80%] bg-secondary text-white md:text-base xs:text-sm font-medium py-2 pl-4 rounded-sm shadow-sm duration-300"
                  : "flex justify-start items-center text-gray-400 md:text-base xs:text-sm font-medium py-2 px-4"
              }
            >
              <span>
                <AiOutlineMoneyCollect size={15} />
              </span>
              <span className="md:ml-3 xs:ml-2">Exchanges</span>
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink
              to={"/news"}
              className={({ isActive }) =>
                isActive
                  ? "flex justify-start items-center w-[80%] bg-secondary text-white md:text-base xs:text-sm font-medium py-2 pl-4 rounded-sm shadow-sm duration-300"
                  : "flex justify-start items-center text-gray-400 md:text-base xs:text-sm font-medium py-2 px-4"
              }
            >
              <span>
                <AiOutlineBulb size={15} />
              </span>
              <span className="lg:ml-3 xs:ml-2">News</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
