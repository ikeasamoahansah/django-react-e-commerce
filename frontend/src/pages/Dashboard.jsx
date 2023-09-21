import { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";


class Dashboard extends Component {

    static contextType = AuthContext;

    constructor(props){
        super(props);
    }


    render() {

        const {user} = this.context;

        if (user){
            return (
                <>
                </>
            )
        } else {
            <Navigate to="/login" replace={true} />
        }
    }
}


export default Dashboard;