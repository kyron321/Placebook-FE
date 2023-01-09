import { useEffect, useState } from "react";
import { fetchArticles } from "../api";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then((articleData) => {
      setArticles(articleData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="article-list">
      {articles.map((articles) => (
        <div className="article" key={articles.article_id}>
          <div className="article-title">{articles.title}</div>
          <div className="article-topic">{articles.topic}</div>
          <div className="article-author">Posted By:{articles.author}</div>
          <div className="article-body">{articles.body}</div>
          <div className="article-date">Posted At:{articles.created_at}</div>
          <div className="article-votes">{articles.votes} Likes</div>
          <div className="article-comment-count">
            {articles.comment_count} Comments
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
