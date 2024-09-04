import React from "react";
import "./Contact.css";
import p2 from "./assets/GEETAK.jpg";
import p1 from "./assets/SUBHA.jpg";
import p3 from "./assets/AHAD.jpg";
import Footer from "./Footer";

// ContactCard component
const ContactCard = ({ photo, name, designation, email, phone }) => {
  return (
    <div className="Ccard">
      <img src={photo} alt={`${name}`} className="card-img" />
      <h2>
        {" "}
        <strong>{name}</strong>
      </h2>
      <p>{designation}</p>
      <p>
        {" "}
        <em>{email}</em>
      </p>
    </div>
  );
};

// ContactPage component
const Contact = () => {
  // Sample data for contacts
  const contacts = [
    {
      photo: p1,
      name: "Prof. (Dr). Shobha Gulati Jain",
      designation: "Faculty Coordinator @ MCS",
      email: "media.mcs@gmail.com",
    },
    {
      photo: p2,
      name: "Geethak Chowdary Nelakuditi",
      designation: "President @ MCS",
      email: "media.mcs@gmail.com",
    },
    {
      photo: p3,
      name: "Mohd. Ahad",
      designation: "Vice-Precident @ MCS",
      email: "media.mcs@gmail.com",
    },
    // Add more contacts as needed
  ];

  return (
    <>
      {" "}
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="cards">
          {contacts.map((contact, index) => (
            <ContactCard
              key={index}
              photo={contact.photo}
              name={contact.name}
              designation={contact.designation}
              email={contact.email}
              phone={contact.phone}
            />
          ))}
        </div>
      </div>
      {/* <Footer   ></Footer> */}
    </>
  );
};

export default Contact;
