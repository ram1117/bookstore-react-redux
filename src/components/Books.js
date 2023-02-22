import Book from './Book';
import BookForm from './BookForm';

const Books = () => (
  <>
    <div className="books-container">
      <Book title="Book of Goose" author="Yiyun Li" />
      <Book title="Signal Fires" author="Dani Shapiro" />
      <Book title="Aftershocks" author="Nadia Owusu" />
    </div>
    <BookForm />
  </>
);
export default Books;
