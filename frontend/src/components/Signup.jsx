import { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            password2: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({ [name]: value })
    };


    handleSubmit = async (e) => {
        e.preventDefault();
    
        // Create a JSON object with the login data
        const signupData = {
          email: this.state.email,
          username: this.state.username,
          password: this.state.password,
          password2: this.state.password2,
        };
    
        // Get the CSRF token from a cookie (you may need to adjust this based on your setup)
        const csrfToken = Cookies.get('csrftoken');
        const url = 'http://127.0.0.1:8000/api/register/'
    
        // Set the headers including the CSRF token
        const response = await fetch(url, {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,
            },
            body: JSON.stringify(signupData)
        })

        if (response.status === 201) {
            alert("Proceed to the login page")
        } else {
            alert("Error, check your credentials")
        }

        
    };

    render(){
        return (
            <main className="min-h-screen flex flex-col items-center justify-center">
                <div className="space-y-3 my-5">
                    <h1 className="text-3xl font-extrabold">Sign up for a free account</h1>
                    <p className="text-center">
                        or 
                        <Link to="/login"><a className="text-blue-400 border-b border-blue-400"> sign in to your account</a></Link>
                    </p>
                </div>
                <div className="max-w-md w-full mx-auto bg-gray-200 rounded-lg p-7 space-y-3">
                    <form onSubmit={this.handleSubmit}>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm" htmlFor="email">Email</label>
                            <input className="border rounded-md px-3 py-2" type="email" name="email" placeholder="email@example.com" value={this.state.email} onChange={this.handleChange} required/>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm" htmlFor="username">Username</label>
                            <input className="border rounded-md px-3 py-2" type="username" name="username" value={this.state.username} onChange={this.handleChange} required/>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm" htmlFor="password">Password</label>
                            <input className="border rounded-md px-3 py-2 mb-1" type="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm" htmlFor="password2">Confirm Password</label>
                            <input className="border rounded-md px-3 py-2 mb-3" type="password" name="password2" value={this.state.password2} onChange={this.handleChange} required/>
                        </div>
                        <div>
                            <button className="w-full rounded-md bg-blue-400 text-white py-2">Sign in</button>
                        </div>
                    </form>
                    <div className="flex justify-between text-sm">
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" name="rememberme" />
                            <label htmlFor="rememberme">Remember Me</label>
                        </div>
                        <div>
                            <a href="#" className="text-blue-400">Help ?</a>
                        </div>
                    </div>
                    <div></div>
                </div>
            </main>
        );
    }

}


export default Signup