  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import  {useAuth } from "./AuthContext";
  import  Login  from "./Login";
  import  Signup  from "./Signup";
  import  Post  from "../Post/Post";
  import App from "../App";
  import Contact from "../Contact";
  import About from "../About";
  import Nav from "../Nav"
  import Feedback from "../Feedback/Feedback"
  import EDetails from "../EDetails";
import Admin from "./Admin";

 

  const Controller = () => {
    const auth = useAuth() || {};
    return (
      <>
      
        <BrowserRouter>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<App />} />
            <Route element={<Contact />} path="/contact" />
            <Route element={<About />} path="/about" />
            <Route element={<EDetails />} path="/details" />

            <Route path="/login" element={<Login />} />
            <Route path="/xonvfsjktnxbw" element={<Signup />} />
            <Route path="/padzdvdssddosdfefbfrfdudkcdbvt" element={<Post />} />
            <Route path="/feqweqwdbqqawwqvbbdclqkkww" element={<Feedback />} />

            {auth.isLoggedIn && auth.user && (
              <Route path="/home" element={<Admin/>} />
            )}
          </Routes>
        </BrowserRouter>
      </>
    );
  };

  export default  Controller 
