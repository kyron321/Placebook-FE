import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import './Articles.css'

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetchArticles().then((articleData) => {
        setArticles(articleData);
        setIsLoading(false);
      });
    },2000);
  }, []);

  if (isLoading) {
    return <div className="loader"></div>;
  }

  return (
    <div className="article-list">
      {articles.map((articles) => (
        <div className="article" key={articles.article_id}>
          <h2 className="article-title">{articles.title}</h2>
          <h3 className="article-topic">{articles.topic}</h3>
          <h3 className="article-author">Posted By:{articles.author}</h3>
          <h4 className="article-body">{articles.body}</h4>
          <h3 className="article-date">Posted At:{articles.created_at}</h3>
          <h4 className="article-votes">{articles.votes} Likes</h4>
          <h4 className="article-comment-count">
            {articles.comment_count} Comments
          </h4>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
