import React from "react";
import Recommendeds from "@/Containers/Recommends";
import NewsContainer from "@/Containers/News";

const Recommended: React.FC = () => {
    return (
        <div className="container">
            <div className="pt-5 pb-10 grid grid-cols-1 gap-16">
                <Recommendeds />
                <NewsContainer />
            </div>
        </div>
    )
}

export default Recommended;
