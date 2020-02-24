import {
  SEARCH_FIELD_CHANGE,
  initialSearchState,
  initialRobotsState,
  REQUEST_ROBOTS,
  RECEIVED_ROBOTS
} from "./constants";

import { setRobots } from "./actions";

import { store } from "./index";

export const searchFieldReducer = (state = initialSearchState, action = {}) => {
  switch (action.type) {
    case SEARCH_FIELD_CHANGE:
      return { ...state, searchfield: action.payload.searchfield };
    default:
      return state;
  }
};

export const setRobotsReducer = (state = initialRobotsState, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS:
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
          store.dispatch(setRobots(RECEIVED_ROBOTS, users));
        });
      return state;
    case RECEIVED_ROBOTS:
      return { ...state, robots: action.payload.robots };
    default:
      return state;
  }
};
