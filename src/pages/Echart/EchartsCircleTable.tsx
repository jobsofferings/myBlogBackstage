import * as React from 'react';
import * as echarts from 'echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';

interface EchartsProps {
    data: EchartsData;
}

interface EchartsData {
    width: string;
    height: string;
    title: string;
    cursorTitle: string,
    dataSource: any[],
    backgroundColor?: string,
    textColor?: string,
    itemColor?: string,
    labelColor?: string,
    style?: React.CSSProperties
}

const defaultWidth = '100%';
const defaultHeight = '300px';
const getRandomID = () => `a${Number(Math.random().toString().substr(4, 10) + Date.now()).toString(36)}`
const id = getRandomID();

class EchartsCircleTable extends React.Component<EchartsProps, object> {

    public constructor(props: any) {
        super(props);
    }
    public componentDidUpdate() {
        const { dataSource } = this.props.data;
        if (dataSource.length) {
            const myChart = echarts.init(document.getElementById(id) as HTMLDivElement);
            window.addEventListener("resize", () => {
                myChart.resize();
            });
            const { title, cursorTitle, backgroundColor, textColor, itemColor, labelColor } = this.props.data;
            const dataSourceFormat = []
            for (const item of dataSource) {
                dataSourceFormat.push({ name: item.group, value: item.value })
            }
            const option = {
                backgroundColor: backgroundColor ? backgroundColor : '#2c343c',
                title: {
                    text: title,
                    left: 'center',
                    top: 20,
                    textStyle: {
                        color: textColor ? textColor : '#ccc'
                    }
                },
                series: [
                    {
                        name: cursorTitle,
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '50%'],
                        data: dataSourceFormat.sort((a, b) => (a.value - b.value)),
                        roseType: 'radius',
                        label: {
                            color: labelColor ? labelColor : 'rgba(255, 255, 255, 0.3)'
                        },
                        labelLine: {
                            lineStyle: {
                                color: labelColor ? labelColor : 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        },
                        itemStyle: {
                            color: itemColor ? itemColor : '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: (idx: string) => (Math.random() * 200)
                    }
                ],
                tooltip: {
                    formatter: `{a} <br/>{b} : {c} ({d}%)`,
                    Format:'series'
                },
            };
            myChart.setOption(option);
        }
    }
    public render() {
        const { width, height, style } = this.props.data;
        return (
            <div id={id} style={{ width: width ? width : defaultWidth, height: height ? height : defaultHeight, ...style }} />
        );
    }
}

export default EchartsCircleTable;