import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/books/bookSlice';
import Book from './Book';
import BookForm from './BookForm';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.list);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <>
      <div className="books-container">
        {books.map((item) => (
          <Book key={item.itemId} book={item} />
        ))}
      </div>
      <BookForm />
    </>
  );
};
export default Books;
