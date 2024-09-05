import React from 'react';
import './Admin.css';  // Import the CSS file
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const navigate = useNavigate();
  // Placeholder functions for button actions
  const addUser = () => {
    navigate("/xonvfsjktnxbw");
  };

//   const viewPosts = () => {
//     alert('View Posts clicked!');
//   };

  const postPost = () => {
    navigate("/padzdvdssddosdfefbfrfdudkcdbvt");
  };

  const readFeedback = () => {
    navigate("/feqweqwdbqqawwqvbbdclqkkww");
  };

  return (
    <div className="Acontainer">
      <h1 className="Aheading">
        Welcome, <span className="Aadmin-name">John Doe</span> {/* Replace with actual admin name */}
      </h1>
      <div className="btn-container">
        <button className="Abtn" onClick={addUser}>Add More Admins</button>
        {/* <button className="Abtn" onClick={viewPosts}>View Posts</button> */}
        <button className="Abtn" onClick={postPost}>Post a Post</button>
        <button className="Abtn" onClick={readFeedback}>Read Feedbacks</button>
      </div>
    </div>
  );
};

export default Admin;
