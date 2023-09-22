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

        if (user === null){
            <Navigate to="/login" replace={true} />
        } else {
            return (
                <>
                </>
            )
        }
    }
}


export default Dashboard;