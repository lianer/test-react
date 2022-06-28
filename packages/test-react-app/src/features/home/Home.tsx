import { Link } from 'react-router-dom';
import s from './Home.module.css';
import { Helmet } from 'react-helmet';
import Header from '../../components/header/Header';

const Home: React.FC = () => {
  return (
    <>
      <Header>首页</Header>
      <main>
        <Helmet>
          <title>首页</title>
        </Helmet>
        <Link to="/health-detail" className={s.Link}>
          goto /health-detail
        </Link>
      </main>
    </>
  );
};

export default Home;
