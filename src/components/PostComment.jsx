import { useState } from "react";
import { postCommentsToArticle } from "../api";

const PostComment = ({ article_id}) => {

    const [newComment, setNewComment] = useState("")

    const handleChange = (e) =>{
        setNewComment(e.target.value)
    }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    postCommentsToArticle(article_id, newComment)
      .then((userComment) => {
        setNewComment((comments) => {
          return [...comments, userComment];
        });
      })
      .catch((error) => {
      });
    setNewComment("");
  };

  return (
        <form className="post-comment-container" onSubmit={handleFormSubmit}>
          <div>
            <input
              value={newComment}
              type="text"
              placeholder="What are your thoughts?"
              onChange={handleChange}
            />
          </div>
          <input type="submit" />
        </form>
  )
};

export default PostComment;
