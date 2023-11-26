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
      <Link to={`${link}`}>
        <div className="flex flex-col">
          <div className="flex justify-between items-end pb-4">
            <h2 className="text-base text-bgPrimary font-medium">{title}</h2>
          </div>
          <p className="text-sm text-primary font-normal py-3">{description}</p>
          <div className="flex justify-between items-center cursor-pointer">
            <p className="text-sm text-secondary font-medium">{source_id}</p>
            <p className="text-sm text-secondary font-medium">{pubDate}</p>
          </div>
        </div>
      </Link>
    </article>
  );
};
export default Article;
