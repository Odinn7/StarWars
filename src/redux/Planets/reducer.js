import { types } from "./actionTypes";

const initialState = {
  planets: [],
  nextPlanet: "",
};

export default function planets(state = initialState, action) {
  switch (action.type) {
    case types.ADD_PLANETS:
      return {
        ...state,
        planets: [...state.planets, ...action.payload],
      };
    default:
      return state;
  }
}
