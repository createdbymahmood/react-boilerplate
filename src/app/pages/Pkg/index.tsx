import { lazyLoad } from 'helpers/react/loadable';

export default lazyLoad(() => import('./Pkg'));