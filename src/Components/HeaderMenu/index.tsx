import React from "react";
import {NavLink} from "react-router-dom";
import styled from "@emotion/styled";

interface Item {
    title: any;
    url: string;
    icon: any;
}

const Icon = styled.div({})

const Name = styled.div({
    lineHeight: "1.25em",
    position: "relative",
    top: '2px'
})

const Link = styled(NavLink)`
    color: #FFFFFF;
    transition: all .3s ease-in-out;
    &:hover {
        color: #FF963C
    }
`;

const Container = styled.div({
    '@media screen and ( max-width: 768px )': {
        boxPack: "center",
        backdropFilter: "saturate(180%) blur(5px)",
        background: "rgba(0, 0, 0, 0.8)",
    }
})

const HeaderMenu: React.FC<{ items: Item[] }> = ({items}) => {
    return (
        <Container className="flex items-center fixed md:relative bottom-0 left-0 w-full px-5 py-2 justify-around z-10 shadow md:shadow-none">
            {
                items.map(({title, url, icon}, index) => {
                    return (
                        <Link to={url} key={index} className={"md:flex md:min-w-[160px] text-center md:text-left items-center gap-2"}>
                            <Icon className={"flex justify-center mb-2 md:mb-0"}>{icon}</Icon>
                            <Name>{title}</Name>
                        </Link>
                    )
                })
            }
        </Container>
    )
}

export default HeaderMenu;
