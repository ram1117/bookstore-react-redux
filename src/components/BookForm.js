const BookForm = () => (
  <>
    <h2>Add new Book</h2>
    <form className="book-form">
      <input id="booktitle" type="text" placeholder="enter book name" />
      <input id="author" type="text" placeholder="enter author" />
      <button type="submit">ADD BOOK</button>
    </form>
  </>
);
export default BookForm;
