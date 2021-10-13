import { call, put, takeEvery } from "redux-saga/effects";
import { reduxSpecies } from "../../redux/Species/actions";
import { types } from "./actionsType";

const getSpecies = async (url) => {
  const response = fetch(url)
    .then((res) => res.json())
    .catch((e) => console.warn(e, "getSpecies"));
  return response;
};

function* speciesWorker(action) {
  const result = yield call(getSpecies, `https://swapi.dev/api/species/?pages=${action.payload}`);
  yield put(reduxSpecies(result.results));
}

export function* speciesWatcher() {
  yield takeEvery(types.SET_SPECIES, speciesWorker);
}
