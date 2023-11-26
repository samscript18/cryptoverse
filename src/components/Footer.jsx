import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section>
      <div
        className="w-full bg-bgPrimary absolute bottom-0 right-0
        py-5"
      >
        <div className="flex flex-col justify-center items-center md:translate-x-0 sm:translate-x-[-5%] xs:translate-x-[-27%] text-white md:text-base sm:text-sm font-medium">
          <div className="translate-x-[45%] text-center">
            <h2>
              Copyright &copy; 2023{" "}
              <span className="text-secondary">Cryptoverse.Inc</span>
            </h2>
            <h2 className="py-3">All Rights Reserved</h2>
            <div className="flex justify-center items-center">
              <Link to={"/"} className="text-secondary mr-4">
                Home
              </Link>
              <Link to={"/exchanges"} className="text-secondary mr-4">
                Exchanges
              </Link>
              <Link to={"/news"} className="text-secondary">
                News
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
