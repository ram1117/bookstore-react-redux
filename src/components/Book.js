import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/bookSlice';
import styles from '../styles/Book.module.css';

const Book = ({ book }) => {
  const {
    itemId, title, author, category,
  } = book;
  const dispatch = useDispatch();
  return (
    <div className={styles['book-tile']} id={itemId}>
      <div className={styles['book-details']}>
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{category}</p>
      </div>
      <button type="button" onClick={() => { dispatch(removeBook(itemId)); }}>remove</button>
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
