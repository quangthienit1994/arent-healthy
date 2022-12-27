import styled from "@emotion/styled";
import React from "react";
import Diary, {IDiary} from "@/Components/Diaries/Diary";

const Wrapper = styled.div({})

const Diaries: React.FC<{diaries: IDiary[]}> = ({ diaries }) => {
    return (
        <Wrapper className={"grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}>
            {
                diaries.map((diary, index) => {
                    return <Diary diary={diary} key={index} />
                })
            }
        </Wrapper>
    )
}

export default Diaries;
