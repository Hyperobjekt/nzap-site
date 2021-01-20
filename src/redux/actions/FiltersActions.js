import * as types from "./actionTypes";
import * as filtersApi from "../../api/filtersApi";
import { beginApiCall } from './apiStatusActions';

export const loadFiltersActionSuccess = (filters, query) => ({ type: types.LOAD_FILTERS_ACTION_SUCCESS, filters, query });
export const setUsStateFilter = usState => ({ type: types.SET_US_STATE_FILTER, usState });
export const setLevelOneFilter = categorySlugs => ({ type: types.SET_LEVEL_ONE_FILTER, categorySlugs });
export const unsetLevelOneFilter = filters => ({ type: types.UNSET_LEVEL_ONE_FILTER, filters });
export const setLevelTwoFilter = filters => ({ type: types.SET_LEVEL_TWO_FILTER, filters });
export const unsetLevelTwoFilter = filters => ({ type: types.UNSET_LEVEL_TWO_FILTER, filters });
export const setYearFilter = filters => ({ type: types.SET_YEAR_FILTER, filters });
export const setPathwayFilter = filters => ({ type: types.SET_PATHWAY_FILTER, filters });



export function loadFilters(query) {
  return function (dispatch) {
    dispatch(beginApiCall())
    return filtersApi.getFilters().then(filters => {
      dispatch(loadFiltersActionSuccess(filters, query))
    }).catch(err => {
      throw err;
    })
  }
}

// export function selectCategrory() {
//   return function (dispatch) {
//     dispatch(selectCategoryAction())
//   }
// }