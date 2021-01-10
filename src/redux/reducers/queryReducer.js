import * as types from "../actions/actionTypes";
import initialState from "./initialState";


export default function queryReducer(state = initialState.query, action) {
  switch (action.type) {
    case types.SET_QUERY_ACTION:
      return { ...state, ...action.query }
    default:
      return state;
  }
}