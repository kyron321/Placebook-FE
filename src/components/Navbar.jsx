import "./Navbar.css";

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <div className="navbar-text">Placebook</div>
      <div className="">{user}</div>
    </div>
  );
};

export default Navbar;
