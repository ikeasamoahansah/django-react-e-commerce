import {Route, Redirect} from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({children, ...rest}) => {
    const {user} = useContext(AuthContext);

    return (
        <Route {...rest} >{!user ? <Redirect to="/login" /> : children}</Route>
    )
}

export default PrivateRoute;