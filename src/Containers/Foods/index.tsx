import React, {useEffect} from "react";
import Food from "./Food";
import Square from "@/Shareds/Loading/Square";
import {Reducers} from "@/Redux/reducers";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "@/Redux/Reducers/Food/action";

const Foods: React.FC = () => {
    const {isLoading, data} = useSelector((reducers: Reducers) => reducers.food)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.load())
    }, [dispatch])

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {
                isLoading && (
                    [1,2,3,4,5,6,7,8].map((_, index) => <Square key={index} />)
                )
            }
            {
                !isLoading && data?.map((food: any, index: number) => {
                    return (
                        <Food food={food} key={index}/>
                    )
                })
            }
        </div>
    )
}

export default Foods;
