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
    // xdata: groupList,
    // ydata: groupDataToTable,
    legend: ['我的组别']
}

let getRandomID = () => Number(Math.random().toString().substr(4, 10) + Date.now()).toString(36)
let id = getRandomID();

class EchartsTable extends React.Component<EchartsProps, object> {

    public constructor(props: any) {
        super(props);
    }
    public componentDidUpdate() {
        console.log(echarts);
        const myChart = echarts.init(document.getElementById(id));
        console.log(myChart);
        // let { ydata } = this.props.data;
        // if (ydata.length) {
        //     window.addEventListener("resize", function () {
        //         myChart.resize();
        //     });
        //     // 初始化
        //     let { title, xdata, legend } = this.props.data;
        //     let myChart = echarts.init(document.getElementById(id));
        //     let series = [];
        //     for (let i = 0; i < ydata.length; i++) {
        //         let item = {
        //             name: legend[i],
        //             type: defaultType,
        //             data: ydata[i],
        //             // smooth: true,
        //             markPoint: {
        //                 data: [
        //                     { type: 'max', name: '最大值' },
        //                     { type: 'min', name: '最小值' }
        //                 ]
        //             },
        //             markLine: {
        //                 data: [
        //                     { type: 'average', name: '平均值' }
        //                 ]
        //             }
        //         }
        //         series.push(item)
        //     }
        //     // <EchartsTable data={{
        //     //     id: 'mainmain',
        //     //     width: '100%',
        //     //     height: '500px',
        //     //     title: '某地区新增男孩人数、女孩人数和总人数',
        //     //     xdata: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        //     //     ydata: [[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        //     //     [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        //     //     [4.6, 10.8, 16, 50, 54.3, 147.4, 311.2, 344.4, 81.3, 38.8, 12.4, 5.6]],
        //     //     legend: ['男孩', '女孩', '总人数']
        //     // }} />
        //     // 绘制图表
        //     myChart.setOption({
        //         title: { text: title },
        //         tooltip: {
        //             trigger: 'axis'
        //         },
        //         legend: {
        //             data: legend
        //         },
        //         toolbox: {
        //             show: true,
        //             feature: {
        //                 dataView: { show: true, readOnly: false },
        //                 magicType: { show: true, type: ['line', 'bar'] },
        //                 restore: { show: true },
        //                 saveAsImage: {
        //                     show: true,
        //                     type: 'jpg'
        //                 }
        //             }
        //         },
        //         xAxis: [
        //             {
        //                 type: 'category',
        //                 data: xdata
        //             }
        //         ],
        //         yAxis: [
        //             {
        //                 type: 'value'
        //             }
        //         ],
        //         series
        //     });
        // }
    }
    public render() {
        return (
            <div className="AllCenterAreaHeaderInput">
                1
            </div>
        );
    }
}

export default EchartsTable;