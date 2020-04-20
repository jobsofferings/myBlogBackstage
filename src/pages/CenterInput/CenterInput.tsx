import * as React from 'react';
import './css/CenterInput.css'
import * as actions from '../../redux/actions';
import store from '../../redux/store';
import { StoreState } from '../../redux/types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ChangeEvent } from 'react';

class CenterInput extends React.Component<StoreState, object> {
    public readonly state: Readonly<StoreState>
    
    constructor(props: Readonly<StoreState>) {
        super(props);
        this.state = store.getState()
        store.subscribe(this.storeChange.bind(this));
    }

    public render() {
        const { topInputValue } = this.state;
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
        store.dispatch(actions.topInput(e.target.value))
    }

    /**
     * 清除input内部值
     **/
    private handleClearInput: () => void = () => {
        store.dispatch(actions.topInput(''))
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
    return {  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CenterInput);