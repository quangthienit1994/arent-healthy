import React from "react";
import News, { INews } from "./News";

const ListNews: React.FC<{news: INews[]}> = ({ news }) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {
                news.map((item, index) => {
                    return <News news={item} key={index} />
                })
            }
        </div>
    )
}

export default ListNews;
