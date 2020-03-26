import type { IModule } from 'redux-dynamic-modules';
import reducer from './reducer';

export interface PandaState {
  pandas: number;
}

export default (): IModule<{ 'game/panda': PandaState }> => ({
  id: 'game/panda',
  reducerMap: {
    'game/panda': reducer
  }
});