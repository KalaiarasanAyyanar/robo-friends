import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./index.css";
import App from "./containers/App";
import { searchFieldReducer } from "./reducers";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";

export const store = createStore(searchFieldReducer);

const renderFunc = () =>
  ReactDOM.render(<App />, document.getElementById("root"));

store.subscribe(renderFunc);

renderFunc();

registerServiceWorker();
