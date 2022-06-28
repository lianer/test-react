import React, { CSSProperties, PropsWithChildren, ReactNode } from 'react';
import s from './ListItem.module.css';

const ListItem: React.FC<PropsWithChildren<{ title: ReactNode; description?: ReactNode }>> =
  React.memo(({ title, description = '', children }) => {
    return (
      <div className={s.ListItem}>
        {title && <div className={s.Title}>{title}</div>}
        <div className={s.Description}>{description}</div>
        {children}
      </div>
    );
  });

export default ListItem;
