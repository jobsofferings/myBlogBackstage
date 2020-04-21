import * as React from 'react';
import './css/RightPage.css'
import * as actions from '../../redux/actions/index';
import { StoreState } from '../../redux/types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import themeList from '../../pages/All/theme'

export interface RightProps {
    rightSideSty: React.CSSProperties;
}

class RightPage extends React.Component<RightProps, object> {

    public constructor(props: RightProps) {
        super(props);
    }

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
    return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightPage);