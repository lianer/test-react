import React from 'react';
import { matchPath, matchRoutes, useLocation, useMatch, useNavigate } from 'react-router-dom';
import { ExtendedRouteObject, routes } from '../../router/Routes';
import s from './Header.module.css';

// TODO: 增加返回首页按钮
// TODO: 根据路由动态切换 后退、返回首页 按钮的显示状态
// TODO: 根据路由 meta 信息切换 title 显示

const getShowBackButton = (pathname: string) => pathname !== '/';
const getShowHomeButton = (pathname: string) => pathname !== '/';

const Left: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const showBackButton = getShowBackButton(location.pathname);
  const showHomeButton = getShowHomeButton(location.pathname);

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
      {showBackButton && (
        <div className={s.Button} onClick={() => window.history.back()}>
          Back
        </div>
      )}

      {showHomeButton && (
        <div className={s.Button} onClick={() => navigate('/')}>
          Home
        </div>
      )}
    </div>
  );
};

// 方式一，通过 matchRoutes API 对向前路由进行匹配，并优先从深层次的 route 开始查找可用的 meta.title 参数
const Title: React.FC = () => {
  let title = '首页';
  const location = useLocation();
  const matchedRoutes = matchRoutes(routes, location.pathname);
  if (matchedRoutes) {
    for (let i = matchedRoutes.length - 1; i >= 0; i--) {
      const route = matchedRoutes[i].route as ExtendedRouteObject;
      if (route.meta?.title) {
        title = route.meta.title;
        break;
      }
    }
  }

  return (
    <div
      style={{
        fontSize: 18,
      }}
    >
      {title}
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

const Header: React.FC = React.memo(() => {
  return (
    <header className={s.Header}>
      <Left />
      <Title />
      <Menu />
    </header>
  );
});

export default Header;
