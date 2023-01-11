import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchArticlesById } from "../../api";
import "./Article.css"
import moment from "moment";

const Article = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const handleClick = (article) => {
    navigate(`/articles/${article.article_id}/comments`);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchArticlesById(article_id).then((articleData) => {
        setIsLoading(false);
        setArticle(articleData);
      });
    }, 1000);
  }, [article_id, setIsLoading]);

  if (isLoading) {
    return <div className="loader"></div>;
  }

  return (
    <div className="article">
      <h2>{article.title}</h2>
      <h3>{article.topic}</h3>
      <h3>Posted By:{article.author}</h3>
      <h4>{article.body}</h4>
      <h3>
        Posted At: {moment(article.created_at).format("H:mmA")} on{" "}
        {moment(article.created_at).format("DD MMM YY")}
      </h3>
      <h4>{article.votes} Likes</h4>
      <h4 className="comments-box" onClick={(event)=>handleClick(article)}>
        {article.comment_count} Comments
      </h4>
    </div>
  );
};

export default Article;
