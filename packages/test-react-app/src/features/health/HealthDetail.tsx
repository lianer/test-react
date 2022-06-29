import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Indicator from '../../components/indicator/Indicator';
import ListItem from '../../components/listItem/ListItem';
import Portlet from '../../components/portlet/Portlet';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectHealth, updateItem, HealthIndicator } from './healthSlice';
import s from './HealthDetail.module.css';

const Range: React.FC<{ min: number; max: number }> = ({ min, max }) => {
  return (
    <div className={s.Range}>
      <span>{min}</span>
      <span>~</span>
      <span>{max}</span>
    </div>
  );
};

const HealthDetail: React.FC = () => {
  const list = useAppSelector(selectHealth);
  const dispatch = useAppDispatch();

  const onChange = (e: ChangeEvent<HTMLInputElement>, item: HealthIndicator) => {
    dispatch(updateItem({ ...item, value: +e.target.value }));
  };

  return (
    <>
      <Header>体检指标查看</Header>

      <Portlet title="体检指标" description="(2022-06-22)">
        {list.map((item) => (
          <ListItem
            key={item.id}
            title={item.title}
            description={`正常范围在 ${item.min}~${item.max}`}
          >
            <Indicator
              value={item.value}
              min={item.min}
              max={item.max}
              onChange={(e) => onChange(e, item)}
            />
          </ListItem>
        ))}
      </Portlet>

      <Portlet title="指标范围设置">
        {list.map((item) => (
          <Link key={item.id} to={`/health-detail/edit-item/${item.id}`} className={s.Link}>
            <ListItem title={item.title}>
              <Range min={item.min} max={item.max} />
            </ListItem>
          </Link>
        ))}
      </Portlet>
    </>
  );
};

export default HealthDetail;
