import React from "react";
import News from "@/Components/News";
import useSWR from "swr";
import Square from "@/Shareds/Loading/Square";

const NewsContainer: React.FC = () => {
    const {data, isValidating} = useSWR('/data/news.json');

    if(isValidating) {
        return (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                {
                    isValidating && (
                        [1,2,3,4,5,6,7,8].map((_, index) => <Square key={index} />)
                    )
                }
            </div>
        )
    }
    return <News news={data} />
}

export default NewsContainer;
