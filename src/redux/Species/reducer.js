import { types } from "./actionTypes";

const initialState = {
  species: [],
};

function species(state = initialState, action) {
  switch (action.type) {
    case types.ADD_SPECIES:
      return {
        ...state,
        species: [...state.species, ...action.payload],
      };
    default:
      return state;
  }
}

export default species;
