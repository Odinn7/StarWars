import createSagaMiddleware from "@redux-saga/core";
import {applyMiddleware, combineReducers, createStore } from "redux";
import { rootSaga } from "../saga";
import films from './Films/reducer';
import people from './People/reducer';
import planets from './Planets/reducer';
import species from './Species/reducer';
import starships from './Starships/reducer';
import vehicles from './Vehicles/reducer';


export const reducer = combineReducers({
    films,
    people,
    planets,
    species,
    starships,
    vehicles
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
