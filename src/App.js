import "./App.css";
import "./components/Bubbles.scss";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Article from "./pages/article/Article";
import Comments from "./pages/comments/Comments";
import LoginForm from "./components/Bubbles";
import NotFound from "./pages/error/NotFound";

function App() {
  const [user, setUser] = useState("kyron");

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
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
