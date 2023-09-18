import {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="bg-blue-400 fixed bottom-0 left-0 w-full">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-center space-x-4 py-1">
                        <a href="" className="text-blue-300 hover:text-gray-200 transition duration-300">icon</a>
                        <a href="" className="text-blue-300 hover:text-gray-200 transition duration-300">icon</a>
                        <a href="" className="text-blue-300 hover:text-gray-200 transition duration-300">icon</a>
                        <a href="" className="text-blue-300 hover:text-gray-200 transition duration-300">icon</a>
                    </div>
                    <div className="flex justify-center space-x-6 py-1">
                        <Link to="/"><a className="text-blue-300 hover:text-gray-200 transition duration-300">Home</a></Link>
                        <a href="#" className="text-blue-300 hover:text-gray-200 transition duration-300">Products</a>
                        <a href="#" className="text-blue-300 hover:text-gray-200 transition duration-300">Contact us</a>
                        <a href="#" className="text-blue-300 hover:text-gray-200 transition duration-300">About us</a>
                    </div>
                </div>
                <div className="bg-blue-500 flex justify-center py-1 text-gray-200 hover:text-gray-300">
                        <p>Copyright &copy;2022 Designed by <span>Ike Asamoah-Ansah</span></p>
                </div>
            </footer>
        );
    }

}

export default Footer;


