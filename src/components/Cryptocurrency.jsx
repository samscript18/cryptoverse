import { millify } from "millify";
import { Link } from "react-router-dom";

const Cryptocurrency = ({
  rank,
  name,
  iconUrl,
  uuid,
  price,
  marketCap,
  change,
}) => {
  return (
    <article className="bg-white h-[185px] w-[220px] p-4 rounded-md shadow-md">
      <Link to={`/cryptocurrencies/${uuid}`}>
        <div className="flex justify-between items-end border-gray-100 border-b pb-4">
          <h2 className="text-base text-bgPrimary font-medium">
            {rank}. {name}
          </h2>
          <img src={iconUrl} className="w-[30px] h-[30px]" alt={uuid} />
        </div>
        <p className="text-sm text-primary font-normal py-3">
          Price: ${parseFloat(price).toFixed(2)}
        </p>
        <p className="text-sm text-primary font-normal pb-3">
          Market Cap: ${millify(parseInt(marketCap))}
        </p>
        <p className="text-sm text-primary font-normal">
          Daily Change: {millify(parseInt(change))}%
        </p>
      </Link>
    </article>
  );
};
export default Cryptocurrency;
