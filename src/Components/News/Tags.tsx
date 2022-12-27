import React from "react";
import {Link} from "react-router-dom";

const Tags: React.FC<{tags: string[]}> = ({ tags}) => {
    return (
        <div className="flex items-center flex-wrap text-[0.75em] gap-3 text-primary">
            {
                tags.map((tag, index) => {
                    return <Link className={"hover:underline"} to={`#`} key={index}>#{tag}</Link>
                })
            }
        </div>
    )
}

export default Tags;
