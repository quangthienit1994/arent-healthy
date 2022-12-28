import React, {useRef} from "react";
import styled from "@emotion/styled";
import {useDivResize} from "@/Hooks/useResize";
import {Link} from "react-router-dom";
import Tags from "@/Components/News/Tags";
import {INews} from "@/Models/Model";
import _ from "lodash";

const Wrapper = styled.div({
    transition: "all .3s ease-in-out",
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    marginBottom: 8,
    "&:after": {
        content: "''",
        transition: "all .3s ease-in-out",
        position: "absolute",
        bottom: 0,
        right: 0,
        zIndex: 2,
        pointerEvents: "none",
        left: "100%",
        height: "calc(2em - 3px)",
        backgroundColor: "var(--secondary)",
    },
    ".created": {
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

const Container = styled.div({
    "&>a": {
        marginBottom: 8,
        display: "block"
    }
})

const News: React.FC<{news: INews}> = ({ news: {thumbnail, title, tags, createdAt} }) => {
    const ref = useRef<HTMLDivElement>()
    const {width} = useDivResize(ref)

    return (
        <Container>
            <Link to={"#"}>
                <Wrapper ref={ref as any} style={{height: (width ?? 0) * 0.75}} className={"shadow-sm"}>
                    <div className={'bg-thumb'} style={{backgroundImage: `url(${thumbnail})`}} />
                    <div className="created">{createdAt}</div>
                </Wrapper>
                <div className="title text-[0.9em]">{title}</div>
            </Link>
            { _.isArray(tags) && <Tags tags={tags}/>}
        </Container>
    )

}

export default News;
