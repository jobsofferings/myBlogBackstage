import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import Hello from './pages/All/All';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { defaultState, enthusiasm } from './redux/reducers/index';
import { StoreState } from './redux/types/index';
import { AllAction } from './redux/actions';

const store = createStore<StoreState, AllAction, any, any>(enthusiasm, defaultState);

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
