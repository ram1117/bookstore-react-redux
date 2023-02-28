import { createSlice } from '@reduxjs/toolkit';
import booksList from './booksList';

const initialState = booksList;
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      const newState = [...state];
      newState.push({
        itemId: `item${state.length + 1}`,
        title: payload.title,
        author: payload.author,
        category: payload.category,
      });
      return newState;
    },
    removeBook: (state, { payload }) => {
      const newState = state.filter((item) => item.itemId !== payload);
      return newState;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
