import { useRoutes } from 'react-router-dom';
import HealthDetail from '../features/health/HealthDetail';
import Home from '../features/home/Home';
import App from '../features/layout/App';

const Routes: React.FC = () => {
  return useRoutes([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'health-detail',
          element: <HealthDetail />,
        },
      ],
    },
  ]);
};

export default Routes;
