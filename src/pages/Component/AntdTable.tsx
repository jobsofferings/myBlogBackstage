import * as React from 'react';
import * as actions from '../../redux/actions/index';
import './css/antdTable.css';
import * as Table from 'antd/lib/table';
import { StoreState } from '../../redux/types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface InputProps {
    dataSource: DataSourceItem[],
    columns: Table.ColumnsType,
    style: React.CSSProperties,
    pagination: Table.TablePaginationConfig,
}

interface DataSourceItem {
    key?: string,
    newTime: number,
    clientIP: string,
    number: number
}

class AntdTable extends React.Component<InputProps, object> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        const { columns, style, pagination } = this.props;
        let { dataSource } = this.props;
        dataSource = dataSource.map((item: any) => ({ ...item, key: item._id }))
        return (
            <div>
                <Table.default dataSource={dataSource} style={style} columns={columns} pagination={pagination} />
            </div>
        );
    }
}

export function mapStateToProps(state: StoreState) {
    return { ...state }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.AllAction>) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AntdTable);