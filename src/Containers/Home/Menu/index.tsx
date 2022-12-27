import React from "react";
import Hexagon from "@/Shareds/Hexagon";
import styled from "@emotion/styled";
import {config} from "@/config";

const Container = styled.div({
    maxWidth: 800,
    margin: 'auto',
})

const Item = styled.div({
    color: "#fff",
    fontSize: "1.25em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    icon: {
        maxWidth: 50
    }
})

const Menu: React.FC = () => {
    return (
        <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5">
                {
                    config.home.map(({title, icon}, index) => {
                        return (
                            <div className="mx-auto" key={index}>
                                <Hexagon>
                                    <Item>
                                        <div className="icon">{icon}</div>
                                        <div className="title">{title}</div>
                                    </Item>
                                </Hexagon>
                            </div>
                        )
                    })
                }
            </div>
        </Container>
    )
}

export default Menu;
