import "./App.css";
import "./components/LoginForm.scss";
import { Routes, Route, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Article from "./pages/article/Article";
import Comments from "./pages/comments/Comments";
import NotFound from "./pages/error/NotFound";
import { useNavigate } from "react-router-dom";
import { fetchArticles } from "./api";

function App() {
  const [article, setArticle] = useState({});
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetchArticles().then((articleData) => {
        setArticles(articleData);
        setIsLoading(false);
      });
    }, 1000);
  }, []);

  const navigate = useNavigate();

  const handleClick = (article) => {
    setArticle(article);
    navigate(`/articles/${article.article_id}`);
  };



  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleClick={handleClick}
              articles={articles}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/articles/:article_id"
          element={<Article article={article} />}
        />
        <Route path="/articles/:article_id/comments" element={<Comments />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
