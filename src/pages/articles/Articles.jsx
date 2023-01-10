import { useNavigate } from "react-router-dom";
import "./Articles.css";
import moment from "moment";

const ArticleList = ({ articles, isLoading,}) => {

  const navigate = useNavigate();

  const handleClick = (article) => {
    navigate(`/articles/${article.article_id}`);
  };
  
  if (isLoading) {
    return <div className="loader"></div>;
  }

  return (
    <div className="article-list">
      {articles.map((article) => (
        <div
          className="article"
          key={article.article_id}
          onClick={(e) => handleClick(article)}
        >
          <h2>{article.title}</h2>
          <h3>{article.topic}</h3>
          <h3>Posted By:{article.author}</h3>
          <h4>{article.body}</h4>
          <h3>Posted At: {moment(article.created_at).format("H:mmA")} on {moment(article.created_at).format("DD MMM YY")}</h3>
          <h4>{article.votes} Likes</h4>
          <h4>{article.comment_count} Comments</h4>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
