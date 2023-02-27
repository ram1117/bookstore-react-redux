import PropTypes from 'prop-types';
import styles from '../styles/Book.module.css';

const Book = ({ book }) => {
  const {
    itemId, title, author, category,
  } = book;
  return (
    <div className={styles['book-tile']} id={itemId}>
      <div className={styles['book-details']}>
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{category}</p>
      </div>
      <button type="button">remove</button>
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
