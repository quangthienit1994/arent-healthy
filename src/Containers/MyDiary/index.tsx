import React from "react";
import styled from "@emotion/styled";
import Diaries from "@/Components/Diaries";
import useSWR from "swr";

const Wrapper = styled.div({})

const MyDiary: React.FC = () => {
    const {isValidating, data} = useSWR('/data/diaries.json')

    return (
        <Wrapper>
            {data && <Diaries diaries={data}/>}
        </Wrapper>
    )
}

export default MyDiary
