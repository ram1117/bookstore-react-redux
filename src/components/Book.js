import PropTypes from 'prop-types';
import styles from '../styles/Book.module.css';

const Book = ({ title, author }) => (
  <div className={styles['book-tile']}>
    <div className={styles['book-details']}>
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
    <button type="button">remove</button>
  </div>
);

Book.defaultProps = { title: '', author: '' };
Book.propTypes = { title: PropTypes.string, author: PropTypes.string };

export default Book;
