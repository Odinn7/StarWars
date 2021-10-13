import { call, takeEvery, put } from "redux-saga/effects";
import { reduxFilms } from "../../redux/Films/actions";
import { types } from "./actionsType";

const getFilm = async (url) => {
  const response = fetch(url)
    .then((res) => res.json())
    .catch((e) => console.warn("getFilm", e));
  return response;
};

function* filmsWorker() {
  try {
    const result = yield call(getFilm, "https://swapi.dev/api/films/");
    console.log(`result`, result)
    yield put(reduxFilms(result.results));
  }catch(e){
    console.log(`error---------------->`, e)
  }
}

export function* filmsWatcher() {
  yield takeEvery(types.SET_FILM, filmsWorker);
}
