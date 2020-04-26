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
    xdata: any[],
    ydata: any[],
    legend: any,
    style?: React.CSSProperties
}

class EchartsTable extends React.Component<EchartsProps, object> {

    private id = `a${Number(Math.random().toString().substr(4, 10) + Date.now()).toString(36)}`
    private defaultType = 'bar';
    private defaultWidth = '100%';
    private defaultHeight = '300px';

    public constructor(props: any) {
        super(props);
    }

    public componentDidUpdate() {
        const { ydata } = this.props.data;
        console.log(this.props.data);
        if (ydata.length) {
            const myChart = echarts.init(document.getElementById(this.id) as HTMLDivElement);
            window.addEventListener("resize", () => {
                myChart.resize();
            });
            // 初始化
            const { title, xdata, legend } = this.props.data;
            const series = [];
            for (let i = 0; i < ydata.length; i++) {
                const item = {
                    name: legend[i],
                    type: this.defaultType,
                    data: ydata[i],
                    // smooth: true,
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    }
                }
                series.push(item)
            }
            // 绘制图表
            myChart.setOption({
                title: { text: title },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: legend
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataView: { show: true, readOnly: false },
                        magicType: { show: true, type: ['line', 'bar'] },
                        restore: { show: true },
                        saveAsImage: {
                            show: true,
                            type: 'jpg'
                        }
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        data: xdata
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series,
            });
        }
    }
    public render() {
        const { width, height, style } = this.props.data;
        return (
            <div id={this.id} style={{ width: width ? width : this.defaultWidth, height: height ? height : this.defaultHeight, ...style }} />
        );
    }
}

export default EchartsTable;