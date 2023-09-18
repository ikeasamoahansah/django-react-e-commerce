import {Component} from 'react';

class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="bg-blue-400 fixed bottom-0 left-0 w-full">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-center space-x-4 py-1">
                        <a href="">icon</a>
                        <a href="">icon</a>
                        <a href="">icon</a>
                        <a href="">icon</a>
                    </div>
                    <div className="flex justify-center space-x-6 text-gray-200 py-1">
                        <a href="#">Home</a>
                        <a href="#">Products</a>
                        <a href="#">Contact us</a>
                        <a href="#">About us</a>
                    </div>
                </div>
                <div className="bg-blue-500 flex justify-center py-1 text-gray-200  ">
                        <p>Copyright &copy;2022 Designed by <span>Ike Asamoah-Ansah</span></p>
                </div>
            </footer>
        );
    }

}

export default Footer;


