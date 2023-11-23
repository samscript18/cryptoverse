import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleCryptocurrency = () => {
  const { cryptocurrencyId } = useParams();
  const { cryptoCoinsData } = useSelector((store) => store.cryptoData);
  const cryptocurrency = cryptoCoinsData.find((coin) => {
    return coin.uuid === cryptocurrencyId;
  });
  const { name, symbol } = cryptocurrency;
  return (
    <section>
      <div className="w-[80%] absolute left-[18%] translate-x-[2%] mt-[1rem] flex flex-col border-b border-gray-100 pb-4">
        <h1 className="text-3xl text-secondary font-bold text-center">{`${name} (${symbol}) Price`}</h1>
        <p className="text-sm text-lightGray font-normal py-3 text-center">
          {`${name} live price in US Dollar (USD).View value statistics,market cap and supply`}
        </p>
      </div>
      <div className="flex flex-col"></div>
    </section>
  );
};
export default SingleCryptocurrency;
