import { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import "./Navbar.css";
import logo from "../images/Placebook.svg";

const Navbar = () => {
  const [user, setUser] = useState("");

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
        </Link>
      </div>

      <div className="username" onClick={handleClick}>
        {user}
      </div>
    </div>
  );
};

export default Navbar;
