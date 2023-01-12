import { TbArrowBigTop, TbArrowBigDown } from "react-icons/tb";
import { patchVotes } from "../api";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Votes.css";

const Votes = ({ article, setArticle }) => {
  const { article_id } = useParams();
  const [votes, setVotes] = useState({});
  const [error, setError] = useState(null);
  const [currentVote, setCurrentVote] = useState(null);

  const handleUpClick = () => {
    if (currentVote === 1) {
      setCurrentVote(null);
    } else {
      setCurrentVote(1);
      setVotes(votes + 1);
      patchVotes(article_id, 1)
        .then((article) => {
          setArticle(article);
          localStorage.setItem(`vote_${article_id}`, 1);
        })
        .catch((error) => {
          setError(error.message);
          setVotes(votes - 1);
          setCurrentVote(null);
        });
    }
  };
  const handleDownClick = () => {
    if (currentVote === -1) {
      setCurrentVote(null);
    } else {
      setCurrentVote(-1);
      setVotes(votes - 1);
      patchVotes(article_id, -1)
        .then((article) => {
          setArticle(article);
          setVotes(article.votes);
          localStorage.setItem(`vote_${article_id}`, -1);
        })
        .catch((error) => {
          setError(error.message);
          setVotes(votes + 1);
          setCurrentVote(null);
        });
    }
  };

  if (error) {
    return <h4>{error}</h4>;
  }

  return (
    <div>
      <button
        className="vote-button-up"
        disabled={
          localStorage.getItem(`vote_${article_id}`) === "1" ? true : false
        }
        onClick={() => handleUpClick()}
      >
        <TbArrowBigTop className="arrow arrowUp" />
      </button>
      <p className="vote-count">{article.votes}</p>
      <button
        className="vote-button-down"
        disabled={
          localStorage.getItem(`vote_${article_id}`) === "-1" ? true : false
        }
        onClick={() => handleDownClick()}
      >
        <TbArrowBigDown className="arrow arrowDown" />
      </button>
    </div>
  );
};

export default Votes;
