import React from "react";
import Header from "@/Containers/Header";
import styled from "@emotion/styled";
import Footer from "@/Containers/Footer";

const Main = styled.div({})

const BaseLayout: React.FC<{ children: any }> = ({children}) => {
    return (
        <div className="base-layout">
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </div>
    )
}

export default BaseLayout;
