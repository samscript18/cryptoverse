import { useSelector } from "react-redux";
import { Cryptocurrency } from "../components";
import { FaSpinner } from "react-icons/fa";

const Cryptocurrencies = () => {
  const { cryptoCoinsData, isLoading } = useSelector(
    (store) => store.cryptoData
  );

  if (isLoading) {
    return (
      <div className="absolute sm:right-[38%] xs:right-[35%] translate-y-[40vh] flex flex-col justify-center items-center">
        <FaSpinner size={50} className="text-secondary animate-spin" />
        <h2 className="text-3xl text-secondary font-medium mt-3">Loading...</h2>
      </div>
    );
  }

  return (
    <section className="w-full">
      <div className="w-full mb-8 sm:px-8 xs:px-6">
        <div className="flex justify-center items-center mb-8">
          <h1 className="w-full text-2xl text-secondary font-medium mt-4 text-center">
            {`Top ${cryptoCoinsData.length} Cryptos in the world`}
          </h1>
        </div>
        <div className="grid lg:gap-8 md:gap-6 ss:gap-6 xs:gap-4 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-1">
          {cryptoCoinsData.map((data) => {
            return <Cryptocurrency key={data.uuid} {...data} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Cryptocurrencies;
