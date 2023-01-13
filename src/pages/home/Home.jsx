import Sidebar from "../../components/Sidebar";
import Articles from "../articles/Articles";
import "./Home.css"

const Home = ({ articles, isLoading, handleClick }) => {
  return (
    <div className="Home">
      <Articles articles={articles} isLoading={isLoading} handleClick={handleClick} />
      <Sidebar/>
    </div>
  );
};

export default Home;
