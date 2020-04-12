import * as React from 'react';
import './css/CenterInput.css'
import * as actions from '../../redux/actions/index';
import { StoreState } from '../../redux/types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ChangeEvent } from 'react';

interface InputProps {
    topInputValue: string;
    topInput: (value: string) => void;
}

class CenterInput extends React.Component<InputProps, object> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        const { topInputValue } = this.props
        const { closeIconSty } = this.getStyle(topInputValue);
        return (
            <div className="AllCenterAreaHeaderInput">
                <div className="searchIcon" />
                <input onChange={this.handleInputChange} value={topInputValue} placeholder="Search for projects, apps, pages..." type="text" />
                <div onClick={this.handleClearInput} style={closeIconSty} className="closeIcon" />
            </div>
        );
    }
    /**
     * 把制作Style提取出来
     **/
    private getStyle(topInputValue: string) {
        const closeIconSty = {
            display: `${topInputValue === "" ? 'none' : 'block'}`
        }
        return { closeIconSty };
    }
    /**
     * 修改input内部值
     **/
    private handleInputChange: (e: ChangeEvent) => void = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.topInput(e.target.value);
    }
    /**
     * 清除input内部值
     **/
    private handleClearInput: () => void = () => {
        this.props.topInput('');
    }
}

export function mapStateToProps(state: StoreState) {
    return { ...state }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.AllAction>) {
    return {
        topInput: (value: string) => dispatch(actions.topInput(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CenterInput);