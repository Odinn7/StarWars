import { call, takeEvery, put } from "redux-saga/effects";
import { reduxStarships } from "../../redux/Starships/actions";
import { types } from "./actionType";

const getStarships = async (url) => {
  const response = fetch(url)
    .then((res) => res.json())
    .catch((e) => console.warn(e, "getStarships"));
  return response;
};

function* starshipsWorker(action) {
  const result = yield call(getStarships, `https://swapi.dev/api/starships/?pages=${action.payload}`);
  yield put(reduxStarships(result.results));
}

export function* starshipsWatcher() {
  yield takeEvery(types.SET_STARSHIPS, starshipsWorker);
}
