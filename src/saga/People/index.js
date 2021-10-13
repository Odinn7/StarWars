import { call, takeEvery, put } from "redux-saga/effects";
import { reduxPeople } from "../../redux/People/actions";
import { types } from "./actionsType";

const getPeople = async (url) => {
  const response = fetch(url)
    .then((res) => res.json())
    .catch((e) => console.warn("getPeople", e));
  return response;
};

function* peopleWorker(action) {
  const result = yield call(getPeople, `https://swapi.dev/api/people/?page=${action.payload}`);
  yield put(reduxPeople(result.results));

}

export function* peopleWatcher() {
  yield takeEvery(types.SET_PEOPLE, peopleWorker);
}
