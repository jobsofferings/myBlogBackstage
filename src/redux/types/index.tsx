export interface StoreState {
    leftPageFlag: boolean,
    rightPageFlag: boolean,
    topInputValue:string,
    ThreeData:Item1[]
}

export interface Item1 {
    ref:string;
    title1:string;
    title2:string;
    num:number;
    all:number;
    unit:string;
}