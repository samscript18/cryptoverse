import { Link } from "react-router-dom";
import millify from "millify";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Cryptocurrency, Article } from "../components";

const Home = () => {
  const { cryptoCoinsData, cryptoStatsData, isLoading } = useSelector(
    (store) => store.cryptoData
  );
  const { cryptoNewsData } = useSelector((store) => store.cryptoNewsData);
  const [cryptoCoins, setCryptoCoins] = useState(cryptoCoinsData.slice(0, 10));
  const [cryptoNews, setCryptoNews] = useState(cryptoNewsData.slice(0, 6));
  const {
    total,
    totalCoins,
    totalMarkets,
    totalExchanges,
    totalMarketCap,
    total24hVolume,
  } = cryptoStatsData;

  if (isLoading) {
    return (
      <div className="absolute right-[35%] translate-y-[50vh] flex flex-col justify-center items-center">
        <FaSpinner size={50} className="text-secondary animate-spin" />
        <h2 className="text-3xl text-secondary font-medium mt-3">Loading...</h2>
      </div>
    );
  }

  return (
    <section className="w-full">
      <div className="flex flex-col mb-6">
        <div className="w-full">
          <div className="w-full">
            <h1 className="md:text-2xl xs:text-lg font-medium mt-4">
              Global Crypto Stats
            </h1>
            <div className="flex justify-between items-start py-6">
              <div className="w-full flex flex-col">
                <div className="mb-8">
                  <h3 className="text-sm font-normal text-lightGray">
                    Top Cryptocurrencies
                  </h3>
                  <p className="md:text-xl xs:text-base">{total}</p>
                </div>
                <div className="mb-8">
                  <h3 className="text-sm font-normal text-lightGray">
                    Total Market Cap
                  </h3>
                  <p className="md:text-xl xs:text-base">
                    ${millify(parseInt(totalMarketCap))}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-normal text-lightGray">
                    Total Cryptocurrencies
                  </h3>
                  <p className="md:text-xl xs:text-base">
                    {millify(totalCoins)}
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col pl-12">
                <div className="mb-8">
                  <h3 className="text-sm font-normal text-lightGray">
                    Total Exchanges
                  </h3>
                  <p className="md:text-xl xs:text-base">
                    {millify(totalExchanges)}
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="md:text-sm xs:text-base font-normal text-lightGray">
                    Total 24h Volume
                  </h3>
                  <p className="md:text-xl xs:text-base">
                    ${millify(parseInt(total24hVolume))}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-normal text-lightGray">
                    Total Markets
                  </h3>
                  <p className="md:text-xl xs:text-base">
                    {millify(totalMarkets)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mb-[4rem]">
            <div className="flex justify-between items-end mb-5">
              <h1 className="w-full md:text-2xl xs:text-lg font-medium mt-4">
                {`Top ${cryptoCoins.length} Cryptos in the world`}
              </h1>

              {cryptoCoins.length <= 10 ? (
                <Link
                  onClick={() => setCryptoCoins(cryptoCoinsData.slice(0, 50))}
                  className="w-full md:text-xl  xs:text-base text-end text-secondary font-medium"
                >
                  Show More
                </Link>
              ) : (
                <Link
                  onClick={() => setCryptoCoins(cryptoCoinsData.slice(0, 10))}
                  className="w-full md:text-xl  xs:text-base text-end text-secondary font-medium"
                >
                  Show less
                </Link>
              )}
            </div>
            <div className="grid lg:gap-10 md:gap-6 sm:gap-8 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-1">
              {cryptoCoins.map((data) => {
                return <Cryptocurrency key={data.uuid} {...data} />;
              })}
            </div>
          </div>
          <div className="w-full mb-[10rem]">
            <div className="flex justify-between items-end mb-5">
              <h1 className="w-full md:text-2xl xs:text-lg font-medium mt-4">
                Latest Crypto News
              </h1>
              {cryptoNews.length <= 6 ? (
                <Link
                  onClick={() => setCryptoNews(cryptoNewsData)}
                  className="w-full md:text-xl  xs:text-base text-end text-secondary font-medium"
                >
                  Show More
                </Link>
              ) : (
                <Link
                  onClick={() => setCryptoNews(cryptoNewsData.slice(0, 6))}
                  className="w-full md:text-xl  xs:text-base text-end text-secondary font-medium"
                >
                  Show less
                </Link>
              )}
            </div>
            <div className="grid sm:gap-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
              {cryptoNews.map((data, index) => {
                return <Article key={index} {...data} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
