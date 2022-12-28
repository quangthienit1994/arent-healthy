import React from "react";
import {NavLink} from "react-router-dom";
import styled from "@emotion/styled";
import classNames from "classnames";

interface Item {
    title: any;
    url: string;
    icon: any;
    exact?: boolean
}

const Name = styled.div({
    lineHeight: "1.25em",
    position: "relative",
    top: '2px'
})

const Container = styled.div({
    a: {
        color: "#FFFFFF",
        transition: "all .3s ease-in-out",
        "&:hover, &.active": {
            color: "#FF963C"
        }
    },
    '@media screen and ( max-width: 1024px )': {
        boxPack: "center",
        backdropFilter: "saturate(180%) blur(5px)",
        background: "rgba(0, 0, 0, 0.8)",
    }
})

const HeaderMenu: React.FC<{ items: Item[] }> = ({items}) => {
    return (
        <Container
            className="flex items-center fixed lg:relative bottom-0 left-0 w-full px-5 py-2 justify-around z-10 shadow lg:shadow-none">
            {
                items.map(({title, exact, url, icon: Icon}, index) => {
                    return (
                        <NavLink end={exact} to={url} key={index} className={({isActive}: any) => classNames(
                            "lg:flex lg:min-w-[160px] text-center lg:text-left items-center gap-2",
                            {active: isActive}
                        )}>
                            <Icon className={"flex justify-center mb-2 lg:mb-0"}><Icon/></Icon>
                            <Name>{title}</Name>
                        </NavLink>
                    )
                })
            }
        </Container>
    )
}

export default HeaderMenu;
