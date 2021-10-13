import { types } from "../Species/actionTypes";

export const reduxSpecies = (payload) => ({
  type: types.ADD_SPECIES,
  payload,
});
