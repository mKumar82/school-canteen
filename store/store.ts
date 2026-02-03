// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { canteenApi } from "./api/canteenApi";

export const store = configureStore({
  reducer: {
    [canteenApi.reducerPath]: canteenApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(canteenApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;