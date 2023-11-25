import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getCoinDetails,
  getCoinHistory,
} from "../assets/redux/features/cryptoApi";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import millify from "millify";
import { LineChart } from "../components";
import {
  AiOutlineDollarCircle,
  AiOutlineNumber,
  AiOutlineThunderbolt,
  AiOutlineTrophy,
  AiOutlineFund,
  AiOutlineMoneyCollect,
  AiOutlineExclamationCircle,
  AiOutlineCheck,
  AiOutlineClose,
} from "react-icons/ai";

const SingleCryptocurrency = () => {
  const [timePeriod, setTimePeriod] = useState("24h");
  const handleChange = (event) => {
    const newTimeFrame = event.target.value;
    setTimePeriod(newTimeFrame.toString());
  };
  const dispatch = useDispatch();
  const { cryptocurrencyId } = useParams();
  const { cryptoCoinData, cryptoCoinHistory, isLoading } = useSelector(
    (store) => store.cryptoData
  );
  const {
    name,
    price,
    symbol,
    websiteUrl,
    links,
    allTimeHigh,
    rank,
    marketCap,
    numberOfMarkets,
    numberOfExchanges,
    supply,
    description,
    change,
  } = cryptoCoinData;
  const volume = cryptoCoinData["24hVolume"];

  useEffect(() => {
    dispatch(getCoinDetails(`/coin/${cryptocurrencyId}`));
    dispatch(
      getCoinHistory(
        `/coin/${cryptocurrencyId}/history?timeperiod=${timePeriod}`
      )
    );
  }, [dispatch, cryptocurrencyId, timePeriod]);

  if (isLoading) {
    return (
      <div className="absolute right-[35%] translate-y-[50vh] flex flex-col justify-center items-center">
        <FaSpinner size={50} className="text-secondary animate-spin" />
        <h2 className="text-3xl text-secondary font-medium mt-3">Loading...</h2>
      </div>
    );
  }

  const timeFrame = ["3m", "3h", "24h", "7d", "30d", "1y", "3y", "5y"];

  const stats = [
    {
      id: 0,
      title: "Price to USD",
      value: `$ ${price && millify(price)}`,
      icon: <AiOutlineDollarCircle size={15} />,
    },
    { id: 1, title: "Rank", value: rank, icon: <AiOutlineNumber size={15} /> },
    {
      id: 2,
      title: "24h Volume",
      value: `$ ${volume && millify(volume)}`,
      icon: <AiOutlineThunderbolt size={15} />,
    },
    {
      id: 3,
      title: "Market Cap",
      value: `$ ${marketCap && millify(marketCap)}`,
      icon: <AiOutlineDollarCircle size={15} />,
    },
    {
      id: 4,
      title: "All-time-high(daily avg.)",
      value: `$ ${allTimeHigh && millify(allTimeHigh.price)}`,
      icon: <AiOutlineTrophy size={15} />,
    },
  ];

  const otherStats = [
    {
      id: 0,
      title: "Number Of Markets",
      value: numberOfMarkets,
      icon: <AiOutlineFund size={15} />,
    },
    {
      id: 1,
      title: "Number Of Exchanges",
      value: numberOfExchanges,
      icon: <AiOutlineMoneyCollect size={15} />,
    },
    {
      id: 2,
      title: "Aprroved Supply",
      value:
        supply && supply.confirmed ? (
          <AiOutlineCheck size={15} />
        ) : (
          <AiOutlineClose size={15} />
        ),
      icon: <AiOutlineExclamationCircle size={15} />,
    },
    {
      id: 3,
      title: "Total Supply",
      value: `$ ${supply && millify(supply?.total)}`,
      icon: <AiOutlineExclamationCircle size={15} />,
    },
    {
      id: 4,
      title: "Circulating Supply",
      value: `$ ${supply && millify(supply?.circulating)}`,
      icon: <AiOutlineExclamationCircle size={15} />,
    },
  ];

  return (
    <section>
      <div className="w-[80%] absolute left-[18%] translate-x-[2%] px-6">
        <div className="mt-[1rem] flex flex-col border-b border-gray-100 pb-4">
          <Link to={`${websiteUrl}`}>
            <h1 className="text-3xl text-secondary font-bold text-center">{`${name} (${symbol}) Price`}</h1>
          </Link>
          <p className="text-sm text-lightGray font-normal py-3 text-center">
            {`${name} live price in US Dollar (USD).View value statistics,market cap and supply`}
          </p>
        </div>
        <div className="flex mt-8">
          <div className="w-full mr-[6rem]">
            <select
              name="time-frame"
              id="time-frame"
              className="w-[50%] h-[30px] rounded-sm outline-none py-1"
              value={timePeriod}
              onChange={handleChange}
            >
              {timeFrame.map((time, index) => {
                return (
                  <option key={index} className="w-full h-[30px]" value={time}>
                    {time}
                  </option>
                );
              })}
            </select>
            <h1 className="text-2xl text-secondary font-medium mt-2">
              {`${name} Price Chart`}
            </h1>
          </div>
          <div className="w-full flex justify-between items-center">
            <p className="text-sm text-bgPrimary font-bold py-3">
              {`Change: ${change}%`}
            </p>
            <p className="text-sm text-bgPrimary font-bold py-3">
              {`Current ${name} Price: ${millify(price)}`}
            </p>
          </div>
        </div>
        <div className="w-full mt-1 mb-8">
          <LineChart
            coinHistory={cryptoCoinHistory}
            currentPrice={millify(price)}
            coinName={name}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center my-12">
            <div className="w-full mr-12">
              <h1 className="text-xl text-secondary font-bold text-center">
                {`${name} Value Statistics`}
              </h1>
              <p className="text-sm text-lightGray font-normal py-3">
                {`An overview showing the statistics of ${name}, such as the base and quote currency, the rank and trading volume.`}
              </p>
              <div className="flex flex-col my-4 mr-12">
                {stats.map(({ id, title, value, icon }) => {
                  return (
                    <div
                      key={id}
                      className="flex justify-between items-end border-gray-200 border-b py-4 cursor-pointer"
                    >
                      <h2 className="text-sm text-lightGray font-normal flex justify-center items-center hover:text-secondary duration-300">
                        <span className="inline-flex mr-2">{icon}</span> {title}
                      </h2>
                      <h2 className="text-sm text-bgPrimary font-bold">
                        {value}
                      </h2>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-full">
              <h1 className="text-xl text-secondary font-bold text-center">
                Other stats info
              </h1>
              <p className="text-sm text-lightGray font-normal py-3">
                {`An overview showing the statistics of ${name}, such as the base and quote currency, the rank and trading volume.`}
              </p>

              <div className="flex flex-col my-4 mr-8">
                {otherStats.map(({ id, title, value, icon }) => {
                  return (
                    <div
                      key={id}
                      className="flex justify-between items-end border-gray-200 border-b py-4 cursor-pointer"
                    >
                      <h2 className="text-sm text-lightGray font-normal flex justify-center items-center hover:text-secondary duration-300">
                        <span className="inline-flex mr-2">{icon}</span> {title}
                      </h2>
                      <h2 className="text-sm text-bgPrimary font-bold">
                        {value}
                      </h2>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center items-start my-12">
            <div className="w-full mr-16">
              <h1 className="text-xl text-secondary font-bold text-center">
                {`What is ${name}?`}
              </h1>
              <p className="text-sm text-lightGray font-normal py-3 text-center">
                {description}
              </p>
            </div>
            <div className="w-full">
              <h1 className="text-xl text-secondary font-bold text-center">
                {`${name} Links`}
              </h1>
              <div className="flex flex-col my-4 mr-8">
                {links &&
                  links.map(({ name, type, url }, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-between items-end border-gray-200 border-b py-4 cursor-pointer"
                      >
                        <h2 className="text-sm text-bgPrimary capitalize font-bold flex justify-center items-center hover:text-secondary duration-300">
                          <span className="inline-flex mr-2">{type}</span>
                        </h2>
                        <Link to={`${url}`}>
                          <h2 className="text-sm text-secondary font-bold">
                            {name}
                          </h2>
                        </Link>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleCryptocurrency;
