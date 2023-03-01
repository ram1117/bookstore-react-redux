import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/bookSlice';
import styles from '../styles/Book.module.css';
import { ReactComponent as ProgressRing } from '../icons/progress.svg';

const Book = ({ book }) => {
  const {
    title, author, category,
  } = book;
  const dispatch = useDispatch();
  return (
    <div className={styles['book-tile']} id={book.item_id}>
      <div className={styles['book-details']}>
        <p className={styles['book-category']}>{category}</p>
        <h2 className={styles['book-title']}>{title}</h2>
        <p className={styles['book-author']}>{author}</p>
        <ul className={styles['book-controls']}>
          <li>Comments</li>
          <button type="button" onClick={() => { dispatch(removeBook(book.item_id)); }}>Remove</button>
          <li>Edit</li>
        </ul>
      </div>

      <div className={styles['progress-wrapper']}>
        <ProgressRing className={styles['progress-bar']} />
        <div className={styles['progress-status']}>
          <h2>64%</h2>
          <p>completed</p>
        </div>
      </div>
      <div className={styles['chapter-info']}>
        <p className={styles['chapter-header']}>CURRENT CHAPTER</p>
        <p className={styles['chapter-no']}>Chapter 15</p>
        <button className={styles['chapter-btn']} type="button">UPDATE PROGRESS</button>
      </div>
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
