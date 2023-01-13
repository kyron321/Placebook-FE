import { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import "./Navbar.css";
import logo from "../images/Placebook.svg";
import profile from "../images/profile.svg";
import { AiFillHome, AiOutlineMessage } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
  const [user, setUser] = useState("kyron");

  const handleClick = (event) => {
    setUser(event.target.value);
  };

  if (!user) {
    return <LoginForm setUser={setUser} />;
  }

  return (
    <div className="navbar">
    <div className="logo-container">
      <Link className="navbar-text" to={"/"}>
        <img className="logo" src={logo} alt="" />
        Placebook
        <AiFillHome className="home" />
      </Link>
    </div>

    <input type="text" />

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
