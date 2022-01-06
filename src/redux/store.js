import { configureStore } from '@reduxjs/toolkit';
import homeSlice from '../pages/Home/homeSlice';
import FrontPageSlice from '../pages/FrontPage/FrontPageSlice';

export const store = configureStore({
  reducer: {
    home: homeSlice,
    frontPage: FrontPageSlice,
  },
});
