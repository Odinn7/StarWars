import { types } from "../Vehicles/actionTypes";

export const reduxVehicles = (payload) => ({
  type: types.ADD_VEHICLES,
  payload,
});
