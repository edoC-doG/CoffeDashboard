import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from '@/features/inventory/inventory-slice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      inventory: inventoryReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
