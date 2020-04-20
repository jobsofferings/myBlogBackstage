import * as constants from '../constants'
import { getIPDataApi } from '../../myFun/api'
import { GetIpDateProps } from '../types';

export interface LeftEnthusiasm {
    type: constants.LEFT_PAGE_CONTROL_ENTHUSIASM;
}

export interface RightEnthusiasm {
    type: constants.RIGHT_PAGE_CONTROL_ENTHUSIASM;
}

export interface TopInputEnthusiasm {
    type: constants.TOP_INPUT;
    value: string
}

export type GetIPDataEnthusiasm = (dispatch: any) => void;

export interface GetIPDataBackEnthusiasm {
    type: constants.GET_IP_DATA;
    res: GetIpDateProps
}

export type AllAction = LeftEnthusiasm | RightEnthusiasm | TopInputEnthusiasm | GetIPDataBackEnthusiasm;
export type withAction = GetIPDataEnthusiasm;

/**
 * 控制左侧伸缩
 **/
export function inLeftPageControl(): LeftEnthusiasm {
    return {
        type: constants.LEFT_PAGE_CONTROL_ENTHUSIASM
    }
}

/**
 * 控制右侧伸缩
 **/
export function inRightPageControl(): RightEnthusiasm {
    return {
        type: constants.RIGHT_PAGE_CONTROL_ENTHUSIASM
    }
}

/**
 * 控制顶部input内部数据
 **/
export function topInput(value: string): TopInputEnthusiasm {
    return {
        type: constants.TOP_INPUT,
        value
    }
}

/**
 * 控制顶部input内部数据
 **/
export function getIPData(): GetIPDataEnthusiasm {
    return (dispatch: any) => {
        getIPDataApi().then((res: any) => {
            dispatch(getIPDataBack(res));
        }).catch((err: any) => {
            console.log(err);
        })
    };
    // return (dispatch) => {
    //     getIPDataApi().then(res => {
    //         const action = getIPDataBack(res);
    //         dispatch(action);
    //         // const action1 = setLoading(false);
    //         // dispatch(action1);

    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }
    // return {
    //     type: constants.GET_IP_DATA,
    // }
    // getIPDataApi
}


/**
 * 控制顶部input内部数据
 **/
function getIPDataBack(res: GetIpDateProps): GetIPDataBackEnthusiasm {
    return {
        type: constants.GET_IP_DATA,
        res
    }
}