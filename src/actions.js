import { SEARCH_FIELD_CHANGE } from "./constants";

export const changeSearchField = newValue => {
  return {
    type: SEARCH_FIELD_CHANGE,
    payload: {
      searchfield: newValue
    }
  };
};
