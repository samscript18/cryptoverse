import { useEffect, useState } from "react";
import { getExchangeData } from "../app/redux/features/cryptoApiSlice";
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
      <div className="absolute sm:right-[38%] xs:right-[35%] translate-y-[40vh] flex flex-col justify-center items-center">
        <FaSpinner size={50} className="text-secondary animate-spin" />
        <h2 className="text-3xl text-secondary font-medium mt-3">Loading...</h2>
      </div>
    );
  }
  return (
    <section className="w-full md:px-6 ss:px-8 xs:px-6">
      <div className="w-full mb-8">
        <div className="flex justify-center items-center mb-10">
          <h1 className="w-full md:text-2xl xs:text-lg text-secondary font-medium ss:mt-4 xs:mt-2 text-center">
            {`Top ${cryptoExchangeData.length} Exchanges in the world`}
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-full">
            <h1 className="md:text-xl xs:text-base text-secondary font-medium text-start">
              Exchange
            </h1>
          </div>
          <div className="w-full translate-x-[15%]">
            <h1 className="md:text-xl xs:text-base text-secondary font-medium text-start">
              Country
            </h1>
          </div>
          <div className="w-full">
            <h1 className="md:text-xl xs:text-base text-secondary font-medium text-center">
              Year Established
            </h1>
          </div>
        </div>
        <div className="w-full flex flex-col">
          {cryptoExchangeData.map(
            (
              { id, name, image, url, description, year_established, country },
              index
            ) => {
              return (
                <div
                  className="bg-gray-100 rounded-md shadow-sm border border-gray-200 mt-2"
                  key={id}
                >
                  <div
                    className="flex justify-between items-center p-2 duration-300"
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
                    <div className="w-full bg-white border-t border-gray-200 p-3 rounded-b-md duration-300">
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
