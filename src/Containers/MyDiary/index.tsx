import React from "react";
import styled from "@emotion/styled";
import Diaries from "@/Components/Diaries";
import useSWR from "swr";
import Button from "@/Shareds/Button";

const Wrapper = styled.div({})

const MyDiary: React.FC = () => {
    const {isValidating, data} = useSWR('/data/diaries.json')

    return (
        <Wrapper>
            <h2 className={"text-xl mt-12 font-inter"}>MY DIARY</h2>
            {data && <Diaries diaries={data}/>}
            <div className="mt-8 flex justify-center">
                <Button>自分の日記をもっと見る</Button>
            </div>
        </Wrapper>
    )
}

export default MyDiary
