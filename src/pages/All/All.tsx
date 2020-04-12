import * as React from 'react';
import './css/Hello.css'
import * as actions from '../../redux/actions/index';
import { StoreState } from '../../redux/types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import LeftPage from '../SidePage/LeftPage'
import RightPage from '../SidePage/RightPage'
import CenterInput from '../CenterInput/CenterInput'
import Head from '../Head/Head'
import { isInTheDom } from '../../myFun/function'

interface AllProps {
    leftPageFlag: boolean;
    rightPageFlag: boolean;
    onLeftPageControl: () => void;
    onRightPageControl: () => void;
}

interface MyProps {
    leftSty: LeftProps;
    rightSty: RightProps
}

interface LeftProps {
    left: string;
    height: string;
}

interface RightProps {
    right: string;
    height: string;
}

class All extends React.Component<AllProps, object> {
    public readonly state: Readonly<MyProps> = {
        leftSty: {
            left: '-300px',
            height: `${document.documentElement.clientHeight || document.body.clientHeight}px`
        },
        rightSty: {
            right: '-300px',
            height: `${document.documentElement.clientHeight || document.body.clientHeight}px`
        }
    }
    public componentDidMount() {
        this.resize();
        window.addEventListener('resize', () => {
            this.resize();
        })
        window.addEventListener('click', (e) => {
            this.controlBack(e);
        })
    }
    public render() {
        const { rightSty, iconAllSty, iconOnePartSty, iconThreePartSty, leftSideSty, rightSideSty } = this.getStyle();
        return (
            <div className="AllArea">
                <LeftPage leftSideSty={leftSideSty} />
                <div className="AllCenterArea" style={rightSty}>
                    <div className="AllCenterAreaHeader">
                        <div style={iconAllSty} className="AllCenterAreaHeaderIconArea" onClick={this.props.onLeftPageControl}>
                            <p style={iconOnePartSty} />
                            <p />
                            <p style={iconThreePartSty} />
                        </div>
                        <p>jobofferings</p>
                        <CenterInput />
                        <div className="AllCenterAreaHeaderRight">
                            <div className="menuIcon" onClick={this.props.onRightPageControl} />
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
     * 把制作Style提取出来
     **/
    private getStyle() {
        const { leftPageFlag, rightPageFlag } = this.props;
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
            height: this.state.leftSty.height,
            left: `${leftPageFlag ? '0px' : '-300px'}`
        }
        const rightSideSty: RightProps = {
            height: this.state.rightSty.height,
            right: `${rightPageFlag ? '0px' : '-300px'}`
        }
        return { rightSty, iconAllSty, iconOnePartSty, iconThreePartSty, leftSideSty, rightSideSty };
    }
    /**
     * 修改左侧高度
     **/
    private resizeLeft() {
        const { leftSty } = this.state;
        this.setState({
            leftSty: {
                ...leftSty,
                height: `${document.documentElement.clientHeight || document.body.clientHeight}px`
            }
        })
    }
    /**
     * 修改右侧高度
     **/
    private resizeRight() {
        const { rightSty } = this.state;
        this.setState({
            rightSty: {
                ...rightSty,
                height: `${document.documentElement.clientHeight || document.body.clientHeight}px`
            }
        })
    }
    /**
     * 修改两侧高度
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
                this.props.onLeftPageControl();
            }
        }
        // 右
        const menuIcon = document.getElementsByClassName('menuIcon')[0]
        flag = isInTheDom(menuIcon, e);
        if (rightPageFlag && !flag) {
            const AllRightArea = document.getElementsByClassName('AllRightArea')[0];
            const rightFlag = isInTheDom(AllRightArea, e);
            if (!rightFlag) {
                this.props.onRightPageControl();
            }
        }
    }
}

export function mapStateToProps(state: StoreState) {
    return {
        ...state
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.AllAction>) {
    return {
        onLeftPageControl: () => dispatch(actions.inLeftPageControl()),
        onRightPageControl: () => dispatch(actions.inRightPageControl()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(All);