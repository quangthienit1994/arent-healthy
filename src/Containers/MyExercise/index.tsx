import React, {useEffect} from "react";
import Exercises from "@/Components/Exercises";
import Text from "@/Shareds/Loading/Text";
import Card from "@/Shareds/Card";
import {useDispatch, useSelector} from "react-redux";
import {Reducers} from "@/Redux/reducers";
import {actions} from "@/Redux/Reducers/Exercise/action";

const MyExercise: React.FC = () => {
    const {isLoading, data} = useSelector((reducers: Reducers) => reducers.exercise)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.load())
    }, [dispatch])

    return (
        <Card
            title={<span>MY <br/> EXERCISE</span>}
            extra={<span>2021.05.21</span>}
        >
            <div className="pb-4">
                {
                    isLoading ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => <Text key={index} height={"3em"}/>)
                            }
                        </div>
                    ) : (
                        <Exercises exercises={data ?? {}}/>
                    )
                }
            </div>
        </Card>
    )
}

export default MyExercise;
