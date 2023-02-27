import { createSlice } from '@reduxjs/toolkit';
import booksList from './booksList';

const initialState = booksList;
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      const newState = [...state];
      newState.push({ payload });
      return newState;
    },
    removeBook: (state, { payload }) => {
      const newState = state.filter((item) => item === payload);
      return newState;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;