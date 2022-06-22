import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
