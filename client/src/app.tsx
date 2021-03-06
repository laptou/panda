import '@style/index.scss';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Panda from '@game/panda';

export default class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Panda.component />
      </Provider>
    );
  }
}