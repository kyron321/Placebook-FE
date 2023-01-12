import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsByArticleId } from "../api";
import "./Comments.css"

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
      <div className="comments-container">
        {comments.map((comment) => (
          <div className="comments-box" key={comment.comment_id}>
            <h3>{comment.author}</h3>
            <h4>{comment.body}</h4>
            <time style={{ fontSize: "12px" }}>
              Posted At: {moment(comment.created_at).format("H:mmA")} on{" "}
              {moment(comment.created_at).format("DD MMM YY")}
            </time>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comments;
