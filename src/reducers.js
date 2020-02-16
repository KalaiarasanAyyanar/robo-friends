import { SEARCH_FIELD_CHANGE, initialSearchState } from "./constants";

export const searchFieldReducer = (state = initialSearchState, action = {}) => {
  switch (action.type) {
    case SEARCH_FIELD_CHANGE:
      return { ...state, searchfield: action.payload.searchfield };
    default:
      return state;
  }
};
