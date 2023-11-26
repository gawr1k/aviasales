/* eslint-disable no-param-reassign */
// src/features/data/dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
