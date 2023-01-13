import "./App.css";
import "./components/LoginForm.scss";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Article from "./pages/article/Article";
import Comments from "./components/Comments";
import NotFound from "./pages/error/NotFound";
import { fetchArticles, fetchArticlesById } from "./api";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState("");

  useEffect(() => {
    setTimeout(() => {
      fetchArticles().then((articleData) => {
        setArticles(articleData);
        setIsLoading(false);
      });
    }, 1000);
  }, []);

  return user ? (
    <div className="app">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              articles={articles}
              isLoading={isLoading}
              user={user}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/articles/:article_id"
          element={<Article fetchArticlesById={fetchArticlesById} />}
        />
        <Route path="/articles/:article_id/comments" element={<Comments />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  ) : (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            articles={articles}
            isLoading={isLoading}
            user={user}
            setUser={setUser}
          />
        }
      />
      <Route
        path="/articles/:article_id"
        element={<Article fetchArticlesById={fetchArticlesById} />}
      />
      <Route path="/articles/:article_id/comments" element={<Comments />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
