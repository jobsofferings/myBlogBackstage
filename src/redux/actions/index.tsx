import * as constants from '../constants'
import { getIPDataApi, getStarArticlesApi, getAllGroupLengthApi } from '../../myFun/api'
import { GetIpDateProps, GetStartArticlesDateProps, ArticlesDataListItem, AllGroupItem } from '../types';
import { Dispatch } from 'redux';

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

export type GetIPDataEnthusiasm = (dispatch: Dispatch) => void;

export interface GetIPDataBackEnthusiasm {
    type: constants.GET_IP_DATA;
    res: GetIpDateProps
}

export type GetStarArticlesEnthusiasm = (dispatch: Dispatch) => void;

export interface GetStarArticlesBackEnthusiasm {
    type: constants.GET_STAR_ARTICLES;
    res: GetStartArticlesDateProps
}

export type GetAllGroupLengthEnthusiasm = (dispatch: Dispatch) => void;

export interface GetAllGroupLengthBackEnthusiasm {
    type: constants.GET_ALL_GROUP_LENGTH;
    res: AllGroupItem[]
}

export type AllAction = LeftEnthusiasm | RightEnthusiasm | TopInputEnthusiasm | GetIPDataBackEnthusiasm | GetStarArticlesBackEnthusiasm | GetAllGroupLengthBackEnthusiasm;

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
 * 获取IP数据
 **/
export function getIPData(): GetIPDataEnthusiasm {
    return (dispatch: Dispatch) => {
        getIPDataApi().then((res: GetIpDateProps) => {
            dispatch(getIPDataBack(res));
        }).catch((err: Error) => {
            console.log(err);
        })
    };
}


/**
 * 获取IP数据的回调
 **/
function getIPDataBack(res: GetIpDateProps): GetIPDataBackEnthusiasm {
    return {
        type: constants.GET_IP_DATA,
        res
    }
}

export interface GetStarArticleArgs {
    length: number
}

/**
 * 获取明星数据
 **/
export function getStarArticle(req: GetStarArticleArgs): GetStarArticlesEnthusiasm {
    return (dispatch: Dispatch) => {
        getStarArticlesApi(req).then((res: ArticlesDataListItem[]) => {
            dispatch(getStarArticleBack({ dataList: res }));
        }).catch((err: Error) => {
            console.log(err);
        })
    };
}


/**
 * 获取明星数据的回调
 **/
function getStarArticleBack(res: GetStartArticlesDateProps): GetStarArticlesBackEnthusiasm {
    return {
        type: constants.GET_STAR_ARTICLES,
        res
    }
}

/**
 * 获得组别数量及组别种类名
 **/
export function getAllGroupLength(): GetAllGroupLengthEnthusiasm {
    return (dispatch: Dispatch) => {
        getAllGroupLengthApi().then((res: AllGroupItem[]) => {
            dispatch(getAllGroupLengthBack(res));
        }).catch((err: Error) => {
            console.log(err);
        })
    };
}


/**
 * 获得组别数量及组别种类名的回调
 **/
function getAllGroupLengthBack(res: AllGroupItem[]): GetAllGroupLengthBackEnthusiasm {
    return {
        type: constants.GET_ALL_GROUP_LENGTH,
        res
    }
}

