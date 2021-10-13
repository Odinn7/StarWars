import { types } from "./actionTypes";

export const reduxPeople = (payload) => ({
  type: types.ADD_PEOPLE,
  payload,
});
