import React from "react";
import styled from "@emotion/styled";
import FooterMenu from "@/Components/FooterMenu";
import {config} from "@/config";

const Container = styled.footer({
    backgroundColor: "#414141",
    minHeight: 125,
    display: "flex",
    paddingTop: 30,
    paddingBottom: 15,
    alignItems: "center",
    a: {
        color: "#fff",
        transition: "all .3s ease-in-out",
        "&:hover": {
            color: "var(--primary)"
        }
    },
    '@media screen and ( max-width: 980px )': {
        paddingBottom: 80
    }
})

const Footer: React.FC = () => {
    return (
        <Container>
            <div className="container">
                <FooterMenu items={config.footer} />
            </div>
        </Container>
    )
}

export default Footer;
