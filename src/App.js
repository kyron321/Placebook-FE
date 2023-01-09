import "./App.css";
import "./components/Bubbles.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Article from "./pages/article/Article";
import Comments from "./pages/comments/Comments";
import { useState } from "react";
import LoginForm from "./components/Bubbles";

function App() {
  const [user, setUser] = useState();

  if (!user) {
    return <LoginForm setUser={setUser} />;
  }

  return (
    <div className="app">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/articles/:article_id/comments" element={<Comments />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
