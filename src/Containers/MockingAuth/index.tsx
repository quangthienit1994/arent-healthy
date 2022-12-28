import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Reducers} from "@/Redux/reducers";
import {actions} from "@/Redux/Reducers/Auth/action";

const MockingAuth: React.FC = () => {
    const dispatch = useDispatch()
    const {isLogged} = useSelector((reducers: Reducers) => reducers.auth);
    return (
        <button
            className={"fixed z-10 bottom-[15px] right-[15px] px-5 pt-2 rounded shadow bg-gray-500 text-white"}
            onClick={() => {
                if (isLogged) {
                    dispatch(actions.logout())
                } else {
                    dispatch(actions.login())
                }
            }}>{isLogged ? "Logout" : "Login"}</button>
    )
}

export default MockingAuth
