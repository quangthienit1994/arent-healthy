import React from "react";
import styled from "@emotion/styled";

const Container = styled.div({
    width: 125,
    height: 125,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(45deg, #FFCC21, #FF963C)",
    clipPath: "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
    transition: "all .3s ease",
    cursor: "pointer",
    "&:hover": {
        transform: "scale(1.1) translateY(-5px)"
    }
})

const Hexagon: React.FC<{ children: any }> = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default React.memo(Hexagon);
