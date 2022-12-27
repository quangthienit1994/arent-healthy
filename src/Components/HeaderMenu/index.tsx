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
    min-width: 160px;
    &:hover {
        color: #FF963C
    }
`;

const HeaderMenu: React.FC<{ items: Item[] }> = ({items}) => {
    return (
        <div className="flex items-center">
            {
                items.map(({title, url, icon}, index) => {
                    return (
                        <Link to={url} key={index} className={"flex items-center gap-2"}>
                            <Icon>{icon}</Icon>
                            <Name>{title}</Name>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default HeaderMenu;
