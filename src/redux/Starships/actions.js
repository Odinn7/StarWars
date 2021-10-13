import { types } from "../Starships/actionTypes";

export const reduxStarships = (payload) => ({
  type: types.ADD_STARSHIPS,
  payload,
});
