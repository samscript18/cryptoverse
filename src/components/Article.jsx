import { Link } from "react-router-dom";

const Article = ({
  pubDate,
  article_id,
  description,
  title,
  source_id,
  link,
}) => {
  return (
    <article
      key={article_id}
      className="bg-white h-auto w-auto p-4 rounded-md shadow-md cursor-pointer"
    >
      <div className="flex flex-col">
        <div className="flex justify-between items-end pb-4">
          <Link to={`${link}`}>
            <h2 className="text-base text-bgPrimary font-medium hover:text-secondary">
              {title}
            </h2>
          </Link>
        </div>

        <p className="text-sm text-primary font-normal py-3">
          {description.substring(0, 200)}...
          {description ? (
            <Link to={`${link}`} className="text-secondary pl-1 font-medium">
              read more
            </Link>
          ) : null}
        </p>
        <div className="flex justify-between items-center cursor-pointer">
          <p className="text-sm text-secondary font-medium">{source_id}</p>
          <p className="text-sm text-secondary font-medium">{pubDate}</p>
        </div>
      </div>
    </article>
  );
};
export default Article;
