import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { Navigate, unstable_useViewTransitionState } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

    const [user, isLoading] = useAuthState(auth)
    if (isLoading) {

        console.log('loading...');
    }

    if (!user) {

        return <Navigate to='/login' />
    }
    return children;
};


export default ProtectedRoute;