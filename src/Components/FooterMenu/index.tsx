import React from "react";
import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";

const Ul = styled.ul({
    display: "flex",
    gap: "45px"
})

interface Item {
    title: string
    url: string
}

const FooterMenu: React.FC<{items: Item[]}> = ({items}) => {
    return (
        <Ul>
            {
                items.map(({title, url}, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={url}>{title}</NavLink>
                        </li>
                    )
                })
            }
        </Ul>
    )
}

export default FooterMenu;
