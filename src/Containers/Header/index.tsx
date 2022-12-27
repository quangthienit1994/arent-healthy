import React from "react";
import logo from './logo.svg';
import styled from "@emotion/styled";
import {config} from "@/config";
import HeaderMenu from "@/Components/HeaderMenu";
import ProfileMenu from "@/Components/ProfileMenu";

const Logo = styled.img({
    maxWidth: 115
})

const Container = styled.div({
    backgroundColor: "#414141",
    padding: "10px",
})

const Header: React.FC = () => {
    return (
        <Container className={"shadow-md"}>
            <div className={"container flex items-center"}>
                <Logo src={logo} alt={config.siteName}/>
                <div className="ml-auto flex items-center">
                    <HeaderMenu items={config.menu}/>
                    <ProfileMenu items={config.profile} />
                </div>
            </div>
        </Container>
    )
}

export default Header;
