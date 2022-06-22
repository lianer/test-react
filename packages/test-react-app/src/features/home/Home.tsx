import { Link } from 'react-router-dom';
import s from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div>
      <Link to="/health-detail" className={s.Link}>
        goto /health-detail
      </Link>
    </div>
  );
};
export default Home;
