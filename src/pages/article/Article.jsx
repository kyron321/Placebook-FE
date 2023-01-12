import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesById } from "../../api";
import "./Article.css"
import moment from "moment";
import Comments from "../../components/Comments";
import Votes from "../../components/Votes";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [loadComments, setLoadComments] = useState(false);

  const handleClick = (article) => {
    if(!loadComments){
      setLoadComments(true);
    }else{
      setLoadComments(false)
    }
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
      <div className="article-box">
        <h2>{article.title}</h2>
        <h3>{article.topic}</h3>
        <h3>Posted By: {article.author}</h3>
        <h4>{article.body}</h4>
        <h3>
          Posted At: {moment(article.created_at).format("H:mmA")} on{" "}
          {moment(article.created_at).format("DD MMM YY")}
        </h3>
        <Votes article={article} setArticle={setArticle} />
        <button
          className="comments-button"
          onClick={(event) => handleClick(article)}
        >
          View {article.comment_count} Comments
        </button>
      </div>
      {loadComments ? <Comments /> : null}
    </article>
  );
};

export default Article;
