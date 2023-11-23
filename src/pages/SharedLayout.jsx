import { Navbar, Footer } from "../components";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div className="relative">
      <div className="flex justify-center items-center">
        <div className="mr-[17rem]">
          <Navbar />
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default SharedLayout;
