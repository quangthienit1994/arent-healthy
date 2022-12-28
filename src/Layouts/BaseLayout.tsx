import React from "react";
import Header from "@/Containers/Header";
import styled from "@emotion/styled";
import Footer from "@/Containers/Footer";
import MockingAuth from "@/Containers/MockingAuth";
import {useSelector} from "react-redux";
import {Reducers} from "@/Redux/reducers";
import classNames from "classnames";
import BackToTop from "@/Components/BackToTop";
// import BackToTop from "@/Components/BackToTop";

const Main = styled.div({
    minHeight: "calc(100vh - (65px + 125px))"
})

const Container = styled.div({
    position: "relative"
})

const BaseLayout: React.FC<{ children: any }> = ({children}) => {
    const {isLogged} = useSelector((reducers: Reducers) => reducers.auth);
    return (
        <Container className={classNames({'logged': isLogged})}>
            <MockingAuth />
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
            <div className="container flex justify-end">
                <BackToTop />
            </div>
        </Container>
    )
}

export default BaseLayout;
