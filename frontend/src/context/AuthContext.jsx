import { useState, useEffect, createContext } from "react";
import jwt_decode from "jwt-decode";
import {useHistory} from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;


export const AuthProvider = ({children}) => {

    const [authTokens, setAuthTokens] = useState(null)
    const [user, setUser] = useState(null)

    const history = useHistory()

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
            history.push('/')
        } else {
            alert("Something went wrong");
        }
    } 


    const contextData = {
        user:user,
        loginUser: loginUser
    }


    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}