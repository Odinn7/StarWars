import { types } from "./actionTypes";

const initialState = {
  starships: [],
};

function starships(state = initialState, action) {
  switch (action.type) {
    case types.ADD_STARSHIPS:
      return {
        ...state,
        starships: [...state.starships, ...action.payload],
      };

    default:
      return state;
  }
}

export default starships;
