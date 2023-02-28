import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
// import booksList from './booksList';

const URL_FETCH_BOOKS = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ofWoEWW0IqPZWqLLrRxu/books';
// const URL_ADD_BOOKS = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ofWoEWW0IqPZWqLLrRxu/books';
const initialState = {
  list: [],
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks',
  async () => {
    const response = await fetch(URL_FETCH_BOOKS);
    return response.json();
  });
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.list.push({
        itemId: nanoid(),
        title: payload.title,
        author: payload.author,
        category: payload.category,
      });
      return state;
    },
    removeBook: (state, { payload }) => {
      const newState = { ...state };
      newState.list = state.list.filter((item) => item.itemId !== payload);
      return newState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const newState = { ...state };
        const booksList = [];
        Object.keys(action.payload).forEach((id) => {
          const result = action.payload[id][0];
          result.itemId = id;
          booksList.push(result);
        });
        newState.list = booksList;
        return newState;
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
