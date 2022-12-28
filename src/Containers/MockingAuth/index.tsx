import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {actions} from "@/Redux/Reducers/Auth/action";
import classNames from "classnames";

const MockingAuth: React.FC = () => {
    const [active, setActive] = useState(false);
    const dispatch = useDispatch()
    const handle = useCallback((logged?: boolean) => () => {
        if (!logged) {
            dispatch(actions.logout())
        } else {
            dispatch(actions.login())
        }
        setActive(true)
    }, [dispatch])

    return (
        <div className={
            classNames("fixed z-[1000] top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(0,0,0,.5)]", {
                "hidden": active
            })
        }>
            <div>
                <div className={"text-center text-white font-bold"}>CHOOSE MODE</div>
                <div className="flex items-center gap-5 justify-center">
                    <button
                        className={"px-5 pt-2 rounded shadow bg-blue-500 text-white"}
                        onClick={handle(true)}>
                        Authenticated
                    </button>
                    <button
                        className={"px-5 pt-2 rounded shadow bg-blue-500 text-white"}
                        onClick={handle(false)}>
                        Unauthenticated
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MockingAuth
