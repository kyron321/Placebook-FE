import LoginForm from "../../components/LoginForm";
import Sidebar from "../../components/Sidebar";
import Articles from "../articles/Articles";
import "./Home.css";

const Home = ({ articles, isLoading, handleClick, user, setUser }) => {
  return !user ? (
    <LoginForm setUser={setUser} />
  ) : (
    <div className="Home">
      <Articles
        articles={articles}
        isLoading={isLoading}
        handleClick={handleClick}
      />
      <Sidebar />
    </div>
  );
};

export default Home;
