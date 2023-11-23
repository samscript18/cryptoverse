import { Article } from "../components";
import { useSelector } from "react-redux";
import { FaSpinner } from "react-icons/fa";

const News = () => {
  const { cryptoNewsData, isLoading } = useSelector(
    (store) => store.cryptoNewsData
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
    <section className="px-8">
      <div className="w-full mb-[10rem]">
        <div className="flex justify-center items-center mb-8">
          <h1 className="w-full text-2xl font-medium mt-4 text-center">
            Latest Crypto News
          </h1>
        </div>
        <div className="grid gap-10 grid-cols-3">
          {cryptoNewsData.map((data, index) => {
            return <Article key={index} {...data} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default News;
