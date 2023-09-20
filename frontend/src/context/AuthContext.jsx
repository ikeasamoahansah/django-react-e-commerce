import { useState, useEffect, createContext } from "react";
import jwt_decode from "jwt-decode";
// import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;


export const AuthProvider = ({children}) => {

    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    const [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)

    // const navigate = useNavigate()

    const loginUser = async (e) => {
        e.preventDefault();
        const url = 'http://127.0.0.1:8000/api/login/'

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"email": e.target.email.value, "password": e.target.password.value})
        })
        let data = await response.json()
        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        } else {
            alert("Something went wrong");
        }
    } 


    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
    }


    const contextData = {
        user:user,
        loginUser: loginUser,
        logoutUser: logoutUser
    }


    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}