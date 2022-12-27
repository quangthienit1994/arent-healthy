import React from "react";
import useSWR from 'swr'
import Food from "./Food";
import Square from "@/Shareds/Loading/Square";

const Foods: React.FC = () => {
    const {data, isValidating} = useSWR('/data/foods.json');
    
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {
                isValidating && (
                    [1,2,3,4,5,6,7,8].map((_, index) => <Square key={index} />)
                )
            }
            {
                !isValidating && data?.map((food: any, index: number) => {
                    return (
                        <Food food={food} key={index}/>
                    )
                })
            }
        </div>
    )
}

export default Foods;
