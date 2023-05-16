import "./bookpage.css";
import BookCard from "../../components/bookcard/bookCard";
import Navbar from "../../components/navbar/navbar";
import { Fragment, useState } from "react";

const BookPage = ({ books, secondBooks }) => {
  // console.log(secondBooks);
  const [showMore, setShowMore] = useState(false);

  const showingBooks = () => {
    setShowMore(true);
  };
  const hidingBooks = () => {
    setShowMore(false);
  };

  return (
    <Fragment>
      <Navbar />
      <div className="books-container">
        {books.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
        {showMore &&
          secondBooks.map((book) => <BookCard book={book} key={book.id} />)}
      </div>
      {books.length !== 0 && (
        <div className="btn-container">
          {!showMore ? (
            <button className="load-more-btn more-btn" onClick={showingBooks}>
              Load More
            </button>
          ) : (
            <button className="hide-more-btn more-btn" onClick={hidingBooks}>
              hide More
            </button>
          )}
        </div>
      )}
    </Fragment>
  );
};
export default BookPage;
