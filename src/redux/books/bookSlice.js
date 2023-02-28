import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_FETCH_BOOKS = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Lz0Xg73BN9mDXt1XFhvh/books';
const URL_BOOKS = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Lz0Xg73BN9mDXt1XFhvh/books';
const initialState = {
  list: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks',
  async () => {
    const response = await fetch(URL_FETCH_BOOKS);
    return response.json();
  });
const addBookstoAPI = async (bookObj) => {
  await fetch(URL_BOOKS, {
    method: 'POST',
    body: JSON.stringify(bookObj),
    headers: { 'Content-type': 'application/json' },
  });
};
const removeBookfromAPI = async (id) => axios.delete(`${URL_BOOKS}/${id}`);
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      const bookObj = {
        item_id: nanoid(),
        title: payload.title,
        author: payload.author,
        category: payload.category,
      };
      state.list.push(bookObj);
      addBookstoAPI(bookObj);
      return state;
    },
    removeBook: (state, { payload }) => {
      const newState = { ...state };
      newState.list = state.list.filter((item) => item.item_id !== payload);
      removeBookfromAPI(payload);
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
          result.item_id = id;
          booksList.push(result);
        });
        newState.list = booksList;
        newState.status = 'completed';
        return newState;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        const newState = { ...state, staus: 'failed', error: action.error.message };
        return newState;
      });
  },
});

export const getStatus = (state) => state.books.status;
export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
