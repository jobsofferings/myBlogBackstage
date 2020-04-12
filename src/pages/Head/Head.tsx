import * as React from 'react';
import './css/Head.css'
import { NumAutoPlusAnimation } from '../../myFun/function'
import * as actions from '../../redux/actions/index';
import { StoreState, Item1 } from '../../redux/types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import EchartsTable from '../Echart/EchartsTable';

interface HeadProps {
    ThreeData: Item1[];
}

interface CenterItem1Props {
    style: Item1Style[]
}

interface Item1Style {
    id: number;
    backgroundColor: string;
    width: string;
}

const colorList: string[] = ['#FFCD36', '#5780F7', '#06BA54'];

class Head extends React.Component<HeadProps, object> {

    public readonly state: Readonly<CenterItem1Props> = {
        style: []
    }

    public componentDidMount() {
        const { ThreeData } = this.props;
        for (let i = 0; i < ThreeData.length; i++) {
            NumAutoPlusAnimation(document.getElementById(`data${i}`), ThreeData[i].num, ThreeData[i].unit, 1);
            const style = this.state.style;
            const item = {
                id: i,
                backgroundColor: colorList[i],
                width: `${ThreeData[i].num / ThreeData[i].all * 100}%`,
            };
            style.push(item);
            this.setState({ style })
        }
    }

    public render() {
        const totalValue = 0;
        // let groupData = {
        //     dataList: []
        // }
        // // 组别的那个table只有一个数组
        // let groupList:any[] = [];
        // let groupDataToTable:any[] = [];
        // let groupDataToTableInOne:any[] = [];
        // groupData.dataList.map(item => {
        //     groupList.push(item.group);
        //     groupDataToTableInOne.push(item.value);
        //     totalValue += item.value;
        // })
        // groupDataToTable.push(groupDataToTableInOne);
        return (
            <div>
                <div className="AllCenterAreaBody">
                    <div className="centerItem1">
                        {this.renderThreeData()}
                    </div>
                </div>
                <div className="AllCenterAreaBody">
                    <div className="centerItem2">
                        <div className="centerItemHead">IP request list</div>
                        {/* <IPRequestList /> */}
                    </div>
                    <div className="centerItem3">
                        <div className="centerItemHead">Star Articles</div>
                        <div className="starArticlesArea">
                            {this.renderStarArticles()}
                        </div>
                    </div>
                </div>
                <div className="AllCenterAreaBody">
                    <div className="nearArticle">Data has been updated 23 min ago.</div>
                    {/* 这里可以放最近发布的一篇文章，点进去也可以进入该文章详情界面 */}
                </div>
                <div className="AllCenterAreaBody">
                    <div className="centerItem4">
                        <div className="centerItemHead">Group Percent</div>
                        {/* <EchartsCircleTable data={{
                            title: 'Group Percent',
                            cursorTitle: 'Group',
                            width: '100%',
                            height: '300px',
                            dataSource: groupData.dataList
                        }} /> */}
                    </div>
                    <div className="centerItem5">
                        <div className="centerItemHead">Group Table</div>
                        <EchartsTable data={{
                            width: '100%',
                            height: '300px',
                            title: '文章中各组别文章数量统计',
                            // xdata: groupList,
                            // ydata: groupDataToTable,
                            legend: ['我的组别']
                        }} />
                        <div className='totalValue'>
                            共<span className='red'>{totalValue}</span>条文章记录
                            </div>
                    </div>
                </div>
            </div>
        );
    }
    private renderThreeData: () => JSX.Element[] = () => {
        const { ThreeData } = this.props;
        return ThreeData.map((item, index) => {
            return <div key={index} >
                <p>{item.title1}</p>
                <div>
                    <p>{item.title2}</p>
                    <p id={`data${index}`}>0{item.unit}</p>
                </div>
                <div className="centerItem1Line">
                    <div className="centerItem1LineIn" style={{ ...this.state.style[index] }} />
                </div>
            </div>
        })
    }
    private renderStarArticles() {
        return <div />
    }
}

export function mapStateToProps(state: StoreState) {
    return { ...state }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.AllAction>) {
    return {
        // topInput: (value: string) => dispatch(actions.topInput(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Head);