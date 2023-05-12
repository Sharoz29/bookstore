import "./bookpage.css";

const BookPage = ({ books }) => {
  return (
    <div className="books-container">
      {books?.map((book) => {
        const bookImage = book["formats"]["image/jpeg"];
        const [authorNameArr] = book["authors"];

        const author = authorNameArr.name;
        return (
          <div className="book-data-container" key={book.id}>
            <h1 className="book-name">{book.title}</h1>
            <img className="book-image" alt="" src={bookImage} />
            <span className="author">{author}</span>
          </div>
        );
      })}
    </div>
  );
};
export default BookPage;
