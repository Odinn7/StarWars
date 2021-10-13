import { call, put, takeEvery } from "redux-saga/effects";
import { reduxVehicles } from "../../redux/Vehicles/actions";
import { types } from "./actionTypes";

const getVehicles = async (url) => {
  const response = fetch(url)
    .then((res) => res.json())
    .catch((e) => console.warn(e, "getVehicles"));
  return response;
};

function* vehiclesWorker(action) {
  const result = yield call(getVehicles, `https://swapi.dev/api/vehicles/?pages=${action.payload}`);
  yield put(reduxVehicles(result.results));
  
}

export function* vehiclesWatcher() {
  yield takeEvery(types.SET_VEHICLES, vehiclesWorker);
}
