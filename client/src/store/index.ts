import { Store, applyMiddleware, combineReducers, compose, createStore } from 'redux';
import Thunk from 'redux-thunk';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const reducer = combineReducers({ 
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer, 
  composeEnhancers(applyMiddleware(Thunk)));

type StoreStateType<S> = S extends Store<infer State, any> ? State : never;
type StoreActionType<S> = S extends Store<any, infer Action> ? Action : never;

export type State = StoreStateType<typeof store>;
export type Action = StoreActionType<typeof store>;