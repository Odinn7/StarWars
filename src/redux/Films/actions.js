import { types } from "../Films/actionTypes";

export const reduxFilms = (payload) => ({
  type: types.ADD_FILM,
  payload,
});
