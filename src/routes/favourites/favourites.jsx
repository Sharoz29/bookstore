import "./favourites.css";
import { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";
import { createSelector } from "reselect";
import { makeFavourites } from "../../store/favourite/favouriteSelector";
import { useSelector } from "react-redux";
import BookModal from "../../components/bookmodal/bookmodal";
import { ReactComponent as InfoIcon } from "../../assets/info-circle-svgrepo-com.svg";
import { useState } from "react";

const favouritesStateSelector = createSelector(
  makeFavourites,
  (favourites) => ({
    favourites,
  })
);

const FavouritePage = () => {
  const { favourites } = useSelector(favouritesStateSelector);
  const [showInfo, setShowInfo] = useState(false);

  const openModal = (e) => {
    setShowInfo(true);
  };
  const closeModal = (e) => {
    setShowInfo(false);
  };

  return (
    <Fragment>
      <Navbar />
      <h1 className="my-favs">My Favourites</h1>
      <div className="favs-container">
        {favourites.map((favBook, i) => {
          const [myFavourite] = favBook;
          // console.log(myFavourite);
          return (
            <div className="book-data-container" key={i}>
              <img
                className="book-image"
                alt=""
                src={myFavourite["formats"]["image/jpeg"]}
              />
              <InfoIcon className="icon fav-info-icon" onClick={openModal} />
              {showInfo && (
                <BookModal bookInfo={[myFavourite]} closeModal={closeModal} />
              )}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
export default FavouritePage;
