import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/Placebook.svg";
import profile from "../images/profile.svg";
import { AiFillHome, AiOutlineMessage } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = ({setUser, user}) => {
  

  const handleClick = (event) => {
    setUser(event.target.value);
  };

 

  return (
    <div className="navbar">
    <div className="logo-container">
      <Link className="navbar-text" to={"/"}>
        <img className="logo" src={logo} alt="" />
        Placebook
        <AiFillHome className="home" />
      </Link>
    </div>

    <input type="text" className="navbar-input" />

    <div className="icons">
      <AiOutlineMessage className="message" />
      <IoNotificationsOutline className="notification" />
    </div>

    <div className="username" onClick={handleClick}>
      <img
        className="profile"
        src={profile}
        alt="placeholder"
      />
      <div className="active"></div>
      <div> {user}</div>
    </div>
  </div>
  );
};

export default Navbar;
