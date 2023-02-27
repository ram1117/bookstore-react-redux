import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  return (
    <>
      <h2>Add new Book</h2>
      <form
        className="book-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addBook(inputs));
          e.target.reset();
        }}
      >
        <input name="title" onChange={handleChange} id="booktitle" type="text" placeholder="enter book name" />
        <input name="author" onChange={handleChange} id="author" type="text" placeholder="enter author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </>
  );
};
export default BookForm;
