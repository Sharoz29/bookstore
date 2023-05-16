import "./bookCard.css";
import { ReactComponent as FavouriteIcon } from "../../assets/heart-svgrepo-com.svg";
import { ReactComponent as InfoIcon } from "../../assets/info-circle-svgrepo-com.svg";
import BookModal from "../bookmodal/bookmodal";
import { createSelector } from "reselect";
import { useDispatch } from "react-redux";
import { setFavourites } from "../../store/favourite/favouriteAction";
import { makeFavourites } from "../../store/favourite/favouriteSelector";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as FavoriteFilledIcon } from "../../assets/black-heart-svgrepo-com.svg";

const favouritesStateSelector = createSelector(
  makeFavourites,
  (favourites) => ({
    favourites,
  })
);

const favouritesActionDispatcher = (dispatch) => ({
  setFavourites: (favourites) => dispatch(setFavourites(favourites)),
});

const BookCard = ({ book }) => {
  const bookImage = book["formats"]["image/jpeg"];
  const { favourites } = useSelector(favouritesStateSelector);
  const { setFavourites } = favouritesActionDispatcher(useDispatch());

  const [fav, setFav] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const openModal = () => {
    setShowInfo(true);
  };
  const closeModal = () => {
    setShowInfo(false);
  };

  const addingToFavourite = (e) => {
    const bookId = Number(e.target.parentElement.id);

    if (bookId === book.id) {
      const newBook = [book];
      addingFavourites(newBook);
      setFav(true);
    }
  };
  const addingFavourites = (bookToAdd) => {
    setFavourites(addedFavourite(favourites, bookToAdd));
  };

  const addedFavourite = (favourites, bookToAdd) => {
    if (favourites.length === 0) {
      return [bookToAdd];
    }

    if (favourites.length !== 0) {
      const existingBook = favourites.find(([book]) => {
        return book.id === bookToAdd[0].id;
      });

      if (existingBook) {
        return [...favourites];
      }
      if (!existingBook) {
        return [...favourites, bookToAdd];
      }
    }
  };
  console.log(fav);

  return (
    <div className="book-data-container" key={book.id}>
      <img className="book-image" alt="" src={bookImage} />
      <div className="icons-container" id={book.id}>
        {!fav ? (
          <FavouriteIcon
            className={"icon fav-icon"}
            onClick={addingToFavourite}
          />
        ) : (
          <FavoriteFilledIcon className="icon fav-clicked-icon" />
        )}
        <InfoIcon className="icon info-icon" onClick={openModal} />
        {showInfo && <BookModal bookInfo={[book]} closeModal={closeModal} />}
      </div>
    </div>
  );
};
export default BookCard;
