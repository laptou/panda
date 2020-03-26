import type { LoadableComponent } from 'react-loadable';

export interface Game {
  component: LoadableComponent & (React.ComponentType | React.FunctionComponent);
}

export { default as Loading } from './loading';