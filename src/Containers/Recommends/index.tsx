import React from "react";
import {config} from "@/config";
import Recommended from "@/Containers/Recommends/Recommended";

interface RecommendedsProps {
}

const Recommendeds: React.FC<RecommendedsProps> = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {
                config.recommends.map(({title, extra}, index) => {
                    return <Recommended title={title} extra={extra} key={index}/>
                })
            }
        </div>
    )
}

export default Recommendeds;
