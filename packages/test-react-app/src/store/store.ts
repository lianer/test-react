import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import health from '../features/health/healthSlice';

export const store = configureStore({
  reducer: {
    health,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
