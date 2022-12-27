import React, {useRef, useState} from "react"
import styled from "@emotion/styled"
import classNames from 'classnames'
import {NavLink} from "react-router-dom";
import {useClickAway} from "react-use";

const Toggle = styled.button({
    position: 'relative',
    width: "25px",
    height: "30px",
    span: {
        height: 2,
        background: "var(--primary)",
        width: "100%",
        position: "absolute",
        left: 0,
        transition: "all .3s ease-in-out",
        "&:nth-of-type(1)": {
            top: "25%"
        },
        "&:nth-of-type(2)": {
            top: "50%"
        },
        "&:nth-of-type(3)": {
            top: "79%"
        },
    },
    "&.active": {
        span: {
            "&:nth-of-type(1)": {
                transform: "rotate(45deg) translate(6px, 5px)"
            },
            "&:nth-of-type(2)": {
                opacity: 0,
                visibility: "hidden"
            },
            "&:nth-of-type(3)": {
                transform: "rotate(-45deg) translate(6px, -5px)"
            },
        }
    }
})

const Container = styled.div({
    position: "relative"
})

const Dropdown = styled.ul({
    position: "absolute",
    right: 0,
    background: "#777777",
    width: 280,
    zIndex: 10,
    visibility: "hidden",
    opacity: 0,
    pointerEvents: "none",
    top: 0,
    transition: "all .3s ease-in-out",
    li: {
        color: "#fff",
        mixBlendMode: "normal",
        boxShadow: "0 1px 1px 0px #0003",
        a: {
            minHeight: 70,
            fontSize: "1.1em",
            width: "100%",
            padding: "10px 30px 0 30px",
            display: "flex",
            alignItems: "center",
            transition: "all .3s ease-in-out",
            borderBottom: "1px solid rgba(255,255,255, 0.15)",
            "&:hover": {
                backgroundColor: "var(--primary)"
            }
        }
    },
    "&.active": {
        top: "calc(100% + 17px)",
        visibility: "visible",
        opacity: 1,
        pointerEvents: "auto",
    }
})

interface Item {
    title: string
    url: string
}

const ProfileMenu: React.FC<{items: Item[]}> = ({ items }) => {
    const [active, setActive] = useState(false)
    const ref = useRef<any>()
    useClickAway(ref, () => setActive(false))

    return (
        <Container ref={ref}>
            <Toggle onClick={() => setActive(prev => !prev)} className={classNames({active})}>
                <span/>
                <span/>
                <span/>
            </Toggle>
            <Dropdown className={classNames({active})}>
                {
                    items.map(({title, url}, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={url}>{title}</NavLink>
                            </li>
                        )
                    })
                }
            </Dropdown>
        </Container>
    )
}

export default ProfileMenu;
