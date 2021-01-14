import * as types from "../actions/actionTypes";
import initialState from "./initialState";


export default function countReducer(state = initialState.count, action) {
  switch (action.type) {
    case types.SET_COUNT_ACTION:
      return action.count
    default:
      return state;
  }
}