import { compose } from 'redux';
import { createStore, IModuleStore } from 'redux-dynamic-modules';
import { getThunkExtension } from 'redux-dynamic-modules-thunk';
import { getSagaExtension } from 'redux-dynamic-modules-saga';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppState {

}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store: IModuleStore<AppState> = createStore({
  initialState: {},
  extensions: [getThunkExtension(), getSagaExtension()],
  advancedComposeEnhancers: composeEnhancers
});
