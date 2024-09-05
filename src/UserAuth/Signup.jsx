import "./Login.css";
import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasswod] = useState("");

  const navigate = useNavigate();
  const auth = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPasswod("");

  
    try {
      const res = await auth?.signup(name, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //     if (auth?.isLoggedIn && auth?.user) {
  //       navigate("/home");
  //     }
  // }, [auth]);

  return (
    <div>
      <div className="wrapper">
        <div className="title">
          <span>Sign Up</span>
        </div>
        <form action="#">
          <div className="row">
            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="row">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPasswod(e.target.value)}
            />
          </div>

          <div className="row button">
            <input type="submit" value="Sign Up" onClick={handleSubmit} />
          </div>
          <div className="signup-link"></div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
