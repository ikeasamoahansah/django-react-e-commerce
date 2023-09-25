import {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Outlet, Link} from 'react-router-dom';
import AuthContext from '../context/AuthContext';

class Navbar extends Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props);
    }

    render() {

        const {user, logoutUser} = this.context;

        return (
            <>
            <nav className="bg-white-100 shadow">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                        <div className="hidden md:flex items-center space-x-4">
                            <Link to="/products" className="text-gray-700 hover:text-gray-900">Trendy</Link>
                            <Link to="/products" className="text-gray-700 hover:text-gray-900">New Arrivals</Link>
                        </div>
                        <div>
                            <Link to="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                                <svg className="h-6 w-6 mr-2 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                                </svg>
                                <span className="font-bold">Instashop</span>
                            </Link>
                        </div>
                    {user ? (
                        <div className="hidden md:flex items-center space-x-3">
                            <Link to="/dashboard" className="py-1 px-3 text-gray-700">User: {user.username}</Link>
                            <Link to="/products/post" className="py-1 px-3 text-gray-700">Add Product</Link>
                            <button type='submit' onClick={logoutUser} className="py-1 px-3 bg-blue-400 hover:bg-blue-300 text-blue-800 hover:text-blue-900 rounded transition duration-300" >Logout</button>
                        </div>
                    ): (
                        <div className="hidden md:flex items-center space-x-3">
                            <Link to="/login" className="py-1 px-3 text-gray-700">Log in</Link>
                            <Link to="/signup" className="py-1 px-3 bg-blue-400 hover:bg-blue-300 text-blue-800 hover:text-blue-900 rounded transition duration-300">Sign up</Link>
                        </div>
                    )}

                    <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button" >
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="mobile-menu hidden md:hidden">
                <Link to="/products" className="block py-2 px-4 text-sm hover:bg-gray-200" >Trendy</Link>
                <Link to="/products" className="block py-2 px-4 text-sm hover:bg-gray-200" >New Arrivals</Link>
            </div>
            </nav>
            <Helmet>
                <script src="src/js/navbar.js"></script>
            </Helmet>
            <Outlet/>
            </>
        );
    }

}

export default Navbar;

