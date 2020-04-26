import * as React from 'react';
import './css/Head.css'
import { NumAutoPlusAnimation, timerToEngStr } from '../../myFun/function'
import * as actions from '../../redux/actions/index';
import store from '../../redux/store/index';
import { StoreState } from '../../redux/types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import IPRequestList from './IPRequestList';
import EchartsTable from '../Echart/EchartsTable';
import EchartsCircleTable from '../Echart/EchartsCircleTable';

interface Item1Style {
    id: number;
    backgroundColor: string;
    width: string;
}

class Head extends React.Component<StoreState, object> {
    public readonly state: Readonly<StoreState>
    private colorList: string[] = ['#FFCD36', '#5780F7', '#06BA54'];
    private style: Item1Style[] = [];

    constructor(props: Readonly<StoreState>) {
        super(props);
        this.state = store.getState()
        store.subscribe(this.storeChange.bind(this));
    }

    public componentDidMount() {
        const { ThreeData } = this.state;
        for (let i = 0; i < ThreeData.length; i++) {
            NumAutoPlusAnimation(document.getElementById(`data${i}`), ThreeData[i].num, ThreeData[i].unit, 1);
            const { style } = this;
            style.push({
                id: i,
                backgroundColor: this.colorList[i],
                width: `${ThreeData[i].num / ThreeData[i].all * 100}%`,
            });
            this.style = style;
        }
        this.setState({})
    }

    public render() {
        const { groupData } = this.state;
        let totalValue = 0;
        const groupList: string[] = [];
        const groupDataToTable = [];
        const groupDataToTableInOne: number[] = [];
        groupData.dataList.map(item => {
            groupList.push(item.group);
            groupDataToTableInOne.push(item.value);
            totalValue += item.value;
        })
        groupDataToTable.push(groupDataToTableInOne);
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
                        <IPRequestList />
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
                        <EchartsCircleTable data={{
                            title: 'Group Percent',
                            cursorTitle: 'Group',
                            width: '100%',
                            height: '300px',
                            dataSource: [{ name: '乔布斯', value: 100 }, { name: '李宇柯', value: 70 }]
                        }} />
                    </div>
                    <div className="centerItem5">
                        <div className="centerItemHead">Group Table</div>
                        <EchartsTable data={{
                            width: '100%',
                            height: '300px',
                            title: '文章中各组别文章数量统计',
                            xdata: groupList,
                            ydata: groupDataToTable,
                            legend: [{
                                name: '我的组别1',
                                icon: 'circle',
                                // 设置文本为红色
                                textStyle: {
                                    color: 'red'
                                },
                            }, {
                                name: '我的组别2',
                                icon: 'circle',
                                textStyle: {
                                    color: 'green'
                                },
                            }, {
                                name: '我的组别3',
                                icon: 'circle',
                                textStyle: {
                                    color: 'red'
                                },
                            }, {
                                name: '我的组别4',
                                icon: 'circle',
                                textStyle: {
                                    color: 'green'
                                },
                            }, {
                                name: '我的组别5',
                                icon: 'circle',
                                textStyle: {
                                    color: 'red'
                                },
                            }]
                        }} />
                        <div className='totalValue'>
                            共<span className='red'>{totalValue}</span>条文章记录
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    /**
     * 三个数据块的渲染
     **/
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
                    <div className="centerItem1LineIn" style={{ ...this.style[index] }} />
                </div>
            </div>
        })
    }

    /**
     * 渲染明星文章
     **/
    private renderStarArticles: () => JSX.Element[] = () => {
        const { StarArticlesData } = this.state;
        return StarArticlesData.dataList.map((item, index) => {
            return <div className="starArticleItem" key={index}>
                <img className="starArticleHeadImg" src={item.headImg} />
                <div>
                    <p>{item.title}</p>
                    <p>{timerToEngStr(item.time)}</p>
                </div>
            </div>
        })
    }


    /**
    * 绑定state监听
    **/
    private storeChange() {
        this.setState(store.getState())
    }
}

export function mapStateToProps(state: StoreState) {
    return { ...state }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.AllAction>) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Head);