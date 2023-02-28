import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';
import { categories } from '../redux/books/booksList';
import styles from '../styles/BookForm.module.css';

const BookForm = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
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
    }
  };
  return (
    <>
      <h2>Add new Book</h2>
      <form
        className={styles['book-from']}
        onSubmit={handleSubmit}
      >
        <input
          className={styles['form-input']}
          name="title"
          onChange={handleChange}
          id="booktitle"
          type="text"
          placeholder="enter book name"
          aria-label="book title"
        />
        <input
          className={styles['form-input']}
          name="author"
          onChange={handleChange}
          id="author"
          type="text"
          placeholder="enter author"
          aria-label="author name"
        />
        <select
          className={styles['form-input']}
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
        <button className={styles['form-input']} type="submit">ADD BOOK</button>
      </form>
    </>
  );
};
export default BookForm;
