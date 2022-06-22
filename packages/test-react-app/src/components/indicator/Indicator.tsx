import s from './Indicator.module.css';

enum State {
  higher = 'higher',
  normal = 'normal',
  lower = 'lower',
}

const getState = (value: number, max: number, min: number): State => {
  if (value < min) {
    return State.lower;
  } else if (value > max) {
    return State.higher;
  }
  return State.normal;
};

const getColor = (state: State): string => {
  switch (state) {
    case State.higher:
      return '#f00';
    case State.normal:
      return '#ccc';
    case State.lower:
      return '#00f';
  }
};

const Indicator: React.FC<{ value: number; max: number; min: number }> = function ({
  value,
  max,
  min,
}) {
  const color = getColor(getState(value, max, min));

  return (
    <span
      className={s.Indicator}
      style={{
        borderColor: color,
      }}
    >
      {value}
    </span>
  );
};

export default Indicator;
