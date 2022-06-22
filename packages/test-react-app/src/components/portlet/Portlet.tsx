import s from './Portlet.module.css';
import { PropsWithChildren, ReactNode } from 'react';

const Portlet: React.FC<PropsWithChildren<{ title: ReactNode; description?: ReactNode }>> = ({
  title,
  children,
  description,
}) => {
  return (
    <section className={s.Portlet}>
      <div className={s.Header}>
        <h2 className={s.Title}>{title}</h2>
        {description && <div className={s.Description}>{description}</div>}
      </div>
      <div className={s.Content}>{children}</div>
    </section>
  );
};

export default Portlet;
