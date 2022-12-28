import React from "react";
import Menu from "@/Containers/Home/Menu";
import Foods from "@/Containers/Foods";
import Button from "@/Shareds/Button";
import HomeSummary from "@/Containers/HomeSummary";

const Home: React.FC = () => {
    return (
        <div className="w-full">
            <HomeSummary />
            <div className="container">
                <div className="pt-5 pb-10">
                    <div className="my-5">
                        <Menu />
                    </div>
                    <Foods />
                    <div className="mt-8 flex justify-center">
                        <Button>記録をもっと見る</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
