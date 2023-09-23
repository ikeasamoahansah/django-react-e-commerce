import { Component } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";


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
 

    render(){

        const {loginUser} = this.context;

        return (
            <main className="min-h-screen flex flex-col items-center justify-center">
                <div className="space-y-3 my-5">
                    <h1 className="text-3xl font-extrabold">Sign in to your account</h1>
                    <p className="text-center">
                        or 
                        <Link to="/signup" className="text-blue-400 border-b border-blue-400"> register your free account</Link>
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
                            <Link to="/" className="text-blue-400">Forgot Password?</Link>
                        </div>
                    </div>
                    <div></div>
                </div>
            </main>
        );
    }

}


export default Login