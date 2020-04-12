import * as React from 'react';
import './css/RightPage.css'
import * as actions from '../../redux/actions/index';
import { StoreState } from '../../redux/types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import defaultImg from '../../img/default.png'
import darkImg from '../../img/dark.png'

export interface RightProps {
    rightSideSty: object;
    onRightPageControl?: () => void;
}

// 这个东西可以放到一个JS文件中去，这样修改文件只需要修改一处
const themeList = [
    {
        img: defaultImg,
        themeTitle: 'default',
        style: {
            backStyle: {
                backgroundColor: '#F4F7Fc'
            },
            jobsStyle: {
                backgroundColor: '#000000'
            },
            MenuStyle: {
                backgroundColor: 'rgba(27, 29, 93, .5)'
            }
        }
    }, {
        img: darkImg,
        themeTitle: 'dark',
        style: {
            backStyle: {
                backgroundColor: '#252525'
            },
            jobsStyle: {
                backgroundColor: '#ffffff'
            },
            MenuStyle: {
                backgroundColor: 'rgba(255, 255, 255, .5)'
            }
        }
    }
]

class RightPage extends React.Component<RightProps, object> {


    public constructor(props: any) {
        super(props);
    }

    // public componentDidMount() {

    // }
    public render() {
        const { rightSideSty } = this.props;
        return (
            <div className="AllRightArea" style={rightSideSty}>
                <p>THEMES</p>
                {
                    themeList.map((item, index) => {
                        // let mask = (index === themeId) ? <div className="AllRightAreaItemMask"></div> : null;
                        // let handleFunc = (index !== themeId) ? this.handleChangeTheme.bind(this, index, item.style) : null;
                        return <div className="AllRightAreaItem" key={index}>
                            <img src={item.img} alt="" />
                            {/* {mask} */}
                            <p>{item.themeTitle}</p>
                        </div>
                    })
                }
            </div>
        );
    }

}

export function mapStateToProps(state: StoreState) {
    return { ...state }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.AllAction>) {
    return {
        onRightPageControl: () => dispatch(actions.inRightPageControl()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightPage);