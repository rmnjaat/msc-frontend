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
            <Route path="/signup" element={<Signup />} />
            <Route path="/post" element={<Post />} />
            <Route path="/feedback" element={<Feedback />} />

            {auth.isLoggedIn && auth.user && (
              <Route path="/home" element={<div>sdfasfasdfsafdfsf</div>} />
            )}
          </Routes>
        </BrowserRouter>
      </>
    );
  };

  export default  Controller 
