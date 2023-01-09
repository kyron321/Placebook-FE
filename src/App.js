import "./App.css";
import "./components/Bubbles.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Article from "./pages/article/Article";
import Comments from "./pages/comments/Comments";
import { useState } from "react";
import Bubbles from "./components/Bubbles";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  if (!isLoggedIn) {
    return <Bubbles/>;
  }

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/articles/:article_id/comments" element={<Comments />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
