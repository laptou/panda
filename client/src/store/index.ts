import { compose, applyMiddleware } from 'redux';
import { createStore, IModuleStore } from 'redux-dynamic-modules';
import Thunk from 'redux-thunk';
import createSaga from 'redux-saga';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {

}

const Saga = createSaga();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store: IModuleStore<State> = createStore({
  initialState: {},
  enhancers: [applyMiddleware(Thunk, Saga)],
  advancedComposeEnhancers: composeEnhancers
});
