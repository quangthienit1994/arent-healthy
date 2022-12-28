import React from "react";
import styled from "@emotion/styled";
import {IRecommended} from "@/Models/Model";

const Wrapper = styled.div({
    whiteSpace: "pre-line",
    padding: "24px 8px 22px 8px",
    transition: "all .3s ease",
    cursor: "pointer",
    ".title" : {
        position: "relative",
        paddingBottom: 10,
        marginBottom: 10,
        "&:before": {
            content: "''",
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            height: 1,
            backgroundColor: "#fff",
            width: 55,
            maxWidth: "80%"
        }
    },
    "&:hover": {
        boxShadow: "4px 4px 0 4px #6e5d4f, 10px 10px 0 5px var(--primary)",
    }
})

interface RecommendedProps extends IRecommended {}

const Recommended: React.FC<RecommendedProps> = ({ title, extra }) => {
    return (
        <Wrapper className="bg-[#2E2E2E] flex flex-col justify-center items-center text-center">
            <h2 className={"title text-xl font-inter text-secondary"}>{title}</h2>
            <h3 className="text-l text-white">{extra}</h3>
        </Wrapper>
    )
}

export default Recommended;
