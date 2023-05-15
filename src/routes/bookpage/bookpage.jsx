import "./bookpage.css";
import BookCard from "../../components/bookcard/bookCard";
import Navbar from "../../components/navbar/navbar";
import { Fragment } from "react";

const BookPage = ({ books }) => {
  return (
    <Fragment>
      <Navbar />
      <div className="books-container">
        {books?.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>
    </Fragment>
  );
};
export default BookPage;
