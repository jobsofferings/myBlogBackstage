import * as constants from '../constants'

export interface LeftEnthusiasm {
    type: constants.LEFT_PAGE_CONTROL_ENTHUSIASM;
}
export interface RightEnthusiasm {
    type: constants.RIGHT_PAGE_CONTROL_ENTHUSIASM;
}
export interface TopInputEnthusiasm {
    type: constants.TOP_INPUT;
    value:string
}

export type AllAction = LeftEnthusiasm | RightEnthusiasm | TopInputEnthusiasm;

export function inLeftPageControl(): LeftEnthusiasm {
    return {
        type: constants.LEFT_PAGE_CONTROL_ENTHUSIASM
    }
}
export function inRightPageControl(): RightEnthusiasm {
    return {
        type: constants.RIGHT_PAGE_CONTROL_ENTHUSIASM
    }
}

export function topInput(value:string): TopInputEnthusiasm {
    return {
        type: constants.TOP_INPUT,
        value
    }
}