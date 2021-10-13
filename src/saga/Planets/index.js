import { call, put, select, takeEvery } from "@redux-saga/core/effects";
import { reduxPlanets } from "../../redux/Planets/actions";
import { newPlanetsPage } from "./action";
import { types } from "./actionsType";

const getPlanet = async (url) => {
  const response = fetch(url)
    .then((res) => res.json())
    .catch((e) => console.warn(e, "getPlanet"));
  return response;
};

function* planetWorker(action) {
  const result = yield call(
    getPlanet,
    `https://swapi.dev/api/planets/?pages=${action.payload}`
  );
  yield put(reduxPlanets(result.results));
}

export function* planetWatcher() {
  yield takeEvery(types.SET_PLANETS, planetWorker);
}
