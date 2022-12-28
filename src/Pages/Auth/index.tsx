import React from "react";
import {useSelector} from "react-redux";
import {Reducers} from "@/Redux/reducers";
import {Navigate, Outlet} from "react-router-dom";
import Loading from "@/Shareds/Loading";

const Auth: React.FC = () => {
    const {isLogged} = useSelector((reducers: Reducers) => reducers.auth);

    // if (!isLogged) {
    //     return <Navigate to={"/"}/>
    // }

    return (
        <React.Suspense fallback={<Loading/>}>
            <Outlet/>
        </React.Suspense>
    )
}

export default Auth
