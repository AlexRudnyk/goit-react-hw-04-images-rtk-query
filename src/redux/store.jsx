import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { imgApi } from './imgSlice';

export const store = configureStore({
  reducer: {
    [imgApi.reducerPath]: imgApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    imgApi.middleware,
  ],
});

setupListeners(store.dispatch);
