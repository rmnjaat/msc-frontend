
import { createContext, useContext, useEffect, useState } from "react";
import { loginUser, signUpUser, checkAuthStatus, logoutUser } from "./HandleAPI";



const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        const checkStatus = async () => {
            const data = await checkAuthStatus();

            if (data) {
                setUser({email: data.user.email, name: data.user.name});
                setIsLoggedIn(true);
            }

        }

        checkStatus();
    }, []);




    const login = async (email, password) => {
        const data = await loginUser(email, password);
        if (data) {
            setUser({ email: data.email, name: data.name });
            setIsLoggedIn(true);
        }
        return data;
    }



    const signup = async (name, password, email) => {
        const data = await signUpUser(name, email, password);
        if (data) {           
            setUser({ email: data.email, name: data.name });
            setIsLoggedIn(true);
        }
    }

    
    const logout = async () => {
        const logout = await logoutUser();
        setIsLoggedIn(false);
        setUser(null);
        setTimeout(()=>{
            window.location.reload();
        },100);
        
    }


    const value = {
        user,
        isLoggedIn,
        login,
        signup,
        logout
    }



    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}



const useAuth = () => useContext(AuthContext);
export  { AuthProvider, useAuth }