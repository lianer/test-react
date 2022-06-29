import { CloseOutline, LeftOutline } from 'antd-mobile-icons';
import React, { PropsWithChildren, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, useNavigate } from 'react-router-dom';
import s from './Header.module.css';

const getShowBackButton = (pathname: string) => pathname !== '/';
const getShowHomeButton = (pathname: string) => pathname.split('/').length > 2;

const Left: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const showBackButton = getShowBackButton(location.pathname);
  const showHomeButton = getShowHomeButton(location.pathname);

  return (
    <div className={s.Left}>
      {showBackButton && (
        <div className={s.Button} onClick={() => window.history.back()}>
          <LeftOutline />
        </div>
      )}

      {showHomeButton && (
        <div className={s.Button} onClick={() => navigate('/')}>
          <CloseOutline />
        </div>
      )}
    </div>
  );
};

// 方式一，通过 matchRoutes API 对向前路由进行匹配，并优先从深层次的 route 开始查找可用的 meta.title 参数
// const Title: React.FC = () => {
//   let title = '首页';
//   const location = useLocation();
//   const matchedRoutes = matchRoutes(routes, location.pathname);
//   if (matchedRoutes) {
//     for (let i = matchedRoutes.length - 1; i >= 0; i--) {
//       const route = matchedRoutes[i].route as ExtendedRouteObject;
//       if (route.meta?.title) {
//         title = route.meta.title;
//         break;
//       }
//     }
//   }
//   return (
//     <div className={s.Title}>
//       {title}
//     </div>
//   );
// };

// 方式二，每个路由组件单独引入 Header
const Title: React.FC<{ title: ReactNode }> = ({ title }) => {
  return <div className={s.Title}>{title}</div>;
};

const Menu: React.FC<PropsWithChildren<{ menu: ReactNode }>> = ({ menu }) => {
  return <div className={s.Menu}>{menu}</div>;
};

const Header: React.FC<PropsWithChildren<{ menu?: ReactNode }>> = React.memo(
  ({ children, menu }) => {
    return (
      <>
        <Helmet>
          <title>{children}</title>
        </Helmet>

        <header className={s.Header}>
          <Left />
          <Title title={children} />
          <Menu menu={menu} />
        </header>
      </>
    );
  }
);

export default Header;
