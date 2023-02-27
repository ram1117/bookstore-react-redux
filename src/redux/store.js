import { configureStore } from '@reduxjs/toolkit';
import bookSliceReducer from './books/bookSlice';
import categorySliceReducer from './categories/categorySlice';

const store = configureStore({
  reducer: {
    books: bookSliceReducer,
    category: categorySliceReducer,
  },
});

export default store;
