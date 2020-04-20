export interface StoreState {
    leftPageFlag: boolean,
    rightPageFlag: boolean,
    topInputValue: string,
    ThreeData: Item1[],
    ipData: GetIpDateProps
}

export interface Item1 {
    ref: string;
    title1: string;
    title2: string;
    num: number;
    all: number;
    unit: string;
}

export interface GetIpDateProps {
    dataList: DataListItem[];
}

export interface DataListItem {
    _id: string,
    clientIP: string,
    newTime: number,
    number: number,
}