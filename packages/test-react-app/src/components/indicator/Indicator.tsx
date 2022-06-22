import React, { ChangeEventHandler } from 'react';
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

type IndicatorProps = {
  value: number;
  max: number;
  min: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const Indicator: React.FC<IndicatorProps> = React.memo(
  ({ value, max, min, onChange = () => {} }) => {
    const color = getColor(getState(value, max, min));
    return (
      <input
        className={s.Indicator}
        defaultValue={value}
        onChange={onChange}
        style={{
          borderColor: color,
        }}
      ></input>
    );
  }
);

export default Indicator;
