import { useEffect, useState } from "react";
import { getExchangeData } from "../assets/redux/features/cryptoApi";
import { useDispatch, useSelector } from "react-redux";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";

const Exchanges = () => {
  const [activeIndex, SetActiveIndex] = useState(null);

  const dispatch = useDispatch();
  const { cryptoExchangeData, isLoading } = useSelector(
    (store) => store.cryptoData
  );
  const handleChange = (index) => {
    SetActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    dispatch(getExchangeData("/exchanges"));
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="absolute right-[35%] translate-y-[50vh] flex flex-col justify-center items-center">
        <FaSpinner size={50} className="text-secondary animate-spin" />
        <h2 className="text-3xl text-secondary font-medium mt-3">Loading...</h2>
      </div>
    );
  }
  return (
    <section>
      <div className="absolute w-[80%] left-[12%] translate-x-[2%] mt-[1rem]">
        <div className="flex justify-center items-center mb-10 translate-x-[8%]">
          <h1 className="w-full text-2xl text-secondary font-medium mt-4 text-center">
            {`Top ${cryptoExchangeData.length} Cryptos in the world`}
          </h1>
        </div>
        <div className="flex justify-start items-start">
          <div className="w-full">
            <h1 className="text-xl text-secondary font-bold text-center">
              Exchange
            </h1>
          </div>
          <div className="w-full">
            <h1 className="text-xl text-secondary font-bold text-center">
              Country
            </h1>
          </div>
          <div className="w-full">
            <h1 className="text-xl text-secondary font-bold text-center">
              Year Established
            </h1>
          </div>
        </div>
        <div className="flex flex-col pl-[8rem]">
          {cryptoExchangeData.map(
            (
              { id, name, image, url, description, year_established, country },
              index
            ) => {
              return (
                <div
                  className="w-full bg-gray-100 rounded-md shadow-sm border border-gray-200 mt-2"
                  key={id}
                >
                  <div
                    className="flex justify-between items-center p-2"
                    onClick={() => handleChange(index)}
                  >
                    <div className="w-full flex justify-start items-center">
                      <p className="text-sm text-bgPrimary font-medium mr-2">
                        {index + 1}.
                      </p>
                      <img
                        src={image}
                        className="w-[30px] h-[30px] rounded-full mr-2"
                        alt={name}
                      />
                      <Link to={`${url}`}>
                        <p className="text-sm text-bgPrimary font-medium">
                          {name}
                        </p>
                      </Link>
                    </div>
                    <div className="w-full">
                      <h1 className="text-sm text-bgPrimary font-normal px-12">
                        {country}
                      </h1>
                    </div>
                    <div className="w-full">
                      <h1 className="text-sm text-bgPrimary font-normal text-center">
                        {year_established}
                      </h1>
                    </div>
                  </div>
                  {activeIndex === index && (
                    <div className="w-full bg-white border-t border-gray-200 p-3 rounded-b-md">
                      <p className="text-sm text-lightGray font-normal mt-1">
                        {description}
                      </p>
                    </div>
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};
export default Exchanges;
