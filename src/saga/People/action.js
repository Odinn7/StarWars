import { types } from "./actionsType";

export const setPeople = (payload) => ({
  type: types.SET_PEOPLE,
  payload,
});
