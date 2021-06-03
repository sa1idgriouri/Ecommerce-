import React  , {Component}from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./helpers";

const PrivateAdminRoute = ({Component :Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            (isAuthenticated() &&  isAuthenticated().user.role===1) ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/"
                    }}
                />
            )
        }
    />
);

export default PrivateAdminRoute;