import React from "react";
import Menu from "@/Containers/Home/Menu";
import Foods from "@/Containers/Foods";

const Home: React.FC = () => {
    return (
        <div className="container">
            <div className="py-5">
                <div className="my-5">
                    <Menu />
                </div>
                <Foods />
            </div>
        </div>
    )
}

export default Home;
