import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';
import categories from '../redux/books/categoriesList';
import styles from '../styles/BookForm.module.css';

const BookForm = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const [errMsg, setErrMsg] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(inputs).length > 2) {
      dispatch(addBook(inputs));
      setInputs({});
      e.target.reset();
    } else {
      setErrMsg('Please enter all fields!!!!!');
      setTimeout(() => { setErrMsg(''); }, 1000);
    }
  };
  return (
    <div className={styles['form-wrapper']}>
      <h2>ADD NEW BOOK</h2>
      <form
        className={styles['book-from']}
        onSubmit={handleSubmit}
      >
        <div className={styles['input-wrapper']}>
          <input
            className={styles['form-input']}
            name="title"
            onChange={handleChange}
            id="booktitle"
            type="text"
            placeholder="Book Title"
            aria-label="book title"
          />
          <input
            className={styles['form-input']}
            name="author"
            onChange={handleChange}
            id="author"
            type="text"
            placeholder="Book Author"
            aria-label="author name"
          />
          <select
            className={styles['form-input-select']}
            name="category"
            onChange={handleSelectChange}
            aria-label="category"
          >
            {categories.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>
          <button className={styles['form-input-button']} type="submit">ADD BOOK</button>
        </div>
      </form>
      <h3 className={styles['error-message']}>{errMsg}</h3>
    </div>
  );
};
export default BookForm;
