import './Login.css'
import {useState, useEffect} from 'react';
import {useAuth} from './AuthContext';
import { useNavigate } from "react-router-dom";






const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPasswod] = useState('');

    const navigate = useNavigate();
    const auth = useAuth();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await auth.login(email, password);
        }

        catch (error) {
            console.log('Error login');
        }
    }


    useEffect(() => {
        if (auth.isLoggedIn && auth.user) {
            return navigate("/home");
        }
    }, [auth]);



  return (
    <div>
      <div className="wrapper">
        <div className="title">
          <span>Login Form</span>
        </div>
        <form action="#">
          <div className="row">
            
            <input type="text" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="row">
            
            <input type="password" placeholder="Password" required value={password} onChange={(e)=>setPasswod(e.target.value)}/>
          </div>
          <div className="pass">
            <a href="#">Forgot password?</a>
          </div>
          <div className="row button">
            <input type="submit" value="Login" onClick={handleSubmit}/>
          </div>
          <div className="signup-link">
            Not a member? <a onClick={()=>navigate("/signup")}>Signup now</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login 
