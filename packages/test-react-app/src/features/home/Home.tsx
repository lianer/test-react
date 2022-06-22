import { Link } from 'react-router-dom';
import s from './Home.module.css';
import { Helmet } from 'react-helmet';

const Home: React.FC = () => {
  return (
    <main>
      <Helmet>
        <title>首页</title>
      </Helmet>
      <Link to="/health-detail" className={s.Link}>
        goto /health-detail
      </Link>
    </main>
  );
};

export default Home;
