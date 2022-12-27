import React, {useRef} from "react";
import styled from "@emotion/styled";
import {useDivResize} from "@/Hooks/useResize";

const Wrapper = styled.button({
    position: "relative",
    cursor: "pointer",
    ".content": {
        position: "relative",
        zIndex: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'column',
        height: "100%"
    },
    "&:after": {
        transition: "all .3s ease",
        border: "24px solid var(--secondary)",
        content: "''",
        position: "absolute",
        backgroundColor: "#2e2e2ec4",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 2,
    },
    "&:before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "var(--bg)",
        backgroundPosition: "10% center",
        backgroundSize: "cover",
        mixBlendBode: "luminosity",
        zIndex: 1,
        filter: "grayscale(1)"
    },
    ".btn": {
        color: "#fff",
        textAlign: "center",
        width: 160,
        fontSize: "0.85em",
        backgroundColor: "var(--primary)",
        lineHeight: 1,
        minHeight: 24,
        paddingTop: 7
    },
    "&:hover": {
        "&:after": {
            borderColor: "var(--secondary)",
            boxShadow: "inset 0 0 0 24px #d1a921",
        },
    }
})

export interface INavigate {
    title: string
    description: string;
    thumbnail: string
}

export interface ProfileNavigateProps extends INavigate {
    onClick(): void;
}

const ProfileNavigate: React.FC<ProfileNavigateProps> = ({onClick, thumbnail, title, description}) => {
    const ref = useRef<HTMLDivElement>()
    const {width} = useDivResize(ref)
    return (
        <Wrapper ref={ref as any} onClick={onClick} style={{'--bg': `url(${thumbnail})`, height: width} as any}>
            <div className="content">
                <h2 className={"text-2xl text-secondary font-inter"}>{title}</h2>
                <div className="btn">{description}</div>
            </div>
        </Wrapper>
    )
}

export default ProfileNavigate;
