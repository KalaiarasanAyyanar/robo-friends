import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import "./index.css";
import App from "./containers/App";
import { searchFieldReducer, setRobotsReducer } from "./reducers";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";

const rootReducer = combineReducers({ searchFieldReducer, setRobotsReducer });

export const store = createStore(rootReducer);

const renderFunc = () =>
  ReactDOM.render(<App />, document.getElementById("root"));

store.subscribe(renderFunc);

renderFunc();

registerServiceWorker();
