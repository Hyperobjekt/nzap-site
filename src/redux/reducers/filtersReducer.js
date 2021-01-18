import * as types from "../actions/actionTypes";
import initialState from "./initialState";


export default function filtersReducer(state = initialState.filters, action) {
  switch (action.type) {
    case types.LOAD_FILTERS_ACTION_SUCCESS:
      return { ...state, ...action.filters }
    default:
      return state;
  }
}