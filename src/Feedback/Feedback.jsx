import { useEffect, useState } from "react";

import axios from "axios";
import './Feedback.css';


const apiUrl = import.meta.env.VITE_API_URL;



const Feedback = () =>{

    const[feedback, setFeedback] = useState([]);
 

    useEffect(() => {
        const fetchFeedback = async () => {
            
            try {
                const response = await axios.get(`${apiUrl}/get_feedback`);
                setFeedback(response.data.data); 
           } 
            catch (error) {
                console.log('Error posting: ' + error);
            }
        }

        fetchFeedback();
    }, []);


    useEffect(() => {
        console.log('from state' + feedback); 
    }, [feedback]);




    return(<div>
        <div className="feedback-heading"><h2>Students Feedback</h2></div>
        <div className="feedback-container">
            {feedback.map(item => (
                <div className="feedback-card" key={item._id}>
                    <p>{item.feedback}</p>
                </div>
            ))}
        </div>
    </div>);
}



export default Feedback