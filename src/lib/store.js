import { configureStore } from '@reduxjs/toolkit';
import { scanApi } from './scanApi';
import setting from "./settingSlice";
export const store = configureStore({
  reducer: {
    [scanApi.reducerPath]: scanApi.reducer,
    setting: setting,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(scanApi.middleware),
});