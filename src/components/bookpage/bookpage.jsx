import "./bookpage.css";
import BookCard from "../bookcard/bookCard";

const BookPage = ({ books }) => {
  return (
    <div className="books-container">
      {books?.map((book) => (
        <BookCard book={book} key={book.id} />
      ))}
    </div>
  );
};
export default BookPage;
