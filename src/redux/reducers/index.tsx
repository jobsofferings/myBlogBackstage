// src/reducers/index.tsx

import { AllAction } from '../actions';
import { StoreState } from '../types/index';
import { LEFT_PAGE_CONTROL_ENTHUSIASM, RIGHT_PAGE_CONTROL_ENTHUSIASM, TOP_INPUT, GET_IP_DATA } from '../constants/index';

const defaultState: StoreState = {
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
  ipData: {
    dataList: [{
      clientIP: "117.170.133.203",
      newTime: 1587382603185,
      number: 1,
      _id: "5e9d89d2bc340000e6006c23"
    },{
      clientIP: "117.170.133.202",
      newTime: 1587382603134,
      number: 12,
      _id: "5e9d89d2bc340000e6006c22"
    },{
      clientIP: "117.170.133.201",
      newTime: 158738210347,
      number: 3,
      _id: "5e9d89d2bc340000e6006c21"
    }]
  },
}

export default function enthusiasm(state: StoreState = defaultState, action: AllAction): StoreState {
  switch (action.type) {
    case LEFT_PAGE_CONTROL_ENTHUSIASM:
      return { ...state, leftPageFlag: !state.leftPageFlag };
    case RIGHT_PAGE_CONTROL_ENTHUSIASM:
      return { ...state, rightPageFlag: !state.rightPageFlag };
    case TOP_INPUT:
      return { ...state, topInputValue: action.value };
    case GET_IP_DATA:
      return { ...state, ipData: { dataList: action.res.dataList } }
  }
  return state;
}