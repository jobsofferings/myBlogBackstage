import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../../redux/reducers/index';
import { StoreState } from '../../redux/types/index';
import { AllAction } from '../../redux/actions';

// 增强函数 一步方法，执行两个函数
const composeEnhancers = compose;

// 中间件 
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore<StoreState, AllAction, any, any>(reducer, enhancer);

export default store;
