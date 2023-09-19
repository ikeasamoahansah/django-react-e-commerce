import { Component } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Cookies from 'js-cookie';


class Login extends Component{

    static contextType = AuthContext;

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            currentUser: false,
        }
        this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({ [name]: value })
    };


    // handleSubmit = (e) => {
    //     e.preventDefault();
    
    //     // Create a JSON object with the login data
    //     const loginData = {
    //       email: this.state.email,
    //       password: this.state.password,
    //     };
    
    //     // Get the CSRF token from a cookie (you may need to adjust this based on your setup)
    //     const csrfToken = Cookies.get('csrftoken');
    //     const url = 'http://127.0.0.1:8000/api/login/'
    
    //     // Set the headers including the CSRF token
    //     fetch(url, {
    //         method: "POST",
    //         headers:{
    //             'Content-Type': 'application/json',
    //             'X-CSRFToken': csrfToken,
    //         },
    //         body: JSON.stringify(loginData)
    //     }).then((res) => {
    //         console.log(res);
    //         alert("login successful");
    //     }).catch((err) => {
    //         console.log(err);
    //     })
        
    // };
 

    render(){

        const {loginUser} = this.context;

        return (
            <main className="min-h-screen flex flex-col items-center justify-center">
                <div className="space-y-3 my-5">
                    <h1 className="text-3xl font-extrabold">Sign in to your account</h1>
                    <p className="text-center">
                        or 
                        <Link to="/signup"><a className="text-blue-400 border-b border-blue-400"> register your free account</a></Link>
                    </p>
                </div>
                <div className="max-w-md w-full mx-auto bg-gray-200 rounded-lg p-7 space-y-3">
                    <form onSubmit={loginUser}>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm" htmlFor="email">Email</label>
                            <input className="border rounded-md px-3 py-2" type="email" name="email" placeholder="email@example.com" id="email" value={this.state.email} onChange={this.handleChange} required/>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm" htmlFor="password">Password</label>
                            <input className="border rounded-md px-3 py-2 mb-5" type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} required/>
                        </div>
                        <div>
                            <button type="submit" className="w-full rounded-md bg-blue-400 text-white py-2">Sign in</button>
                        </div>
                    </form>
                    <div className="flex justify-between text-sm">
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" name="rememberme" />
                            <label htmlFor="rememberme">Remember Me</label>
                        </div>
                        <div>
                            <a href="#" className="text-blue-400">Forgot Password?</a>
                        </div>
                    </div>
                    <div></div>
                </div>
            </main>
        );
    }

}


export default Login