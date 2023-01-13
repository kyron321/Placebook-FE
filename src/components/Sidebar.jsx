import "./Sidebar.css";
import mascot from "../images/mascot.svg";

const Sidebar = () => {
  return (
    <div className="container">
      <div className="home-container">
        <div className="header">
          <img src={mascot} alt="mascot" className="mascot" />
          <h4 className="home-title">Home</h4>
        </div>
        <div className="home-body">
          <p>
            Your personal Placebook frontpage. Come here to check in with your
            favorite communities.
          </p>
        </div>
        <div className="buttons">
          <button className="post-button">Create Post</button>
          <button className="community-button">Create Community</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
