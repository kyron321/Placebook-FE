import { useNavigate } from "react-router-dom";
import "./Articles.css";
import moment from "moment";
import { BiMessage } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { AiOutlineGift } from "react-icons/ai";
import Votes from "../../components/Votes"

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
          <div className="votes">
            <Votes article={article} />
          </div>
          <div className="article-body">
            <div className="topic-author">
              <h5>r/{article.topic}</h5>
              <h6 className="author">Posted By: u/{article.author}</h6>
              <h6 className="time">{moment(article.created_at).fromNow()}</h6>
            </div>
            <div>
              <h2 className="title">{article.title}</h2>
              <h4 className="article-content">{article.body} ...</h4>
            </div>
            <div className="article-footer">
              <div className="footer-logos1">
                <BiMessage />
                <h6 className="logo-text">{article.comment_count} Comments</h6>
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
      ))}
    </div>
  );
};

export default ArticleList;
