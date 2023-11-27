import logo from "../assets/cryptocurrency.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { navLinks } from "../utils/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full">
      <div className="fixed top-0 left-0 sm:w-auto sm:h-full xs:w-full xs:h-[17vw] bg-bgPrimary py-2 rounded-r-sm shadow-md z-10">
        <div className="w-full flex justify-start items-center sm:p-4 xs:px-4 xs:pt-1">
          <img
            src={logo}
            className="md:w-[40px] sm:w-[30px] h-[40px] sm:h-[30px] lg:mr-4 xs:mr-2"
            alt="cryptoverse-logo"
          />
          <h1 className="text-white md:text-2xl sm:text-lg xs:text-2xl font-bold italic">
            Cryptoverse
          </h1>
        </div>
        <ul className="sm:block xs:hidden">
          {navLinks.map(({ id, title, link, icon }) => {
            return (
              <li key={id} className="py-4">
                <NavLink
                  to={`${link}`}
                  className={({ isActive }) =>
                    isActive
                      ? "flex justify-start items-center w-[80%] bg-secondary text-white md:text-base xs:text-sm font-medium py-2 pl-4 rounded-sm shadow-sm duration-300"
                      : "flex justify-start items-center text-gray-400 md:text-base xs:text-sm font-medium py-2 px-4"
                  }
                >
                  <span>{icon}</span>
                  <span className="lg:ml-3 xs:ml-2">{title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden xs:flex justify-center items-center absolute top-[20%] right-0 pr-4">
          {isOpen ? (
            <RiCloseLine
              size={40}
              className="text-secondary"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <RiMenu3Line
              size={35}
              className="text-secondary pt-1"
              onClick={() => setIsOpen(true)}
            />
          )}
          {isOpen && (
            <div className="w-[200px] h-auto absolute top-[15vw] right-[3vw] bg-bgPrimary py-2 px-4 z-10 scale-up-center rounded-md shadow-md">
              <ul className="flex flex-col justify-center items-start">
                {navLinks.map(({ id, title, link, icon }) => {
                  return (
                    <li
                      key={id}
                      className="w-full py-4"
                      onClick={() => setIsOpen(false)}
                    >
                      <NavLink
                        to={`${link}`}
                        className={({ isActive }) =>
                          isActive
                            ? "flex justify-start items-center w-full bg-secondary text-white md:text-base xs:text-[16px] font-medium py-2 px-3 rounded-sm shadow-sm duration-300"
                            : "flex justify-start items-center text-gray-400 md:text-base xs:text-[16px] font-medium py-2"
                        }
                      >
                        <span>{icon}</span>
                        <span className="md:ml-3 xs:ml-2">{title}</span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
