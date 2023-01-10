import { useState } from "react";
import LoginForm from "./LoginForm";
import "./Navbar.css";

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
      <div className="navbar-text">Placebook</div>
      <div className="username" onClick={handleClick}>
        {user}
      </div>
    </div>
  );
};

export default Navbar;
