import React from "react";
import "./About.css";
import Footer from "./Footer";
import p2 from "./assets/GEETAK.jpg";
import p1 from "./assets/SUBHA.jpg";
import p3 from "./assets/AHAD.jpg";
// import teamPhoto from './path-to-your-photo.jpg'; // Replace with the actual path to your image

export default function About() {
  const teamMembers = [
    {
      name: "Prof. (Dr). Shobha Gulati Jain",
      designation: "Faculty Coordinator @ MCS",
      description:
        "A distinguished professor and the coordinator of the Moot Court Society, she is renowned for her profound expertise and dedication to both the field of law and the art of teaching. With immense experience, she has been the guiding light for numerous mooters, adeptly crafting engaging moot problems, predicting legal outcomes, and preparing students for courtroom challenges. Her deep understanding of legal principles and the art of mooting has sharpened the future generation of legal minds, ensuring they are well-equipped for their professional journeys.",
      photo: p1,
    },
    {
      name: "Geethak Chowdary Nelakuditi",
      designation: "President @ MCS",
      description:
        "With years of dedicated involvement in moot court competitions, his recent achievement includes an outstanding performance in the prestigious 3rd AIU National Moot Court Competition, where his team secured the runner-up position. Geethak's unparalleled expertise in legal advocacy, coupled with his visionary leadership and unwavering commitment, is poised to lead our society toward a future of excellence.",
      photo: p2,
    },

    {
      name: "Mohd. Ahad",
      designation: "Vice-Precident @ MCS",
      description:
        "        Having rich  experiences and exceptional talent, he brings a fresh and dynamic perspective to our team. His unwavering passion for progress and commitment to excellence are poised to elevate our society to new heights. ",
      photo: p3,
    },
    // Add more team members here as needed
  ];

  return (
    // /    <div className="about-us">
    <>
      <div className="about-us">
        <h1>Who we are</h1>
        {/* {teamMembers.map((member, index) => (
        <div className="about-card" key={index}>
          <img
            src={member.photo}
            alt={member.name}
            className="about-card-photo"
          />
          <div className="about-card-body">
            <h1 className="about-card-name">{member.name}</h1>
            <h3>Design</h3>
            <p className="about-card-description">{member.description}</p>
          </div>
        </div>
      ))} */}

        {/* <div className="about-card" >
        <img
          src={teamMembers[0].photo}
          alt={teamMembers[0].name}
          className="about-card-photo"
        />
        <div className="about-card-body">
          <h1 className="about-card-name">{teamMembers[0].name}</h1>
          <h3>Design</h3>
          <p className="about-card-description">{teamMembers[0].description}</p>
        </div>
      </div> */}
        <div className="Amodule .about-us-heading">
          <header>
            <h1>MOOT COURT SOCIETY</h1>

            <p>
              The Moot Court Society (MCS) at the School of Law, LPU, takes
              proactive measures to foster the growth of moot court activities.
              The MCS is entrusted with the responsibility of orchestrating
              intra-moot court competitions, inter-university moot court
              contests on both the national and international levels, as well as
              trial advocacy competitions. The MCS plays a pivotal role in
              nurturing future mooters and cultivating a vibrant, researching
              and mooting culture within the school. Our ultimate objective is
              to uphold the principles of justice through the effective practice
              of law.
            </p>
          </header>
        </div>

        <h1>Our team </h1>
        {teamMembers.map((member, index) => (
          <div className="about-card" key={index}>
            <img
              src={member.photo}
              alt={member.name}
              className="about-card-photo"
            />
            <div className="about-card-body">
              <h1 className="about-card-name">{member.name}</h1>
              <h3>{member.designation}</h3>
              <p className="about-card-description">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <Footer></Footer> */}
    </>
  );
}
