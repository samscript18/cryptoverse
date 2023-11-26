import { Navbar, Footer } from "../components";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div className="relative">
      <div className="flex">
        <div className="w-full basis-[18.4vw]">
          <Navbar />
        </div>
        <div className="w-full basis-[78vw]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SharedLayout;
