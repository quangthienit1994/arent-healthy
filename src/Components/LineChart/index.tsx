import React from 'react';
import Chart from "@/Shareds/Chart";
import moment from 'moment';

export enum Types {
    date = "date",
    week = "week",
    month = "month",
    year = "year",
}

export enum Names {
    date = "日",
    week = "週",
    month = "月",
    year = "年",
}

interface LineChartProps {
    data: any[];
    type?: Types,
    height?: string | number
}

const LineChart: React.FC<LineChartProps> = ({height, data, type}) => {
    return (
        <Chart
            height={height}
            data={data}
            formatter={value => {
                switch (type) {
                    case Types.date:
                    case Types.week:
                    case Types.year:
                        return value + (Names as any)[type]
                    case Types.month:
                        return moment(value, 'MM/YYYY').format("M") + (Names as any)[type]
                }
                return value;
            }}
        />
    )
}

export default LineChart;
