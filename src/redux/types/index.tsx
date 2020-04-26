export interface StoreState {
    leftPageFlag: boolean,
    rightPageFlag: boolean,
    topInputValue: string,
    ThreeData: Item1[],
    ipData: GetIpDateProps,
    StarArticlesData: GetStartArticlesDateProps;
    groupData: GetAllGroupLengthProps;
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
    dataList: IpDataListItem[];
}

export interface IpDataListItem {
    _id: string,
    clientIP: string,
    newTime: number,
    number: number,
}

export interface GetStartArticlesDateProps {
    dataList: ArticlesDataListItem[];
}

export interface ArticlesDataListItem {
    _id: string,
    author: string
    description: string,
    group: number,
    headImg: string,
    title: string,
    time: number,
}

export interface GetAllGroupLengthProps {
    dataList: AllGroupItem[];
}

export interface AllGroupItem {
    group: string,
    groupId: number,
    value: number,
}