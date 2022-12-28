import React from "react";
import useSWR from "swr";
import Exercises from "@/Components/Exercises";
import Text from "@/Shareds/Loading/Text";
import Card from "@/Shareds/Card";

const MyExercise: React.FC = () => {
    const {isValidating, data} = useSWR('/data/exercises.json')
    return (
        <Card
            title={<span>MY <br/> EXERCISE</span>}
            extra={<span>2021.05.21</span>}
        >
            <div className="pb-4">
                {
                    isValidating ? (
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
