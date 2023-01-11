import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchArticlesById } from "../../api";
import "./Article.css"
import moment from "moment";
import Comments from "../../components/Comments";

const Article = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [loadComments, setLoadComments] = useState(false)

  const navigate = useNavigate();

  const handleClick = (article) => {
    setLoadComments(true)
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
    <article className="article">
      <h2>{article.title}</h2>
      <h3>{article.topic}</h3>
      <h3>Posted By:{article.author}</h3>
      <h4>{article.body}</h4>
      <h3>
        Posted At: {moment(article.created_at).format("H:mmA")} on{" "}
        {moment(article.created_at).format("DD MMM YY")}
      </h3>
      <h4>{article.votes} Likes</h4>
      <button className="comments-button" onClick={(event)=>handleClick(article)}>
        View {article.comment_count} Comments
      </button>
      {loadComments ? <Comments/> : null}
    </article>
  );
};

export default Article;
