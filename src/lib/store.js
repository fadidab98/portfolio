import { configureStore } from '@reduxjs/toolkit';
import { scanApi } from './scanApi';
import setting from './settingSlice';
import { contactApi } from './contactApi';
export const store = configureStore({
  reducer: {
    [scanApi.reducerPath]: scanApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    setting: setting,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(scanApi.middleware, contactApi.middleware),
});
