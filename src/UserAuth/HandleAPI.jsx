import axios from "axios";
// import { url } from "../../env_var.env";


const apiUrl = import.meta.env.VITE_API_URL;

const signUpUser = async (name, password, email) => {
    try {
        const response = await axios.post( `${apiUrl}/signup` , { name, password, email }, { withCredentials: true });
        const data = await response.data;
        if(response.status==200){
            alert("User Added");
        }
        return data
    }

    catch (error) {
        console.log('Error signingup in api: ' + error);
    }
}




const loginUser = async (email, password) => {

    try {
        const response = await axios.post(`${apiUrl}/login`, { email, password }, { withCredentials: true });
        const data = await response.data;
        return data        
    }

    catch (error) {
        console.log('Error logging in api: ' + error.response.status);
    }
}




const checkAuthStatus = async () => {

    try {
        const response = await axios.get(`${apiUrl}/auth`, { withCredentials: true });
        const data = await response.data;
        return data;
        
    }

    catch (error) {
        console.log('Error auth api: ' + error);
    }
}




const logoutUser = async () => {
    try {
        const res = await axios.get(`${apiUrl}/logout`, { withCredentials: true });
        const data = await res.data;
        return data;
    }

    catch (error) {
        console.log('Error logout api: ' + error);
    }
};



export {signUpUser, loginUser, checkAuthStatus, logoutUser};