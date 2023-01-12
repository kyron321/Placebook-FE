import { TbArrowBigTop, TbArrowBigDown } from "react-icons/tb";
import { patchVotes } from "../api";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Votes.css"

const Votes = ({ article, setArticle }) => {
  const { article_id } = useParams();
  const [votes, setVotes] = useState({});
  const [error, setError] = useState(null);
  const [hasVoted, setHasVoted] = useState(
    localStorage.getItem(`vote_${article_id}`) === "true" || false
  );

  const handleUpClick = () => {
    if (hasVoted) {
      setError("You already voted for this article");
    } else {
      patchVotes(article_id, 1)
        .then((article) => {
          setArticle(article);
          setVotes(article.votes);
          setHasVoted(true);
          localStorage.setItem(`vote_${article_id}`, true);
        })
        .catch((error) => {
          setError(error.message);
          console.log(error.message);
        });
    }
  };
  const handleDownClick = () => {
    if (hasVoted) {
      setError("You already voted for this article");
    } else {
      patchVotes(article_id, -1)
        .then((article) => {
          setArticle(article);
          setVotes(article.votes);
          setHasVoted(true);
          localStorage.setItem(`vote_${article_id}`, true);
        })
        .catch((error) => {
          setError(error.message);
          console.log(error.message);
        });
    }
  };

if(error){
  return <h4>{error}</h4>
}

  return (
    <div className="votes">
      <div className="arrow-arrowUp" onClick={() => handleUpClick()}>
        <TbArrowBigTop />
      </div>
      <h4>{article.votes} Votes </h4>
      <div className="arrow-arrowDown" onClick={() => handleDownClick()}>
        <TbArrowBigDown />
      </div>
    </div>
  );
};

export default Votes;

