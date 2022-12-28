import React, {useEffect} from "react";
import News from "@/Components/News";
import Square from "@/Shareds/Loading/Square";
import {useDispatch, useSelector} from "react-redux";
import {Reducers} from "@/Redux/reducers";
import {actions} from "@/Redux/Reducers/News/action";

const NewsContainer: React.FC = () => {
    const {isLoading, data} = useSelector((reducers: Reducers) => reducers.news)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.load())
    }, [dispatch])

    if (isLoading) {
        return (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => <Square key={index}/>)
                }
            </div>
        )
    }
    return <News news={data}/>
}

export default NewsContainer;
