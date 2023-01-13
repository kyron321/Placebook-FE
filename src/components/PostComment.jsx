import { useState } from "react";
import { postCommentsToArticle } from "../api";

const PostComment = ({ article_id, setLoadComments }) => {
  const [newComment, setNewComment] = useState("");
  const [postError, setPostError] = useState(false)
  const [posted, setPosted] = useState(false)


  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(!newComment){
    setLoadComments(false);
      return <p>You cannot post a blank value</p>
    }
    if(!posted){
      postCommentsToArticle(article_id, newComment)
        .then((userComment) => {
          setNewComment(userComment);
          setLoadComments(true);
          setPosted(true)
          setNewComment("");
        })
        .catch((error) => {
          setPostError(true)
        });
    }
  };

if(postError){
  return <p>There was an issue posting your comment, please refresh the page or try again later.</p>
}

if(posted){
  return <p>You may only comment once on an article</p>
}

  return (
    <form className="post-comment-container" onSubmit={handleFormSubmit}>
      <div>
        <textarea
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
