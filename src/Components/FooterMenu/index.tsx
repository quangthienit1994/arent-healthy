import React from "react";
import {NavLink} from "react-router-dom";

interface Item {
    title: string
    url: string
}

const FooterMenu: React.FC<{items: Item[]}> = ({items}) => {
    return (
        <ul className={"md:flex gap-[45px]"}>
            {
                items.map(({title, url}, index) => {
                    return (
                        <li key={index} className={"mb-3 md:mb-0"}>
                            <NavLink className={"block"} to={url}>{title}</NavLink>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default FooterMenu;
