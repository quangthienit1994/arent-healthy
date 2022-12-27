import React from "react";
import styled from "@emotion/styled";

const Component = styled.button({
    width: 295,
    maxWidth: "100%",
    background: "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)",
    minHeight: 55,
    lineHeight: 2,
    color: "#fff",
    borderRadius: 10,
    fontSize: "1.15em",
    padding: "5px 15px 0 15px",
    textAlign: "center",
    transition: "all 0.3s ease 0s",
    "&:hover": {
        boxShadow: "0px 15px 20px #ff963c57",
        transform: "translateY(-7px)"
    }
})

interface ButtonProps extends React.ButtonHTMLAttributes<any>{
    children?: any
}

const Button: React.FC<ButtonProps> = ({children, ...other}) => {
    return (
        <Component {...other}>{children}</Component>
    )
}

export default Button
