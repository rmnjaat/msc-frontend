import { useLocation } from "react-router-dom";
import p9 from "./assets/m2M.jpg";
import "./EDetails.css";
const EDetails = () => {
  const location = useLocation();
  const { data } = location.state || {};


  return (
    <>
      <div className="event-container">
        <img src={p9} alt="Event" className="event-image" />

        <h1 className="event-title">
          {" "}
          <strong> {data.title} </strong>
        </h1>
        <div className="event-details">
          <p>
            <strong>Date:</strong> {data.date}
          </p>
          <p>
            <strong>Time:</strong> {data.time}
          </p>
          <p>
            <strong>Venue:</strong> {data.venue}
          </p>
        </div>
        <strong>Description:</strong>
        <p className="event-description">{data.description}</p>
      </div>
    </>
  );
};

export default EDetails;
