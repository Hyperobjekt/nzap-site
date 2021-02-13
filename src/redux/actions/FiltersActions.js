import * as types from "./actionTypes";
import * as filtersApi from "../../api/filtersApi";

export const loadFiltersAction = (filters, query) => ({ type: types.LOAD_FILTERS_ACTION, filters, query });
export const setUsStateFilter = usState => ({ type: types.SET_US_STATE_FILTER, usState });
export const setLevelOneFilter = categorySlugs => ({ type: types.SET_LEVEL_ONE_FILTER, categorySlugs });
export const unsetLevelOneFilter = categorySlugs => ({ type: types.UNSET_LEVEL_ONE_FILTER, categorySlugs });
export const setLevelTwoFilter = subcategorySlugs => ({ type: types.SET_LEVEL_TWO_FILTER, subcategorySlugs });
export const unsetLevelTwoFilter = subcategorySlugs => ({ type: types.UNSET_LEVEL_TWO_FILTER, subcategorySlugs });
export const setYearFilter = filters => ({ type: types.SET_YEAR_FILTER, filters });
export const setPathwayFilter = filters => ({ type: types.SET_PATHWAY_FILTER, filters });



export function loadFilters(query, filters = null) {
  return function (dispatch) {
    if (!filters) {
      return filtersApi.getFilters().then(filters => {
        dispatch(loadFiltersAction(filters, query))
      }).catch(err => {
        throw err;
      })
    }
    return dispatch(loadFiltersAction(filters, query))
  }
}

// export function selectCategrory() {
//   return function (dispatch) {
//     dispatch(selectCategoryAction())
//   }
// }