import { ReactComponent as InfoIcon } from "../../assets/info-circle-svgrepo-com.svg";
import { useSelector } from "react-redux";
import { ReactComponent as RemoveIcon } from "../../assets/remove-circular-button-svgrepo-com.svg";
import { createSelector } from "reselect";
import { makeFavourites } from "../../store/favourite/favouriteSelector";
import { setFavourites } from "../../store/favourite/favouriteAction";
import { useDispatch } from "react-redux";
import { useState } from "react";
import BookModal from "../../components/bookmodal/bookmodal";

const favouritesStateSelector = createSelector(
  makeFavourites,
  (favourites) => ({
    favourites,
  })
);

const favouritesActionDispatcher = (dispatch) => ({
  setFavourites: (favourites) => dispatch(setFavourites(favourites)),
});

const FavouriteBookCard = ({ myFavourite }) => {
  const { favourites } = useSelector(favouritesStateSelector);
  const { setFavourites } = favouritesActionDispatcher(useDispatch());
  const [showInfo, setShowInfo] = useState(false);
  const openModal = () => {
    setShowInfo(true);
  };
  const closeModal = () => {
    setShowInfo(false);
  };

  const removeBook = (favourites, bookToRemove) => {
    return favourites.filter(([book]) => book.id !== bookToRemove.id);
  };

  const removedbookItem = (bookToRemove) => {
    setFavourites(removeBook(favourites, bookToRemove));
  };

  const removeFromFavourites = (e) => {
    const removeId = Number(e.target.parentElement.id);
    const [removed] = favourites.filter(([book]) => {
      if (book.id === removeId) {
        return book;
      }
    });

    removedbookItem(removed[0]);
  };

  return (
    <div className="book-data-container">
      <img
        className="book-image"
        alt=""
        src={myFavourite["formats"]["image/jpeg"]}
      />
      <div className="icons-container" id={myFavourite.id}>
        <RemoveIcon
          className="icon remove-icon"
          onClick={removeFromFavourites}
          id={myFavourite.id}
        />
        <InfoIcon
          className="icon info-icon"
          onClick={openModal}
          id={myFavourite.id}
        />
        {showInfo && (
          <BookModal bookInfo={[myFavourite]} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
};
export default FavouriteBookCard;
