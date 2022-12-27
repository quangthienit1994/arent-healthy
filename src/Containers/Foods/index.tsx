import React from "react";
import useSWR from 'swr'
import Food from "./Food";

const Foods: React.FC = () => {
    const {data, isValidating} = useSWR('/data/foods.json');
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {
                data?.map((food: any, index: number) => {
                    return (
                        <Food food={food} key={index}/>
                    )
                })
            }
        </div>
    )
}

export default Foods;
