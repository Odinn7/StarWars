import { types } from "./actionTypes";

const initialState = {
  vehicles: [],
};

function vehicles(state = initialState, action) {
  switch (action.type) {
    case types.ADD_VEHICLES:
      return {
        ...state,
        vehicles: [...state.vehicles, ...action.payload],
      };
    default:
      return state;
  }
}

export default vehicles;
