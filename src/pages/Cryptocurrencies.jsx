import { useSelector } from "react-redux";
import { Cryptocurrency } from "../components";
import { FaSpinner } from "react-icons/fa";

const Cryptocurrencies = () => {
  const { cryptoCoinsData, isLoading } = useSelector(
    (store) => store.cryptoData
  );

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
      <div className="w-full mb-[10rem]">
        <div className="flex justify-center items-center mb-8">
          <h1 className="w-full text-2xl font-medium mt-4 text-center">
            {`Top ${cryptoCoinsData.length} Cryptos in the world`}
          </h1>
        </div>
        <div className="grid gap-10 grid-cols-4">
          {cryptoCoinsData.map((data) => {
            return <Cryptocurrency key={data.uuid} {...data} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Cryptocurrencies;
