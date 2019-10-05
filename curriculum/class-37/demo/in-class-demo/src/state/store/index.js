import {createStore, combineReducers} from "redux";

import playerReducer from './players.store.js';

let reducers = combineReducers({
  players: playerReducer
});

export default () => createStore(reducers);
