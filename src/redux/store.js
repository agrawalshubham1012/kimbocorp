import { configureStore } from '@reduxjs/toolkit';
import homeSlice from '../pages/Home/homeSlice';

export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
});
