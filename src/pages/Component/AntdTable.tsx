import * as React from 'react';
import * as actions from '../../redux/actions/index';
import './css/antdTable.css';
import * as Table from 'antd/lib/table';
import { StoreState } from '../../redux/types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface InputProps {
    name?: string
}

class AntdTable extends React.Component<InputProps, object> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <Table.default>11</Table.default>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(AntdTable);