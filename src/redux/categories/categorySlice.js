import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under Construction',
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state) => state.status,
  },
});

export const { checkStatus } = categorySlice.actions;
export default categorySlice.reducer;
