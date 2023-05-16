import "./favourites.css";
import { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";
import { createSelector } from "reselect";
import { makeFavourites } from "../../store/favourite/favouriteSelector";
import { useSelector } from "react-redux";
import { setFavourites } from "../../store/favourite/favouriteAction";
import { useDispatch } from "react-redux";
import FavouriteBookCard from "../../components/favouritebookcard/favouritebookcard";

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
            // console.log(favBook);
            return <FavouriteBookCard myFavourite={myFavourite} key={i} />;
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
