import Articles from "../articles/Articles";

const Home = ({ articles, isLoading, handleClick }) => {
  return (
    <div className="Home">
      <Articles articles={articles} isLoading={isLoading} handleClick={handleClick} />
    </div>
  );
};

export default Home;
