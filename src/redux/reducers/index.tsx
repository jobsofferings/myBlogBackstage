// src/reducers/index.tsx

import { AllAction } from '../actions';
import { StoreState } from '../types/index';
import { LEFT_PAGE_CONTROL_ENTHUSIASM, RIGHT_PAGE_CONTROL_ENTHUSIASM, TOP_INPUT } from '../constants/index';

export const defaultState: StoreState = {
  leftPageFlag: false,
  rightPageFlag: false,
  topInputValue: '',
  ThreeData: [
    {
        ref: 'newCustomers',
        title1: 'New Customers',
        title2: 'From last week',
        num: 45.6,
        all: 100,
        unit: 'K'
    }, {
        ref: 'orders',
        title1: 'Orders',
        title2: 'Orders in waitlist',
        num: 14.3,
        all: 50,
        unit: 'K'
    }, {
        ref: 'monthlyProfit',
        title1: 'Monthly Profit',
        title2: 'For last 30 days',
        num: 45.6,
        all: 100,
        unit: '$'
    }
],
}

export function enthusiasm(state: StoreState, action: AllAction): StoreState {
  switch (action.type) {
    case LEFT_PAGE_CONTROL_ENTHUSIASM:
      return { ...state, leftPageFlag: !state.leftPageFlag };
    case RIGHT_PAGE_CONTROL_ENTHUSIASM:
      return { ...state, rightPageFlag: !state.rightPageFlag };
    case TOP_INPUT:
      return { ...state, topInputValue: action.value };
  }
  return state;
}