import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsByArticleId } from "../../api";

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

  //   Posted At: {moment(article.created_at).format("H:mmA")} on{" "}
  //   {moment(article.created_at).format("DD MMM YY")}

  return (
    <div className="comments">
      <h2>Comments</h2>
      <div className="article">
        {comments.map((comment) => (
          <div key={comment.comment_id}>
            <h3>{comment.author}</h3>
            <div>{comment.body}</div>
            <div style={{ fontSize: "12px" }}>
              Posted At: {moment(comment.created_at).format("H:mmA")} on{" "}
              {moment(comment.created_at).format("DD MMM YY")}
              <div>{comment.votes} Upvotes</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
