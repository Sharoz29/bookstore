import "./bookCard.css";
import FavouriteButton from "../favouritebutton/favouriteButton";
import MoreInfoButton from "../moreinfobutton/moreInfobutton";

const BookCard = ({ book }) => {
  const bookImage = book["formats"]["image/jpeg"];
  const [authorNameArr] = book["authors"];

  const author = authorNameArr.name;
  return (
    <div className="book-data-container" key={book.id}>
      <h1 className="book-name">{book.title.slice(0, 25)}</h1>
      <img className="book-image" alt="" src={bookImage} />
      <h3 className="author">{author}</h3>
      <FavouriteButton />
      <MoreInfoButton />
    </div>
  );
};
export default BookCard;
