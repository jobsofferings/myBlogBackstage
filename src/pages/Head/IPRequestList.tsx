import * as React from 'react';
import * as actions from '../../redux/actions/index';
import { StoreState } from '../../redux/types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import AntdTable from '../Component/AntdTable'

interface InputProps {
    name?: string
}

class IPRequestList extends React.Component<InputProps, object> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <AntdTable />
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

export default connect(mapStateToProps, mapDispatchToProps)(IPRequestList);