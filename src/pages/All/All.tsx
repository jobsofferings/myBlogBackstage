import * as React from 'react';
import './css/Hello.css'
import * as actions from '../../redux/actions/index';
import { StoreState } from '../../redux/types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { isInTheDom } from '../../myFun/function'
import store from '../../redux/store'
import Head from '../Head/Head'
import LeftPage from '../SidePage/LeftPage'
import RightPage from '../SidePage/RightPage'
import CenterInput from '../CenterInput/CenterInput'

interface LeftProps {
    left: string;
    height: string;
}

interface RightProps {
    right: string;
    height: string;
}

class All extends React.Component<StoreState, object> {
    public readonly state: Readonly<StoreState>
    private clientHeight = `${document.documentElement.clientHeight || document.body.clientHeight}px`;
    private leftStyle: LeftProps = {
        left: '-300px',
        height: this.clientHeight
    }
    private rightStyle: RightProps = {
        right: '-300px',
        height: this.clientHeight
    }

    constructor(props: Readonly<StoreState>) {
        super(props);
        this.state = store.getState()
        store.subscribe(this.storeChange.bind(this));
        this.leftPageControl = this.leftPageControl.bind(this);
        this.rightPageControl = this.rightPageControl.bind(this);
    }

    public componentDidMount() {
        this.resize();
        window.addEventListener('resize', () => {
            this.resize();
        })
        window.addEventListener('click', (e) => {
            this.controlBack(e);
        })
        // 请求IP数据
        store.dispatch(actions.getIPData());
        // 请求明星文章数据
        store.dispatch(actions.getStarArticle({ length: 5 }));
    }

    public render() {
        const { rightSty, iconAllSty, iconOnePartSty, iconThreePartSty, leftSideSty, rightSideSty } = this.getStyle();
        return (
            <div className="AllArea">
                <LeftPage leftSideSty={leftSideSty} />
                <div className="AllCenterArea" style={rightSty}>
                    <div className="AllCenterAreaHeader">
                        <div style={iconAllSty} className="AllCenterAreaHeaderIconArea" onClick={this.leftPageControl}>
                            <p style={iconOnePartSty} />
                            <p />
                            <p style={iconThreePartSty} />
                        </div>
                        <p>jobofferings</p>
                        <CenterInput />
                        <div className="AllCenterAreaHeaderRight">
                            <div className="menuIcon" onClick={this.rightPageControl} />
                            <div className="vertIcon" />
                        </div>
                    </div>
                    <Head />
                </div >
                <RightPage rightSideSty={rightSideSty} />
            </div>
        );
    }

    /**
     * 左侧页面伸缩控制
     **/
    private leftPageControl() {
        store.dispatch(actions.inLeftPageControl());
    }

    /**
     * 右侧页面伸缩控制
     **/
    private rightPageControl() {
        store.dispatch(actions.inRightPageControl())
    }

    /**
     * 把制作Style提取出来
     **/
    private getStyle() {
        const { leftPageFlag, rightPageFlag } = this.state;
        const rightSty = {
            transform: `${leftPageFlag ? 'translateX(300px)' : 'translateX(0px)'}`
        };
        const iconAllSty = {
            transform: `${leftPageFlag ? 'rotate(180deg)' : 'rotate(0deg)'}`,
        }
        const iconOnePartSty = {
            transform: `${leftPageFlag ? 'rotate(215deg)' : 'rotate(0deg)'}`,
            width: `${leftPageFlag ? '15px' : '20px'}`,
            left: `${leftPageFlag ? '7px' : '0px'}`,
            top: `${leftPageFlag ? '2px' : '0px'}`,

        }
        const iconThreePartSty = {
            transform: `${leftPageFlag ? 'rotate(-215deg)' : 'rotate(0deg)'}`,
            width: `${leftPageFlag ? '15px' : '20px'}`,
            left: `${leftPageFlag ? '7px' : '0px'}`,
            top: `${leftPageFlag ? '-2px' : '0px'}`
        }
        const leftSideSty: LeftProps = {
            height: this.leftStyle.height,
            left: `${leftPageFlag ? '0px' : '-300px'}`
        }
        const rightSideSty: RightProps = {
            height: this.rightStyle.height,
            right: `${rightPageFlag ? '0px' : '-300px'}`
        }
        return { rightSty, iconAllSty, iconOnePartSty, iconThreePartSty, leftSideSty, rightSideSty };
    }

    /**
     * 修改左侧高度
     **/
    private resizeLeft() {
        this.leftStyle = {
            ...this.leftStyle,
            height: `${document.documentElement.clientHeight || document.body.clientHeight}px`
        }
    }

    /**
     * 修改右侧高度
     **/
    private resizeRight() {
        this.rightStyle = {
            ...this.rightStyle,
            height: `${document.documentElement.clientHeight || document.body.clientHeight}px`
        }
    }

    /**
     * 根据窗口高度修改两侧高度
     **/
    private resize() {
        this.resizeLeft();
        this.resizeRight();
    }

    /**
     * 绑定两侧位置复原函数
     **/
    private controlBack(e: Event) {
        const { leftPageFlag, rightPageFlag } = this.props;
        // 左
        const iconArea = document.getElementsByClassName('AllCenterAreaHeaderIconArea')[0]
        let flag = isInTheDom(iconArea, e);
        if (leftPageFlag && !flag) {
            const AllLeftArea = document.getElementsByClassName('AllLeftArea')[0];
            const leftFlag = isInTheDom(AllLeftArea, e);
            if (!leftFlag) {
                store.dispatch(actions.inLeftPageControl())
            }
        }
        // 右
        const menuIcon = document.getElementsByClassName('menuIcon')[0]
        flag = isInTheDom(menuIcon, e);
        if (rightPageFlag && !flag) {
            const AllRightArea = document.getElementsByClassName('AllRightArea')[0];
            const rightFlag = isInTheDom(AllRightArea, e);
            if (!rightFlag) {
                store.dispatch(actions.inRightPageControl())
            }
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(All);