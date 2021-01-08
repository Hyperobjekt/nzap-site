import * as types from "../actions/actionTypes";
import initialState from "./initialState";


export default function queryReducer(state = initialState.query, action) {
  switch (action.type) {
    case types.SET_QUERY_ACTION:
      console.log(action)
      return { ...state, ...action.query }
    default:
      return state;
  }
}