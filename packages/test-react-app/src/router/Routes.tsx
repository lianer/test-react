import { RouteObject, useRoutes } from 'react-router-dom';
import HealthDetail from '../features/health/HealthDetail';
import Home from '../features/home/Home';
import App from '../features/layout/App';

type Flattern<T> = {
  [key in keyof T]: T[key] extends T ? Flattern<T[key]> : T[key];
};

type _ExtendedRouteObject = RouteObject & {
  meta?: {
    title: string;
  };
  children?: _ExtendedRouteObject[];
};

type ExtendedRouteObject = Flattern<_ExtendedRouteObject>;

const routes: ExtendedRouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        meta: {
          title: '首页',
        },
      },
      {
        path: 'health-detail',
        element: <HealthDetail />,
        meta: {
          title: '体检指标',
        },
      },
    ],
  },
];

const Routes: React.FC = () => {
  return useRoutes(routes);
};

export { routes };
export type { ExtendedRouteObject };
export default Routes;
