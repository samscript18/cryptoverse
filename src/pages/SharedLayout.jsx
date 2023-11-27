import { Navbar, Footer } from "../components";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const SharedLayout = () => {
  const { isLoading } = useSelector((store) => store.cryptoData);
  return (
    <div className="relative flex flex-col">
      <div
        className={`flex ss:flex-row xs:flex-col lg:justify-start md:justify-around ss:justify-around xs:justify-center items-center ${
          isLoading ? "mb-[38%]" : ""
        }`}
      >
        <div className="w-full basis-[18.4vw]">
          <Navbar />
        </div>
        <div className="w-full basis-[78vw]">
          <Outlet />
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};
export default SharedLayout;
