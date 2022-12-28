import React from "react";
import styled from "@emotion/styled";

const Container = styled.div({
    background: "var(--gray)",
    padding: "15px 25px",
    color: "#fff"
})

interface CardProps {
    title?: any;
    extra?: any;
    children?: any
}

const Card: React.FC<CardProps> = ({title, extra, children}) => {
    return (
        <Container>
            <header className={"flex gap-5 items-center"}>
                {title && <h4 className={"font-inter text-[0.85em]"}>{title}</h4>}
                {extra && <h2 className={"font-inter text-xl"}>{extra}</h2>}
            </header>
            {children}
        </Container>
    )
}

export default Card;
