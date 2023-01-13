import { useState } from "react";
import { postCommentsToArticle } from "../api";

const PostComment = ({ article_id, setLoadComments }) => {
  const [newComment, setNewComment] = useState("");

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoadComments(false);
    postCommentsToArticle(article_id, newComment)
      .then((userComment) => {
        setNewComment(userComment);
        setLoadComments(true);
        setNewComment("");
      })

      .catch((error) => {});
  };

  return (
    <form className="post-comment-container" onSubmit={handleFormSubmit}>
      <div>
        <input
          value={newComment}
          type="text"
          placeholder="What are your thoughts?"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <input type="submit" />
    </form>
  );
};

export default PostComment;
