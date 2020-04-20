import * as React from 'react';
import * as actions from '../../redux/actions';
import store from '../../redux/store';
import { StoreState } from '../../redux/types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { timerToStr } from '../../myFun/function'
import AntdTable from '../Component/AntdTable'

class IPRequestList extends React.Component<StoreState, object> {
    public readonly state: Readonly<StoreState>

    constructor(props: Readonly<StoreState>) {
        super(props);
        this.state = store.getState()
        store.subscribe(this.storeChange.bind(this));
    }

    public render() {
        const { ipData } = this.state;
        return (
            <div>
                <AntdTable dataSource={ipData.dataList} style={{}} columns={
                    [
                        {
                            title: 'IP',
                            dataIndex: 'clientIP',
                        },
                        {
                            title: '最新查看时间',
                            dataIndex: 'newTime',
                            render: (newTime: string) => timerToStr(parseInt(newTime,10)),
                            sorter: (a: any, b: any) => b.newTime - a.newTime,
                        },
                        {
                            title: '总次数',
                            dataIndex: 'number',
                            sorter: (a: any, b: any) => b.number - a.number,
                        },
                    ]
                }
                    pagination={{
                        pageSize: 5,
                        total: ipData.dataList.length,
                        showTotal: (total: number) => `共${total}条访问记录`
                    }} />
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(IPRequestList);