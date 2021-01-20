import * as types from "./actionTypes";

// Export Action creators
export function setQuery(query) {
  return { type: types.SET_QUERY_ACTION, query }
}


