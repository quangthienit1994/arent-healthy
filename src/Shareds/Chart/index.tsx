import {Line} from "@ant-design/plots";
import React from "react";

interface ChartColumnProps {
    data: { label: string, value: number, type: string }[];

    formatter?(value: any): string;

    height?: string | number
}

const Chart: React.FC<ChartColumnProps> = ({height = 250, data, formatter}) => {

    const config: any = {
        data,
        xField: 'date',
        yField: 'value',
        seriesField: 'type',
        point: {
            size: 4,
            style: {
                lineWidth: 0,
            },
        },
        legend: false,
        interactions: [
            {
                type: "element-active"
            },
        ],
        label: false,
        color: ['#ffcc21', '#8fe9d0']
    };

    return (
        <Line
            {...config}
            height={height}
            xAxis={{
                line: false,
                grid: {
                    line: {
                        style: {
                            stroke: '#737373',
                        },
                    },
                },
                label: {
                    autoRotate: false,
                    offsetY: 5,
                    formatter,
                    style: {
                        fill: '#ffffff',
                        fontSize: 12,
                    },
                },
            }}
            lineStyle={{
                lineWidth: 3,
                strokeOpacity: 0.7,
                cursor: 'pointer'
            }}
            yAxis={{
                grid: {
                    line: false
                },
                label: false,
            }}
        />
    )
}

export default Chart;
