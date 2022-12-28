import React, {useEffect} from "react";
import styled from "@emotion/styled";
import Diaries from "@/Components/Diaries";
import Button from "@/Shareds/Button";
import Square from "@/Shareds/Loading/Square";
import {useDispatch, useSelector} from "react-redux";
import {Reducers} from "@/Redux/reducers";
import {actions} from "@/Redux/Reducers/Diaries/action";

const Wrapper = styled.div({})

const MyDiary: React.FC = () => {
    const {isLoading, data} = useSelector((reducers: Reducers) => reducers.diary)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.load())
    }, [dispatch])

    return (
        <Wrapper>
            <h2 className={"text-xl font-inter"}>MY DIARY</h2>
            {
                isLoading ? (
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => <Square key={index}/>)
                        }
                    </div>
                ) : <Diaries diaries={data ?? []}/>
            }
            <div className="mt-8 flex justify-center">
                <Button>自分の日記をもっと見る</Button>
            </div>
        </Wrapper>
    )
}

export default MyDiary
