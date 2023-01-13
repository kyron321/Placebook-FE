import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsByArticleId } from "../api";
import "./Comments.css";
import profile from "../images/profile.svg";

const Comments = () => {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState();

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then((comments) => {
      setIsLoading(false);
      setComments(comments);
    });
  }, [article_id]);

  if (isLoading) {
    return <div className="loader"></div>;
  }

  return (
    <section className="comments">
      {comments.map((comment) => (
        <div className="comments-box" key={comment.comment_id}>
          <div className="author1">
            <img className="profile" src={profile} alt="placeholder" />
            <h6 className="author">Posted By: u/{comment.author}</h6>
            <time style={{ fontSize: "16px" }}>
            <h6 className="time">{moment(comment.created_at).fromNow()}</h6>
          </time>
          </div>
         
          <h4 className="article-content1">{comment.body}</h4>
        </div>
      ))}
    </section>
  );
};

export default Comments;
