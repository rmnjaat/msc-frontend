import { useState, useEffect } from "react";
import "./Event.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import axios from "axios";

import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Event() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [feedback, setFeedback] = useState();
  const [visibleEventsCount, setVisibleEventsCount] = useState(3);
  const [events, setEvents] = useState([]);
  const [isLoding, setIsLoding] = useState(true);

  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact");
  };

  const sendToReport = (data) => {
    navigate("/details", { state: { data } });
  };

  async function handleFeedbackSubmit() {
    const response = await axios.post(`${API_URL}/post_feedback`, { feedback });
    
    if (response.status === 200) {
      alert("Feedback Submitted Successfuly .");
    }
    
    setFeedback("");
  }

  useEffect(() => {
    let isCancelled = false;
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${API_URL}/get_post`);
        if (!isCancelled) {
          setIsLoding(false)
          setEvents(response.data.data);
         
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();

    return () => {
      isCancelled = true;
    };
  }, []);

  const showMoreEvents = () => {
    if (visibleEventsCount == events.length) {
      setVisibleEventsCount((prevCount) => Math.min(3, events.length));
    } else {
      setVisibleEventsCount((prevCount) =>
        Math.min(prevCount + 3, events.length)
      );
    }
  };

  return (
    <>
      <div className="module">
        <header>
          <h1> MOOT COURT SOCIETY</h1>
          <h2>
            <i>
              Where Advocacy Meets Excellence: Empowering Law Students to Build
              Strong Arguments and Become Champions of Justice.
            </i>
          </h2>
        </header>
      </div>

      <div className="heading">
        <h1>Upcoming Events</h1>
      </div>

      <div className="row">
        {isLoding ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          events.slice(0, visibleEventsCount).map((event, index) => (
            <div className="card" key={index}>
              <div className="card-header">
                {/* <h3>{event.title}</h3> */}
                <h2>{event.title}</h2>
              </div>
              <div className="card-body">
                <div className="card-desc">
                  <p>
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p>
                    <strong>Time:</strong> {event.time}
                  </p>
                  <p>
                    <strong>Venue:</strong> {event.venue.slice(0, 10)}
                  </p>
                  <p>
                    <strong>Description:</strong> {event.description.slice(0, 80)}
                  </p>
                  <a
                    href="details"
                    className="btn"
                    onClick={() => sendToReport(event)}
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {visibleEventsCount <= events.length && (
        <div className="see-more">
          {visibleEventsCount == events.length ? (
            <button onClick={showMoreEvents} className="see-more-btn">
              Hide &nbsp;Events&nbsp; <FaArrowUp />
            </button>
          ) : (
            <button onClick={showMoreEvents} className="see-more-btn">
              More &nbsp;Events&nbsp; <FaArrowDown />
            </button>
          )}
        </div>
      )}

      {/* footer */}
      <footer className="footer">
        <div className="rowf row primary">
          <div className="column column1 about">
            <h3>MCS</h3>
            <p>School Of Law,</p>
            <p>Lovely Professional University,</p>
            <p> Jalandhar-Delhi, G.T. Road, </p>
            <p> Phagwara, Punjab (INDIA) -144411.</p>
            <div className="social">
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="ic"
                  icon={faFacebookSquare}
                  size="1x"
                />
              </a>
              <a
                href="https://www.instagram.com/moot.court_society"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="ic"
                  icon={faInstagramSquare}
                  size="1x"
                />
              </a>
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="ic"
                  icon={faTwitterSquare}
                  size="1x"
                />
              </a>
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >

                <FontAwesomeIcon className="ic" icon={faLinkedin} size="1x" />
              </a>

              {/* {/* <FontAwesomeIcon
                className="ic"
                icon={faTwitterSquare}
                size="1x"
              />
              */}
            </div>
          </div>

          {/* <div className="column links">
            <h3>Some Links</h3>
            <ul>
              <li>
                <a href="#faq">F.A.Q</a>
              </li>
              <li>
                <a href="#cookies-policy">Cookies Policy</a>
              </li>
              <li>
                <a href="#terms-of-services">Terms Of Service</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
            </ul>
          </div> */}

          <div className="column subscribe">
            <h2>Write a message For us</h2>
            <div className="hello">
              <textarea
                placeholder=" Anonymus Feedback for us"
                value={feedback}
                onChange={(e) => {
                  setFeedback(e.target.value);
                }}
              ></textarea>

              <button onClick={handleFeedbackSubmit}>Submit</button>
            </div>
          </div>
        </div>

        <div className="row copyright">
          <p>Copyright &copy; 2024 MC  developers</p>
        </div>
      </footer>
    </>
  );
}
