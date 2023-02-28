import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';

const Books = () => {
  const books = useSelector((state) => state.books);
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
