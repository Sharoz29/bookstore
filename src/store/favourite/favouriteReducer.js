import { favouriteActionTypes } from "./favouriteTypes";

const INITITAL_STATE = {
  favourites: [],
};
export const favouriteReducer = (state = INITITAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case favouriteActionTypes.SET_fAVOURITES:
      return {
        ...state,
        favourites: payload,
      };

    default:
      return state;
  }
};
