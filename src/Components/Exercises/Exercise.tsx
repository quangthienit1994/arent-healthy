import styled from "@emotion/styled";
import React from "react";
import {Link} from "react-router-dom";

const Wrapper = styled.div({
    position: "relative",
    "&:before": {
        position: "absolute",
        top: 13,
        left: 5,
        content: "''",
        width: 5,
        height: 5,
        borderRadius: "50%",
        backgroundColor: "#fff"
    },
    ".description, .extra": {
        color: "var(--secondary)"
    },
    "&:hover": {
        "&:before": {
            backgroundColor: "var(--secondary)"
        },
        ".name": {
            color: "var(--secondary)"
        }
    }
})

export interface IExercise {
    name: string;
    description: any;
    extra: any;
}

export interface ExerciseProps {
    exercise: IExercise;
}

const Exercise: React.FC<ExerciseProps> = ({exercise: {name, extra, description}}) => {
    return (
        <Link to={"#"}>
            <Wrapper className={"flex items-start justify-between px-4 pt-3 pb-1"}>
                <div className="left">
                    <p className="name leading-none text-[0.95em]">{name}</p>
                    <p className="description font-inter text-[0.95em]">{description}</p>
                </div>
                <p className="extra font-inter text-[1.15em]">{extra}</p>
            </Wrapper>
        </Link>
    )
}

export default Exercise;
