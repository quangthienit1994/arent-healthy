import React from "react";
import styled from "@emotion/styled";
import useSWR from "swr";
import Exercises from "@/Components/Exercises";

const Container = styled.div({
    background: "var(--gray)",
    padding: "15px 25px",
    color: "#fff"
})

const MyExercise: React.FC = () => {
    const {isValidating, data} = useSWR('/data/exercises.json')
    return (
        <Container>
            <header className={"flex gap-5 items-center"}>
                <h4 className={"font-inter text-[0.85em]"}>MY <br/> EXERCISE</h4>
                <h2 className={"font-inter text-xl"}>2021.05.21</h2>
            </header>
            <div className="pb-4">
                {data && <Exercises exercises={data}/>}
            </div>
        </Container>
    )
}

export default MyExercise;
