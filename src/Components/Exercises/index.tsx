import React from "react";
import Exercise, {IExercise} from "@/Components/Exercises/Exercise";
import styled from "@emotion/styled";

const Wrapper = styled.div({
    overflow: "auto",
    maxHeight: 220,
    "&>div": {
        borderBottom: "1px solid #777777",
        "&:last-child": {
            borderBottomColor: "transparent"
        }
    }
})

const Exercises: React.FC<{ exercises: IExercise[] }> = ({exercises}) => {
    return (
        <Wrapper className="grid xl:grid-cols-2 gap-x-5 lg:gap-x-10 scrollbar">
            {
                exercises.map((exercise, index) => {
                    return (
                        <div className="col-span-1" key={index}>
                            <Exercise exercise={exercise}/>
                        </div>
                    )
                })
            }
        </Wrapper>
    )
}

export default Exercises;
