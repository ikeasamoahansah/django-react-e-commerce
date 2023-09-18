import { Component } from "react";
import { Link } from "react-router-dom";

class Signup extends Component{
    constructor(props){
        super(props);
    }

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
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm" htmlFor="email">Email</label>
                        <input className="border rounded-md px-3 py-2" type="email" name="email" placeholder="email@example.com" />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm" htmlFor="username">Username</label>
                        <input className="border rounded-md px-3 py-2" type="username" name="username" />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm" htmlFor="password">Password</label>
                        <input className="border rounded-md px-3 py-2" type="password" name="password" />
                    </div>
                    <div>
                        <button className="w-full rounded-md bg-blue-400 text-white py-2">Sign in</button>
                    </div>
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