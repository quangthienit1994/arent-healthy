import React from "react";
import logo from './logo.svg';
import styled from "@emotion/styled";
import {config} from "@/config";
import HeaderMenu from "@/Components/HeaderMenu";
import ProfileMenu from "@/Components/ProfileMenu";
import {useSelector} from "react-redux";
import {Reducers} from "@/Redux/reducers";

const Logo = styled.img({
    maxWidth: 115
})

const Container = styled.div({
    backgroundColor: "var(--gray)",
    minHeight: 65
})

const Header: React.FC = () => {
    const {isLogged} = useSelector((reducers: Reducers) => reducers.auth);
    return (
        <Container className={"shadow-md flex items-center"}>
            <div className={"container flex items-center"}>
                <Logo src={logo} alt={config.siteName}/>
                <div className="ml-auto flex items-center">
                    <div className="mt-0 md:mt-1">
                        <HeaderMenu items={isLogged ? config.loggedMenu : config.publishMenu}/>
                    </div>
                    <ProfileMenu items={config.profile} />
                </div>
            </div>
        </Container>
    )
}

export default Header;
