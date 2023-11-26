import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/counter/counterSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
