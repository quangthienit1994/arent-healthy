import styled from "@emotion/styled";
import React, { useMemo } from "react";

const Wrapper = styled.div({
    position: "relative",
    ".background": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        img: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
        }
    },
    ".chart": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        background: "linear-gradient(45deg, #ffcc213b, #ff963c26)",
    },
    ".content": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textShadow: "0 1px 3px #FF963C",
        color: "#FFFFFF",
        zIndex: 2,
    },
    svg: {
        transition: "all 1s ease-in-out",
        transform: "rotate(-90deg)",
        circle: {
            filter: "drop-shadow(0px 3px 3px #FF963C)",
        }
    }
})

interface HomeProgressProps {
    value: number;
    total: number;
    background: string;
    height?: number | string
}

const HomeProgress: React.FC<HomeProgressProps> = ({ height, background, total, value }) => {

    const {dash, percent} = useMemo(() => {
        const percent = total > 0 ? Math.round((value / total) * 100) : 0;
        const roundCircum = 2 * 90 * Math.PI
        const roundDraw = percent * roundCircum / 100
        return {
            dash: roundDraw + ' 999',
            percent
        };
    }, [total, value])


    return (
        <Wrapper style={{height}}>
            <div className="background">
                <img src={background} alt="Home progress" />
            </div>
            <div className="content font-inter">
                <div className="flex items-end gap-1">
                    <div className="text-[1.1em]">{value}/{total}</div>
                    <div className="text-2xl">{percent}%</div>
                </div>
            </div>
            <div className="chart">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200" viewBox="0 0 200 200" data-percent="89">
                    <circle r="90" cx="100" cy="100" style={{
                        stroke: "#FFFFFF",
                        fill: "transparent",
                        strokeWidth: "3px",
                        strokeDasharray: dash
                    }} />
                </svg>
            </div>
        </Wrapper>
    )
}

export default HomeProgress;
