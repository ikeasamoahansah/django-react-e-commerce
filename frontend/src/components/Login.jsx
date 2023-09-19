import { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({ [name]: value })
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const loginData = {
            email: this.state.email,
            password: this.state.password
        };

        const url = "http://127.0.0.1:8000/api-auth/login/"
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        })
        .then((response) => {
            if (response.status === 200) {
                alert('Login successful');
            } else {
                alert('Login failed');
            }
        })
        .catch((err) => {
            console.error('Error', err);
        });
    };

    render(){
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
                    <form onSubmit={this.handleSubmit}>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm" htmlFor="email">Email</label>
                            <input className="border rounded-md px-3 py-2" type="email" name="email" placeholder="email@example.com" id="email" value={this.state.email} onChange={this.handleChange} required/>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm" htmlFor="password">Password</label>
                            <input className="border rounded-md px-3 py-2" type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} required/>
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