import React, {useEffect, useMemo, useState} from "react";
import styled from "@emotion/styled";
import Card from "@/Shareds/Card";
import classNames from "classnames";
import moment from "moment";
import LineChart, { Names, Types } from "@/Components/LineChart";
import {useDispatch, useSelector} from "react-redux";
import {Reducers} from "@/Redux/reducers";
import {actions} from "@/Redux/Reducers/Analyze/action";
import Square from "@/Shareds/Loading/Text";

const Wrapper = styled.div({})

const Button = styled.button({
    fontSize: "0.85em",
    width: 55,
    lineHeight: "30px",
    height: 24,
    borderRadius: 50,
    backgroundColor: "#fff",
    color: "var(--secondary)",
    "&.active": {
        backgroundColor: "var(--secondary)",
        color: "#fff",
    }
})

const BodyRecordContainer: React.FC = () => {
    const dispatch = useDispatch()
    const [type, setType] = useState<Types>(Types.month)

    const {isLoading, data} = useSelector((reducers: Reducers) => reducers.analyze)

    useEffect(() => {
        dispatch(actions.load())
    }, [dispatch])

    const source = useMemo(() => {
        if (data) {
            return data.map((node: any) => {
                const date = moment(node.date, 'DD/MM/YYYY');
                const item = { ...node }
                switch (type) {
                    case Types.date:
                        item.date = moment(date).format('DD/MM/YYYY')
                        break;
                    case Types.week:
                        item.date = moment(date).format('W')
                        break;
                    case Types.month:
                        item.date = moment(date).format('MM/YYYY')
                        break;
                    case Types.year:
                        item.date = moment(date).format('YYYY')
                        break;
                }
                return item;
            });
        }
        return [];
    }, [data, type])

    return (
        <Wrapper>
            <Card
                title={<span>BODY <br /> RECORD</span>}
                extra={"2021.05.21"}
            >
                <div className="pt-5">
                    {
                        isLoading ? <Square height={250} /> : <LineChart data={source} type={type} />
                    }
                    <div className="flex px-2 mt-3 items-center gap-3">
                        {
                            Object.keys(Types).map((name: any, index) => {
                                return (
                                    <Button
                                        className={classNames({ active: name === type })}
                                        onClick={() => setType(name)}
                                        key={index}>
                                        {(Names as any)[name]}
                                    </Button>
                                )
                            })
                        }
                    </div>
                </div>
            </Card>
        </Wrapper>
    )
}

export default BodyRecordContainer
