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
    <section className="w-[78vw]">
      <div className="flex flex-col px-6">
        <div className="w-full">
          <div className="w-full">
            <h1 className="text-2xl font-medium mt-4">Global Crypto Stats</h1>
            <div className="flex justify-between items-start py-6">
              <div className="w-full flex flex-col">
                <div className="mb-8">
                  <h3 className="text-sm font-normal text-lightGray">
                    Top Cryptocurrencies
                  </h3>
                  <p className="text-xl">{total}</p>
                </div>
                <div className="mb-8">
                  <h3 className="text-sm font-normal text-lightGray">
                    Total Market Cap
                  </h3>
                  <p className="text-xl">
                    ${millify(parseInt(totalMarketCap))}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-normal text-lightGray">
                    Total Cryptocurrencies
                  </h3>
                  <p className="text-xl">{millify(totalCoins)}</p>
                </div>
              </div>
              <div className="w-full flex flex-col pl-12">
                <div className="mb-8">
                  <h3 className="text-sm font-normal text-lightGray">
                    Total Exchanges
                  </h3>
                  <p className="text-xl">{millify(totalExchanges)}</p>
                </div>
                <div className="mb-8">
                  <h3 className="text-sm font-normal text-lightGray">
                    Total 24h Volume
                  </h3>
                  <p className="text-xl">
                    ${millify(parseInt(total24hVolume))}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-normal text-lightGray">
                    Total Markets
                  </h3>
                  <p className="text-xl">{millify(totalMarkets)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mb-[4rem]">
            <div className="flex justify-between items-end mb-5">
              <h1 className="w-full text-2xl font-medium mt-4">
                {`Top ${cryptoCoins.length} Cryptos in the world`}
              </h1>

              {cryptoCoins.length <= 10 ? (
                <Link
                  onClick={() => setCryptoCoins(cryptoCoinsData.slice(0, 50))}
                  className="w-full text-xl text-end text-secondary font-medium"
                >
                  Show More
                </Link>
              ) : (
                <Link
                  onClick={() => setCryptoCoins(cryptoCoinsData.slice(0, 10))}
                  className="w-full text-xl text-end text-secondary font-medium"
                >
                  Show less
                </Link>
              )}
            </div>
            <div className="grid gap-10 grid-cols-4">
              {cryptoCoins.map((data) => {
                return <Cryptocurrency key={data.uuid} {...data} />;
              })}
            </div>
          </div>
          <div className="w-full mb-[10rem]">
            <div className="flex justify-between items-end mb-5">
              <h1 className="w-full text-2xl font-medium mt-4">
                Latest Crypto News
              </h1>
              {cryptoNews.length <= 6 ? (
                <Link
                  onClick={() => setCryptoNews(cryptoNewsData)}
                  className="w-full text-xl text-end text-secondary font-medium"
                >
                  Show More
                </Link>
              ) : (
                <Link
                  onClick={() => setCryptoNews(cryptoNewsData.slice(0, 6))}
                  className="w-full text-xl text-end text-secondary font-medium"
                >
                  Show less
                </Link>
              )}
            </div>
            <div className="grid gap-10 grid-cols-3">
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
