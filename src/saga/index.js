import { spawn } from "@redux-saga/core/effects";
import { peopleWatcher } from "./People";
import { vehiclesWatcher } from "./Vehicles";
import { filmsWatcher } from "./Films";
import { planetWatcher } from "./Planets";
import { speciesWatcher } from "./Species";
import { starshipsWatcher } from "./Starships";

export function* rootSaga() {
  yield spawn(peopleWatcher);
  yield spawn(vehiclesWatcher);
  yield spawn(filmsWatcher);
  yield spawn(planetWatcher);
  yield spawn(speciesWatcher);
  yield spawn(starshipsWatcher);
}
