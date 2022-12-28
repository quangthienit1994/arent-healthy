import React from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Reducers} from "@/Redux/reducers";

const Icon = styled.div({
    position: "relative",
    span: {
        position: "absolute",
        top: 0,
        right: -8,
        display: "flex",
        width: 16,
        height: 16,
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.75em",
        borderRadius: "50%",
        color: "#FFFFFF",
        background: "#EA6C00"
    }
})

const Count: React.FC<{count: number}> = ({ count }) => {
    return <span className={"font-inter"}>{count > 10 ? "9+" : count}</span>
}

const Notify: React.FC = () => {
    const count = useSelector((reducers: Reducers) => reducers.notify.data.length)
    return (
        <Icon>
            <img alt={"お知らせ"} src={"/images/icon_info.svg"}/>
            {
                count && <Count count={count} />
            }
        </Icon>
    )
}

export default Notify;
