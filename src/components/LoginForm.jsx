import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Bubbles = ({ count }) => {
  return Array.from(Array(count)).map(() => (
    <div className="bubble" key={count++} />
  ));
};

const LoginForm = ({ setUser }) => {
  const navigate = useNavigate();
  return (
    <div className="bubbles">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="input-container"
      >
        <h1 className="input-text1">Welcome to Placebook</h1>
        <h3 className="input-text2">Please Sign In</h3>
        <form>
          <input
            className="input"
            type={"text"}
            placeholder={"Enter User"}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setUser(e.target.value);
                navigate("/");
                e.preventDefault();
              }
            }}
          ></input>
        </form>
      </motion.div>

      <Bubbles count={50} />
    </div>
  );
};

export default LoginForm;
