import * as React from 'react';
import './css/LeftPage.css'
import * as actions from '../../redux/actions/index';
import { StoreState } from '../../redux/types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export interface LeftProps {
    leftSideSty: object;
    onLeftPageControl?: () => void;
}

const partOneTitle = [{
    title: '首页',
    router: '/'
}];
const partTwoTitle = [{
    title: '文章发布',
    router: '/post'
}, {
    title: '查看文章详情',
    router: '/details'
}]
const TitleList = [partOneTitle, partTwoTitle];
const groupList = ['总体功能', '文章功能'];

class LeftPage extends React.Component<LeftProps, object> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        const {  leftSideSty } = this.props;
        return (
            <div className="AllLeftArea" style={leftSideSty}>
                {
                    TitleList.map((item, index) => {
                        return this.bindTitle(item, index);
                    })
                }
            </div>
        );
    }
    // 渲染左侧导航栏
    private bindTitle(titleList: any[], index: number) {
        const tempList = [null, null];
        return tempList.map((item1, index1) => {
            if (!index1) {
                return <p className="LeftPartTitleOne" key={index1}>{groupList[index]}</p>;
            } else {
                return <ul className="LeftPartOne" key={index1}>
                    {
                        titleList.map((item2, index2) => {
                            return <li className="LeftPartOneLi" key={index2}>
                                <div className="LeftPartOneSvg" />
                                <div>{item2.title}</div>
                            </li>
                        })
                    }
                </ul>;
            }
        })
    }
}

export function mapStateToProps(state: StoreState) {
    return { ...state }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.AllAction>) {
    return {
        onLeftPageControl: () => dispatch(actions.inLeftPageControl()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftPage);