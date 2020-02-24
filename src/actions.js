import { SEARCH_FIELD_CHANGE } from "./constants";

export const changeSearchField = newValue => {
  return {
    type: SEARCH_FIELD_CHANGE,
    payload: {
      searchfield: newValue
    }
  };
};

export const setRobots = (status, robots = []) => {
  return {
    type: status,
    payload: {
      robots: robots
    }
  };
};
