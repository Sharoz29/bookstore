import "./favourites.css";
import { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";
import { createSelector } from "reselect";
import { makeFavourites } from "../../store/favourite/favouriteSelector";
import { useSelector } from "react-redux";
import BookModal from "../../components/bookmodal/bookmodal";
import { ReactComponent as InfoIcon } from "../../assets/info-circle-svgrepo-com.svg";
import { useState } from "react";
import { ReactComponent as RemoveIcon } from "../../assets/remove-circular-button-svgrepo-com.svg";
import { setFavourites } from "../../store/favourite/favouriteAction";
import { useDispatch } from "react-redux";

const favouritesStateSelector = createSelector(
  makeFavourites,
  (favourites) => ({
    favourites,
  })
);

const favouritesActionDispatcher = (dispatch) => ({
  setFavourites: (favourites) => dispatch(setFavourites(favourites)),
});

const FavouritePage = () => {
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
  const clearFavourites = () => {
    setFavourites([]);
  };

  return (
    <Fragment>
      <Navbar />
      <div className="fav-page-container">
        <h1 className="my-favs">
          {favourites.length !== 0
            ? "My favourites"
            : "Currently, you dont have any favourite books :("}
        </h1>
        <div className="favs-container">
          {favourites.map((favBook, i) => {
            const [myFavourite] = favBook;
            console.log(favBook);
            return (
              <div className="book-data-container" key={i}>
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
                    <BookModal bookInfo={favBook} closeModal={closeModal} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {favourites.length !== 0 && (
          <button className="clear-btn" onClick={clearFavourites}>
            Clear Favourites
          </button>
        )}
      </div>
    </Fragment>
  );
};
export default FavouritePage;

//Change modal data inside the favourites page
