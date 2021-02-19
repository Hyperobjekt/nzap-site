import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import { assembleFilters } from '../../_helpers'




const setFilters = (stateFilters, actionFilters) => {
  return { ...stateFilters, ...actionFilters }
}

export default function filtersReducer(state = initialState.filters, action) {

  switch (action.type) {
    case types.LOAD_FILTER_ACTION:
      return assembleFilters(state.filters, action.filters)
    case types.SET_FILTER_ACTION:
      return setFilters(state.filters, action.filters)
    default:
      return state;
  }
}