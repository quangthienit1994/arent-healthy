import React from "react";
import styled from "@emotion/styled";
import Card from "@/Components/Card";

const Wrapper = styled.div({})

const BodyRecord: React.FC = () => {
    return (
        <Wrapper>
            <Card
                title={<span>BODY <br/> RECORD</span>}
                extra={"2021.05.21"}
            >

            </Card>
        </Wrapper>
    )
}

export default BodyRecord
