import React, {useCallback, useLayoutEffect, useRef, useState} from "react";
import styled from "@emotion/styled";
import {useWindowScroll, useWindowSize} from "react-use";
import classNames from "classnames";
import _ from "lodash";

const Wrapper = styled.div({
    position: "fixed",
    zIndex: 5,
    top: "80%",
    opacity: 0,
    visibility: "hidden",
    pointerEvents: "none",
    transition: "all .1s",
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
        transform: "translateX(50px)",
        path: {
            transition: "all .3s ease-in-out",
            fill: "var(--gray)"
        },
        '&:hover': {
            border: "1px solid var(--primary)",
            background: "var(--primary)",
            path: {
                fill: "#FFFFFF"
            },
        },
    },
    "&.active": {
        opacity: 1,
        visibility: "visible",
        pointerEvents: "auto",
    },
    "@media screen and ( max-width: 1023px )": {
        right: 15,
        zIndex: 20,
        top: "calc(100% - 125px)",
        button: {
            transform: "unset",
            border: "1px solid var(--primary)",
            path: {
                transition: "all .3s ease-in-out",
                fill: "var(--primary)"
            },
        },
    }
})

const BackToTop: React.FC = () => {
    const {y} = useWindowScroll()
    const [isActive, setActive] = useState(false)

    const throttle = useRef(
        _.throttle((y: number) => {
            setActive(y > 10)
        })
    )

    useLayoutEffect(() => {
        requestAnimationFrame(() => {
            throttle.current(y)
        })
    }, [y])

    const backToTop = useCallback(() => {
        window.scroll({top: 0, left: 0, behavior: "smooth"})
    }, [])

    return (
        <Wrapper className={classNames({active: isActive})}>
            <button onClick={backToTop} className={"shadow"}>
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.5853 9.04198L8.00023 2.65788L1.41519 9.04198L0.539001 8.19253L8.00024 0.958984L15.4615 8.19253L14.5853 9.04198Z"/>
                </svg>
            </button>
        </Wrapper>
    )
}

export default BackToTop;
