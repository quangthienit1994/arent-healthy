import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div({
    position: "absolute",
    bottom: "15%",
    right: 0,
    width: "100%",
    zIndex: 5,
    ".container": {
        height: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: "flex-end",
    },
    button: {
        width: 35,
        height: 35,
        borderRadius: "50%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        border: "1px solid var(--gray)",
        transition: "all .3s ease-in-out",
        path: {
            transition: "all .3s ease-in-out",
            fill: "var(--gray)"
        },
        '&:hover': {
            border: "1px solid var(--primary)",
            path: {
                fill: "var(--primary)"
            },
        },
    },
    "@media screen and ( max-width: 1200px )": {
        bottom: 15,
        right: 15,
        border: "1px solid #ffffff",
        path: {
            transition: "all .3s ease-in-out",
            fill: "#ffffff"
        },
    },
    "@media screen and ( max-width: 768 )": {
        bottom: 90,
    }
})

const BackToTop: React.FC = () => {
    return (
        <Wrapper>
            <div className="container">
                <button>
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5853 9.04198L8.00023 2.65788L1.41519 9.04198L0.539001 8.19253L8.00024 0.958984L15.4615 8.19253L14.5853 9.04198Z"/>
                    </svg>
                </button>
            </div>
        </Wrapper>
    )
}

export default BackToTop;
