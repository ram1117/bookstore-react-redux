import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks, getStatus } from '../redux/books/bookSlice';
import Book from './Book';
import BookForm from './BookForm';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.list);
  const status = useSelector(getStatus);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);
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
