import { createSlice } from '@reduxjs/toolkit';

const PAGE_STATUS = 'Under Construction...';
const initialState = {
  categories: [],
  status: '',
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state) => {
      const newState = { ...state };
      newState.status = PAGE_STATUS;
      return newState;
    },
  },
});

export const { checkStatus } = categorySlice.actions;
export default categorySlice.reducer;
