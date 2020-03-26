import type { PandaState } from '.';
import { Reducer } from 'redux';

const reducer: Reducer<PandaState> = (state: PandaState = { pandas: 0 }) => {
  return { pandas: state.pandas + 1 };
};

export default reducer;