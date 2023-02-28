import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/bookSlice';
import styles from '../styles/Book.module.css';

const Book = ({ book }) => {
  const {
    title, author, category,
  } = book;
  const dispatch = useDispatch();
  return (
    <div className={styles['book-tile']} id={book.item_id}>
      <div className={styles['book-details']}>
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{category}</p>
      </div>
      <button type="button" onClick={() => { dispatch(removeBook(book.item_id)); }}>remove</button>
    </div>
  );
};

Book.defaultProps = {
  book: {},
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string),
};

export default Book;
