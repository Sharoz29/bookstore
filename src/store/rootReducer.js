import { combineReducers } from "redux";
import { favouriteReducer } from "./favourite/favouriteReducer.js";

export const rootReducer = combineReducers({
  favouriteReducer: favouriteReducer,
});
