import * as types from "../actions/actionTypes";
import initialState from "./initialState";


export default function queryReducer(state = initialState.query, action) {
  switch (action.type) {
    case types.SET_QUERY_ACTION:
      return {
        ...state,
        state: action.query.state,
        year: action.query.year,
        pathway: action.query.pathway,
        categories: [...state.categories, ...action.query.categories],
        subcategories: [...state.subcategories, ...action.query.subcategories]
      }
    default:
      return state;
  }
}
