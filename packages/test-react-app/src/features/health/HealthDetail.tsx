import { ReducerWithoutAction, useReducer, useState, ChangeEventHandler } from 'react';
import Indicator from '../../components/indicator/Indicator';
import ListItem from '../../components/listItem/ListItem';
import Portlet from '../../components/portlet/Portlet';

enum ActionTypes {
  UPDATE = 'update',
}

interface Action {
  type: ActionTypes;
  payload: number;
}

interface State {
  val: number;
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.UPDATE:
      return {
        ...state,
        val: action.payload,
      };
    default:
      return state;
  }
};

const HealthDetail: React.FC = function () {
  // reducer 用于复杂的 state 变化，用于代替 useState
  // const [state, dispatch] = useReducer(reducer, { val: 3.1 });
  // const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
  //   dispatch({ type: ActionTypes.UPDATE, payload: +e.target.value });
  // };

  // 单一的 state 变化只需要使用 useState 即可
  const [state, setState] = useState({ val: 3.1 });
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setState({ val: +e.target.value });
  };

  return (
    <main style={{ padding: 16 }}>
      <Portlet title="体检指标" description="(2022-06-22)">
        <ListItem title="血糖" description={`正常范围在 3.9~6.1`}>
          <Indicator value={state.val} max={6.1} min={3.9} onChange={onChange} />
        </ListItem>
        <ListItem title="收缩压">
          <Indicator value={141} max={140} min={100} />
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
