import styled from "@emotion/styled";
import React, {useMemo} from "react";
import moment from "moment";
import {IDiary} from "@/Models/Model";

const Wrapper = styled.div({
    border: "2px solid #707070",
    padding: 15,
    h3: {
        fontWeight: 400
    }
})

const Diary: React.FC<{diary: IDiary}> = ({ diary }) => {
    const date = useMemo(() => moment(diary.createdAt), [diary.createdAt])
    return (
        <Wrapper>
            <h3 className="font-inter text-lg mb-2">
                <p className={"leading-none"}>{date.format('YYYY.MM.DD')}</p>
                {date.format('hh:mm')}
            </h3>
            <h4 className={"text-xs"}>{diary.title}</h4>
            <p className={"text-xs"}>{diary.content}</p>
        </Wrapper>
    )
}

export default Diary;
