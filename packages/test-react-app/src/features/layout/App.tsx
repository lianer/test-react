import { Outlet } from 'react-router-dom';
import s from './App.module.css';

const Left: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
      <div className={s.Button}>Back</div>
    </div>
  );
};

const Title: React.FC = () => {
  return (
    <div
      style={{
        fontSize: 18,
      }}
    >
      APP
    </div>
  );
};

const Menu: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row-reverse',
      }}
    >
      <div className={s.Button}>More</div>
    </div>
  );
};

const App: React.FC = function () {
  return (
    <div>
      <header
        style={{
          display: 'grid',
          gap: 10,
          gridTemplateColumns: '100px 1fr 100px',
          gridTemplateRows: '50px',
          alignItems: 'center',
          textAlign: 'center',
          color: '#fff',
          backgroundColor: '#333',
        }}
      >
        <Left />
        <Title />
        <Menu />
      </header>
      <Outlet />
    </div>
  );
};

export default App;
