import { types } from "./actionTypes";

const initialState = {
  people: [],
};

export default function people(state = initialState, action) {
  switch (action.type) {
    case types.ADD_PEOPLE:
      return {
        ...state,
        people: [...state.people, ...action.payload],
      };
    default:
      return state;
  }
}