import { createSelector } from "reselect";

const favouriteState = (state) => state.favouriteReducer;

const favourites = (favouriteReducer) => favouriteReducer.favourites;

export const makeFavourites = createSelector(favouriteState, favourites);
