import { Game, Loading } from '@game/index';
import Loadable from 'react-loadable';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export default {
  component: Loadable({
    loader: () => delay(2000).then(() => import('./component'), () => import('./component')),
    loading: Loading
  })
} as Game;