import { favouriteActionTypes } from "./favouriteTypes";

export const setFavourites = (favourites) => ({
  type: favouriteActionTypes.SET_fAVOURITES,
  payload: favourites,
});
