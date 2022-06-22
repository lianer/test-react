import Indicator from '../../components/indicator/Indicator';
import ListItem from '../../components/ListItem/ListItem';
import Portlet from '../../components/portlet/Portlet';
import s from './HealthDetail.module.css';

const HealthDetail: React.FC = function () {
  return (
    <main style={{ padding: 16 }}>
      <Portlet title="体检指标" description="(2022-06-22)">
        <ListItem title="血糖" description={`正常范围在 3.9~6.1`}>
          <Indicator value={3.1} max={6.1} min={3.9} />
        </ListItem>
        <ListItem title="收缩压">
          <Indicator value={120} max={140} min={100} />
        </ListItem>
        <ListItem title="舒张压">
          <Indicator value={75} max={90} min={60} />
        </ListItem>
      </Portlet>

      <Portlet title="指标范围设置">
        <ListItem title="范围设置" description={`正常范围在 3.9~6.1`}>
          <Indicator value={3.1} max={6.1} min={3.9} />
        </ListItem>
      </Portlet>
    </main>
  );
};

export default HealthDetail;
