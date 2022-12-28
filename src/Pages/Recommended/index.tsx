import React from "react";
import Recommendeds from "@/Containers/Recommends";
import NewsContainer from "@/Containers/News";
import Button from "@/Shareds/Button";

const Recommended: React.FC = () => {
    return (
        <div className="container">
            <div className="pt-5 md:pt-14 pb-16 grid grid-cols-1">
                <Recommendeds/>
                <div className="mt-8 md:mt-14">
                    <NewsContainer/>
                </div>
                <div className="mt-8 flex justify-center">
                    <Button>コラムをもっと見る</Button>
                </div>
            </div>
        </div>
    )
}

export default Recommended;
