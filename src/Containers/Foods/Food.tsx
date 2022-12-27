import React, {useRef} from "react";
import styled from "@emotion/styled";
import {useDivResize} from "@/Hooks/useResize";

const Wrapper = styled.div({
    transition: "all .3s ease-in-out",
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    "&:after": {
        content: "''",
        transition: "all .3s ease-in-out",
        position: "absolute",
        bottom: 0,
        right: 0,
        zIndex: 2,
        pointerEvents: "none",
        left: "100%",
        height: "calc(2em - 4px)",
        backgroundColor: "var(--secondary)",
    },
    ".title": {
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: 3,
        padding: "5px 7px",
        backgroundColor: "var(--secondary)",
        color: "#fff",
        fontSize: "0.9em",
        height: "2em",
        lineHeight: 2,
    },
    ".bg-thumb": {
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: 1,
        height: "100%",
        width: "100%",
        transition: "all 3s ease-in-out",
    },
    "&:hover": {
        ".bg-thumb": {
            transform: "scale(1.5)"
        },
        "&:after": {
            left: "0%"
        }
    }
})

export interface IFood {
    thumbnail: string
    title: string
}

const Food: React.FC<{food: IFood}> = ({ food: {thumbnail, title} }) => {
    const ref = useRef<HTMLDivElement>()
    const {width} = useDivResize(ref)

    return (
        <Wrapper ref={ref as any} style={{height: width}} className={"shadow-sm"}>
            <div className={'bg-thumb'} style={{backgroundImage: `url(${thumbnail})`}} />
            <div className="title">{title}</div>
        </Wrapper>
    )

}

export default Food;
