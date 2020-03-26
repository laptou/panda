import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import storeModule from '../store';

export default class Panda extends React.Component {
  public render() {
    return (
      <DynamicModuleLoader modules={[storeModule()]}>
        <div>Panda!</div>
      </DynamicModuleLoader>
    );
  }
}