import "./Navbar.css";

const Navbar = (props) => {
  const user = props.user;
  const setUser = props.setUser;

  const handleClick = (event) => {
    setUser(event.target.value);
  };

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
