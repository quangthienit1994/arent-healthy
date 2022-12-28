import React from "react";
import Header from "@/Containers/Header";
import styled from "@emotion/styled";
import Footer from "@/Containers/Footer";
import MockingAuth from "@/Containers/MockingAuth";
// import BackToTop from "@/Components/BackToTop";

const Main = styled.div({
    minHeight: "calc(100vh - (65px + 125px))"
})

const Container = styled.div({
    position: "relative"
})

const BaseLayout: React.FC<{ children: any }> = ({children}) => {
    return (
        <Container>
            <MockingAuth />
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
            {/*<BackToTop />*/}
        </Container>
    )
}

export default BaseLayout;
