import { RouteObject } from 'react-router-dom';

import { Home } from './views/home';

export const routes: RouteObject[] = [
  { path: '/', element: <Home />, index: true },
];
