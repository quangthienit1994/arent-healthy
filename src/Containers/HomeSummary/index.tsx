import HomeProgress from "@/Components/HomeProgress";
import styled from "@emotion/styled";
import React, {useEffect, useMemo} from "react";
import LineChart, {Types} from "@/Components/LineChart";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "@/Redux/Reducers/Analyze/action";
import {Reducers} from "@/Redux/reducers";
import Square from "@/Shareds/Loading/Text";
import moment from "moment";

const Wrapper = styled.div({})

const HomeSummary: React.FC = () => {
    const dispatch = useDispatch()

    const {isLoading, data} = useSelector((reducers: Reducers) => reducers.analyze)

    useEffect(() => {
        dispatch(actions.load())
    }, [dispatch])

    const source = useMemo(() => data.map(node => ({...node, date: moment(node.date, 'DD/MM/YYYY').format('MM')})), [data])

    return (
        <Wrapper className="grid grid-cols-1 grid-cols-11">
            <div className="col-span-5">
                <HomeProgress height={310} background="/images/d01.jpg" value={15} total={21}/>
            </div>
            <div className="col-span-6 bg-[#2E2E2E]">
                {isLoading ? <Square height={310}/> : (
                    <div className="p-[15px]">
                        <LineChart height={280} data={source ?? []} type={Types.month}/>
                    </div>
                )}
            </div>
        </Wrapper>
    )
}

export default HomeSummary;
