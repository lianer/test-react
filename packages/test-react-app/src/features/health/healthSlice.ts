import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

/*
Redux 基本概念
1. Reducer
2. State
3. Actions
4. Thunks
5. Slice
6. Selectors
*/

export interface HealthIndicator {
  id: number;
  title: string;
  value: number;
  min: number;
  max: number;
}

export interface HealthState {
  list: HealthIndicator[];
}

const initialState: HealthState = {
  list: [
    { id: 0, title: '血糖', value: 3.8, min: 3.9, max: 6.1 },
    { id: 1, title: '舒张压', value: 80, min: 70, max: 90 },
    { id: 2, title: '收缩压', value: 150, min: 110, max: 140 },
  ],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    updateItem: (state, { type, payload }: { type: string; payload: HealthIndicator }) => {
      const list = state.list.map((oldItem) => {
        if (oldItem.id === payload.id) {
          return {
            ...oldItem,
            ...payload,
          };
        }
        return oldItem;
      });
      state.list = list;
    },
  },
});

export const { updateItem } = counterSlice.actions;

export const selectHealth = (state: RootState) => state.health.list;

export default counterSlice.reducer;
