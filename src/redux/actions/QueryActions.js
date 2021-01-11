import * as types from "./actionTypes";

// Export Action creators
export function setQueryAction(query) {
  return { type: types.SET_QUERY_ACTION, query }
}


export function loadQuery(query) {
  return function (dispatch) {
    return dispatch(setQueryAction(query))
  }
}