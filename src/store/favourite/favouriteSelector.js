import { createSelector } from "reselect";

const favouriteState = (state) => state.favouriteReducer;

const favourites = (favouriteReducer) => favouriteReducer.favouritesfavourites;

export const makeSelectUsers = createSelector(favouriteState, favourites);
