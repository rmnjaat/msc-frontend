import { useState } from 'react';
import axios from 'axios';
import './Post.css';
// import { url } from '../../env_var.env';

const apiUrl = import.meta.env.VITE_API_URL;

const Post = () => {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [venue, setVenue] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${apiUrl}/post_post`, { title, date, time, venue, description }, { withCredentials: true });
            const data = await response.data;
          
            if(response.status==200){
                alert("Post Added");
            }
            
        } 
        
        catch (error) {
            console.log('Error posting: ' + error);
        }
    }

    return (
        <div>
            <div className="post-wrapper">
                <div className="post-title">
                    <span>Post Event</span>
                </div>

                <form action="#">
                    <div className="post-row">
                        <input type="text" placeholder="Title" required value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>

                    <div className="post-row1">
                        <label htmlFor="date">Date</label>
                        <input type="date" placeholder="Date" required value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>

                    <div className="post-row1">
                        <label htmlFor="time">Time</label>
                        <input type="time" placeholder="Time" required value={time} onChange={(e) => setTime(e.target.value)} />
                    </div>

                    <div className="post-row">
                        <input type="text" placeholder="Venue" required value={venue} onChange={(e) => setVenue(e.target.value)} />
                    </div>

                    <div className="post-row">
                        <textarea type="textarea" placeholder="Description" required value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>

                    <div className="post-row post-button">
                        <input type="submit" value="Post" onClick={handleSubmit} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export  default Post 
