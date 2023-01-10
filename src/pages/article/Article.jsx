const Article = ({ article }) => {
  return (
    <div className="article">
      <h2>{article.title}</h2>
      <h3>{article.topic}</h3>
      <h3>Posted By:{article.author}</h3>
      <h4>{article.body}</h4>
      <h3>Posted At:{article.created_at}</h3>
      <h4>{article.votes} Likes</h4>
      <h4>{article.comment_count} Comments</h4>
    </div>
  );
};

export default Article;
