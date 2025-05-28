import { configureStore } from '@reduxjs/toolkit';
import { scanApi } from './scanApi';
import setting from './settingSlice';
import { contactApi } from './contactApi';

export const store = configureStore({
  reducer: {
    [scanApi.reducerPath]: scanApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    setting,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(scanApi.middleware, contactApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;