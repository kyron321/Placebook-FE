import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesById } from "../../api";
import "./Article.css";
import moment from "moment";
import Comments from "../../components/Comments";
import Votes from "../../components/Votes";
import PostComment from "../../components/PostComment";
import { BiMessage } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { AiOutlineGift } from "react-icons/ai";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadComments, setLoadComments] = useState(false);

  const handleClick = () => {
    if (!loadComments) {
      setLoadComments(true);
    } else {
      setLoadComments(false);
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
    <article className="article-list1">
      <div className="article">
        <div className="votes">
          <Votes article={article} setArticle={setArticle} />
        </div>

        <div className="article-body">
          <div className="topic-author">
            <h5>r/{article.topic}</h5>
            <h6 className="author">Posted By: u/{article.author}</h6>
            <h6 className="time">{moment(article.created_at).fromNow()}</h6>
          </div>
          <div>
            <h2 className="title">{article.title}</h2>
            <h4 className="article-content1">{article.body}</h4>
          </div>
          <div className="article-footer">
            <div className="footer-logos1">
              <BiMessage />
              <h6 onClick={() => handleClick()} className="logo-text">
                {article.comment_count} Comments
              </h6>
            </div>
            <div className="footer-logos">
              <AiOutlineGift />
              <h6 className="logo-text">Give Award</h6>
            </div>
            <div className="footer-logos">
              <RiShareForwardLine />
              <h6 className="logo-text">Share</h6>
            </div>
            <div className="footer-logos">
              <BsBookmark />
              <h6 className="logo-text">Save</h6>
            </div>
          </div>
        </div>
      </div>
      <PostComment article_id={article_id} setLoadComments={setLoadComments} />
      {loadComments ? <Comments /> : null}
    </article>
  );
};

export default Article;
