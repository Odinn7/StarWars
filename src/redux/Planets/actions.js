import { types } from "./actionTypes";

export const reduxPlanets = (payload) => ({
  type: types.ADD_PLANETS,
  payload,
});