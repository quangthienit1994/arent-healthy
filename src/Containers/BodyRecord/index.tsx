import React, { useMemo, useState } from "react";
import styled from "@emotion/styled";
import Card from "@/Shareds/Card";
import Chart from "@/Shareds/Chart";
import _ from "lodash";
import classNames from "classnames";
import useSWR from 'swr';
import moment from "moment";

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

enum Types {
    date = "date",
    week = "week",
    month = "month",
    year = "year",
}

enum Names {
    date = "日",
    week = "週",
    month = "月",
    year = "年",
}

const BodyRecordContainer: React.FC = () => {
    const [type, setType] = useState<Types>(Types.month)
    const { data, isValidating } = useSWR('/data/analyze.json')

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

    if(isValidating) return null;

    return (
        <Wrapper>
            <Card
                title={<span>BODY <br /> RECORD</span>}
                extra={"2021.05.21"}
            >
                <div className="pt-5">
                    <Chart
                        data={source}
                        formatter={value => {
                            switch (type) {
                                case Types.date:
                                case Types.week:
                                case Types.year:
                                    return value + (Names as any)[type]
                                case Types.month:
                                    return moment(value, 'MM/YYYY').format("M") + (Names as any)[type]
                            }
                        }}
                    />
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
