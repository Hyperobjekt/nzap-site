import * as types from "../actions/actionTypes";
import initialState from "./initialState";


export default function filtersReducer(state = initialState.filters, action) {
  switch (action.type) {
    case types.LOAD_FILTERS_ACTION_SUCCESS:
      console.log(action.query)
      var levelOneFilters = [...action.filters.levelOneFilters]
        .map(e => ({ ...e, active: action.query.categories.indexOf(e.slug) > -1 }))
      var levelTwoFilters = [...action.filters.levelOneFilters]
        .filter(e => action.query.categories.indexOf(e.slug) > -1)
        .map(e => e.levelTwoFilters).flat()
        .map(e => ({ ...e, active: action.query.subcategories.indexOf(e.slug) > -1 }))
      var usStates = action.filters.usStates.map(e => ({ ...e, active: action.query.state === e.slug }))
      var years = action.filters.years.map(e => ({ ...e, active: action.query.year === e.slug }))
      var filters = { ...state.filters, ...action.filters, levelOneFilters, levelTwoFilters, usStates, years }
      return filters


    case types.SET_US_STATE_FILTER:
      return {
        ...state,
        usStates: [...state.usStates]
          .map(e => ({ ...e, active: e.slug === action.usState }))
      }
    case types.SET_LEVEL_ONE_FILTER:
      return {
        ...state,
        levelOneFilters: [...state.levelOneFilters]
          .map(e => ({ ...e, active: action.categorySlugs.indexOf(e.slug) > -1 }))
      }
    case types.SET_LEVEL_TWO_FILTER:
      return {
        ...state,
        levelTwoFilters: [...state.levelTwoFilters]
          .map(e => ({ ...e, active: action.subcategorySlugs.indexOf(e.slug) > -1 }))
      }
    default:
      return state;
  }
}