import { useState, useEffect, createContext } from "react";
import jwt_decode from "jwt-decode";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;


export const AuthProvider = ({children}) => {

    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    const [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)

    const navigate = useNavigate()

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
            navigate('/')
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
        authTokens: authTokens,
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

// import React, { createContext, useEffect, useState } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// export default AuthContext;


// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const navigate = useNavigate()

//   // Function to fetch user data from the Django API
//   const fetchUser = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/users/', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('authTokens')}`, // Assuming the token is stored in localStorage
//         },
//       });
//       setUser(response.data); // Assuming the user data is returned as JSON
//     } catch (error) {
//       // Handle errors, e.g., invalid token
//       console.error('Error fetching user:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // Check if a token exists in localStorage
//     const authToken = localStorage.getItem('authTokens');
//     if (authToken) {
//       // If a token exists, fetch user data
//       fetchUser();
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   const loginUser = async (e) => {
//     e.preventDefault();
//     const url = 'http://127.0.0.1:8000/api/login/'

//     const response = await fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({"email": e.target.email.value, "password": e.target.password.value})
//     })
//     let data = await response.json()
//     if (response.status === 200) {
//         setUser(jwt_decode(data.access))
//         localStorage.setItem('authTokens', JSON.stringify(data))
//         fetchUser()
//         navigate('/')
//     } else {
//         alert("Something went wrong");
//     }
// } 

//   const logoutUser = () => {
//     // Remove the token from localStorage
//     localStorage.removeItem('authTokens');
//     // Reset the user state
//     setUser(null);
//   };

//   const contextData = {
//     user,
//     loginUser,
//     logoutUser,
//     loading,
//   };

//   return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
// };
