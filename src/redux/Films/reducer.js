import { types } from "./actionTypes";

const initialState = {
  films: [],
};

function films(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FILM:
      return {
        ...state,
        films: [...state.films, ...action.payload],
      };
    default:
      return state;
  }
}

export default films;
